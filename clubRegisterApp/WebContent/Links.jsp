<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html ng-app="memberManagerApp">

<head>  <!-- HEAD START -->
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	
	<title>Useful Links</title>

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
	
	<!-- log4javasctipt -->
	<script type="text/javascript" src="resources/js/libs/log4javascript.js"></script>
	
	<!-- My app -->
	<script type="text/javascript" src="resources/js/app.js"></script>
	<script type="text/javascript" src="resources/js/services/dbService.js"></script>
	<link rel="stylesheet" type="text/css" href="resources/css/default.css" />
	<link rel="shortcut icon" type="image/ico" href="resources/images/favicon.ico" >
	
	<style>
		.carousel-indicators {
	      top: auto;
	      bottom: 0px;
	    }
	</style>
	
</head>

<body>

	<!-- (1) Banner across the top & the menu -->
	<div ng-include="'resources/viewParts/headerNmenu.html'"></div>

	<div id="wrap">
		<div class="container t1">
			<div class="panel">
				<div class="panel-heading avenue-heading">
					Useful Links:
				</div>
				<div class="panel-body avenue-body">
					<a href="http://www.cssleague.ie/" target=_blank>
						<img src="resources/images/links/cssl.jpeg" height="50" width="50" data-toggle="tooltip" data-placement="top" title="Clare Schoolboys Soccer League"/>
					</a>
					<a href="http://www.claresoccer.net/" target="_blank">
						<img src="resources/images/links/CDSL_Crest.JPG" height="50" width="50" data-toggle="tooltip" data-placement="top" title="Clare Junior Soccer League"/>
					</a>
					<a href="http://www.fai.ie/" target="_blank">
						<img src="resources/images/links/fai-crest.png" height="50" width="50" data-toggle="tooltip" data-placement="top" title="Football Association of Ireland"/>
					</a>
				</div>
			</div>
		    	
		</div> <!--  End of container t1 -->
	</div>
	
	<div class="blankspace"></div>
	<div class="blankspace"></div>
	
	<!-- Footer across the bottom of the page -->
	<div ng-include="'resources/viewParts/footer.html'"></div>
	

</body>

</html>
