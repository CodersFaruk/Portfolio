<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ServiceModel;

class ServiceController extends Controller
{
    function selectService(){
        $result=ServiceModel::all();
        return $result;
    }
}
