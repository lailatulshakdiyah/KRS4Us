<?php

namespace App\Imports;

use App\Models\Course;
use DateTime;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class CoursesImport implements ToCollection, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row)
        {
            if ($row['kode'])
            {
                $row['waktu_mulai'] = DateTime::createFromFormat('H.i', $row['waktu_mulai']);
                $row['waktu_selesai'] = DateTime::createFromFormat('H.i', $row['waktu_selesai']);

                $course = Course::where(['name' => $row['nama'], 'type' => $row['jenis']])->orderByDesc('class')->first();
                if ($course) {
                    $class = $course->class+1;
                } else {
                    $class = 1;
                }

                Course::updateOrCreate([
                    'code' => $row['kode'],
                    'class' => $class,
                    'type' => strtolower($row['jenis']),
                ], [
                    'code' => $row['kode'],
                    'name' => $row['nama'],
                    'class' => $class,
                    'type' => strtolower($row['jenis']),
                    'start_time' => $row['waktu_mulai'],
                    'end_time' => $row['waktu_selesai'],
                    'room' => $row['ruangan']
                ]);
            }
        }
    }
}
