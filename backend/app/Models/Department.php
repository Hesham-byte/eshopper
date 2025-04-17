<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\EloquentSortable\SortableTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Department extends Model
{
    use HasFactory, SoftDeletes, SortableTrait;

    protected $table = "departments";
    protected $fillable = [
        "name",
        "is_active",
        "order_column"
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'order_column' => 'integer',
    ];

    public function categories()
    {
        return $this->hasMany(Category::class);
    }
}
