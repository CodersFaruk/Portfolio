<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ProjectModel;

class ProjectController extends Controller
{
    function projectThree(){
        $result=ProjectModel::limit(3)->get();
        return $result;
    }

    function projectAll(){
        $result=ProjectModel::all();
        return $result;
    }

    function projectDetails($projectId){
        $id=$projectId;

        $result=ProjectModel::where('id',$id)->get();
        return $result;
    }
}
