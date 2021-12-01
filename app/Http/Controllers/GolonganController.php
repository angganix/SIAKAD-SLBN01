<?php

namespace App\Http\Controllers;

use App\Models\Golongan;
use Illuminate\Http\Request;

class GolonganController extends Controller
{
    protected $rules = ["nama" => "required"];
    protected $rule_message = ["required" => ":attribute wajib diisi!"];

    public function index(Request $request)
    {
        $sortby     = $request->sortby ?? 'id';
        $sortdir    = $request->sortdir ?? 'desc';
        $result     = Golongan::orderBy($sortby, $sortdir)->get();

        return response()->json($result);
    }

    public function show(Golongan $golongan)
    {
        return response()->json($golongan);
    }

    public function store(Request $request)
    {
        return $this->validateForm($request, function () use ($request) {
            return [
                "data"  => Golongan::create([
                    "nama"          => $request->nama,
                    "keterangan"    => $request->keterangan
                ])
            ];
        });
    }

    public function update(Request $request, Golongan $golongan)
    {
        return $this->validateForm($request, function () use ($request, $golongan) {
            return ["status" => $golongan->update([
                "nama"       => $request->nama,
                "keterangan" => $request->keterangan
            ])];
        });
    }

    public function destroy(Golongan $golongan)
    {
        return response()->json([
            "status" => $golongan->delete()
        ]);
    }
}
