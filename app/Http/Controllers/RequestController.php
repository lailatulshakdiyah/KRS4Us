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
        return User::kirimRequest($request);
    }

    public function accept(Request $request): RedirectResponse
    {
        return User::menerimaRequest($request);
    }
}
