<?php

namespace App\Http\Controllers;

use App\Models\Kurikulum;
use Illuminate\Http\Request;

class KurikulumController extends Controller
{
    protected $rules = ["nama" => "required"];
    protected $rule_message = ["required" => ":attribute wajib diisi!"];

    public function index(Request $request)
    {
        $sortby     = $request->sortby ?? 'id';
        $sortdir    = $request->sortdir ?? 'desc';
        $result     = Kurikulum::orderBy($sortby, $sortdir)->get();

        return response()->json($result);
    }

    public function show(Kurikulum $kurikulum)
    {
        return response()->json($kurikulum);
    }

    public function store(Request $request)
    {
        return $this->validateForm($request, function () use ($request) {
            return [
                "data"  => Kurikulum::create([
                    "nama"          => $request->nama,
                    "keterangan"    => $request->keterangan
                ])
            ];
        });
    }

    public function update(Request $request, Kurikulum $kurikulum)
    {
        return $this->validateForm($request, function () use ($request, $kurikulum) {
            return ["status" => $kurikulum->update([
                "nama"       => $request->nama,
                "keterangan" => $request->keterangan
            ])];
        });
    }

    public function destroy(Kurikulum $kurikulum)
    {
        return response()->json([
            "status" => $kurikulum->delete()
        ]);
    }
}
