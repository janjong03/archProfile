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
	$scope.credentials = {email: "", password:""};
	$scope.login = function()
	{ Authenticate.login($scope.credentials).success(function(){
		$location.path('/mainpage');
	})
}
$scope.register = function(){
	$location.path('/register');	
}
});

app.controller("RegisterCtrl", function($scope, $sanitize, $location, Authenticate) {
	$scope.credentials={firstname: "", lastname:"", email:"", pw1:""};
	$scope.register = function(){
		Authenticate.register($scope.credentials).success(function(){
			$location.path('/login');
		}).error(function(){
			window.popup('error');
		});
	}
});


// app.controller("homeCtrl", function($scope, $location, Authenticate ){
// 	$scope.logout =function(){
// 		Authenticate.get({}, function(){
// 			$location.path('/');
// 		})

// 	}
// });

// app.controller("CertificationCtrl", function($scope, $http)
// {

// });

app.controller("MainCtrl", function($scope)
{
	$scope.message='"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."';
	$scope.footermessage="@ JnR Publishing limited. All rights reserved"
});


app.factory("Authenticate",function($http, $location){
	return{
		login: function(credentials)
		{
			return $http.post('/auth/login', credentials);
		},	
		register: function(credentials)
		{
			return $http.post('/auth/register', credentials);
		}
	}
});

// app.factory("AuthRegister", function($resource)
// {
// 	return $resource("/service/authregister")
// })


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


app.directive('pwCheck', function () {
	return {
		require: 'ngModel',
		link: function (scope, elem, attrs, ctrl) {

			var me = attrs.ngModel;
			var matchTo = attrs.pwCheck;

			scope.$watch('[me, matchTo]', function(value){
				ctrl.$setValidity('pwmatch', scope[me] === scope[matchTo] );
			});
		}
	}});
