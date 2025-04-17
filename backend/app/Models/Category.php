<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\EloquentSortable\Sortable;
use Spatie\EloquentSortable\SortableTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Category extends Model implements HasMedia, Sortable
{
    use HasFactory, SoftDeletes, SortableTrait, InteractsWithMedia;

    protected $table = "categories";
    protected $fillable = [
        "name",
        "is_active",
        "order_column",
        "department_id",
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'order_column' => 'integer',
    ];

    public function department()
    {
        return $this->belongsTo(Department::class);
    }
}
