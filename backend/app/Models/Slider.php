<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\EloquentSortable\Sortable;
use Spatie\EloquentSortable\SortableTrait;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Slider extends Model implements Sortable, HasMedia
{
    use HasFactory, SoftDeletes, SortableTrait, InteractsWithMedia;
    protected $table = "sliders";
    protected $fillable = [
        "title",
        "subtitle",
        "link",
        "is_active",
        "order_column"
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'order_column' => 'integer',
    ];
}
