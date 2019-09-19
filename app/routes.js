app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl:'app/routes/cadastro/cadastro.html',
        index: 1
    })
    .when('/login',{
        templateUrl:'app/routes/login/login.html',
        index: 2
    })
})