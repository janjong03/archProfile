<div class="row" style="margin-top:50px;">
	<div class="large-12">
		<form ng-submit="login()">
		
				<div class="row">
					<div class="large columns">
						<h1 style="text-align:Center;">Trades Link</h1>
					</div>
				</div>
				<div class="row">
					<div class="large-6 columns">
						<input placeholder="Username" type="text" ng-model="username" required>
					</div>
					<div class="large-6 columns">
						<input placeholder="Password" type="password" ng-model="password" required>
					</div>
				</div>
				<div class="row">
					<div class="large columns">
						<button type="submit" class="button small-offset-6 columns">Login &#x25B6</button>

					</div>
				</div>
		</form>	
				<div class="row">
					<div class="large columns" ng-controller="RegisterCtrl">
						<form ng-submit="register()">
						<button type="submit" class="button small-offset-3 columns">Register</button>
						</form>
					</div>
				<div class="row" ng-controller="MainCtrl">
					<div class="large-6 large-offset-3 columns" style="border-style:double;">
						<p style="margin:10px">
							{{message}}
						</p>
					</div>
				</div>
	</div>
</div>

