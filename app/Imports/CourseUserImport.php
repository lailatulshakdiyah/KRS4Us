<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\BeforeSheet;

class CourseUserImport implements ToCollection, WithEvents
{
    private $sheetName;

    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {
        $types = [
            'K' => 'kuliah',
            'P' => 'praktikum',
            'R' => 'responsi'
        ];

        $headings = $rows[0];
        foreach ($headings as $key => $value)
        {
            if (is_null($value))
            {
                unset($headings[$key]);
            } else {
                $headings[$key] = DB::table('courses')
                    ->where('code', $this->sheetName)
                    ->where('type', $types[$value[0]])
                    ->where('class', $value[1])
                    ->value('id');
            }
        }
        
        for ($i = 1; $i < count($rows); $i++)
        {
            for ($j = 0; $j < count($headings); $j++)
            {
                if ($rows[$i][$j])
                {
                    DB::table('course_user')->insert([
                        'user_nim' => $rows[$i][$j],
                        'course_id' => $headings[$j],
                    ]);
                }
            }
        }
    }

    public static function beforeSheet(BeforeSheet $event)
    {
        $instance = $event->getConcernable();
        $instance->sheetName = $event->getSheet()->getTitle();
    }

    public function registerEvents(): array
    {
        return [
            BeforeSheet::class => [self::class, 'beforeSheet'],
        ];
    }
}
