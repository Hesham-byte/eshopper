<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Featured;
use Illuminate\Http\Request;

class FeaturedController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Featured::where('is_active', true)->orderBy('order_column')->get()->map(function ($featured) {
            return [
                'id' => $featured->id,
                'title' => $featured->title,
                'icon' => $featured->icon,
            ];
        });
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
