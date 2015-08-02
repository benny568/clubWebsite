<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html ng-app="">
<%@page import="java.io.*"%>
<%@page import="java.util.ArrayList"%>
<head>  <!-- HEAD START -->
	
	<title>Avenue United</title>
		
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
	<script type="text/javascript" src="resources/js/modules/angular-csrf-cross-domain.js"></script>
	<script type="text/javascript" src="resources/js/modules/angularModalService.js"></script>
	<script type="text/javascript" src="resources/js/modules/ui-bootstrap-tpls-0.13.0.js"></script>
	
	<!-- Font Awsome -->
	<link rel="stylesheet" type="text/css" href="resources/font-awesome-4.3.0/css/font-awesome.css" />
	
	<!-- My app -->
	<script type="text/javascript" src="resources/js/app.js"></script>
	<link rel="stylesheet" type="text/css" href="resources/css/default.css" />
	<link rel="shortcut icon" type="image/ico" href="resources/images/favicon.ico" >

</head>  <!-- HEAD END -->

<body>

	<!-- (1) Banner across the top & the menu -->
	<div ng-include="'resources/viewParts/headerNmenu.html'"></div>

	<div id="wrap">
		<div class="container t1">
		    	
		</div> <!--  End of container t1 -->
	</div>
	
	<div class="blankspace"></div>
	<div class="blankspace"></div>
	
	<!-- Footer across the bottom of the page -->
	<div ng-include="'resources/viewParts/footer.html'"></div>

</body>
</html>
