<?php

namespace App\Http\Controllers;

use App\Models\Course;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(Request $request): Response
    {
        $list = $request->user()->courses()->select('id', 'code', 'name', 'type')->orderBy('code')->get();

        $query = $request->user()->courses()->orderBy('start_time')->get();

        $courses = [];
        foreach ($query as $row)
        {
            if (!array_key_exists($row['day'], $courses))
            {
                $courses[$row['day']] = [];
            }
            array_push($courses[$row['day']], [
                'name' => $row['code'] . ' - ' . $row['name'],
                'class' => $row['class'],
                'room' => $row['room'],
                'type' => $row['type'],
                'start_time' => DateTime::createFromFormat('H:i:s', $row['start_time'])->format('H.i'),
                'end_time' => DateTime::createFromFormat('H:i:s', $row['end_time'])->format('H.i'),
                'route' => $row['id']
            ]);
        }

        return Inertia::render('Home', [
            'list' => $list,
            'courses' => $courses
        ]);
    }

    public function req(Request $request): Response
    {
        return Inertia::render('Request');
    }

    public function course(Request $request): Response
    {
        $course = Course::where('id', $request->route('id'))->first();
        $course->start_time = DateTime::createFromFormat('H:i:s', $course->start_time)->format('H.i');
        $course->end_time = DateTime::createFromFormat('H:i:s', $course->end_time)->format('H.i');

        return Inertia::render('Matkul', [
            'course' => $course
        ]);
    }
}
