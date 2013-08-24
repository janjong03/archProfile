<html ng-app="app">
<head>
	<title>Architech Profile</title>
	<link rel="stylesheet" type="text/css" href="css/normalize.css">
<link rel="stylesheet" type="text/css" href="css/foundation.css">


</head>
<body>
<div class="row">
	<div class="large-12 columns">
		 <div class="large-6 large-offset-3">

        </div>
	<div id="view" style="margin-top:10px;" ng-view>
</div>
</div>
</div>
<!-- footer -->
<div class="row" ng-controller="MainCtrl">
	<hr>
	<h6>{{footermessage}}</h6>
</div>
<script src="js/angular.js"></script>
<script src="js/angular-resource.js"></script>
<script src="js/angular-sanitize.js"></script>
<script src="js/main.js"></script>
<script src="js/jquery.js"></script>
<script src="js/foundation.min.js"></script>
</body>
</html>