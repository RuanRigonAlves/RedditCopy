<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PermissionMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(
        Request $request,
        Closure $next,
        string $permission
    ): Response {
        $user = auth('api')->user();

        if (!$user || !in_array($permission, $user->permissions())) {
            return response()->json([
                'message' => 'Você não possui permissão para realizar esta ação.',
            ], 403);
        }

        return $next($request);
    }
}
