<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\IndexController;
use App\Http\Controllers\Admin\RegisterController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
Route::get('/chat', function () {
    return Inertia::render('ChatComponent');
});

Route::post('/chat/send',[\App\Http\Controllers\ChatController::class,'sendMessage']);
Route::group(['prefix'=>'admin'], function(){
    Route::get('/', [IndexController::class, 'index'])->name('admin.index');
    Route::post('/register', [RegisterController::class, 'register'])->name('admin.register');

});
