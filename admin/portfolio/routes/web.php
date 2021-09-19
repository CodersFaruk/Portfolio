<?php

use Illuminate\Support\Facades\Route;

//Admin Login Route here------------
Route::get('/login','AdminController@Login');
Route::get('/onLogin/{userName}/{password}','AdminController@onLogin');
//Admin Logout Route here------------
Route::get('/logout','AdminController@onLogout');

//home Route are here------------
Route::get('/AdminSummary','HomeController@AdminSummary')->middleware('checkLogin');


//Contact Route are here------------
Route::get('/contactList','ContactController@contactList')->middleware('checkLogin');
Route::post('/deleteContact','ContactController@deleteContact')->middleware('checkLogin');

//Contact Route are here------------
Route::get('/reviewList','ReviewController@reviewList')->middleware('checkLogin');
Route::post('/deleteReview','ReviewController@deleteReview')->middleware('checkLogin');
Route::post('/addReview','ReviewController@addReview')->middleware('checkLogin');

//Course Route are here------------
Route::get('/courseList','CourseController@courseList')->middleware('checkLogin');
Route::post('/deleteCourse','CourseController@deleteCourse')->middleware('checkLogin');

//Project Route are here------------
Route::get('/projectList','ProjectController@projectList')->middleware('checkLogin');
Route::post('/deleteProject','ProjectController@deleteProject')->middleware('checkLogin');
Route::post('/addProject','ProjectController@addProject')->middleware('checkLogin');








Route::get('/', function () {
    return view('index');
})->middleware('checkLogin');


Route::get('{AnyRoute}', function () {
    return view('index');
})->where('AnyRoute','.*')->middleware('checkLogin');
