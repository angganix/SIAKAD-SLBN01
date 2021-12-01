<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleModuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $modules = DB::table("modules")->get();
        $permissions = DB::table("permissions")->get();

        foreach ($modules as $module) {
            $lastID = DB::table("role_modules")
                ->insertGetId([
                    "role_id"   => 1,
                    "module_id" => $module->id
                ]);

            foreach ($permissions as $permission) {
                DB::table("role_module_permissions")
                    ->insert([
                        "role_module_id" => $lastID,
                        "permission_id" => $permission->id
                    ]);
            }
        }
    }
}
