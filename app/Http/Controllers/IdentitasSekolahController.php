<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\IdentitasSekolah;

class IdentitasSekolahController extends Controller
{

    public function show()
    {
        $result = IdentitasSekolah::where('id', 1)->first();
        return response()->json($result);
    }

    public function save(Request $request)
    {
        IdentitasSekolah::where('id', 1)->update($request->all());
        return response()->json(["status" => true]);
    }

}
