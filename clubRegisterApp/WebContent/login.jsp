<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html ng-app="memberManagerApp">
<head>
	<title>Login Page</title>
	
	<!-- jQuery (required) -->
	<script src="resources/js/libs/jquery-2.1.4.min.js"></script>
	
	<!-- Bootstrap -->
	<script type="text/javascript" src="resources/js/libs/bootstrap.js"></script>
	<link rel="stylesheet" type="text/css" href="resources/css/bootstrap.css" />
	
	<!-- AngularJS -->
	<script type="text/javascript" src="resources/js/libs/angular.js"></script>
	<script type="text/javascript" src="resources/js/libs/angular-resource.js"></script>
	<script type="text/javascript" src="resources/js/libs/angular-animate.js"></script>
	<script type="text/javascript" src="resources/js/libs/promise-tracker.js"></script>
	<script type="text/javascript" src="resources/js/libs/angular-cookies.js"></script>
	<script type="text/javascript" src="resources/js/modules/angular-csrf-cross-domain.js"></script>
	<script type="text/javascript" src="resources/js/modules/angularModalService.js"></script>
	<script type="text/javascript" src="resources/js/modules/ui-bootstrap-tpls-0.13.0.js"></script>
	
	<!-- Font Awsome -->
	<link rel="stylesheet" type="text/css" href="resources/font-awesome-4.3.0/css/font-awesome.css" />
	
	<!-- My app -->
	<script type="text/javascript" src="resources/js/app.js"></script>
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
					<input type="text" name='j_username' value="User Name" ng-model="thisUser.username" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'User Name';}"/>
					<input type="password" name='j_password' value="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}"/>
					<input type="hidden"  name="${_csrf.parameterName}"   value="${_csrf.token}"/>
					<input name="submit" type="submit" value="Login Now">
				</form>
			</div> <!-- end loginbody -->
		</div> <!-- end loginbox -->
	</div> <!-- end container -->
	
	
</body>
</html>