<?php

namespace App\Models;

use Spatie\EloquentSortable\Sortable;
use Illuminate\Database\Eloquent\Model;
use Spatie\EloquentSortable\SortableTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Featured extends Model implements Sortable
{
    use HasFactory, SoftDeletes, SortableTrait;

    protected $table = "featureds";
    protected $fillable = [
        "title",
        "icon",
        "is_active",
        "order_column"
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'order_column' => 'integer',
    ];
}
