<?php

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
// uri: / means the root 
// action: a closure = anonymous function. define/run at same context 
// view(view name): a laravel helper function, to rend a desinated view.
// view name: can be found at [resources/views]
Route::get('/{any?}', function () {
  return view('welcome');
})->where('any', '^(?!api\/)[\/\w\.-]*'); //not allow accessing api routes from browser
