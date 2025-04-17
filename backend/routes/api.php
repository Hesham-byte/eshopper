<?php

use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\DepartmentController;
use App\Http\Controllers\API\FeaturedController;
use App\Http\Controllers\API\SliderController;
use App\Http\Controllers\API\SocialMediaController;
use Illuminate\Support\Facades\Route;

Route::apiResources([
    "sliders" => SliderController::class,
    "featureds" => FeaturedController::class,
    "socials" => SocialMediaController::class,
    "departments" => DepartmentController::class,
    "categories" => CategoryController::class,
]);

Route::get("departments-categories", [DepartmentController::class, 'getDepartmentsWithCategories'])->name('departments-categories');
