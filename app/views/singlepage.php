<html ng-app="app">
<head>
	<title>Architech Profile</title>
<link rel="stylesheet" type="text/css" href="css/normalize.css">
<link rel="stylesheet" type="text/css" href="css/foundation.css">
<script src="js/angular.js"></script>
<script src="js/main.js"></script>
<script src="js/jquery.js"></script>
<script src="js/foundation.min.js"></script>
</head>
<body>
<div class="row">
	<div class="large-12 columns">
	<div class="large-6 large-offset-3">
		 <div id="flash" class="alert-box alert" ng-show="flash">
            {{ flash }}
          </div>
	</div>
	<div id="view" style="margin-top:10px;" ng-view>
</div>
</div>
</div>

</body>
</html>