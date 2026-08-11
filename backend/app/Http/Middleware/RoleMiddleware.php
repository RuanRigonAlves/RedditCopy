<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next, string $role): Response
    {
        $user = auth('api')->user();

        if (!$user || $user->role !== $role){
            return response()->json([
                'message' => 'Você não possui permissão para acessar este recurso.',
            ], 403);
        }

        return $next($request);
    }
}
