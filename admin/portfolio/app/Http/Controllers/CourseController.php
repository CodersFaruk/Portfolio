<?php

namespace App\Http\Controllers;

use App\CourseModel;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    function courseList(){
        $result=CourseModel::all();
        return $result;
    }

    function deleteCourse(Request $request){
        $id=$request->input('id');
        $result=CourseModel::where('id', $id)->delete();
        return $result;
    }

}
