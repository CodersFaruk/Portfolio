<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TechChartModel;
class TechChartController extends Controller
{
    function allSelect(){
        $result=TechChartModel::all();
        return $result;
    }
}
