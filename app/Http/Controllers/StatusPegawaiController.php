<?php

namespace App\Http\Controllers;

use App\Models\StatusPegawai;
use Illuminate\Http\Request;

class StatusPegawaiController extends Controller
{
    protected $rules = ["status_pegawai" => "required"];
    protected $rule_message = ["required" => ":attribute wajib diisi!"];

    public function index(Request $request)
    {
        $sortby     = $request->sortby ?? 'id';
        $sortdir    = $request->sortdir ?? 'desc';
        $result     = StatusPegawai::orderBy($sortby, $sortdir)->get();

        return response()->json($result);
    }

    public function show(StatusPegawai $status_pegawai)
    {
        return response()->json($status_pegawai);
    }

    public function store(Request $request)
    {
        return $this->validateForm($request, function () use ($request) {
            return [
                "data"  => StatusPegawai::create([
                    "status_pegawai"    => $request->status_pegawai,
                    "keterangan"        => $request->keterangan
                ])
            ];
        });
    }

    public function update(Request $request, StatusPegawai $status_pegawai)
    {
        return $this->validateForm($request, function () use ($request, $status_pegawai) {
            return ["status" => $status_pegawai->update([
                "status_pegawai"    => $request->status_pegawai,
                "keterangan"        => $request->keterangan
            ])];
        });
    }

    public function destroy(StatusPegawai $status_pegawai)
    {
        return response()->json([
            "status" => $status_pegawai->delete()
        ]);
    }
}
