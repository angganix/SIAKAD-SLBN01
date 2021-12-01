<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Kelas extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = "kelas";
    protected $guarded = [];

    public function ketunaan()
    {
        return $this->belongsTo(Ketunaan::class);
    }
}
