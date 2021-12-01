<?php

namespace App\Http\Controllers;

use App\Models\Agama;
use Illuminate\Http\Request;

class AgamaController extends Controller
{

    protected $rules = ["nama" => "required"];
    protected $rule_message = ["required" => ":attribute wajib diisi!"];

    public function index(Request $request)
    {
        $sortby     = $request->sortby ?? 'id';
        $sortdir    = $request->sortdir ?? 'desc';
        $result     = Agama::orderBy($sortby, $sortdir)->get();

        return response()->json($result);
    }

    public function show(Agama $agama)
    {
        return response()->json($agama);
    }

    public function store(Request $request)
    {
        return $this->validateForm($request, function () use ($request) {
            return [
                "data"  => Agama::create([
                    "nama"  => $request->nama
                ])
            ];
        });
    }

    public function update(Request $request, Agama $agama)
    {
        return $this->validateForm($request, function () use ($request, $agama) {
            return ["status" => $agama->update($request->all())];
        });
    }

    public function destroy(Agama $agama)
    {
        return response()->json([
            "status" => $agama->delete()
        ]);
    }
}
