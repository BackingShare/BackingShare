app.controller("loginCtrl", function($scope, $http, userService, $location){
    $scope.invalid = false;
    $scope.form = {
        password: "",
        username: ""
    }

    $scope.login = function(){
        var user = {
            Username: $scope.form.username,
            password: $scope.form.password
        };
        var req = {
            method: 'POST',
            
            url: 'https://localhost:44329/Users/VerifyUserPassword',
            
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'

            },
            data: user
        }
           
        $http(req)
            .then(function successCallback(response){
                if(response.data == true){
                    var newUser = {
                        Username: user.Username,
                        email: user.Email
                    }
                    userService.addUser(newUser);
                    $location.path('/projetos');
                }
                else{
                    $scope.invalid = true;
                }
                
            }, function errorCallback(response) {
                console.log("Erro: "+response);
              });
            
               
    }

   console.log("aaaaaaaaaaa");
    
})
