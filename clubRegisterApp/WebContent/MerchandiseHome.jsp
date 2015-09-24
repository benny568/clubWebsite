<!DOCTYPE html>
<html ng-app="memberManagerApp">

	<head>  <!-- HEAD START -->
		
		<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
		<meta name="author" content="Brendan O'Daly" />
		<meta name="description" content="Avenue United FC website" />
	
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
		<script type="text/javascript" src="resources/js/controllers/merchandiseController.js"></script>
		<link rel="stylesheet" type="text/css" href="resources/css/default.css" />
		<link rel="shortcut icon" type="image/ico" href="resources/images/favicon.ico" >
	
	</head>  <!-- HEAD END -->
	<body ng-controller="merchandiseController">
	
		<div class="container">
			<!-- (1) Banner across the top & the menu -->
			<div ng-include="'resources/viewParts/headerNmenu.html'"></div>
			
			<div class="row avenue-body">
				<div class="panel">
					<div class="panel-heading avenue-heading">
						2015/2016 Merchandise range:
					</div>
					<div class="panel-body avenue-body">
			
				    <carousel interval="9000" style="float:left;width:100%;height:auto;">
				    	<slide ng-repeat="item in items">
				      		<div class="merchandise-banner">{{item.name}}</div>
				      		<div class="merchandise-background">
				      			<img ng-src="{{item.image}}" width="{{item.width}}" height="{{item.height}}" class="merchandise-image">
				      		</div>
				          	<div class="merchandise-banner">{{item.description}}</div>
				    	</slide>
				    </carousel>
				    
				 	</div> <!-- end panel-body -->
	
				</div> <!-- end panel -->
			</div> <!-- end row -->
			
			<div class="panel">
				<div class="panel-heading avenue-heading">
					Sponsored By:
				</div>
				<div class="panel-body">
					<img alt="Sponsor" src="resources/images/merchandise/sponsor.png" width="100%">
				</div>
			</div>
				    
			<div class="blankspace"></div>
			<div class="blankspace"></div>
		
			<!-- Footer across the bottom of the page -->
			<div ng-include="'resources/viewParts/footer.html'"></div>
		</div>
	</body>
</html>
