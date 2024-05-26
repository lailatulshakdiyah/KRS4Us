<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function index(Request $request): Response
    {
        $users = User::select('id', 'name', 'nim', 'email')->get();
        for ($i = 0; $i < count($users); $i++) {
            $users[$i]['route'] = ['nim' => $users[$i]['nim']];
        }

        return Inertia::render('Admin/ListMahasiswa', [
            'users' => $users
        ]);
    }

    public function store(Request $request): RedirectResponse
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
}
