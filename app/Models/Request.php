<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Request extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_nim',
        'course_code',
        'course_type',
        'course_src_id',
        'course_dest_id'
    ];
}
