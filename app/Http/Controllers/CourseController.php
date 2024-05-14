<?php

namespace App\Http\Controllers;

use App\Models\Course;
use DateTime;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\ViewErrorBag;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class CourseController extends Controller
{
    public function index(Request $request): Response
    {
        $courses = Course::select('name', 'type', 'class', 'start_time', 'end_time', 'room')->get();

        for ($i = 0; $i < count($courses); $i++) {
            $courses[$i]->start_time = DateTime::createFromFormat('H:i:s', $courses[$i]->start_time)->format('H.i');
            $courses[$i]->end_time = DateTime::createFromFormat('H:i:s', $courses[$i]->end_time)->format('H.i');
        }

        return Inertia::render('Admin/ListMatkul', [
            'courses' => $courses
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required',
            'type' => ['required', Rule::in(['kuliah', 'praktikum', 'responsi'])],
            'start_time' => ['required', 'regex:/^([01]\d|2[0-3]).([0-5]\d)$/'],
            'end_time' => ['required', 'regex:/^([01]\d|2[0-3]).([0-5]\d)$/'],
            'room' => 'required'
        ]);

        $validated['start_time'] = DateTime::createFromFormat('H.i', $validated['start_time']);
        $validated['end_time'] = DateTime::createFromFormat('H.i', $validated['end_time']);

        $course = Course::where(['name' => $validated['name'], 'type' => $validated['type']])->orderByDesc('class')->first();
        if ($course) {
            $validated['class'] = $course->class+1;
        } else {
            $validated['class'] = 1;
        }

        Course::insert($validated);

        return redirect()->route('admin.matkul');
    }
}
