<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html ng-app="memberManagerApp">
<head>
	<title>Login Page</title>
	
		<!-- jQuery (required) -->
		<script src="resources/bower_components/jquery/dist/jquery.min.js"></script>
	
		<!-- Bootstrap -->
 		<link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">
 		<script type="text/javascript" src="resources/bower_components/tether/dist/js/tether.min.js"></script>
 		<script type="text/javascript" src="resources/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
		
		<!-- AngularJS -->
		<script type="text/javascript" src="resources/bower_components/angular/angular.min.js"></script>
		<script type="text/javascript" src="resources/bower_components/angular-animate/angular-animate.min.js"></script>
		<script type="text/javascript" src="resources/bower_components/angular-cookies/angular-cookies.min.js"></script>
		<script type="text/javascript" src="resources/bower_components/angular-modal-service/dst/angular-modal-service.min.js"></script>
		<script type="text/javascript" src="resources/bower_components/angular-resource/angular-resource.min.js"></script>
		<script type="text/javascript" src="resources/bower_components/angular-route/angular-route.min.js"></script>
		<script type="text/javascript" src="resources/bower_components/angular-touch/angular-touch.min.js"></script>
		<script type="text/javascript" src="resources/bower_components/angular-ui-bootstrap/dist/ui-bootstrap-tpls.min.js"></script>	
		<script type="text/javascript" src="resources/bower_components/angular-promise-tracker/promise-tracker.js"></script>
		<script type="text/javascript" src="resources/bower_components/angular-auto-validate/dist/jcs-auto-validate.min.js"></script>
		<script type="text/javascript" src="resources/bower_components/angular-csrf-cross-domain/dist/angular-csrf-cross-domain.min.js"></script>
		
		<!-- Font Awsome -->
		<link rel="stylesheet" type="text/css" href="resources/bower_components/font-awesome/css/font-awesome.min.css" />
		
		<!-- log4javasctipt -->
		<script type="text/javascript" src="resources/bower_components/log4javascript/log4javascript.js"></script>
	
	<!-- My app -->
	<script type="text/javascript" src="resources/js/modules/publicApp.js"></script>
	<script type="text/javascript" src="resources/js/modules/privateApp.js"></script>
	<script type="text/javascript" src="resources/js/controllers/fileUploadController.js"></script>		
	<link rel="stylesheet" type="text/css" href="resources/css/default.css" />
	<link rel="shortcut icon" type="image/ico" href="resources/images/favicon.ico" >
</head>
<body>	 
	<%
		String errorString = (String)request.getAttribute("error");
		if(errorString != null && errorString.trim().equals("true")){
		out.println("Incorrect login name or password. Please retry using correct login name and password.");
		}
	%>
	 <div class="container">
	 
	 	<!-- (1) Banner across the top & the menu -->
		<div ng-include="'resources/viewParts/headerNmenu.html'"></div>
		
		<div class="loginbox">
			<div class="loginhead"><i class="glyphicon glyphicon-user" style="align:right;margin-right:0px;"></i> Please Login
			<div class="loginbody">
				<form name='loginForm' action="<c:url value='j_spring_security_check' />" method='POST'>
					<div class="form-group">
						<input type="text" name='j_username' value="User Name" ng-model="thisUser.username" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'User Name';}" placeholder="Username"/>
						<input type="password" name='j_password' value="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}" placeholder="Password"/>
						<input type="hidden"  name="${_csrf.parameterName}"   value="${_csrf.token}"/>
						<input name="submit" type="submit" value="Login Now">
					</div>
				</form>
			</div> <!-- end loginbody -->
		</div> <!-- end loginbox -->
	</div> <!-- end container -->
	
	
</body>
</html>