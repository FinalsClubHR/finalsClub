// write GET request for login page, dropdown menu /schools
//// SEND JSON FOR POSTS

app = angular.module('app', []);

/*
-----------------------------CONTROLLERS----------------------------------------------------------------------------------
*/

app.controller('LogInController', ['$scope', function($scope){

}])

app.controller('SignUpController', ['$scope', 'signUp',  function($scope, signUp){
  $scope.newUser = {
    'phone_number' : null,
    'email' : null,
    'school' : null,
    'intensity' : null
  };
  $scope.schools = [];
  $scope.intensities = ['low', 'medium', 'high']; 
  $scope.submit = function() {
    signUp.createNewUser($scope.newUser);
  };
}])

app.controller('UserController', ['$scope', 'isUserLoggedIn', 'getUserGroups', function($scope, isUserLoggedIn, getUserGroups) {
  if(isUserLoggedIn.checkLogIn()){
    $scope.user = new isUserLoggedIn();
    $scope.groups = new getUserGroups($scope.user._id);  
  } else {
    window.location.href = '/log_in';
  }
}]);

app.controller('createGroupController', ['$scope', 'createGroup', function($scope, createGroup){
  $scope.intensities = ['low', 'medium', 'high'];
  $scope.courses = [];
  $scope.group = {
    'name' : null,
    'course_id' : null,
    'motto' : null,
    'description' : null,   
    'intensity' : null,
    'entry_question' : null
  };
  $scope.submit = function(){
    createGroup.createNewGroup($scope.group);
  }
}])

app.controller('allGroupsViewController', [ '$scope', '$http', function($scope, $http){
  $scope.groups = $scope.groups || [];
  $scope.currentGroup = null;
  $scope.sendLeaveGroupData = function(id){
    console.log('clicked leave group: ', id)
    $http({
      method: 'GET', 
      url: '/leave_group',
      data: JSON.stringify(id)
    }).success(function(data, status){
      console.log('sending delete ', data);
    }).error(function(){
        console.log('error deleting: ', data)
    })
  }

  $scope.leaveGroup = function(){
    $scope.group_id = window.location.pathname.split('/')[2];
    console.log($scope.group_id);
    $http({
      method: 'POST',
      url: '/leave_group',
      data: JSON.stringify({group_id: $scope.group_id})
      }).success(function(data, status){
        console.log('deleted group ', data);
        window.location.href = '/';
      }).error(function(){
        console.log('error in deleting group: ', data)
      })
    }
}]);

app.controller('findGroupController', ['$scope', '$http', function($scope, $http){
  $scope.groups = [];
  $scope.location = window.location.search.split('=')[1]
  $scope.request = {
    entry_answer : null,
    group_id : $scope.location,
    ignored : false
  }
  
  $scope.getCourses = function() {
    $http({
      method: 'GET',
      url: '/groups/search?courses=true'
      }).success(function(data, status){
        console.log(data);
        $scope.courses = data;
      }).error(function(){
        console.log('error in finding group by course: ', data)
      })
  };
  
  $scope.submit_answer = function(){
    console.log($scope.request);
    console.log($scope.location)
    $http({
      method: 'POST',
      url: '/requests',
      data: JSON.stringify($scope.request)
    }).success(function() {
      console.log('request sent');
      window.location.href = '/';      
    }).error(function(err){
      console.log(err);
    });
  }
}]);

app.controller('requestController', ['$scope', '$http', function($scope, $http){
  $scope.requests = [];
  $scope.approve = function(user, request_id){
    console.log(user);
    $http({
      method: 'POST',
      url: '/members',
      data: JSON.stringify({
        user_id: user,
        group_id: window.location.pathname.split('/')[2],
        request_id: request_id
      })
    }).success(function(){
      console.log('user added!')
      window.location.href = '/';
    }).error(function(err){
      console.log(err)
    });
  };
  
  $scope.ignoreRequest = function(id) {
    $http({
      method: 'PUT',
      url: '/requests/' + id
    }).success(function() {
      console.log('request ignored!');
      window.location.href = window.location.pathname;
    }).error(function(err) {
      console.log(err);
    });  
  };
  
}]);
app.controller('topicController', ['$scope', '$http', function($scope, $http){
  $scope.topics = [];
  $scope.topic = {
    topic_date : null,
    title : null,
    group_id : window.location.pathname.split('/')[2],
  };
  
  $scope.submitTopic= function(){
    $http({
      method: 'POST', 
      url: '/topics',
      data: JSON.stringify($scope.topic)
    }).success(function(data, status){
      window.location.href = '/groups/' + $scope.topic.group_id + '/flashcards';
      console.log($scope.topic);
    }).error(function(err, data){
      console.log(err);
    })
  }
}]);

app.controller('flashcardController', ['$scope', function($scope) {
  $scope.flashcards = [];
  $scope.topic = null;
  $scope.flipped = false;
  $scope.currentCard = 0;
  
  $scope.goBack = function() {
    if ($scope.currentCard > 0) {
      $scope.currentCard--;
    }
  };
  
  $scope.goForward = function() {
    if ($scope.currentCard < $scope.flashcards.length-1) {
      $scope.currentCard++;
    }
  };
}]);

app.controller('shareController', ['$scope', function($scope) {
  $scope.flashcards = [];
  $scope.createPad = function() {  
    var id = "pad0";
    var elem = document.getElementById(id);

    // connect to the server
    var connection = sharejs.open(id, 'text', function(error, doc) {
        // this function is called once the connection is opened
        if (error) {
            console.log("ERROR:", error);
        } else {
            // attach the ShareJS document to the textarea
            doc.attach_textarea(elem);
        }
    });      
    
    var elem2 = document.getElementById("pad1");
    var connection = sharejs.open("pad1", 'text', function(error, doc) {
        // this function is called once the connection is opened
        if (error) {
            console.log("ERROR:", error);
        } else {
            // attach the ShareJS document to the textarea
            doc.attach_textarea(elem2);
        }
    });       

    var elem3 = document.getElementById("pad2");
    var connection = sharejs.open("pad2", 'text', function(error, doc) {
        // this function is called once the connection is opened
        if (error) {
            console.log("ERROR:", error);
        } else {
            // attach the ShareJS document to the textarea
            doc.attach_textarea(elem3);
        }
    });       
  };
  
  angular.element(document).ready(function() {
    $scope.createPad();
  });
  
}]);

/*
-----------------------------FACTORIES------------------------------------------------------------------------------------
*/

app.factory('isUserLoggedIn', ['$http', function($http){
    return {
      checkLogIn: function(){
        $http({
          method: 'GET',
          url: '/loggedin'
        }).success(function(data, status){
          console.log('is user logged in ', data)
          return data;
        }).error(function(data, status){
          console.log(data)
        });
      }
    };
}]);

app.factory('getUserGroups', ['$http', function($http) {
  return function(user) {
      $http({
        method: 'GET',
        url: '/groups',
        params: { user_id : user }
      }).success(function(data, status){
        console.log(data);
        return data;
      }).error(function(data, status){
        console.log("ERROR: ", data);
      });
    } 
}]);

app.factory('signUp', ['$http', function($http){
  return {
    createNewUser: function(data){
      $http({
        method: 'PUT',
        url: '/sign_up/',
        data: JSON.stringify(data)
        }).success(function(data, status, headers){
          window.location.href = '/';
        }).error(function(){
          console.log('error in creating new user: ', data)
        })
      }
    };   
}]);

app.factory('createGroup', ['$http', function($http){
  return {
    createNewGroup: function(data){
      $http({
        method: 'POST',
        url: '/groups',
        data: JSON.stringify(data)
        }).success(function(data, status, headers){
          window.location.href = '/';
        }).error(function(){
          console.log('error in creating new group: ', data)
        })
      }
  };   
}]);
