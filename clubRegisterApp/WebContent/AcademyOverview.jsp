<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html ng-app="memberManagerApp">
<head>  <!-- HEAD START -->
	
	<title>Academy Overview</title>
		
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
					<!-- Add menu down left -->
					<div ng-include="'resources/viewParts/academyMenu.html'"></div>
				</div>
				<div class="col-md-1">
				</div>
				<div class="col-md-10">
					<div class="panel">
						<div class="panel-heading avenue-heading">
							<strong>Avenue United Academy 2015/2016</strong>
						</div>
						<div class="panel-body avenue-body">
							<strong>Information for You, The New Coach, Parents and helpers</strong>
 							<br/><br/>
							<p class="lead a-orange-text">Venue and Times</p>
							The Avenue Academy runs each season from September through to May, every Saturday morning, from 9.30AM - 10.30AM in the Lee's Road Astro Facility. 
							<br/><br/>
							<p class="lead a-orange-text">Academy Size</p>
							During our 2013/2014 Season the Academy had up to 120 U5's-U10's participating in these sessions. 
							 Such a large group requires a large number of coaches and helpers to organise each session, so we can provide the the best possible 
							 training and development to the kids.
							<br/> <br/>
							<p class="lead a-orange-text">Objective</p>
							The main objective of the Academy is to ensure the kids learn the Fundamentals of Soccer, while having FUN in the process.
							<br/><br/>
							<p class="lead a-orange-text">Getting Involved</p>
							If you're a parent or relation who attends these sessions, the Club would really welcome and do need your help if you're in any way 
							interested in getting involved. Whether that means providing encouragement, helping to set up or put away the equipment, supervision of 
							injured players/toilet breaks. This is a great way in which to help the youngsters as they begin their football development. Please do 
							come forward any Saturday, you can talk to any of the Head Coaches, or contact the Academy Director directly for more information.
							<br/><br/>
							<p class="lead a-orange-text">Becoming a Coach</p>
							If you're interested in the coaching aspect of things, you can work with the Academy Development Committee who will recommend and help you 
							on your coaching development pathway.
							<br/><br/>
							<p class="lead a-orange-text">During Games</p>
							Avenue United are strong supporters of the Silent Side-line initiative. We would ask that parents provide encouragement only, 
							not instruction, to all players on the pitch and desist from infringing on those areas that are rightly the domain of the team coach. Young 
							players, in particular, get confused when they are receiving multiple messages from the side-line.
						</div>
					</div>
				</div> <!--  end col -->
			</div> <!-- end row -->
			
			<div class="row">
				<div class="col-md-2">
				</div>
				<div class="col-md-10">
					<div class="panel">
						<div class="panel-heading avenue-heading">
							<strong>Academy Development Committee</strong>
						</div>
						<div class="panel-body avenue-body">
							The club has formed an Academy Development Committee (ADC), with a view to oversee and control all aspects of the club's football development 
							specifically for the Academy Age Group, aged 4-10. The ADC will oversee the coaching provided by the club's own qualified coaches.<br/>
							It will also incorporate any future co-operation with the FAI, and other football coaching & development organisations with which the club 
							works. The ADC comprises of the heads of the Sections (below), under the chairmanship of the Club's Head Coach, Gary Seery, and the 
							Director of the Academy, Helene Griffith.<br/>
							The ADC will ensure all coaches are thoroughly planning and structuring each session with particular emphasis on warm-up, specific drills to 
							enhance the player's skillset's and most importantly, encourage creativity and decision making in Small Sided Games.
						</div>
					</div>
				</div> <!--  end col -->
			</div> <!-- end row -->
			
			<div class="row">
				<div class="col-md-2">
				</div>
				<div class="col-md-10">
					<div class="panel">
						<div class="panel-heading avenue-heading">
							<strong>Coaching Sections</strong>
						</div>
						<div class="panel-body avenue-body">
							The Avenue Academy is structured into 6 age groups, each with its own head coach, as follows:
 							<br/><br/>
							Ages 4-5 (2010/2009's): TBD<br/>
							Ages 6 (2008's): Ray Crowley, Parvin Chad<br/>
							Ages 7 (2007's): Alan Ball, Paul Roche, Dermot Daly<br/> 
							Ages 8 (2006's): Brendan O'Daly, Killian O'Daly<br/>
							Ages 9 (2005's): John O'Malley, Noel Purtill<br/>
							Ages 10 (2004's): David Herlihy, Brian Aherne, Leo Herbert<br/> 
							<br/>
							All our Coaches are Garda Vetted and have completed Child Welfare / Protection Course, 
							FAI, Kick Start 1 and Kick Start 2 Courses completed. 
							<br/>
							This structure will allow each section focus on those elements of the overall player development. The Head of Coaching has developed our own 
							in-house Academy Coaching curriculum, with contributions from our own head coaches on an ongoing basis. The formal document in terms of 
							curriculum will be ready for season 2015/2016.
						</div>
					</div>
				</div> <!--  end col -->
			</div> <!-- end row -->
			
		</div> <!--  End of container t1 -->
	</div>

	<!-- Footer across the bottom of the page -->
	<div ng-include="'resources/viewParts/footer.html'"></div>

</body>
</html>
