<?php

namespace Database\Seeders;

use table;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('settings')->insert([
            [
                'key' => 'site_name',
                'value' => 'Eshopper',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'site_description',
                'value' => 'This is my website description.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'address',
                'value' => '123 Main St, City, Country',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'email',
                'value' => 'info@example.com',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'phone',
                'value' => '+1234567890',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
