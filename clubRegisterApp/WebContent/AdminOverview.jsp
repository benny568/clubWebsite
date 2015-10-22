<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html ng-app="memberManagerApp">
<%@page import="java.io.*"%>
<%@page import="java.util.ArrayList"%>
<head>  <!-- HEAD START -->
	
	<title>Avenue United</title>
		
	<title>Register By Team</title>
		
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
		<script type="text/javascript" src="resources/js/libs/promise-tracker.js"></script>
		<script type="text/javascript" src="resources/js/libs/angular-cookies.js"></script>
		<script type="text/javascript" src="resources/js/modules/angular-csrf-cross-domain.js"></script>
		<script type="text/javascript" src="resources/js/modules/angularModalService.js"></script>
		<script type="text/javascript" src="resources/js/modules/ui-bootstrap-tpls-0.13.0.js"></script>
		
		<!-- Font Awsome -->
		<link rel="stylesheet" type="text/css" href="resources/font-awesome-4.3.0/css/font-awesome.css" />
		
		<!-- log4javasctipt -->
		<script type="text/javascript" src="resources/js/libs/log4javascript.js"></script>
		
		<!-- My app -->
		<script type="text/javascript" src="resources/js/app.js"></script>
		<script type="text/javascript" src="resources/js/controllers/memberManagementController.js"></script>
		<script type="text/javascript" src="resources/js/services/memberManagerService.js"></script>
		<script type="text/javascript" src="resources/js/services/dbService.js"></script>
		
		<script type="text/javascript" src="resources/js/leagueRepublic.js"></script>
		<link rel="stylesheet" type="text/css" href="resources/css/default.css" />
		<link rel="shortcut icon" type="image/ico" href="resources/images/favicon.ico" >

</head>  <!-- HEAD END -->

<body ng-controller="memberManagerController" mode="Team">

	<!-- (1) Banner across the top & the menu -->
	<div ng-include="'resources/viewParts/headerNmenu.html'"></div>

	<div id="wrap">
		<div class="container t1">
			<div class="row">
				<div class="col-sm-2" style="height:100%;">
					<!-- Add menu down left -->
					<div ng-include="'resources/viewParts/adminMenu.html'"></div>			
				</div> <!-- end col -->	
				<div class="col-sm-10">
					<div class="panel" style="margin-right:30px;">
						<div class="panel-heading avenue-heading" style="font-size:20px;">
							Welcome to the Avenue United Administration Portal
						</div>
						<div class="panel-body avenue-body">
							<img src="resources/images/user-male-icon.png" align="left" HSPACE="5" VSPACE="5" height="200px" width="auto"/>
							<img src="resources/images/user-female-icon.png" align="right" HSPACE="5" VSPACE="5" height="200px" width="auto"/>
							<br /><br />
							The administration portal provides club members with a way to manage the part of the club they are affiliated with. 
							Your ability to perform tasks will be dependent on your access rights. People holding certain office within the club
							will be given appropriate access rights to allow them to manage details according to that office. For instance, a manager
							of a team will have access to manage his/her squad details but will not have access to delete members from the register.
							<br />
							A list of functions you can perform are as follows:
							<br></br>
							<h4>Team Manager:</h4>
							<ul>
								<li>Setup your squad</li>
								<li>Add, remove, edit members of your squad</li>
								<li>Upload fixtures and results for your team</li>
								<li>Upload match reports and news stories</li>
							</ul>
							<h4>Club Secretary:</h4>
							<ul>
								<li>Monitor the club register of all club members</li>
								<li>Run reports on feed paid, per team, and individuals</li>
								<li>Upload fixtures and results for any team</li>
								<li>Upload match reports and news stories</li>
								<li>Upload upcoming events</li>
								<li>Receive email via the website</li>
								<li>Contact other members via the website, e.g. send an email to a team manager</li>
							</ul>
						</div>
					</div> <!-- end panel -->
				</div> <!-- end col -->
			</div> <!-- end row -->
		    	
		</div> <!--  End of container t1 -->
	</div>
	
	<div class="blankspace"></div>
	<div class="blankspace"></div>
	
	<!-- Footer across the bottom of the page -->
	<div ng-include="'resources/viewParts/footer.html'"></div>

</body>
</html>
