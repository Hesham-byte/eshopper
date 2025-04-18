<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\Featured;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Illuminate\Database\Eloquent\Builder;
use Guava\FilamentIconPicker\Forms\IconPicker;
use Guava\FilamentIconPicker\Tables\IconColumn;
use App\Filament\Resources\FeaturedResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\FeaturedResource\RelationManagers;
use Filament\Tables\Columns\ToggleColumn;

class FeaturedResource extends Resource
{
    protected static ?string $model = Featured::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->required()
                    ->maxLength(16),
                IconPicker::make('icon'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->reorderable('order_column')
            ->columns([
                IconColumn::make('icon'),
                TextColumn::make('title'),
                ToggleColumn::make('is_active')
                    ->label('Active')
            ])
            ->filters([
                Tables\Filters\TrashedFilter::make(),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                    Tables\Actions\ForceDeleteBulkAction::make(),
                    Tables\Actions\RestoreBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListFeatureds::route('/'),
            'create' => Pages\CreateFeatured::route('/create'),
            'edit' => Pages\EditFeatured::route('/{record}/edit'),
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }
}
