<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ProjectModel;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    function projectList(){
        $result=ProjectModel::all();
        return $result;
    }

    function deleteProject(Request $request){
        $id=$request->input('id');


        $img_one=ProjectModel::where('id', $id)->get(['project_img_one']);
        $img_two=ProjectModel::where('id', $id)->get(['project_img_two']);

        $img_one_name=explode('/',$img_one[0]['project_img_one'])[4];
        $img_two_name=explode('/',$img_two[0]['project_img_two'])[4];

        Storage::delete('public/'.$img_one_name);
        Storage::delete('public/'.$img_two_name);

        $result=ProjectModel::where('id', $id)->delete();
        return $result;
    }

    function addProject(Request $request){
        $name=$request->input('name');
        $des=$request->input('des');
        $features=$request->input('features');
        $preview=$request->input('preview');

        $file1Path=$request->file('files1')->store('public');
        $file1Name=explode('/',$file1Path)[1];
        $fileUrl1="http://".$_SERVER['HTTP_HOST'].'/storage/'.$file1Name;

        $file2Path=$request->file('files2')->store('public');
        $file2Name=explode('/',$file2Path)[1];
        $fileUrl2="http://".$_SERVER['HTTP_HOST'].'/storage/'.$file2Name;

        $result=ProjectModel::insert([
            'project_name'=>$name,
            'project_short_des'=>$des,
            'project_features'=>$features,
            'live_preview'=>$preview,
            'project_img_one'=>$fileUrl1,
            'project_img_two'=>$fileUrl2,
        ]);

        return $result;

    }
}
