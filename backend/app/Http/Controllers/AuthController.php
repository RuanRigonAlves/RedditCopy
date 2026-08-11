<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function me(Request $request)
    {
        return response()->json([
            'user' => $request->user(),
        ]);
    }
    
    public function register(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', 'string','max:255'],
            'email' => ['required', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        $user = User::create($data);

        $token = auth('api')->login($user);

        return response()->json([
            'user' => $user,
            'token' => $token,
        ], 201);
    }

    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'string'],
        ]);

        $token = auth('api')->attempt($data);

        if(!$token){
            return response()->json([
                'message' => 'Email ou senha invalidos.'
            ],401);
        }

        return response()->json([
            'user' => auth('api')->user(),
            'token' => $token,
        ]);
    }

    public function logout()
    {
        auth('api')->logout();

        return response()->json([
            'message' => 'Logout realizado com sucesso',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'token' => auth('api')->refresh(),
        ]);
    }

    public function claims()
    {
        return response()->json([
            'claims' => auth('api')->payload(),
        ]);    
    }
}
