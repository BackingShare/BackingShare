app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl:'app/routes/home/home.html',
        index: 1
    })
    .when('/cadastro', {
        templateUrl:'app/routes/cadastro/cadastro.html',
        index: 1
    })
    .when('/login',{
        templateUrl:'app/routes/login/login.html',
        index: 2
    })
    .when('/usuario',{
        templateUrl:'app/routes/usuario/usuario.html',
        index: 2
    })
    .when('/projetos',{
        templateUrl:'app/routes/projetos/projetos.html',
        index: 2
    })
})