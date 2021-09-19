<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <link rel="stylesheet" href="{{asset('css/responsive.css')}}">
    <link rel="shortcut icon" href={{asset('/images/logo.ico')}}>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <title>Login</title>
</head>
<body>
<div class="container-fluid loginBg" >
    <div class="row d-flex justify-content-center">
        <div class="col-md-6 col-lg-6 col-sm-6 col-xl-4">
            <div class="card bg-danger mt-5">
                <div class="card-body">
                    <h4 class="text-center text-light">Admin Login</h4>
                    <hr class="w-50 badge-light mb-5">
                        <div class="form-group">
                            <input id="userName" type="text" class="form-control" placeholder="User Name">
                        </div>
                        <div class="form-group">
                            <input id="password" type="password" class="form-control" placeholder="Password">
                        </div>
                        <button id="loginBtn" onclick="adminLogin()" class="btn btn-dark btn-block my-4">Login</button>
                </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
    function adminLogin(){
        var userName=document.getElementById('userName').value;
        var password=document.getElementById('password').value;


        axios.get('/onLogin/'+userName+'/'+password)
            .then(function (response) {
                if(response.status==200 && response.data==1){
                    window.location.href="/";
                }else{
                    alert('Wrong user or password');
                }
            })
            .catch(function (error) {
                alert('Something Wrong');
            })

    }
</script>


</body>
</html>
