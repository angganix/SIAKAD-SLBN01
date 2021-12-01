<?php

namespace App\Http\Controllers;

use App\Models\Ketunaan;
use Illuminate\Http\Request;

class KetunaanController extends Controller
{
    protected $rules = [
        "kode"      => "required|unique:App\Models\Ketunaan,kode,NULL,id,deleted_at,NULL",
        "nama"      => "required",
    ];
    protected $rule_message = [
        "required"  => ":attribute wajib diisi!",
        "unique"    => ":attribute :input sudah digunakan!"
    ];

    public function index(Request $request)
    {
        $sortby     = $request->sortby ?? 'id';
        $sortdir    = $request->sortdir ?? 'desc';
        $result     = Ketunaan::with('kelas')->orderBy($sortby, $sortdir)->get();

        return response()->json($result);
    }

    public function show(Ketunaan $ketunaan)
    {
        return response()->json($ketunaan);
    }

    public function store(Request $request)
    {
        return $this->validateForm($request, function () use ($request) {
            return [
                "data"  => Ketunaan::create([
                    "kode"          => $request->kode,
                    "nama"          => $request->nama,
                    "keterangan"    => $request->keterangan
                ])
            ];
        });
    }

    public function update(Request $request, Ketunaan $ketunaan)
    {
        unset($this->rules['kode']);
        return $this->validateForm($request, function () use ($request, $ketunaan) {
            return ["status" => $ketunaan->update([
                "nama"       => $request->nama,
                "keterangan" => $request->keterangan
            ])];
        });
    }

    public function destroy(Ketunaan $ketunaan)
    {
        return response()->json([
            "status" => $ketunaan->delete()
        ]);
    }
}
