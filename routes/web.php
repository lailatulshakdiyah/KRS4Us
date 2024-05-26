<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('home', [HomeController::class, 'index'])->middleware(['auth', 'verified'])->name('home');

Route::get('request', [HomeController::class, 'req'])->middleware(['auth', 'verified'])->name('request');

Route::get('matkul/{id}', [HomeController::class, 'course'])->middleware(['auth', 'verified'])->name('course');

Route::middleware('auth:admin')->group(function () {
    Route::prefix('admin')->group(function () {
        Route::get('/', [AdminController::class, 'index'])
                    ->name('admin');

        Route::post('/', [AdminController::class, 'store']);

        Route::get('matkul', [CourseController::class, 'index'])
                    ->name('admin.matkul');

        Route::post('matkul', [CourseController::class, 'store']);

        Route::get('mahasiswa/{nim}', [UserController::class, 'index'])
                    ->name('admin.mahasiswa');

        Route::post('mahasiswa/{nim}', [UserController::class, 'edit']);
    });
});

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';
