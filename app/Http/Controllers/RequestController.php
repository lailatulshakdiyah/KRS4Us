<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Request as Req;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class RequestController extends Controller
{
    public function request(Request $request): RedirectResponse
    {
        $user = $request->user();
        $courseDest = Course::where('id', $request->route('id'))->first();
        $courseSrc = $user->courses()->where('type', $courseDest->type)->where('code', $courseDest->code)->first();

        $req = Req::where('user_nim', $user->nim)
                    ->where('course_code', $courseSrc->code)
                    ->where('course_type', $courseSrc->type)
                    ->where('status', '!=', 2)
                    ->get();

        if (count($req) === 0 && $courseSrc->id != $courseDest->id)
        {
            Req::create([
                'user_nim' => $user->nim,
                'course_code' => $courseSrc->code,
                'course_type' => $courseSrc->type,
                'course_src_id' => $courseSrc->id,
                'course_dest_id' => $courseDest->id
            ]);
        }
        return redirect()->back();
    }
}
