<?php

namespace App\Http\Controllers;

use App\Helpers\Admin;
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
        return Admin::melihatListUser($request);
    }

    public function store(Request $request): RedirectResponse
    {
        return Admin::tambahUser($request);
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
