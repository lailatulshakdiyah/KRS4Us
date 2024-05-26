<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Course extends Model
{
    use HasFactory;

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

    public function courses(): BelongsToMany
    {
        return $this->belongsToMany(User::class);
    }
}
