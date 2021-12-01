<?php

namespace App\Http\Controllers;

use App\Models\Kelas;
use Illuminate\Http\Request;

class KelasController extends Controller
{
    protected $rules = [
        "nama"          => "required",
        "ketunaan_id"   => "required|integer"
    ];
    protected $rule_message = [
        "required" => ":attribute wajib diisi!",
        "integer"  => ":attribute harus berupa digit angka!"
    ];

    public function index(Request $request)
    {
        $sortby = $request->sortby ?? 'id';
        $sortdir = $request->sortdir ?? 'desc';
        $limit = $request->limit ?? 15;
        $search = $request->search ?? '';

        $result = Kelas::with('ketunaan')
            ->when($search, function ($query, $search) {
                return $query
                    ->whereRelation('ketunaan', 'nama', 'like', "%$search%")
                    ->orWhere('nama', 'like', "%$search%");
            })
            ->orderBy($sortby, $sortdir)
            ->paginate($limit);

        return response()->json($result);
    }

    public function show(Kelas $kelas)
    {
        return response()->json($kelas->load('ketunaan'));
    }

    public function store(Request $request)
    {
        return $this->validateForm($request, function () use ($request) {
            return [
                "data"  => Kelas::create([
                    "nama"          => $request->nama,
                    "ketunaan_id"   => $request->ketunaan_id
                ])
            ];
        });
    }

    public function update(Request $request, Kelas $kelas)
    {
        return $this->validateForm($request, function () use ($request, $kelas) {
            return ["status" => $kelas->update([
                "nama"          => $request->nama,
                "ketunaan_id"   => $request->ketunaan_id
            ])];
        });
    }

    public function destroy(Kelas $kelas)
    {
        return response()->json([
            "status" => $kelas->delete()
        ]);
    }
}
