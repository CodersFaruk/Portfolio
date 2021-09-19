<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\CourseModel;

class CourseController extends Controller
{
    function selectFour(){
        $result=CourseModel::limit(4)->get();
        return $result;
    }

    function selectAll(){
        $result= CourseModel::all();
        return $result;
    }

    function courseDetails($courseId){
        $id=$courseId;
        $result=CourseModel::where('id',$id)->get();
        return $result;
    }
}
