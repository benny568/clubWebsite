<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html ng-app="memberManagerApp">

<head>  <!-- HEAD START -->
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	
	<title>Avenue United Home</title>
	<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
	<meta name="author" content="Brendan O'Daly" />
	<meta name="description" content="Avenue United FC website" />
	
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
	<script type="text/javascript" src="resources/js/controllers/sponsorController.js"></script>
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

<body ng-controller="newsController">

	<div class="container">
	
		<!-- (1) Banner across the top & the menu -->
		<div ng-include="'resources/viewParts/headerNmenu.html'"></div>
		
		<div class="row avenue-body">
			<div class="panel">
				<div class="panel-heading avenue-heading">
					Latest News:
				</div>		
				<carousel interval="5000" style="float:left;width:100%;height:auto;">
					<slide ng-repeat="story in stories">
						<img ng-src="{{story.image}}" style="float:left;padding-left:100px;padding-top:40px;padding-right:5px;padding-bottom:40px;max-width:40%;"/>
							<div style="float:left;width:50%;">
								<div class="avenue-heading" style="font-weight:bold;font-size:20px;border-right:solid 1px white;border-left:solid 1px white;">{{story.title}}</div>
								<div class="avenue-heading" style="border-bottom:solid 1px white;border-right:solid 1px white;border-left:solid 1px white;">{{story.description}}</div>
								<p style="padding-bottom:20px;padding-top:10px;">{{story.story}}</p>
							</div>
					</slide>
			    </carousel>

			</div> <!-- end panel -->
		</div> <!-- end row -->

	<div class="panel" style="margin-top:5px;">
		<div class="panel-heading avenue-heading">
			Our Sponsors:
		</div>
		<div class="panel-body avenue-body" ng-controller="sponsorController">
			<carousel interval="5000" style="float:left;width:100%;height:auto;">
				<slide ng-repeat="sponsor in sponsors">
			      	<div style="position:relative;margin-left:auto;margin-right:auto">
			        	<img ng-src="{{sponsor.image}}" width="80%" height="150px"/>
			        </div>
				</slide>
			</carousel>
		</div> <!-- end panel-body -->
		<div class="panel-heading avenue-heading"></div>
	</div> <!-- end panel -->
	
	</div> <!-- end container -->
		
	
	<div class="blankspace"></div>
	<div class="blankspace"></div>
	
	<!-- Footer across the bottom of the page -->
	<div ng-include="'resources/viewParts/footer.html'"></div>
	

</body>

</html>
