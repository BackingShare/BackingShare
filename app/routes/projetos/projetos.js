app.controller("projetosCtrl", function($scope){
    $scope.create = false;

    $scope.CreateProject = function(){
       
        $scope.create = !$scope.create
    }
})
