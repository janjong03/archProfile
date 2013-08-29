<!-- picture and basic information -->
<div class="row">
	<div class="large-4 columns">
		<img src="certimg/test.jpg">
	</div>
	<div class="large-2 columns right pull-1">
		<h3>Account#:{{credentials.accountid}}</h3>
	</div>
	<div class="large-8 columns left panel">
		Firstname: {{credentials.firstname}} <br>
		Lastname: {{credentials.lastname}}<br>
		Some information: <br>
	</div>
</div>
<div class="row">
	<hr>
</div>

<!-- medical history -->
<div class="row">
	<div class="large-12 columns">
		<h3>Medical</h3>
		<table>
			<thead>
				<tr>
					<th>Medical information</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Some info goes here</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<!-- certification section-->
<div class="row">
	<hr>
	<h3>Certification</h3>
	<div class="large-12 columns">
		<ul class="large-block-grid-4">
			<h6>-No certifications-</h6>
			<li ng-repeat="image in images">
				<img src={{image.imagepath}}>
			</li>
		</ul>
	</div>

	<form method="POST" action="http://localhost:8000/upload" enctype="multipart/form-data">
		<label for="file">Filename:</label>
		<input type="file" name="file" id="file"><br>
		<input type="submit" name="submit" value="Submit">
	</form>
	<button ng-click=logout()>Logout</button>
</div>
