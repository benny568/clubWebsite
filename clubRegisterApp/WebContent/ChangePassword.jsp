<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html ng-app="memberManagerApp">
<head>  <!-- HEAD START -->
	
	<title>Password Change</title>
	
		<meta name="_csrf" content="${_csrf.token}"/>
	    <!-- default header name is X-CSRF-TOKEN -->
	    <meta name="_csrf_header" content="${_csrf.headerName}"/>
	    
		<!-- jQuery (required) -->
		<script src="resources/js/libs/jquery-2.1.4.min.js"></script>
		
		<!-- Bootstrap -->
		<script type="text/javascript" src="resources/js/libs/bootstrap.js"></script>
		<link rel="stylesheet" type="text/css" href="resources/css/bootstrap.css" />
		
		<!-- AngularJS -->
		<script type="text/javascript" src="resources/js/libs/angular.js"></script>
		<script type="text/javascript" src="resources/js/libs/angular-route.js"></script>
		<script type="text/javascript" src="resources/js/libs/angular-resource.js"></script>
		<script type="text/javascript" src="resources/js/libs/angular-animate.js"></script>
		<script type="text/javascript" src="resources/js/libs/promise-tracker.js"></script>
		<script type="text/javascript" src="resources/js/libs/angular-cookies.js"></script>
		<script type="text/javascript" src="resources/js/modules/angular-csrf-cross-domain.js"></script>
		<script type="text/javascript" src="resources/js/modules/angularModalService.js"></script>
		<script type="text/javascript" src="resources/js/modules/ui-bootstrap-tpls-0.13.0.js"></script>
		
		<!-- Font Awsome -->
		<link rel="stylesheet" type="text/css" href="resources/font-awesome-4.3.0/css/font-awesome.css" />
		
		<!-- log4javasctipt -->
		<script type="text/javascript" src="resources/js/libs/log4javascript.js"></script>
		
		<!-- My app -->
		<script type="text/javascript" src="resources/js/app.js"></script>
		<script type="text/javascript" src="resources/js/controllers/memberManagementController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/passwdChangeController.js"></script>
		<script type="text/javascript" src="resources/js/services/memberManagerService.js"></script>
		<script type="text/javascript" src="resources/js/services/dbService.js"></script>
		
		<script type="text/javascript" src="resources/js/leagueRepublic.js"></script>
		<link rel="stylesheet" type="text/css" href="resources/css/default.css" />
		<link rel="shortcut icon" type="image/ico" href="resources/images/favicon.ico" >

</head>  <!-- HEAD END -->

<body ng-controller="passwdChangeController">

	<!-- (1) Banner across the top & the menu -->
	<div ng-include="'resources/viewParts/headerNmenu.html'"></div>

	<div id="wrap">
		<div class="container t1">    	
	    	
	    	<div class="loginbox">
			<div class="loginhead"><i class="glyphicon glyphicon-user" style="align:right;margin-right:0px;"></i> Password Change
			<button type="button" class="close" ng-click="cancel()" aria-hidden="true">&times;</button>
			<div class="loginbody">
				<form name='changePasswordForm'>
					<input type="password" id="pw1" name="pw1" ng-model="pw1" ng-required placeholder="Enter new password" ng-minlength="7" ng-maxlength="20"/>
					<div ng-show="changePasswordForm.$submitted || changePasswordForm.pw1.$touched">
				      <div ng-show="changePasswordForm.pw1.$error.minlength" style="color:red">The password must be at least 7 characters long.</div>
				      <div ng-show="changePasswordForm.pw1.$error.maxlength" style="color:red">Maximum password size is 20 characters.</div>
				    </div>
					<input type="password" id="pw2" name="pw2" ng-model="pw2" ng-required pw-check="pw1" placeholder="Confirm password"/>
					<div ng-show="changePasswordForm.$submitted || changePasswordForm.pw2.$dirty">
						<span ng-show="changePasswordForm.pw2.$error.pwmatch">Passwords don't match.</span>
					</div> 
					<input name="submit" type="submit" value="Submit" ng-click="Submit(pw1)" ng-disabled="changePasswordForm.$invalid||changePasswordForm.$pristine"/>
				</form>

			</div> <!-- end loginbody -->
		</div> <!-- end loginbox -->
	    	
		</div> <!--  End of container t1 -->
	</div>
	
	<div class="blankspace"></div>
	<div class="blankspace"></div>
	
	<!-- Footer across the bottom of the page -->
	<div ng-include="'resources/viewParts/footer.html'"></div>

</body>
</html>