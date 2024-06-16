<?php

namespace App\Http\Controllers;

use App\Helpers\Admin;
use App\Models\Course;
use DateTime;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\ViewErrorBag;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class CourseController extends Controller
{
    public function index(Request $request): Response
    {
        return Admin::melihatListParalel($request);
    }

    public function store(Request $request): RedirectResponse
    {
        return Admin::tambahParalel($request);
    }

    public function destroy(Request $request): RedirectResponse
    {
        return Admin::hapusParalel($request);
    }
}
