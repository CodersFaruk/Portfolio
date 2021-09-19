<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\AdminModel;

class AdminController extends Controller
{
    function Login(){
        return view('login');
    }

    function onLogin(Request $request){
        $userName=$request->userName;
        $password=$request->password;

        $result=AdminModel::where('user_name',$userName)->where('password',$password)->count();
        if($result==1){
            $request->session()->put('userKey', $userName);
            return 1;
        }else{
            return 0;
        }
    }
    function onLogout(Request $request){
        $request->session()->flash('userKey');
        return redirect('/login');
    }
}
