<?php

namespace App\Http\Controllers;

use App\Imports\MainImport;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;
use Maatwebsite\Excel\Facades\Excel;
use PhpOffice\PhpSpreadsheet\IOFactory;

class AdminController extends Controller
{
    public function index(Request $request): Response
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

    public function upload(Request $request): RedirectResponse
    {
        $request->validate([
            'file' => 'required|mimes:xlsx|max:2048',
        ]);

        if ($request->file('file')) {
            $file = $request->file('file');
            $spreadsheet = IOFactory::load($file->getRealPath());

            Excel::import(new MainImport($spreadsheet->getSheetCount()), $request->file('file'));

            return back()->with('success', 'File uploaded and processed successfully.');
        }

        return back()->with('error', 'File upload failed.');
    }
}
