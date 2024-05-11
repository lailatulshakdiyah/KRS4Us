<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('Admin/ListMahasiswa', [
            'data' => User::select('id', 'name', 'nim', 'email')->get()
        ]);
    }
}
