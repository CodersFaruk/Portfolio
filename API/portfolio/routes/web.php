<?php



$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/TechChart', 'TechChartController@allSelect');
$router->get('/ClientReview', 'ClientReviewController@allSelect');
$router->post('/contact', 'ContactController@insertContact');

$router->get('/courseHome', 'CourseController@selectFour');
$router->get('/courseAll', 'CourseController@selectAll');
$router->get('/courseDetails/{courseId}', 'CourseController@courseDetails');

$router->get('/footerInfo', 'FooterController@selectFooter');
$router->get('/information', 'InformationController@selectInfo');
$router->get('/selectService', 'ServiceController@selectService');

$router->get('/projectHome', 'ProjectController@projectThree');
$router->get('/projectAll', 'ProjectController@projectAll');
$router->get('/projectDetails/{projectId}', 'ProjectController@projectDetails');


$router->get('/videoInfo', 'HomeEctController@videoSection');
$router->get('/selectCounter', 'HomeEctController@selectCounter');
$router->get('/bannerSelect', 'HomeEctController@bannerSelect');
$router->get('/techDes', 'HomeEctController@techDes');
