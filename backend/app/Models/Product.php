<?php

namespace App\Models;

use Spatie\MediaLibrary\HasMedia;
use Spatie\EloquentSortable\Sortable;
use Illuminate\Database\Eloquent\Model;
use Spatie\EloquentSortable\SortableTrait;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model implements Sortable, HasMedia
{
    use HasFactory, SoftDeletes, SortableTrait, InteractsWithMedia;
    protected $table = "products";
    protected $fillable = [
        "name",
        "description",
        "price",
        "category_id",
        "is_active",
        "is_featured",
        "is_new",
        "order_column"
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'order_column' => 'integer',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
