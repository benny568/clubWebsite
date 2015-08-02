<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html ng-app="memberManagerApp">
<head>  <!-- HEAD START -->
	
	<title>Avenue United Academy</title>
		
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

	<!-- (1) Banner across the top & the menu -->
	<div ng-include="'resources/viewParts/headerNmenu.html'"></div>

	<div id="wrap">
		<div class="container t1">
			<div class="row">
				<div class="col-md-1" style="padding-top:50px;">
					<div class="btn-group-vertical">
						<button type="button" class="btn btn-primary academymenu" id="academyHome">Home</button>
					    <button type="button" class="btn btn-primary academymenu">Overview</button>
					    <button type="button" class="btn btn-primary academymenu">Coaches</button>
					    <button type="button" class="btn btn-primary academymenu">Schedule</button>
					    <button type="button" class="btn btn-primary academymenu">Registration</button>
					    <button type="button" class="btn btn-primary academymenu">Photos</button>
					    <div class="btn-group">
					      <button type="button" class="btn btn-primary dropdown-toggle academymenu" data-toggle="dropdown">
					      FAQ <span class="caret"></span></button>
					      <ul class="dropdown-menu academymenu" role="menu">
					        <li><a href="#">Season</a></li>
					        <li><a href="#">Fees</a></li>
					      </ul>
					    </div>
					</div>
				</div>
				<div class="col-md-6">
					<img src="resources/images/academy/pic1.jpg" height="auto" width="100%" style="margin-left:100px;"/>
				</div>
				<div class="col-md-5">
					<div class="academyflag" style="margin-left:150px;margin-top:30px;"></div>
				</div>
			</div> <!-- end row -->
			
			<div class="blankspace"></div>
			
			<div class="row">
				<div class="col-md-6">
					<div class="panel">
						<div class="panel-heading panel-heading-custom" style="background-color:#D90404;color:#FAE900;">
		    				Latest News
		    			</div>
		    			<div class="panel-body" style="background-color:#303030;color:white;height:100%;">
		    				<div ng-repeat="story in news">
			    				<div style="border-bottom: 1px solid #ccc;padding-bottom:5px;">
				    				<img src="{{story.image}}" align="left" HSPACE="5" VSPACE="5" height="auto" width="50%"/>
				    				<h4 style="color:#FAE900;">{{story.description}}</h4><p>{{story.story}}</p>
				    			</div>
			    			</div>
		    			</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="panel panel-default">
						<div class="panel-heading panel-heading-custom" style="background-color:#D90404;color:#FAE900;">
		    				Upcoming Events
		    			</div>
		    			<div class="panel-body" style="background-color:#303030;color:white;height:100%;">
		    				<img src="resources/images/academy/academyCrest.png" width="100%" />
		    			</div>
					</div>				
				</div>
			</div>
		</div> <!--  End of container t1 -->
	</div>

	<!-- Footer across the bottom of the page -->
	<div ng-include="'resources/viewParts/footer.html'"></div>

</body>
</html>
