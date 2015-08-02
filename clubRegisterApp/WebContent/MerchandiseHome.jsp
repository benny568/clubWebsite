<!DOCTYPE html>
<html lang="en" data-ng-app="upNewsModule">
<%@page import="org.springframework.security.web.csrf.CsrfToken"%>

	<head>  <!-- HEAD START -->
		
		<title>Avenue United</title>
		
		<meta name="_csrf" content="${_csrf.token}"/>
	    <!-- default header name is X-CSRF-TOKEN -->
	    <meta name="_csrf_header" content="${_csrf.headerName}"/>
			
		<!-- jQuery (required) -->
		<script src="resources/js/libs/jquery-2.1.4.min.js"></script>
		
		<!-- Bootstrap -->
		<script type="text/javascript" src="resources/js/libs/bootstrap.js"></script>
		<link rel="stylesheet" type="text/css" href="resources/css/bootstrap.css" />
		
		<!-- AngularJS core components -->
		<script type="text/javascript" src="resources/js/libs/angular.js"></script>
		<script type="text/javascript" src="resources/js/libs/angular-cookies.js"></script>
		<script type="text/javascript" src="resources/js/libs/angular-animate.js"></script>
		<script type="text/javascript" src="resources/js/libs/angular-resource.js"></script>
		<script type="text/javascript" src="resources/js/libs/promise-tracker.js"></script>
		<script type="text/javascript" src="resources/js/libs/angular-csrf-cross-domain.js"></script>
		<script type="text/javascript" src="resources/js/libs/angularModalService.js"></script>
		<script type="text/javascript" src="resources/js/libs/ui-bootstrap-tpls-0.13.0.js"></script>
		
		<!-- Font Awsome -->
		<link rel="stylesheet" type="text/css" href="resources/font-awesome-4.3.0/css/font-awesome.css" />
		
		<!-- My app module -->
		<script type="text/javascript" src="resources/js/upNews.js"></script>
		
		<!-- My App Controllers -->
		<script type="text/javascript" src="resources/js/controllers/newsUploadController.js"></script>
		
		<!-- My App Services -->
		<script type="text/javascript" src="resources/js/services/multiPartForm.js"></script>
		
		<!-- My App Directives -->
		<script type="text/javascript" src="resources/js/directives/fileModel.js"></script>
		
		<!-- Other -->
		<link rel="stylesheet" type="text/css" href="resources/css/default.css" />
		<link rel="shortcut icon" type="image/ico" href="resources/images/favicon.ico" >
	
	</head>  <!-- HEAD END -->
	<body ng-controller="newsUploadController">
	
		<!-- (1) Banner across the top & the menu -->
		<div ng-include="'resources/viewParts/headerNmenu.html'"></div>
		

		
	</body>
</html>
