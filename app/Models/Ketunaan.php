<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Ketunaan extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = "ketunaan";
    protected $guarded = [];

    public function kelas()
    {
        return $this->hasMany(Kelas::class);
    }
}
