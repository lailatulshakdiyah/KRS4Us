<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Providers\RouteServiceProvider;
use App\Models\Request as Req;
use DateTime;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    protected $primaryKey = 'nim';
    public $incrementing = false;
    protected $keyType = 'string';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'nim',
        'email',
        'password',
        'is_admin'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function courses(): BelongsToMany
    {
        return $this->belongsToMany(Course::class, 'course_user', 'user_nim', 'course_id');
    }

    public function addCourse(string $day, int $courseId)
    {
        $course = Course::where('id', $courseId)->first();
        $courses = $this->courses()->where('day', $day)->get();
    }

    public static function login(Request $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(RouteServiceProvider::HOME);
    }

    public static function melihatParalel(Request $request): Response
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

        $students = $course->users()->select('nim', 'name')->orderBy('nim')->get();

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

    public static function kirimRequest(Request $request): RedirectResponse
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

    public static function melihatRequest(Request $request): Response
    {
        $userCourseIds = $request->user()->courses()->pluck('id');
        $requests = Req::whereIn('course_dest_id', $userCourseIds)
                    ->where('status', 0)
                    ->orderByDesc('created_at')
                    ->get();
                    
        $courses = Course::all();
        $idToCourse = [];
        foreach ($courses as $course)
        {
            $idToCourse[$course->id] = $course;
        }

        $users = User::select('name', 'nim')->whereIn('nim', $requests->pluck('user_nim'))->get();
        $nimToName = [];
        foreach ($users as $user)
        {
            $nimToName[$user->nim] = $user->name;
        }

        foreach ($requests as $index => $req)
        {
            $destCourse = $idToCourse[$req->course_dest_id];
            $srcCourse = $idToCourse[$req->course_src_id];
            $requests[$index] = [
                'name' => $nimToName[$req->user_nim],
                'nim' => $req->user_nim,
                'course' => $destCourse->code . ' - ' . $destCourse->name,
                'mine' => [
                    'time' => DateTime::createFromFormat('H:i:s', $destCourse->start_time)->format('H.i') . ' - ' . DateTime::createFromFormat('H:i:s', $destCourse->end_time)->format('H.i'),
                    'type' => $destCourse->type,
                    'class' => $destCourse->class,
                    'day' => $destCourse->day
                ],
                'theirs' => [
                    'time' => DateTime::createFromFormat('H:i:s', $srcCourse->start_time)->format('H.i') . ' - ' . DateTime::createFromFormat('H:i:s', $srcCourse->end_time)->format('H.i'),
                    'type' => $srcCourse->type,
                    'class' => $srcCourse->class,
                    'day' => $srcCourse->day
                ],
                'route' => $req->id
            ];
        }

        return Inertia::render('Request', [
            'requests' => $requests
        ]);
    }

    public static function menerimaRequest(Request $request): RedirectResponse
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
