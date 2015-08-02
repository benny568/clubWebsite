<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html ng-app="memberManagerApp">
	<head>  <!-- HEAD START -->		
		<title>Team View</title>
			
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
		
		<!-- My app -->
		<script type="text/javascript" src="resources/js/app.js"></script>
		<script type="text/javascript" src="resources/js/controllers/teamsManagerController.js"></script>
		<script type="text/javascript" src="resources/js/services/memberManagerService.js"></script>
		<script type="text/javascript" src="resources/js/services/dbService.js"></script>
		<script type="text/javascript" src="resources/js/directives/validationDirectives.js"></script>
		
		<script type="text/javascript" src="resources/js/leagueRepublic.js"></script>
		<link rel="stylesheet" type="text/css" href="resources/css/default.css" />
		<link rel="shortcut icon" type="image/ico" href="resources/images/favicon.ico" >		
	</head>  <!-- HEAD END -->
	<body ng-controller="teamsManagerController" mode="Team" team="U18">
	
		<!-- (1) Banner across the top & the menu -->
		<div ng-include="'resources/viewParts/headerNmenu.html'"></div>

		<div class="container">
			<div class="row">
				<div class="col-md-2" style="height:100%;">
					<!-- Add menu down left -->
					<div ng-include="'resources/viewParts/adminMenu.html'"></div>			
				</div> <!-- end col -->	
			<div class="col-md-10">
				<div class="panel" style="max-width:500px;margin-left:10%;">
					<div class="panel-heading avenue-heading">
						Teams:
						<div  style="float:right; align:bottom;">
							<button type="button" class="btn btn-warning btn-xs" ng-click="addTeam('Yes')" style="cursor:pointer;" data-toggle="tooltip" data-placement="right">Add Team</button>
						</div>
					</div>
					<div class="panel-body avenue-body">
						<div class="row">
							<div class="col-md-1">#</div>
							<div class="col-md-4">Team</div>
							<div class="col-md-4">League Republic Code</div>
							<div class="col-md-3">Operations</div>					
						</div>
						<div class="row">
							<div class="light-line"></div>
						</div>
						<div ng-repeat="team in teams">
							<div class="row">
								<div class="col-md-1">{{$index+1}}</div>
								<div class="col-md-4">{{team.name}}</div>
								<div class="col-md-4">{{team.lrcode}}</div>
								<div class="col-md-3">
							    	<i ng-click="editTeam(team)" style="cursor:pointer;" data-toggle="tooltip" data-placement="right" title="Edit" class="glyphicon glyphicon-pencil" style="float:left;padding-left:10px;"> </i>&nbsp;&nbsp;
							    	<i ng-click="deleteTeam(team)" style="cursor:pointer;" data-toggle="tooltip" data-placement="right" title="Delete" class="glyphicon glyphicon-trash" style="float:left;padding-left:10px;"></i>
							    </div>
							</div>
						</div>
					</div> <!-- end panel-body -->
				</div> <!-- end panel -->
			</div> <!-- end col -->
		</div> <!-- end container -->

		<div class="blankspace"></div>
		<div class="blankspace"></div>
		
		<!-- Footer across the bottom of the page -->
		<div ng-include="'resources/viewParts/footer.html'"></div>
	</body>
</html>