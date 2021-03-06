<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class StatusPegawai extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = "status_pegawai";
    protected $guarded = [];
}
