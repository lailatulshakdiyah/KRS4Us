<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Request as Req;
use DateTime;
use Illuminate\Http\RedirectResponse;
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

        $all = Course::select('*')->orderBy('start_time')->get();

        $mine = [];
        foreach ($query as $row)
        {
            if (!array_key_exists($row['day'], $mine))
            {
                $mine[$row['day']] = [];
            }
            array_push($mine[$row['day']], [
                'name' => $row['code'] . ' - ' . $row['name'],
                'class' => $row['class'],
                'room' => $row['room'],
                'type' => $row['type'],
                'start_time' => DateTime::createFromFormat('H:i:s', $row['start_time'])->format('H.i'),
                'end_time' => DateTime::createFromFormat('H:i:s', $row['end_time'])->format('H.i'),
                'route' => $row['id']
            ]);
        }

        $courses = [];
        foreach ($all as $row)
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
            'mine' => $mine,
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
        $course->name = $course['code'] . ' - ' . $course['name'];

        $courses = Course::where('code', $course->code)->orderBy('type')->get();

        $userCourses = $request->user()->courses()
                        ->where('code', $course->code)
                        ->select('id')
                        ->get();

        $reqs = Req::where('user_nim', $request->user()->nim)
                    ->where('course_code', $course->code)
                    ->where('status', '!=', 2)
                    ->get();

        foreach ($courses as $index => $row)
        {
            $status = null;

            foreach ($userCourses as $c)
            {
                if ($c->id === $row['id'])
                {
                    $status = 'hidden';
                }
            }

            if (is_null($status))
            {
                foreach ($reqs as $req)
                {
                    if ($req->course_code === $row['code'] && $req->course_type == $row['type'])
                    {
                        $status = 'disabled';
                    }
                }
            }

            $courses[$index] = [
                'id' => $row['id'],
                'class' => $row['class'],
                'room' => $row['room'],
                'type' => $row['type'],
                'day' => $row['day'],
                'start_time' => DateTime::createFromFormat('H:i:s', $row['start_time'])->format('H.i'),
                'end_time' => DateTime::createFromFormat('H:i:s', $row['end_time'])->format('H.i'),
                'route' => $row['id'],
                'status' => $status
            ];
        }

        $students = $course->users()->select('nim', 'name')->get();

        $course = [
            'name' => $course->name,
            'class' => $course->class,
            'type' => $course->type
        ];
        return Inertia::render('Matkul', [
            'course' => $course,
            'courses' => $courses,
            'students' => $students
        ]);
    }
}
