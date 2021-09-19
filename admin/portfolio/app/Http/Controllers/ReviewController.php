<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ClientReviewModel;

class ReviewController extends Controller
{
    function reviewList(){
        $result=ClientReviewModel::all();
        return $result;
    }

    function deleteReview(Request $request){
        $id=$request->input('id');
        $result=ClientReviewModel::where('id', $id)->delete();
        return $result;
    }

    function addReview(Request $request){
        $title=$request->input('title');
        $des=$request->input('des');

        $filePath=$request->file('files')->store('public');
        $fileName=explode('/',$filePath)[1];
        $fileUrl="http://".$_SERVER['HTTP_HOST'].'/storage/'.$fileName;

        $result=ClientReviewModel::insert(['client_title'=>$title,'client_des'=>$des,'client_img'=>$fileUrl]);
        return $result;

    }
}
