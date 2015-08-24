<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html ng-app="memberManagerApp">
<head>  <!-- HEAD START -->
	
	<title>Academy Photos</title>
		
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
		<script type="text/javascript" src="resources/js/libs/angular-resource.js"></script>
		<script type="text/javascript" src="resources/js/libs/angular-animate.js"></script>
		<script type="text/javascript" src="resources/js/libs/angular-cookies.js"></script>
		<script type="text/javascript" src="resources/js/libs/promise-tracker.js"></script>
		<script type="text/javascript" src="resources/js/modules/angular-csrf-cross-domain.js"></script>
		<script type="text/javascript" src="resources/js/modules/angularModalService.js"></script>
		<script type="text/javascript" src="resources/js/modules/ui-bootstrap-tpls-0.13.0.js"></script>
		
		<!-- Font Awsome -->
		<link rel="stylesheet" type="text/css" href="resources/font-awesome-4.3.0/css/font-awesome.css" />
		
		<!-- Smart Table -->
		<script type="text/javascript" src="resources/js/libs/smart-table.min.js"></script>
		
		<!-- My app -->
		<script type="text/javascript" src="resources/js/app.js"></script>
		<script type="text/javascript" src="resources/js/controllers/academyController.js"></script>
		<script type="text/javascript" src="resources/js/services/dbService.js"></script>
		
		<script type="text/javascript" src="resources/js/leagueRepublic.js"></script>
		<link rel="stylesheet" type="text/css" href="resources/css/default.css" />

</head>  <!-- HEAD END -->

<body ng-controller="academyManagerController">

	<!-- (1) Banner across the top -->
	<div class="header2 img-rounded">
			<div align="center" style="z-index:2"><img src="resources/images/banner-middle.png" alt="" /></div>
			<div align="right" style="color:#FFFF33; font-weight:bold; font-size:24px; padding:30px 5px 0px 0px;">Avenue United</div>
			<div align="right" style="color:#FFFF33; font-weight:bold; font-size:10px;padding-right:5px;"> EST. 1983&nbsp;&nbsp;
				<i class="fa fa-futbol-o"></i> 14 Titles&nbsp;&nbsp;
				<i class="fa fa-trophy"></i> 10 Cups
			</div>
		<img class="t2" src="resources/images/avenueCrest.png" alt="" />
	</div>

	<div id="wrap">
		<div class="container t1">

			
		</div> <!--  End of container t1 -->
	</div>

	<!-- Footer across the bottom of the page -->
	<div ng-include="'resources/viewParts/footer.html'"></div>

</body>
</html>
