<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class RequestController extends Controller
{
    public function request(Request $request): RedirectResponse
    {
        $request->user()->addCourse('selasa', 0);
        dd(1);
        return redirect()->back();
    }
}
