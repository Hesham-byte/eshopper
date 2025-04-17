<?php

use App\Http\Controllers\API\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\SliderController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\FeaturedController;
use App\Http\Controllers\API\DepartmentController;
use App\Http\Controllers\API\SocialMediaController;


Route::apiResources([
    "sliders" => SliderController::class,
    "featureds" => FeaturedController::class,
    "socials" => SocialMediaController::class,
    "departments" => DepartmentController::class,
    "categories" => CategoryController::class,
]);

Route::post("register", [AuthController::class, 'register'])->name('register');
Route::post("login", [AuthController::class, 'login'])->name('login');
Route::post("logout", [AuthController::class, 'logout'])->name('logout');


Route::get("departments-categories", [DepartmentController::class, 'getDepartmentsWithCategories'])->name('departments-categories');
