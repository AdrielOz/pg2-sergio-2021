<?php

use Illuminate\Database\Seeder;
use App\Model\statu;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        statu::create([
            'name'  => 'Activo',
        ]);
        statu::create([
            'name'  => 'Inactivo',
        ]);
    }
}
