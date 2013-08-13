var app = angular.module("app", []);

app.config(function($routeProvider)
	{ $routeProvider.when('/', {
    templateUrl: '/templates/login.php',
    controller: 'LoginCtrl'
  });
	$routeProvider.when('/mainpage', {
    templateUrl: '/templates/mainpage.html',
    controller: 'LoginCtrl'
  });
	$routeProvider.when('/adminpage',{
		templateUrl: '/templates/adminpage.html'});
});

app.controller("LoginCtrl", function($scope, $location, authService) {
$scope.loginfo={username:"",password:""};
$scope.login = function()
{
	  $location.path('/mainpage');
}
});

app.factory("authService",function()
{


});

