<?php

namespace App\Http\Controllers;

use App\Models\TahunAkademik;
use Illuminate\Http\Request;

class TahunAkademikController extends Controller
{
    protected $rules = [
        "tahun"         => "required|integer",
        "semester"      => "required",
        "tahun_ajaran"  => "required"
    ];
    protected $rule_message = [
        "required" => ":attribute wajib diisi!",
        "integer"  => ":attribute harus berupa digit angka!"
    ];

    public function index(Request $request)
    {
        $sortby     = $request->sortby ?? 'id';
        $sortdir    = $request->sortdir ?? 'desc';
        $result     = TahunAkademik::orderBy($sortby, $sortdir)->get();

        return response()->json($result);
    }

    public function show(TahunAkademik $tahun_akademik)
    {
        return response()->json($tahun_akademik);
    }

    public function store(Request $request)
    {
        return $this->validateForm($request, function () use ($request) {
            return [
                "data"  => TahunAkademik::create([
                    "tahun"         => $request->tahun,
                    "semester"      => $request->semester,
                    "tahun_ajaran"  => $request->tahun_ajaran
                ])
            ];
        });
    }

    public function update(Request $request, TahunAkademik $tahun_akademik)
    {
        return $this->validateForm($request, function () use ($request, $tahun_akademik) {
            return ["status" => $tahun_akademik->update([
                "tahun"         => $request->tahun,
                "semester"      => $request->semester,
                "tahun_ajaran"  => $request->tahun_ajaran
            ])];
        });
    }

    public function destroy(TahunAkademik $tahun_akademik)
    {
        return response()->json([
            "status" => $tahun_akademik->delete()
        ]);
    }
}
