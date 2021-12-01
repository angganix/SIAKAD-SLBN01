<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    protected $rules = [
        "name"          => "required|unique:App\Models\Role,name,NULL,id,deleted_at,NULL",
    ];
    protected $rule_message = [
        "required"  => ":attribute wajib diisi!",
        "unique"    => ":attribute :input sudah digunakan!"
    ];

    public function index(Request $request)
    {
        $sortby     = $request->sortby ?? 'id';
        $sortdir    = $request->sortdir ?? 'desc';
        $result     = Role::orderBy($sortby, $sortdir)->get();

        return response()->json($result);
    }

    public function show(Role $role)
    {
        return response()->json($role);
    }

    public function store(Request $request)
    {
        return $this->validateForm($request, function () use ($request) {
            return [
                "data"  => Role::create([
                    "name"          => $request->name,
                    "description"   => $request->description
                ])
            ];
        });
    }

    public function update(Request $request, Role $role)
    {
        return $this->validateForm($request, function () use ($request, $role) {
            return ["status"  => $role->update([
                "name"        => $request->name,
                "description" => $request->description
            ])];
        });
    }

    public function destroy(Role $role)
    {
        return response()->json([
            "status" => $role->delete()
        ]);
    }
}
