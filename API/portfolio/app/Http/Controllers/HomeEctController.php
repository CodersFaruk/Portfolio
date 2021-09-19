<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\HomeExtraModel;

class HomeEctController extends Controller
{
    function videoSection(){
        $result=HomeExtraModel::select('video_des','video_url')->get();
        return $result;
    }

    function selectCounter(){
        $result=HomeExtraModel::select('project_counter','client_counter')->get();
        return $result;
    }

    function bannerSelect(){
        $result=HomeExtraModel::select('banner_title','banner_sub_title')->get();
        return $result;
    }

    function techDes(){
        $result=HomeExtraModel::select('tech_des')->get();
        return $result;
    }


}
