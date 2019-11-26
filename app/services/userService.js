app.factory('userService', function() {
    var user = [];
  
    var addUser = function(newObj) {
        user.push(newObj);
    };
  
    var getUser = function(){
        return user;
    };
  
    return {
        addUser: addUser,
        getUser: getUser
    };
  
  })