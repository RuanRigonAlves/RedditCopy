<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'content' => $this->deleted_at ? '[Comentário excluído]' : $this->content,
            'user' => $this->deleted_at ? null : $this->whenLoaded('user', function ()  {
                return [
                    'id' => $this->user_id,
                    'name' => $this->user->name,
                ];
            }),
            'deleted' => $this->deleted_at !== null,
            'replies' => CommentResource::collection(
                $this->whenLoaded('replies')
            ),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,


        ];
    }
}
