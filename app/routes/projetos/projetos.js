app.controller("projetosCtrl", function($scope, $http){
    $scope.create = false;
    $scope.projects = null; 
    $scope.CreateProject = function(){
       
        $scope.create = !$scope.create
    }

    $scope.form = {
        name: "",
        isPublic: false,
    }

    
    getProjects = function(){
        $http.get("https://localhost:44329/Projects/Get").then(function successCallback(response){
            $scope.projects = response.data; 
         });
    
    }
    $scope.criaAudio = function(){
        var audioModel = {
            location: "",
            filename: "teste",
            project: 1,
            userId: 1
        };
        var req = {
            method: 'POST',
            
            url: 'https://localhost:44329/Audio/Create',
            
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'

            },
            data: audioModel
        }
        $http(req)
            .then(function successCallback(response) {
                $http.get("https://localhost:44329/Projects/Get")
                    .then(function successCallback(responseGet) {
                        $scope.projects = responseGet.data; 
                        console.log($scope.projects);
                    });
              }, function errorCallback(response) {
                console.log("Erro: "+response);
              });

    }
    $scope.submit = function(){
        var projectModel = {
            name: $scope.form.name,
            isPublic: $scope.form.isPublic,
            userId: 1
        };
        var req = {
            method: 'POST',
            
            url: 'https://localhost:44329/Projects/Create',
            
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'

            },
            data: projectModel
        }
           
        $http(req)
            .then(function successCallback(response) {
                $http.get("https://localhost:44329/Projects/Get")
                    .then(function successCallback(responseGet) {
                        $scope.projects = responseGet.data; 
                        console.log($scope.projects);
                    });
              }, function errorCallback(response) {
                console.log("Erro: "+response);
              });
    }

    
    this.$onInit = function() {
        getProjects();
    };
    
    
})
