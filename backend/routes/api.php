<?php

use App\Http\Controllers\API\FeaturedController;
use App\Http\Controllers\API\SliderController;
use App\Http\Controllers\API\SocialMediaController;
use Illuminate\Support\Facades\Route;

Route::apiResources([
    "sliders" => SliderController::class,
    "featureds" => FeaturedController::class,
    "socials" => SocialMediaController::class,
]);
