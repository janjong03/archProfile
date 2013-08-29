var app = angular.module("app", ['ngResource','ngSanitize']);

app.config(function($routeProvider)
	{ $routeProvider.when('/', {
		templateUrl: '/templates/login.php',
		controller: 'LoginCtrl'
	});
	$routeProvider.when('/mainpage', {
		templateUrl: '/templates/mainpage.php',
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

	$routeProvider.otherwise({ redirectTo: '/' });

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

app.controller("homeCtrl", function($http, 	$scope, $sanitize, $location, ImageService, Authenticate){
	var certimg = $http.get('/upload/getimage');
	certimg.success(function(data){
		$scope.images = data;
	});
	$scope.credentials={accountid:'2345', firstname: "John", lastname:"Doe", pathimage:"upload/blabla"}
	$scope.upload =function(){
		ImageService.upload($scope.file).success(function(){
			$location.path('/login')

		}).error(function(){window.alert('error at ImageCtrl')});
	}
	$scope.logout = function(){
		Authenticate.logout();
		$location.path('/login');
	}
});

app.controller("RegisterCtrl", function($scope, $sanitize, $location, Authenticate) {
	$scope.credentials={firstname: "", lastname:"", email:"", pw1:""};
	$scope.register = function(){
		Authenticate.register($scope.credentials).success(function(){
			$location.path('/');
		}).error(function(){
			//show error message
		});
	}
});

app.controller("MainCtrl", function($scope)
{
	$scope.message='"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."';
	$scope.footermessage="@ JnR Publishing limited. All rights reserved"


});

app.controller("ImageCtrl", function($scope, ImageService)
{	$scope.data = {file:""};
	$scope.upload =function(){
		ImageService.upload($scope.data).success(function(){
			$location.path('/login')

		}).error(function(){window.alert('error at ImageCtrl')});
	}

});


app.factory("Authenticate",function($http, $location, FlashService){
	var loginError = function(response) {
		FlashService.show(response.flash);
	};
	var RegisterSuccess = function(response){
		FlashService.show(response.flash);
	}
	var LogoutSuccess = function(response){
		FlashService.show(response.flash);
	}
	return{
		login: function(credentials)
		{
			var login =$http.post('/auth/login', credentials);
			login.error(loginError);
			login.success(function(){
				//todo 
				var user =$http.get('/get/user', credentials);

				user.success(function(data){
					//window.alert(data.Email);
				});
				user.error(function(){
					window.alert('error');
				})
			});
			return login;
		},	
		register: function(credentials)
		{
			var register= $http.post('/auth/register', credentials);
			register.success(RegisterSuccess);
			return register;
		},

		logout: function(){
			var logout = $http.get("auth/logout");
			logout.success(LogoutSuccess);
			return logout;
		}
	}
});

app.factory("ImageService", function($http, $location, FlashService){
	var uploadSuccess = function(response){
		FlashService.show(response.flash);
	}
	return{

		upload: function(fileinfo)
		{
			var upload = $http.post('/upload',fileinfo);
			upload.succces(function(){
				window.alert('success');
			});
			upload.error(function(){
				window.alert('error');
			});
			return upload;
		}
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

