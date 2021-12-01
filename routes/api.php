<?php

use App\Http\Controllers\AgamaController;
use App\Http\Controllers\GolonganController;
use App\Http\Controllers\IdentitasSekolahController;
use App\Http\Controllers\JenisPTKController;
use App\Http\Controllers\KelasController;
use App\Http\Controllers\KetunaanController;
use App\Http\Controllers\KurikulumController;
use App\Http\Controllers\StatusPegawaiController;
use App\Http\Controllers\TahunAkademikController;
use App\Http\Controllers\RoleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/identitas-sekolah', [IdentitasSekolahController::class, 'show']);
Route::put('/identitas-sekolah', [IdentitasSekolahController::class, 'save']);

Route::group(['prefix' => 'agama'], function () {
    Route::get('/', [AgamaController::class, 'index']);
    Route::get('/{agama}', [AgamaController::class, 'show']);
    Route::post('/', [AgamaController::class, 'store']);
    Route::put('/{agama}', [AgamaController::class, 'update']);
    Route::delete('/{agama}', [AgamaController::class, 'destroy']);
});

Route::group(['prefix' => 'kurikulum'], function () {
    Route::get('/', [KurikulumController::class, 'index']);
    Route::get('/{kurikulum}', [KurikulumController::class, 'show']);
    Route::post('/', [KurikulumController::class, 'store']);
    Route::put('/{kurikulum}', [KurikulumController::class, 'update']);
    Route::delete('/{kurikulum}', [KurikulumController::class, 'destroy']);
});

Route::group(['prefix' => 'tahun_akademik'], function () {
    Route::get('/', [TahunAkademikController::class, 'index']);
    Route::get('/{tahun_akademik}', [TahunAkademikController::class, 'show']);
    Route::post('/', [TahunAkademikController::class, 'store']);
    Route::put('/{tahun_akademik}', [TahunAkademikController::class, 'update']);
    Route::delete('/{tahun_akademik}', [TahunAkademikController::class, 'destroy']);
});

Route::group(['prefix' => 'ketunaan'], function () {
    Route::get('/', [KetunaanController::class, 'index']);
    Route::get('/{ketunaan}', [KetunaanController::class, 'show']);
    Route::post('/', [KetunaanController::class, 'store']);
    Route::put('/{ketunaan}', [KetunaanController::class, 'update']);
    Route::delete('/{ketunaan}', [KetunaanController::class, 'destroy']);
});

Route::group(['prefix' => 'golongan'], function () {
    Route::get('/', [GolonganController::class, 'index']);
    Route::get('/{golongan}', [GolonganController::class, 'show']);
    Route::post('/', [GolonganController::class, 'store']);
    Route::put('/{golongan}', [GolonganController::class, 'update']);
    Route::delete('/{golongan}', [GolonganController::class, 'destroy']);
});

Route::group(['prefix' => 'status_pegawai'], function () {
    Route::get('/', [StatusPegawaiController::class, 'index']);
    Route::get('/{status_pegawai}', [StatusPegawaiController::class, 'show']);
    Route::post('/', [StatusPegawaiController::class, 'store']);
    Route::put('/{status_pegawai}', [StatusPegawaiController::class, 'update']);
    Route::delete('/{status_pegawai}', [StatusPegawaiController::class, 'destroy']);
});

Route::group(['prefix' => 'jenis_ptk'], function () {
    Route::get('/', [JenisPTKController::class, 'index']);
    Route::get('/{jenis_ptk}', [JenisPTKController::class, 'show']);
    Route::post('/', [JenisPTKController::class, 'store']);
    Route::put('/{jenis_ptk}', [JenisPTKController::class, 'update']);
    Route::delete('/{jenis_ptk}', [JenisPTKController::class, 'destroy']);
});

Route::group(['prefix' => 'kelas'], function () {
    Route::get('/', [KelasController::class, 'index']);
    Route::get('/{kelas}', [KelasController::class, 'show']);
    Route::post('/', [KelasController::class, 'store']);
    Route::put('/{kelas}', [KelasController::class, 'update']);
    Route::delete('/{kelas}', [KelasController::class, 'destroy']);
});

Route::group(['prefix' => 'role'], function () {
    Route::get('/', [RoleController::class, 'index']);
    Route::get('/{role}', [RoleController::class, 'show']);
    Route::post('/', [RoleController::class, 'store']);
    Route::put('/{role}', [RoleController::class, 'update']);
    Route::delete('/{role}', [RoleController::class, 'destroy']);
});
