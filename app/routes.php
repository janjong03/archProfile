<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('singlepage');
});

Route::get('/form', function()
{
	return View::make('form');
});
Route::post('/upload', 'ImageController@upload');
Route::get('/upload/getimage', 'ImageController@getimages');
Route::group(array('prefix' => 'service'), function() {

	Route::resource('authenticate', 'AuthenticationController');
	// Route::resource('authregister', 'RegisterController');

});

Route::post('/auth/login', 'AuthController@login');
Route::post('/auth/register','RegisterController@store');
Route::get('/auth/logout', 'AuthController@logout');
Route::get('/get/user','AuthController@getuser');