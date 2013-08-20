var app = angular.module("app", ['ngResource','ngSanitize']);

app.config(function($routeProvider)
	{ $routeProvider.when('/', {
		templateUrl: '/templates/login.php',
		controller: 'LoginCtrl'
	});
	$routeProvider.when('/mainpage', {
		templateUrl: '/templates/mainpage.html',
		controller: 'homeCtrl'
	});
	$routeProvider.when('/adminpage',{
		templateUrl: '/templates/adminpage.html'});

	$routeProvider.when('/register',{
		templateUrl: '/templates/register.html',
		controller: 'RegisterCtrl'});

	$routeProvider.when('/publicpage',{
		templateUrl: '/templates/publicpage.html'
	});

});

app.controller("LoginCtrl", function($scope, $sanitize, $location, Authenticate) {
	$scope.login = function()
	{Authenticate.save({
		'username': $sanitize($scope.username),
		'password': $sanitize($scope.password)

	}, function(){
		$scope.flash='';
		$location.path('/mainpage');
	}, function(response){
		$scope.flash = response.data.flash;
	})
	}
});

app.controller("homeCtrl", function($scope, $location, Authenticate ){
	$scope.logout =function(){
		Authenticate.get({}, function(){
			$location.path('/');
		})
	
	}
});

app.factory("FlashService", function($rootScope) {
  return {
    show: function(message) {
      $rootScope.flash = message;
    },
    clear: function() {
      $rootScope.flash = "";
    }
  }
});


app.controller("CertificationCtrl", function($scope, $http)
{
	$http.get('todos.json').then(function(res){
		$scope.todos =res.data;
	});

});

app.factory("Authenticate",function($resource)
{return $resource("/service/authenticate/")
});


app.controller("MainCtrl", function($scope)
{
	$scope.message='"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."';
	$scope.footermessage="@ JnR Publishing limited. All rights reserved"
});

app.controller("RegisterCtrl", function($scope, $location)
{
	$scope.register = function()
	{
		$location.path('/adminpage');
	}
})
