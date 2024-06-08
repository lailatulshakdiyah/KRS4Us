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
        $courses = [
            Course::factory()->create([
                'code' => 'KOM1326',
                'name' => 'Pengantar Kecerdasan Komputasional',
                'class' => '1',
                'room' => 'CCR 1.07',
                'type' => 'kuliah',
                'day' => 'senin',
                'start_time' => '08:00:00',
                'end_time' => '09:40:00'
            ]),
            Course::factory()->create([
                'code' => 'KOM1326',
                'name' => 'Pengantar Kecerdasan Komputasional',
                'class' => '3',
                'room' => 'CCR 1.07',
                'type' => 'kuliah',
                'day' => 'jumat',
                'start_time' => '07:30:00',
                'end_time' => '09:10:00'
            ]),

            Course::factory()->create([
                'code' => 'KOM1338',
                'name' => 'Data Mining',
                'class' => '1',
                'room' => 'Satari 3.11',
                'type' => 'kuliah',
                'day' => 'senin',
                'start_time' => '10:00:00',
                'end_time' => '11:40:00'
            ]),
            Course::factory()->create([
                'code' => 'KOM1338',
                'name' => 'Data Mining',
                'class' => '2',
                'room' => 'Satari 3.11',
                'type' => 'kuliah',
                'day' => 'senin',
                'start_time' => '13:00:00',
                'end_time' => '14:40:00'
            ]),
            Course::factory()->create([
                'code' => 'KOM1338',
                'name' => 'Data Mining',
                'class' => '3',
                'room' => 'Satari 3.11',
                'type' => 'kuliah',
                'day' => 'jumat',
                'start_time' => '07:30:00',
                'end_time' => '11:40:00'
            ]),

            Course::factory()->create([
                'code' => 'KOM1338',
                'name' => 'Data Mining',
                'class' => '1',
                'room' => 'Labkom 1',
                'type' => 'praktikum',
                'day' => 'selasa',
                'start_time' => '13:00:00',
                'end_time' => '15:00:00'
            ]),
            Course::factory()->create([
                'code' => 'KOM1338',
                'name' => 'Data Mining',
                'class' => '2',
                'room' => 'Labkom 2',
                'type' => 'praktikum',
                'day' => 'selasa',
                'start_time' => '13:00:00',
                'end_time' => '15:00:00'
            ]),
            Course::factory()->create([
                'code' => 'KOM1338',
                'name' => 'Data Mining',
                'class' => '3',
                'room' => 'Labkom 1',
                'type' => 'praktikum',
                'day' => 'jumat',
                'start_time' => '15:30:00',
                'end_time' => '17:30:00'
            ]),

            Course::factory()->create([
                'code' => 'KOM1337',
                'name' => 'Analisis dan Desain Sistem',
                'class' => '1',
                'room' => 'TAN 3.01 A',
                'type' => 'kuliah',
                'day' => 'selasa',
                'start_time' => '08:00:00',
                'end_time' => '09:40:00'
            ]),
            Course::factory()->create([
                'code' => 'KOM1337',
                'name' => 'Analisis dan Desain Sistem',
                'class' => '2',
                'room' => 'TAN 3.01 A',
                'type' => 'kuliah',
                'day' => 'selasa',
                'start_time' => '08:00:00',
                'end_time' => '09:40:00'
            ]),
            Course::factory()->create([
                'code' => 'KOM1337',
                'name' => 'Analisis dan Desain Sistem',
                'class' => '3',
                'room' => 'TAN 3.01 A',
                'type' => 'kuliah',
                'day' => 'rabu',
                'start_time' => '13:00:00',
                'end_time' => '14:40:00'
            ]),

            Course::factory()->create([
                'code' => 'KOM1337',
                'name' => 'Analisis dan Desain Sistem',
                'class' => '1',
                'room' => 'Labkom 1',
                'type' => 'praktikum',
                'day' => 'kamis',
                'start_time' => '13:00:00',
                'end_time' => '14:40:00'
            ]),
            Course::factory()->create([
                'code' => 'KOM1337',
                'name' => 'Analisis dan Desain Sistem',
                'class' => '2',
                'room' => 'Labkom 2',
                'type' => 'praktikum',
                'day' => 'kamis',
                'start_time' => '13:00:00',
                'end_time' => '14:40:00'
            ]),
            Course::factory()->create([
                'code' => 'KOM1337',
                'name' => 'Analisis dan Desain Sistem',
                'class' => '3',
                'room' => 'Labkom 3',
                'type' => 'praktikum',
                'day' => 'kamis',
                'start_time' => '09:20:00',
                'end_time' => '11:20:00'
            ]),

            Course::factory()->create([
                'code' => 'KOM1328',
                'name' => 'Pengolahan Citra Digital',
                'class' => '1',
                'room' => 'Teaching Lab 2.3',
                'type' => 'kuliah',
                'day' => 'selasa',
                'start_time' => '10:00:00',
                'end_time' => '11:40:00'
            ]),
            Course::factory()->create([
                'code' => 'KOM1328',
                'name' => 'Pengolahan Citra Digital',
                'class' => '2',
                'room' => 'Teaching Lab 2.3',
                'type' => 'kuliah',
                'day' => 'rabu',
                'start_time' => '10:00:00',
                'end_time' => '11:40:00'
            ]),

            Course::factory()->create([
                'code' => 'KOM1328',
                'name' => 'Pengolahan Citra Digital',
                'class' => '1',
                'room' => 'Labkom 1',
                'type' => 'praktikum',
                'day' => 'selasa',
                'start_time' => '15:30:00',
                'end_time' => '17:30:00'
            ]),
            Course::factory()->create([
                'code' => 'KOM1328',
                'name' => 'Pengolahan Citra Digital',
                'class' => '2',
                'room' => 'Labkom 2',
                'type' => 'praktikum',
                'day' => 'selasa',
                'start_time' => '15:30:00',
                'end_time' => '17:30:00'
            ]),
            Course::factory()->create([
                'code' => 'KOM1328',
                'name' => 'Pengolahan Citra Digital',
                'class' => '3',
                'room' => 'Labkom 1',
                'type' => 'praktikum',
                'day' => 'rabu',
                'start_time' => '15:30:00',
                'end_time' => '17:30:00'
            ]),

            Course::factory()->create([
                'code' => 'KOM1306',
                'name' => 'Karier dan Etika Ilmu Komputer',
                'class' => '1',
                'room' => 'RKU 3.02',
                'type' => 'kuliah',
                'day' => 'jumat',
                'start_time' => '13:30:00',
                'end_time' => '15:10:00'
            ]),
            Course::factory()->create([
                'code' => 'KOM1306',
                'name' => 'Karier dan Etika Ilmu Komputer',
                'class' => '2',
                'room' => 'RKU 3.02',
                'type' => 'kuliah',
                'day' => 'jumat',
                'start_time' => '13:30:00',
                'end_time' => '15:10:00'
            ]),
            Course::factory()->create([
                'code' => 'KOM1306',
                'name' => 'Karier dan Etika Ilmu Komputer',
                'class' => '3',
                'room' => 'RKU 3.02',
                'type' => 'kuliah',
                'day' => 'jumat',
                'start_time' => '13:30:00',
                'end_time' => '15:10:00'
            ]),

            Course::factory()->create([
                'code' => 'KOM1306',
                'name' => 'Karier dan Etika Ilmu Komputer',
                'class' => '1',
                'room' => 'Ruangan Disesuaikan',
                'type' => 'praktikum',
                'day' => 'sabtu',
                'start_time' => '13:30:00',
                'end_time' => '15:30:00'
            ]),
            Course::factory()->create([
                'code' => 'KOM1306',
                'name' => 'Karier dan Etika Ilmu Komputer',
                'class' => '2',
                'room' => 'Ruangan Disesuaikan',
                'type' => 'praktikum',
                'day' => 'sabtu',
                'start_time' => '13:30:00',
                'end_time' => '15:30:00'
            ]),
            Course::factory()->create([
                'code' => 'KOM1306',
                'name' => 'Karier dan Etika Ilmu Komputer',
                'class' => '3',
                'room' => 'Ruangan Disesuaikan',
                'type' => 'praktikum',
                'day' => 'sabtu',
                'start_time' => '13:30:00',
                'end_time' => '15:30:00'
            ]),

            Course::factory()->create([
                'code' => 'KOM1398',
                'name' => 'Metode Penelitian dan Telaah Pustaka',
                'class' => '1',
                'room' => 'CCR 1.09',
                'type' => 'kuliah',
                'day' => 'kamis',
                'start_time' => '15:30:00',
                'end_time' => '17:10:00'
            ]),
            Course::factory()->create([
                'code' => 'KOM1398',
                'name' => 'Metode Penelitian dan Telaah Pustaka',
                'class' => '2',
                'room' => 'CCR 1.10',
                'type' => 'kuliah',
                'day' => 'kamis',
                'start_time' => '15:30:00',
                'end_time' => '17:10:00'
            ]),
            Course::factory()->create([
                'code' => 'KOM1398',
                'name' => 'Metode Penelitian dan Telaah Pustaka',
                'class' => '3',
                'room' => 'CCR 1.11',
                'type' => 'kuliah',
                'day' => 'kamis',
                'start_time' => '15:30:00',
                'end_time' => '17:10:00'
            ]),
        ];

        $admin = User::factory()->create([
            'name' => 'zran',
            'nim' => 'G6401211000',
            'email' => 'admin@krs4us.japaneast.cloudapp.azure.com',
            'password' => '12345678',
            'is_admin' => true
        ]);

        $user = User::factory()->create([
            'name' => 'Muhammad Zahran',
            'nim' => 'G6401211074',
            'email' => 'muhammadzahran@apps.ipb.ac.id',
            'password' => '12345678',
            'is_admin' => false
        ]);

        $indexes = [1, 2, 5, 10, 13, 15, 16, 19, 22, 27];
        foreach ($indexes as $index) {
            $admin->courses()->attach($courses[$index]);
        }

        $indexes = [0, 2, 7, 9, 12, 14, 17, 20, 23, 26];
        foreach ($indexes as $index) {
            $user->courses()->attach($courses[$index]);
        }
    }
}
