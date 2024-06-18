<?php

namespace App\Imports;

use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class MainImport implements WithMultipleSheets
{
    protected $sheetCount;

    public function __construct($sheetCount)
    {
        $this->sheetCount = $sheetCount;
    }
    public function sheets(): array
    {
        $all = [
            0 => new UsersImport(),
            1 => new CoursesImport(),
            // '*' => new CourseUserImport()
        ];

        for ($i = 2; $i < $this->sheetCount; $i++) {
            $all[$i] = new CourseUserImport();
        }

        return $all;
    }
}
