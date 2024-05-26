<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Course;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $courses = [
            Course::factory()->create([
                'code' => 'IPB1234',
                'name' => 'Ilmu Padi',
                'class' => '1',
                'room' => 'Golden Corner',
                'type' => 'kuliah',
                'day' => 'senin',
                'start_time' => '00:00:00',
                'end_time' => '23:59:00'
            ]),
            Course::factory()->create([
                'code' => 'IPB1234',
                'name' => 'Ilmu Padi',
                'class' => '1',
                'room' => 'Bangku Statistika',
                'type' => 'praktikum',
                'day' => 'selasa',
                'start_time' => '00:00:00',
                'end_time' => '23:59:00'
            ]),
            Course::factory()->create([
                'code' => 'IPB1235',
                'name' => 'Ilmu Manyala',
                'class' => '1',
                'room' => 'Komlounge',
                'type' => 'kuliah',
                'day' => 'senin',
                'start_time' => '00:00:00',
                'end_time' => '23:59:00'
            ]),
            Course::factory()->create([
                'code' => 'IPB1235',
                'name' => 'Ilmu Manyala',
                'class' => '1',
                'room' => 'Localhost',
                'type' => 'praktikum',
                'day' => 'jumat',
                'start_time' => '00:00:00',
                'end_time' => '23:59:00'
            ]),
        ];

        $admin = User::factory()->create([
            'name' => 'zran',
            'nim' => 'G6401211000',
            'email' => 'admin@krs4us.com',
            'password' => '12345678',
            'is_admin' => true
        ]);

        foreach ($courses as $course) {
            $admin->courses()->attach($course);
        }

        User::factory()->create([
            'name' => 'Muhammad Zahran',
            'nim' => 'G6401211074',
            'email' => 'muhammadzahran@apps.ipb.ac.id',
            'password' => '12345678',
            'is_admin' => false
        ]);
    }
}
