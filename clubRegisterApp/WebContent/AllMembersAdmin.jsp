<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html ng-app="memberManagerApp">
	<head>  <!-- HEAD START -->		
		<title>Admin page</title>
		
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
		<script type="text/javascript" src="resources/js/controllers/memberManagementController.js"></script>
		<script type="text/javascript" src="resources/js/services/memberManagerService.js"></script>
		<script type="text/javascript" src="resources/js/services/dbService.js"></script>
		
		<script type="text/javascript" src="resources/js/leagueRepublic.js"></script>
		<link rel="stylesheet" type="text/css" href="resources/css/default.css" />
		<link rel="shortcut icon" type="image/ico" href="resources/images/favicon.ico" >
		
		<style>
			h3 {color:white;width:100%;}
			.tblHdr{border-bottom: solid 1px #FFFFFF; font-weight:bold;padding-bottom:5px;}
		</style>		
	</head>  <!-- HEAD END -->
	<body>
	
		<!-- (1) Banner across the top & the menu -->
		<div ng-include="'resources/viewParts/headerNmenu.html'"></div>
	
		<div class="container">
			<div class="row">
			
				<div class="col-sm-2" style="height:100%;">
					<div class="a-adminMenu">
					<!-- Add menu down left -->
					<div ng-include="'resources/viewParts/adminMenu.html'"></div>
					</div>			
				</div> <!-- end col -->	
				
				<div class="col-sm-10">

				<div ng-controller="memberManagerController" mode="All">
					<div class="row">
						<div class="col-md-12">
							<div class="titleStyle">
								<h3>Club Register 2015 Season</h3>
							</div>
						</div>
					</div>
					<div class="row">
								<div class="panel">
									<div class="panel-heading avenue-heading" style="min-height:35px;">
										Current Members
										<div  style="float:right; align:bottom;">
											<button type="button" class="btn btn-warning btn-xs" ng-click="addMember('Yes')" style="cursor:pointer;" data-toggle="tooltip" data-placement="right">Add Member</button>
										</div>
									</div>
						    		<div class="panel-body avenue-body" style="height:100%;">
										<div>
											<div class="row">
												<div class="col-md-1 tblHdr">#</div>
											    <div class="col-md-3 tblHdr">Name</div>
											    <div class="col-md-4 tblHdr">Address</div>
											    <div class="col-md-2 tblHdr">Phone</div>
											    <div class="col-md-2 tblHdr">Operations</div>
											</div> <!-- end of row -->
											<div ng-repeat="member in members" class="row light-line">
												<div class="col-md-1">{{$index+1}}</div>						    
									    		<div class="col-md-3">{{member.name}}</div>
												<div class="col-md-4">{{member.address}}</div>
												<div class="col-md-2">{{member.phone}}</div>
									    		<div class="col-md-2">
											    	<i ng-show="member.amount" class="glyphicon glyphicon-euro" data-toggle="tooltip" data-placement="right" title="Paid" style="float:left;"></i>&nbsp;
											    	<i ng-hide="member.amount" class="glyphicon glyphicon-remove" data-toggle="tooltip" data-placement="right" title="Not Paid" style="float:left;"></i>&nbsp;
											    	<i ng-click="editMember(member)" style="cursor:pointer;" data-toggle="tooltip" data-placement="right" title="Edit" class="glyphicon glyphicon-pencil" style="float:left;padding-left:10px;"> </i>&nbsp;
											    	<i ng-click="deleteMember(member)" style="cursor:pointer;" data-toggle="tooltip" data-placement="right" title="Delete" class="glyphicon glyphicon-trash" style="float:left;padding-left:10px;"></i>
											    </div>	
										    </div> <!-- end row -->
										</div> <!-- end ng-show -->
									</div> <!-- end panel body -->
								</div> <!-- end of panel -->			

						</div> <!-- end row -->
					</div>  <!-- End of allMembersController -->
		
						</div>
			</div> <!-- end row -->
		</div> <!-- end of container -->

		<div class="blankspace"></div>
		<div class="blankspace"></div>
		
		<!-- Footer across the bottom of the page -->
		<div ng-include="'resources/viewParts/footer.html'"></div>
	</body>
</html>