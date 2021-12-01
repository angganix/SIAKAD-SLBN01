<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGuruTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('guru', function (Blueprint $table) {
            $table->id();
            $table->string('nip')->nullable();
            $table->string('nrk')->nullable();
            $table->string('nrg')->nullable();
            $table->string('nik');
            $table->string('nama');
            $table->string('tempat_lahir');
            $table->string('tanggal_lahir');
            $table->enum('gender', ['laki-laki', 'perempuan']);
            $table->string('nuptk')->nullable();
            $table->enum('status_keaktifan', ['aktif', 'tidak-aktif', 'pensiun'])->default('aktif');
            $table->date('tanggal_golongan_terakhir');
            $table->string('npwp')->nullable();
            $table->string('foto');
            $table->bigInteger('agama_id');
            $table->bigInteger('jenis_ptk_id')->nullable()->default(0);
            $table->bigInteger('status_pegawai_id')->nullable()->default(0);
            $table->bigInteger('golongan_id')->nullable()->default(0);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('guru');
    }
}
