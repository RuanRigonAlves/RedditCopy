<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::get('/test', function () {
    return [
        'message' => 'RedditCopy API funcionando!'
    ];
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/refresh', [AuthController::class, 'refresh']);

Route::middleware('auth:api')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/claims', [AuthController::class, 'claims']);

    Route::get('/admin/test', function (){
        return response()->json([
            'message' => 'Voce e administrador!',
        ]);
    })->middleware('role:admin');

    Route::get('/posts/create', function () {
    return response()->json([
        'message' => 'Você pode criar posts!',
    ]);
})->middleware(['auth:api', 'permission:posts.create']);
});
