<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKontakSiswaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kontak_siswa', function (Blueprint $table) {
            $table->id();
            $table->string('no_hp')->nullable();
            $table->string('no_telpon')->nullable();
            $table->string('email')->nullable();
            $table->bigInteger('siswa_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('kontak_siswa');
    }
}
