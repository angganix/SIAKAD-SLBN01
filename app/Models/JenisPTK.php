<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class JenisPTK extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = "jenis_ptk";
    protected $guarded = [];
}
