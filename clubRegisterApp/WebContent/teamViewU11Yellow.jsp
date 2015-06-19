<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html ng-app="teamViewApp">
	<head>  <!-- HEAD START -->		
		<title>Team View</title>
			
		<script type="text/javascript" src="resources/js/jquery-2.1.4.min.js"></script>
		<script type="text/javascript" src="resources/js/bootstrap.js"></script>
		<script type="text/javascript" src="resources/js/angular.js"></script>
		<script type="text/javascript" src="resources/js/angular-animate.js"></script>
		<script type="text/javascript" src="resources/js/angular-resource.js"></script>
		<script type="text/javascript" src="resources/js/angular-aria.js"></script>
		<script type="text/javascript" src="resources/js/angular-cookies.js"></script>
		<script type="text/javascript" src="resources/js/angular-loader.js"></script>
		<script type="text/javascript" src="resources/js/angular-messages.js"></script>
		<script type="text/javascript" src="resources/js/angular-route.js"></script>
		<script type="text/javascript" src="resources/js/angular-sanitize.js"></script>
		<script type="text/javascript" src="resources/js/angular-scenario.js"></script>
		<script type="text/javascript" src="resources/js/angular-touch.js"></script>
		<script type="text/javascript" src="resources/js/jssor.js"></script>
		<script type="text/javascript" src="resources/js/jssor.slider.js"></script>
		<script type="text/javascript" src="resources/js/smart-table.min.js"></script>
		<script type="text/javascript" src="resources/js/app.js"></script>
		<script type="text/javascript" src="resources/js/leagueRepublic.js"></script>
		
		<link rel="stylesheet" type="text/css" href="resources/css/animate.css" />
		<link rel="stylesheet" type="text/css" href="resources/css/bootstrap.css" />
		<link rel="stylesheet" type="text/css" href="resources/css/normalize.css" />
		<link rel="stylesheet" type="text/css" href="resources/css/font-awesome.css" />
		<link rel="stylesheet" type="text/css" href="resources/font-awesome-4.3.0/css/font-awesome.css" />
		<link rel="stylesheet" type="text/css" href="resources/css/default.css" />
		<link rel="stylesheet" type="text/css" href='http://fonts.googleapis.com/css?family=Open+Sans' />
		
		<!-- <script data-require="angular.js@*" data-semver="1.2.13" src="http://code.angularjs.org/1.2.13/angular.js"></script>
		<script data-require="angular-animate@*" data-semver="1.2.13" src="http://code.angularjs.org/1.2.13/angular-animate.js"></script> -->		
	</head>  <!-- HEAD END -->
	<body ng-controller="teamViewController" team="U11 Yellow">
	
		<!-- (1) Banner across the top & the menu -->
		<div ng-include="'resources/viewParts/headerNmenu.html'"></div>

		<!-- (2) Load the body of the page -->
		<div ng-include="'resources/viewParts/teamViewBody.html'"></div>	</body>
</html>