<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\FooterModel;

class FooterController extends Controller
{
    function selectFooter(){
        $result=FooterModel::all();
        return $result;
    }
}
