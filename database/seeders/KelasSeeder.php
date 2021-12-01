<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class KelasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($x = 0; $x < 50; $x++) {
            DB::table('kelas')->insert([
                'nama' => Str::random(10),
                'ketunaan_id' => rand(1, 4)
            ]);
        }
    }
}
