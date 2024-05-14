<?php

namespace App\Http\Controllers;

use App\Models\Course;
use DateTime;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('Home');
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
