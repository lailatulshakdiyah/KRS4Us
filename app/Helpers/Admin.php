<?php

namespace App\Helpers;

use App\Models\Course;
use App\Models\User;
use DateTime;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class Admin
{
    public static function melihatListParalel(Request $request): Response
    {
        $courses = Course::select('id', 'code', 'name', 'class', 'type', 'day', 'start_time', 'end_time', 'room')->get();

        for ($i = 0; $i < count($courses); $i++) {
            $courses[$i]->route = $courses[$i]->id;
            unset($courses[$i]->id);
            $courses[$i]->name = $courses[$i]->code . ' - ' . $courses[$i]->name;
            unset($courses[$i]->code);
            $courses[$i]->start_time = DateTime::createFromFormat('H:i:s', $courses[$i]->start_time)->format('H.i');
            $courses[$i]->end_time = DateTime::createFromFormat('H:i:s', $courses[$i]->end_time)->format('H.i');
        }

        return Inertia::render('Admin/ListMatkul', [
            'courses' => $courses
        ]);
    }

    public static function tambahParalel(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'code' => 'required',
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

    public static function hapusParalel(Request $request): RedirectResponse
    {
        Course::where('id', $request->route('id'))->first()->delete();

        return redirect()->route('admin.matkul');
    }

    public static function melihatListUser(Request $request): Response
    {
        $users = User::select('name', 'nim', 'email')->get();

        for ($i = 0; $i < count($users); $i++) {
            $users[$i]->id = $i+1;
            $users[$i]->route = ['nim' => $users[$i]['nim']];
        }

        return Inertia::render('Admin/ListMahasiswa', [
            'users' => $users
        ]);
    }

    public static function tambahUser(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required',
            'nim' => 'required|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'is_admin' => 'required|boolean',
        ]);

        $validated['password'] = Hash::make($validated['password']);

        User::insert($validated);

        return redirect()->route('admin');
    }

    public static function editUser(Request $request): RedirectResponse
    {
        $user = User::where('nim', $request->route('nim'));
        $id = $user->first()->id;

        $validated = $request->validate([
            'name' => '',
            'nim' => [Rule::unique('users')->ignore($id)],
            'email' => ['email', Rule::unique('users')->ignore($id)],
            'password' => '',
        ]);

        if ($validated['password'])
            $validated['password'] = Hash::make($validated['password']);
        else
            unset($validated['password']);

        $user->update($validated);

        return redirect()->route('admin.mahasiswa', ['nim' => $validated['nim']]);
    }

    public static function hapusUser(Request $request): RedirectResponse
    {
        User::where('nim', $request->route('nim'))->first()->delete();

        return redirect()->route('admin');
    }
}