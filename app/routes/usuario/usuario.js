app.controller("usuarioCtrl", function($scope, $http, userService, ){
      
    $scope.users = userService.getUser();
    $scope.user = $scope.users[0];

    
})
