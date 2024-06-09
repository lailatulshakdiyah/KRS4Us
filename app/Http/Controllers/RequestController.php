<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Request as Req;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

    public function accept(Request $request): RedirectResponse
    {
        DB::beginTransaction();

        try {
            $i = 0;
            do {
                $req = Req::whereId($request->route('id'))
                            ->where('status', '0')
                            ->first();
                $updated = Req::whereId($request->route('id'))
                            ->where('updated_at', '=', $req->updated_at)
                            ->update(['status' => 2]);
                $i++;
            } while ($i < 5 && !$updated);

            if (is_null($req))
            {
                return redirect()->back(); // belom nambahin eror
            }

            $user = User::where('nim', $req->user_nim)->first();
            $request->user()->courses()->syncWithoutDetaching($req->course_src_id);
            $user->courses()->syncWithoutDetaching($req->course_dest_id);
            $request->user()->courses()->detach($req->course_dest_id);
            $user->courses()->detach($req->course_src_id);

            DB::commit();

            return redirect()->back();
        } catch (\Exception $e) {
            DB::rollback();
            return redirect()->back(); // belom nambahin eror
        }
    }
}
