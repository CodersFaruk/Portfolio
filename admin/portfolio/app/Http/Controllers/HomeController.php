<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\ClientReviewModel;
use App\ContactModel;
use App\CourseModel;
use App\ProjectModel;
use App\ServiceModel;

class HomeController extends Controller
{
    function AdminSummary(){
        $review=ClientReviewModel::count();
        $contact=ContactModel::count();
        $course=CourseModel::count();
        $project=ProjectModel::count();
        $service=ServiceModel::count();

        $result=array('review'=> $review,'contact'=> $contact,'course'=> $course,'project'=> $project,'service'=> $service);
        return json_encode($result);
    }
}
