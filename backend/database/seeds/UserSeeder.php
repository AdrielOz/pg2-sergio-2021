<?php

use Illuminate\Database\Seeder;
use App\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'      =>  'Juan José Jolón',
            'email'     =>  'jjolon@mineco.gob.gt',
            'username'  =>  'jjolon',
            'password'  =>  bcrypt('12345678')
        ])->assignRole('Admin');
    }
}
