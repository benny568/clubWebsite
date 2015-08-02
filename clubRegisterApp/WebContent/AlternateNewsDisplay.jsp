<!DOCTYPE html>
<html lang="en" data-ng-app="memberManagerApp">
<%@page import="org.springframework.security.web.csrf.CsrfToken"%>

	<head>  <!-- HEAD START -->
		
		<title>Avenue United</title>
		
		<meta name="_csrf" content="${_csrf.token}"/>
	    <!-- default header name is X-CSRF-TOKEN -->
	    <meta name="_csrf_header" content="${_csrf.headerName}"/>
			
		<link rel="stylesheet" type="text/css" href="resources/css/animate.css" />
		<link rel="stylesheet" type="text/css" href="resources/css/bootstrap.css" />
		<link rel="stylesheet" type="text/css" href="resources/font-awesome-4.3.0/css/font-awesome.css" />
		<link rel="stylesheet" type="text/css" href="resources/css/default.css" />
		
		<script type="text/javascript" src="resources/js/libs/jquery-2.1.4.min.js"></script>
		<script type="text/javascript" src="resources/js/libs/bootstrap.js"></script>
		<script type="text/javascript" src="resources/js/libs/angular.js"></script>
		<script type="text/javascript" src="resources/js/libs/angular-resource.js"></script>
		<script type="text/javascript" src="resources/js/libs/angular-animate.js"></script>
		<script type="text/javascript" src="resources/js/libs/promise-tracker.js"></script>
		<script type="text/javascript" src="resources/js/modules/angular-csrf-cross-domain.js"></script>
		<script type="text/javascript" src="resources/js/modules/angularModalService.js"></script>
		<script type="text/javascript" src="resources/js/modules/ui-bootstrap-tpls-0.13.0.js"></script>
		<script type="text/javascript" src="resources/js/app.js"></script>
	
	</head>  <!-- HEAD END -->
	<body>
	
		<!-- (1) Banner across the top & the menu -->
		<div ng-include="'resources/viewParts/headerNmenu.html'"></div>
		
		<div class="container">
			<div class="panel">
				<div class="panel-heading avenue-heading">
					Latest News
				</div>
				<div class="panel-body avenue-body">
					<div data-ng-controller="newsController">
						<div ng-repeat="story in stories">
							<div class="row">
			    				<div style="border-bottom: 1px solid #ccc;padding-bottom:5px;">
				    				<img src="{{story.image}}" align="left" HSPACE="5" VSPACE="5" height="auto" width="20%"/>
				    				<h4 style="color:#FAE900;">{{story.description}}</h4><p>{{story.story}}</p>
				    			</div>
		    				</div> <!-- end row -->
						</div> <!-- end ng-repeat -->
					</div> <!-- end controller -->
				</div> <!-- end panel body -->
			</div> <!-- end panel -->
		</div> <!-- end container -->

  </body>
</html>
