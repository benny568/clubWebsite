<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html ng-app="memberManagerApp">
	<head>  <!-- HEAD START -->		
		<title>Admin page</title>
			
		<script type="text/javascript" src="resources/js/jquery-2.1.4.min.js"></script>
		<script type="text/javascript" src="resources/js/bootstrap.js"></script>
		<script type="text/javascript" src="resources/js/angular.js"></script>
		<script type="text/javascript" src="resources/js/angular-animate.js"></script>
		<script type="text/javascript" src="resources/js/angular-resource.js"></script>
		<script type="text/javascript" src="resources/js/angular-aria.js"></script>
		<script type="text/javascript" src="resources/js/angular-cookies.js"></script>
		<script type="text/javascript" src="resources/js/angular-loader.js"></script>
		<script type="text/javascript" src="resources/js/angular-messages.js"></script>
		<script type="text/javascript" src="resources/js/angular-route.js"></script>
		<script type="text/javascript" src="resources/js/angular-sanitize.js"></script>
		<script type="text/javascript" src="resources/js/angular-scenario.js"></script>
		<script type="text/javascript" src="resources/js/angular-touch.js"></script>
		<script type="text/javascript" src="resources/js/jssor.js"></script>
		<script type="text/javascript" src="resources/js/jssor.slider.js"></script>
		<script type="text/javascript" src="resources/js/smart-table.min.js"></script>
		<script type="text/javascript" src="resources/js/app.js"></script>
		
		<link rel="stylesheet" type="text/css" href="resources/css/animate.css" />
		<link rel="stylesheet" type="text/css" href="resources/css/bootstrap.css" />
		<link rel="stylesheet" type="text/css" href="resources/css/normalize.css" />
		<link rel="stylesheet" type="text/css" href="resources/css/font-awesome.css" />
		<link rel="stylesheet" type="text/css" href="resources/css/default.css" />
		<link rel="stylesheet" type="text/css" href='http://fonts.googleapis.com/css?family=Open+Sans' />
		
		<script data-require="angular.js@*" data-semver="1.2.13" src="http://code.angularjs.org/1.2.13/angular.js"></script>
		<script data-require="angular-animate@*" data-semver="1.2.13" src="http://code.angularjs.org/1.2.13/angular-animate.js"></script>		
	</head>  <!-- HEAD END -->
	<body>
	
		<!-- (1) Banner across the top & the menu -->
		<div ng-include="'resources/viewParts/headerNmenu.html'"></div>
	
		<div ng-controller="memberManagerController">
			<div class="container">
				<div class="titleStyle">
					<h3>Club Register 2015 Season</h3>
				</div>
				<div ng-repeat="team in teams">
					<div class="col-sm-12 teamHdr" ng-hide="showArray[team.id]"><span class="glyphicon glyphicon-triangle-bottom" ng-click="getMembers4team(team.id)"></span> {{team.name}}</div>
					<div class="col-sm-12 teamHdr" ng-show="showArray[team.id]">
					<span class="glyphicon glyphicon-triangle-top" ng-click="toggleView(team.id)"></span> {{team.name}}</div>
					<div ng-show="showArray[team.id]">
						<div class="col-sm-1 tblHdr">#</div>
					    <div class="col-sm-3 tblHdr">Name</div>
					    <div class="col-sm-4 tblHdr">Address</div>
					    <div class="col-sm-2 tblHdr">Phone</div>
					    <div class="col-sm-1 tblHdr">Id</div>
					    <div class="col-sm-1 tblHdr">Paid</div>
						<div ng-repeat="member in TeamMembers[team.id]">
							<div class="col-sm-1" ng-if="$odd" style="background-color:#FAE60A">{{member.id}}</div>
							<div class="col-sm-1" ng-if="$even" style="background-color:#FAFA0A">{{member.id}}</div>
						    <div class="col-sm-3" ng-if="$odd" style="background-color:#FAE60A">{{member.name}}</div>
						    <div class="col-sm-3" ng-if="$even" style="background-color:#FAFA0A">{{member.name}}</div>
						    <div class="col-sm-4" ng-if="$odd" style="background-color:#FAE60A">{{member.address}}</div>
						    <div class="col-sm-4" ng-if="$even" style="background-color:#FAFA0A">{{member.address}}</div>
						    <div class="col-sm-2" ng-if="$odd" style="background-color:#FAE60A">{{member.phone}}</div>
						    <div class="col-sm-2" ng-if="$even" style="background-color:#FAFA0A">{{member.phone}}</div>
						    <div class="col-sm-1" ng-if="$odd" style="background-color:#FAE60A">{{member.team}}</div>
						    <div class="col-sm-1" ng-if="$even" style="background-color:#FAFA0A">{{member.team}}</div>
						    <div class="col-sm-1" ng-if="$odd" style="background-color:#FAE60A">{{member.amount}}</div>
						    <div class="col-sm-1" ng-if="$even" style="background-color:#FAFA0A">{{member.amount}}</div>
						 </div>
					</div>
					<div class="thickLine"></div>
				</div> <!-- End of ng-repeat -->
			</div>
		</div>  <!-- End of memberManagerController -->
		
	</body>
</html>