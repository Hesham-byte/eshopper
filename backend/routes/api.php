<?php

use App\Http\Controllers\API\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\SliderController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\FeaturedController;
use App\Http\Controllers\API\DepartmentController;
use App\Http\Controllers\API\OfferController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\SocialMediaController;
use App\Http\Controllers\API\SubscribeController;

Route::apiResources([
    "sliders" => SliderController::class,
    "featureds" => FeaturedController::class,
    "socials" => SocialMediaController::class,
    "departments" => DepartmentController::class,
    "categories" => CategoryController::class,
    "offers" => OfferController::class,
    "products" => ProductController::class,
    "subscribe" => SubscribeController::class,
]);

Route::post("register", [AuthController::class, 'register'])->name('register');
Route::post("login", [AuthController::class, 'login'])->name('login');
Route::post("logout", [AuthController::class, 'logout'])->name('logout');


Route::get("departments-categories", [DepartmentController::class, 'getDepartmentsWithCategories'])->name('departments-categories');
Route::get("new-products", [ProductController::class, 'newProducts'])->name('new-products');
Route::get("featured-products", [ProductController::class, 'featuredProducts'])->name('featured-products');
