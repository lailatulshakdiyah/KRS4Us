<?php

namespace App\Helpers;
use App\Models\Course;

class Parallel extends Course
{
    protected $fillable = [
        'code',
        'name',
        'class',
        'room',
        'type',
        'day',
        'start_time',
        'end_time'
    ];
}