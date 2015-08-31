<!DOCTYPE html>
<html lang="en" data-ng-app="upNewsModule">
<%@page import="org.springframework.security.web.csrf.CsrfToken"%>

	<head>  <!-- HEAD START -->
		
		<title>Avenue United</title>
		
		<meta name="_csrf" content="${_csrf.token}"/>
	    <!-- default header name is X-CSRF-TOKEN -->
	    <meta name="_csrf_header" content="${_csrf.headerName}"/>
			
		<!-- jQuery (required) -->
		<script src="resources/js/libs/jquery-2.1.4.min.js"></script>
		
		<!-- Bootstrap -->
		<script type="text/javascript" src="resources/js/libs/bootstrap.js"></script>
		<link rel="stylesheet" type="text/css" href="resources/css/bootstrap.css" />
		
		<!-- AngularJS core components -->
		<script type="text/javascript" src="resources/js/libs/angular.js"></script>
		<script type="text/javascript" src="resources/js/libs/angular-cookies.js"></script>
		<script type="text/javascript" src="resources/js/libs/angular-animate.js"></script>
		<script type="text/javascript" src="resources/js/libs/angular-resource.js"></script>
		<script type="text/javascript" src="resources/js/libs/promise-tracker.js"></script>
		<script type="text/javascript" src="resources/js/libs/angular-csrf-cross-domain.js"></script>
		<script type="text/javascript" src="resources/js/libs/angularModalService.js"></script>
		<script type="text/javascript" src="resources/js/libs/ui-bootstrap-tpls-0.13.0.js"></script>
		
		<!-- Font Awsome -->
		<link rel="stylesheet" type="text/css" href="resources/font-awesome-4.3.0/css/font-awesome.css" />
		
		<!-- My app module -->
		<script type="text/javascript" src="resources/js/upNews.js"></script>
		
		<!-- My App Controllers -->
		<script type="text/javascript" src="resources/js/controllers/newsUploadController.js"></script>
		
		<!-- My App Services -->
		<script type="text/javascript" src="resources/js/services/multiPartForm.js"></script>
		<script type="text/javascript" src="resources/js/services/dbService.js"></script>
		
		<!-- My App Directives -->
		<script type="text/javascript" src="resources/js/directives/fileModel.js"></script>
		
		<!-- Other -->
		<link rel="stylesheet" type="text/css" href="resources/css/default.css" />
		<link rel="shortcut icon" type="image/ico" href="resources/images/favicon.ico" >
	
	</head>  <!-- HEAD END -->
	<body ng-controller="newsUploadController">
	
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
			 		<div class="panel" style="max-width:50%;marign-right:30%;margin-left:20%;">
			 			<div class="panel-heading avenue-heading">
			 				Enter the story details and press submit to upload
			 			</div>
			 			<div class="panel-body avenue-body">
					 		<form id="newsForm" name="newsForm" novalidate>
					 			<div class="form-group" ng-class="{ 'has-error' : newsForm.title.$invalid && !newsForm.title.$pristine }">
					 				<label for="name">Title:</label>
					 				<input type="text" class="form-control" name="title" placeholder="Enter the title" ng-model="news.title" ng-minlength="1" ng-maxlength="50" ng-required="true" required>
					 				<p ng-show="newsForm.title.$invalid && !newsForm.title.$pristine" class="ng-invalid-required">A title is required.</p>
					 			</div>
					 			<div class="form-group">
					 				<label for="description">Description:</label>
					 				<input type="text" class="form-control" id="name" placeholder="Enter a short headline" ng-model="news.description" ng-maxlength="50">
					 			</div>
					 			<div class="form-group">
					 				<label for="story">Story:</label>
					 				<input type="text-area" class="form-control" id="story" placeholder="Enter the full story" ng-model="news.story">
					 			</div>
					 			<div class="form-group">
									<label>General News:</label> <input type="radio" name="category" ng-model="news.category" value="G" ng-required="true" required>
									<label>Academy News:</label> <input type="radio" name="category" ng-model="news.category" value="A" ng-required="true" required>
								</div>
								<div class="form-group">
									<label for="file">Image:</label>
									<input type="file" id="exampleInputFile" file-model="news.image">
								</div>
								<button type="submit" class="btn btn-warning" ng-click="Submit(newsForm.$valid)">Submit</button> <!-- ng-disabled="newsForm.$invalid" -->
					 		</form>
					 	</div> <!-- end panel body -->
			 		</div> <!-- end panel -->
			 	</div> <!-- end col -->
			 </div> <!-- end row -->
 		</div> <!-- end container -->
		
	</body>
</html>
