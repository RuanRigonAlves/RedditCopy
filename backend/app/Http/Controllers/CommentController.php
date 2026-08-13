<?php

namespace App\Http\Controllers;

use App\Http\Resources\CommentResource;
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Post $post)
    {
        $comments = $post->comments()->whereNull('parent_id')->withTrashed()->with([
            'user:id,name',
            'replies.user:id,name'
        ])->latest()->get();

        $comments->each(function ($comment){
            $this->loadReplies($comment);
        });

        return CommentResource::collection($comments);
    }

    private function loadReplies(Comment $comment)
    {
        $comment->load([
            'replies' => function ($query){
                $query->withTrashed()->latest();
            },
            'replies.user:id,name'
        ]);

        $comment->replies->each(function ($reply) {
            $this->loadReplies($reply);
        });
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Post $post)
    {
        $data = $request->validate([
            'content' => ['required', 'string', 'max:5000'],
        ]);

        $comment = Comment::create([
            'content' => $data['content'],
            'user_id' => auth('api')->id(),
            'post_id' => $post->id,
            'parent_id' => null,
        ]);

        return response()->json([
            'comment' => $comment,
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Comment $comment)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Comment $comment)
    {
        Gate::authorize('update', $comment);

        $data = $request->validate([
            'content' => ['required', 'string', 'max:5000']
        ]);

        $comment->update($data);

        return response()->json([
            'comment' => $comment->load('user:id,name'),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment)
    {
        Gate::authorize('delete', $comment);

        $comment->delete();

        return response()->json([
            'message' => 'Comentário excluído com successo'
        ]);
    }

    public function reply(Request $request, Comment $comment)
    {
        $data = $request->validate([
            'content' => ['required', 'string', 'max:5000'],
        ]);

        $reply = Comment::create([
            'content' => $data['content'],
            'user_id' => auth('api')->id(),
            'post_id' => $comment->post_id,
            'parent_id' => $comment->id,
        ]);

        return response()->json([
            'comment' => $reply
        ], 201);
    }
}
