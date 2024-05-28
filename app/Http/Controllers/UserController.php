<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index(Request $request): Response | RedirectResponse
    {
        $user = User::where('nim', $request->route('nim'))->first();

        if (is_null($user)) {
            return redirect()->back()->with('error', 'User not found.');
        }

        $courses = $user->courses()->select(['code', 'name', 'type', 'class'])->get();

        for ($i = 0; $i < count($courses); $i++) {
            $courses[$i] = [
                'id' => $i + 1,
                'name' => $courses[$i]['code'] . ' - ' . $courses[$i]['name'],
                'class' => strtoupper($courses[$i]['type'][0]) . $courses[$i]['class']
            ];
        }

        $user = [
            'name' => $user['name'],
            'nim' => $user['nim'],
            'email' => $user['email']
        ];

        return Inertia::render('Admin/Mahasiswa', [
            'user' => $user,
            'courses' => $courses
        ]);
    }

    public function edit(Request $request): RedirectResponse
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

    public function destroy(Request $request): RedirectResponse
    {
        User::where('nim', $request->route('nim'))->first()->delete();

        return redirect()->route('admin');
    }
}
