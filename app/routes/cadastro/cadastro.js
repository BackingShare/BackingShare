app.controller("cadastroCtrl", function($scope, $http, userService, $location){
    
    $scope.form = {
        name: "",
        email: "",
        password: "",
        passwordConfirm: "" 
    }

    $scope.printa = function(){
        console.log($scope.form);
    }
    $scope.cadastrar = function(){
        var user = {
            Username: $scope.form.name,
            Email: $scope.form.email,
            password: $scope.form.password
        };
        var req = {
            method: 'POST',
            
            url: 'https://localhost:44329/Users/Create',
            
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'

            },
            data: user
        }
           
        $http(req)
            .then(function successCallback(response){
                
                var newUser = {
                    Username: user.Username,
                    email: user.Email
                }
                userService.addUser(newUser);
                $location.path('/projetos');
                
                
            }, function errorCallback(response) {
                console.log("Erro: "+response);
            });
            
            
    }

   console.log("aaaaaaaaaaa");
    
})
