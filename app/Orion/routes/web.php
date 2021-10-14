<?php

use App\Http\Controllers\OrionController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [OrionController::class, 'index'])->name('produtos.index');
Route::get('/produtos/add', [OrionController::class, 'add'])->name('produtos.add');
Route::post('/produtos', [OrionController::class, 'save'])->name('produtos.save');
Route::get('/produtos/{id}', [OrionController::class, 'destroy'])->name('produtos.destroy');