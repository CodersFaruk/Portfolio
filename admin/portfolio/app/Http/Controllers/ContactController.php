<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ContactModel;

class ContactController extends Controller
{
    function contactList(){
        $result=ContactModel::all();
        return $result;
    }

    function deleteContact(Request $request){
        $id=$request->input('id');
        $result=ContactModel::where('id', $id)->delete();
        return $result;
    }


}
