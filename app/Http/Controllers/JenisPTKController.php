<?php

namespace App\Http\Controllers;

use App\Models\JenisPTK;
use Illuminate\Http\Request;

class JenisPTKController extends Controller
{
    protected $rules = ["nama" => "required"];
    protected $rule_message = ["required" => ":attribute wajib diisi!"];

    public function index(Request $request)
    {
        $sortby     = $request->sortby ?? 'id';
        $sortdir    = $request->sortdir ?? 'desc';
        $result     = JenisPTK::orderBy($sortby, $sortdir)->get();

        return response()->json($result);
    }

    public function show(JenisPTK $jenis_ptk)
    {
        return response()->json($jenis_ptk);
    }

    public function store(Request $request)
    {
        return $this->validateForm($request, function () use ($request) {
            return [
                "data"  => JenisPTK::create([
                    "nama"          => $request->nama,
                    "keterangan"    => $request->keterangan
                ])
            ];
        });
    }

    public function update(Request $request, JenisPTK $jenis_ptk)
    {
        return $this->validateForm($request, function () use ($request, $jenis_ptk) {
            return ["status" => $jenis_ptk->update([
                "nama"       => $request->nama,
                "keterangan" => $request->keterangan
            ])];
        });
    }

    public function destroy(JenisPTK $jenis_ptk)
    {
        return response()->json([
            "status" => $jenis_ptk->delete()
        ]);
    }
}
