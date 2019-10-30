app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl:'app/routes/home/home.html',
        index: 1
    })
    .when('/cadastro', {
        templateUrl:'app/routes/cadastro/cadastro.html',
        index: 2
    })
    .when('/login',{
        templateUrl:'app/routes/login/login.html',
        index: 3
    })
    .when('/usuario',{
        templateUrl:'app/routes/usuario/usuario.html',
        index: 4
    })
    .when('/projetos',{
        templateUrl:'app/routes/projetos/projetos.html',
        index: 5
    })
    .when('/categorias',{
        templateUrl:'app/routes/categorias/category.html',
        index: 6
    })
    .when('/recuperar-senha',{
        templateUrl:'app/routes/recuperar-senha/recuperar-senha.html',
        index: 6
    })
})