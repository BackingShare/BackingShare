app.controller('headerCtrl', function($scope, $rootScope, $route, userService){
   
   
    $scope.User = userService.getUser();
    


    $scope.$rootScope=$rootScope;
    $rootScope.index = $route.current.$$route.index;
    $scope.$on('$routeChangeStart', function(current){
        if(current && current.$$route.index)
            $rootScope.index = current.$$route.index;
    })
})
app.controller('pageCtrl', function($scope, $rootScope){
    $scope.teste = "funcionada"
    $scope.$rootScope = $rootScope;
})