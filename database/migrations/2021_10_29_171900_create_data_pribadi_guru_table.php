<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDataPribadiGuruTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('data_pribadi_guru', function (Blueprint $table) {
            $table->id();
            $table->enum('status_nikah', ['menikah', 'belum-menikah'])->default('belum-menikah');
            $table->string('nama_pasangan')->nullable();
            $table->string('nama_ayah_kandung')->nullable();
            $table->string('nama_ibu_kandung')->nullable();
            $table->string('jenis_pekerjaan_pasangan')->nullable();
            $table->bigInteger('guru_id');
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
        Schema::dropIfExists('data_pribadi_guru');
    }
}
