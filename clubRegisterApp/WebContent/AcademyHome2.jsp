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
		
		<!-- Smart Table -->
		<script type="text/javascript" src="resources/js/libs/smart-table.min.js"></script>
		
		<!-- log4javasctipt -->
		<script type="text/javascript" src="resources/js/libs/log4javascript.js"></script>
		
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
					<!-- Add menu down left -->
					<div ng-include="'resources/viewParts/academyMenu.html'"></div>
				</div>
				<div class="col-md-6">
					<img src="resources/images/academy/avenue-academy-15.1.jpg" height="auto" width="100%" style="margin-left:100px;"/>
				</div>
				<div class="col-md-5">
					<div class="academyflag" style="margin-left:150px;margin-top:30px;"></div>
				</div>
			</div> <!-- end row -->
			
			<div class="blankspace"></div>
			
			<div class="row">
				<div class="col-md-6">
					<div class="panel">
						<div class="panel-heading avenue-heading">
		    				Latest News
		    			</div>
		    			<div class="panel-body avenue-body">
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
					<div class="panel">
						<div class="panel-heading avenue-heading">
		    				Drill of the week:
		    			</div>
		    			<div class="panel-body avenue-body">
		    				
							<div class="panel">
								<div class="panel-heading avenue-heading">THEME</div>
								<div class="panel-body avenue-body">Dribbling and Passing through Cones (U6-9 Technical)</div>
								<div class="panel-heading avenue-heading">DESCRIPTION OF PRACTISE</div>
								<div class="panel-body avenue-body">A Practise designed to encourage players dribbling and passing</div>
								<div class="panel-heading avenue-heading">ORGANISATION</div>
								<div class="panel-body avenue-body">4 to 5 cones setup to dribble through<br />
																	3 cones with a ball on top of the middle cone<br />
																	3-4 players per group – Setup as many groups are required<br />
																	Players dribble through cones and try knock their football off the middle cone.<br />
																	Players must strike ball before they pass the end cone<br />
																	Player must retrieve their football and bring back to the team mate<br />
																	</div>
								<div class="panel-heading avenue-heading">KEY FACTORS</div>
								<div class="panel-body avenue-body">Dribbling, soft touches, keep ball close, head up<br />
																	Passing, pace and accuracy
																	</div>
								<div class="panel-heading avenue-heading">NOTES</div>
								<div class="panel-body avenue-body">Progress the competition between teams, change distance of passing depending on ability of players.
																	Create a competition between teams by awarding 2 points to anyone who dribbles through the cones without
																	 the ball hitting the cones.  Award 2 points if they pass the ball through the cones. Award 5 points if 
																	 they knock the ball off the middle cone.
																	</div>
								<div class="panel-body avenue-body">
									<img src="resources/images/academy/drilloftheweek.png" alt="" width="100%"/>
								</div>
							</div>
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
