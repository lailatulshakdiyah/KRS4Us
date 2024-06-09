<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RequestController;
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

Route::get('request/{id}/accept', [RequestController::class, 'accept'])->middleware(['auth', 'verified'])->name('request.accept');

Route::get('matkul/{id}', [HomeController::class, 'course'])->middleware(['auth', 'verified'])->name('course');

Route::get('matkul/{id}/request', [RequestController::class, 'request'])->middleware(['auth', 'verified'])->name('course.request');

Route::get('test-email', function () {
    \Illuminate\Support\Facades\Mail::to('muhammadzahran@apps.ipb.ac.id')
        ->send(new \App\Mail\Credentials([
            'name' => 'Muhammad Zahran',
            'nim' => 'G6401211074',
            'password' => '12345678'
        ]));

    return redirect()->route('admin');
});

Route::middleware('auth:admin')->group(function () {
    Route::prefix('admin')->group(function () {
        Route::get('/', [AdminController::class, 'index'])
                    ->name('admin');

        Route::post('/', [AdminController::class, 'store']);

        Route::post('upload', [AdminController::class, 'upload'])
                    ->name('admin.upload');
        Route::get('matkul', [CourseController::class, 'index'])
                    ->name('admin.matkul');

        Route::post('matkul', [CourseController::class, 'store']);

        Route::delete('matkul/{id}', [CourseController::class, 'destroy'])
                    ->name('admin.matkul.destroy');

        Route::get('mahasiswa/{nim}', [UserController::class, 'index'])
                    ->name('admin.mahasiswa');

        Route::post('mahasiswa/{nim}', [UserController::class, 'edit']);

        Route::delete('mahasiswa/{nim}', [UserController::class, 'destroy']);
    });
});

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';
