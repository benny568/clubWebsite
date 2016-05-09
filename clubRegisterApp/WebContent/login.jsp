<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html ng-app="memberManagerApp">
<head>
	<title>Login Page</title>
	
	<!-- jQuery (required) -->
    <script src="resources/node_modules/jquery/dist/jquery.min.js"></script>
<!--     <script src="resources/node_modules/jquery-easing/jquery.easing.1.3.js"></script> -->


	<!-- Bootstrap -->
   	<link rel="stylesheet" type="text/css" href="resources/node_modules/bootstrap/dist/css/bootstrap.min.css" />
    <script type="text/javascript" src="resources/node_modules/tether/dist/js/tether.min.js"></script>
    <script type="text/javascript" src="resources/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

    <script src="resources/node_modules/es6-shim/es6-shim.min.js"></script>
    <script src="resources/node_modules/systemjs/dist/system-polyfills.js"></script>

    <script src="resources/node_modules/angular2/bundles/angular2-polyfills.js"></script>
    <script src="resources/node_modules/systemjs/dist/system.src.js"></script>
    <script src="resources/node_modules/rxjs/bundles/Rx.js"></script>
    <script src="resources/node_modules/angular2/bundles/angular2.dev.js"></script>
    <script src="resources/node_modules/angular2/bundles/router.dev.js"></script>
    <script src="resources/node_modules/angular2/animate.js"></script>
    <script src="resources/node_modules/ng-bootstrap/ng2-bootstrap.js"></script>
    <script src="resources/node_modules/angular2/bundles/http.dev.js"></script>

    <link rel="stylesheet" type="text/css" href="resources/app/styles/default.css" />
	<link rel="shortcut icon" type="image/ico" href="resources/app/images/favicon.ico" >
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
		
		<!-- log4javasctipt -->
		<script type="text/javascript" src="resources/node_modules/log4javascript/log4javascript.js"></script>

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