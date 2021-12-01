<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected $rules, $rule_message;

    protected function validateForm(Request $request, $closure)
    {
        $validation = Validator::make($request->all(), $this->rules, $this->rule_message);
        if ($validation->fails()) {
            return response()->json([
                "error" => $validation->errors()->first()
            ], 400);
        } else {
            return response()->json($closure());
        }
    }
}
