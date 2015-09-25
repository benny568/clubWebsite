<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html ng-app="memberManagerApp">
	<head>  <!-- HEAD START -->
		
		<title>My Profile</title>
			
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
		<script type="text/javascript" src="resources/js/controllers/userProfileController.js"></script>
		<script type="text/javascript" src="resources/js/services/memberManagerService.js"></script>
		<script type="text/javascript" src="resources/js/services/dbService.js"></script>
		
		<script type="text/javascript" src="resources/js/leagueRepublic.js"></script>
		<link rel="stylesheet" type="text/css" href="resources/css/default.css" />
		<link rel="shortcut icon" type="image/ico" href="resources/images/favicon.ico" >
	
	</head>  <!-- HEAD END -->

	<body ng-controller="userProfileController" mode="None">
	
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
					
						<div class="col-md-6">
			    			<div class="panel">
				    			<div class="panel-heading avenue-heading">
				    				My Profile: {{thisUser.name}}
				    			</div>
				    			<div class="panel-body avenue-body">
				    				<div>
										<img src="{{thisUser.avatar}}" align="left" HSPACE="5" VSPACE="5" height="auto" width="30%"/>
										<span class="avenue-yellow-text" style="font-size:20px;">{{thisUser.name}}</span>
									</div>
								    <form name="profileForm">
								    	<div class="row">
								    		<div class="col-md-12">
							                	<label for="address" style="padding-top:10px;">Address:</label>
							                	<input type="text" class="form-control" id="address" data-ng-model="thisUser.address" value="{{thisUser.address}}"/>
							                	<label for="email" style="padding-top:10px;">email:</label>
							                	<input type="email" class="form-control" id="email" data-ng-model="thisUser.email" value="{{thisUser.email}}"/>
											</div>
					                	</div>
					                	<div class="row">
					                		<div class="col-md-6">
							                	<label for="phone" style="padding-top:10px;">Phone:</label>
							                	<input type="text" class="form-control" id="phone" data-ng-model="thisUser.phone" value="{{thisUser.phone}}"/>
						                	</div>
						                	<div class="col-md-6">
							                	<label for="dob" style="padding-top:10px;">Date of Birth:</label>
							                	<input type="text" class="form-control" id="dob" data-ng-model="thisUser.dob" value="{{thisUser.dob}}"/>
					                		</div>
					                	</div>
					                	<label for="photo" style="padding-top:10px;">Avatar:</label>
				                		<input type="text" class="form-control" id="avatar" data-ng-model="thisUser.avatar" value="{{thisUser.avatar}}"/>
					                	
					                	<div class="panel-footer avenue-body">
							                <button type="button" ng-click="close(true)" class="btn btn-success">Save</button>
							                <button type="button" ng-click="close(false)" class="btn btn-danger" style="margin-left:20px;">Cancel</button>					
							              </div>
								    </form>					    
					    		</div> <!-- end panel-body -->
							</div> <!-- end panel -->
						</div> <!-- end col -->
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
