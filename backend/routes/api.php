<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;

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

Route::middleware('auth:api')->group(function (){
    Route::get('/posts', [PostController::class, 'index']);
    Route::post('/posts', [PostController::class, 'store']);
    Route::get('/posts/{post}', [PostController::class, 'show']);
    Route::put('/posts/{post}', [PostController::class, 'update']);
    Route::delete('/posts/{post}', [PostController::class,'destroy']);
});

Route::get('/posts/{post}/comments', [CommentController::class, 'index']);

Route::middleware('auth:api')->group(function () {
    Route::post('/posts/{post}/comments', [CommentController::class, 'store']);
    Route::post('/comments/{comment}/replies', [CommentController::class, 'reply']);
    Route::put('/comments/{comment}', [CommentController::class, 'update']);
    Route::delete('/comments/{comment}', [CommentController::class, 'destroy']);
});