<%@page import="org.avenue.dao.TaskManagerService"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@page import="java.util.List" %>
<%@page import="java.util.ArrayList" %>
<%@page import="com.google.gson.Gson" %>
<%@page import="com.google.gson.GsonBuilder" %>
<%@page import="org.avenue.service.domain.Media" %>
<%@page import="org.avenue.dao.TaskManagerService" %>
<html ng-app="publicApp">
	<head>  <!-- HEAD START -->		
		<title>Avenue United Home Page</title>
		
		<meta name="_csrf" content="${_csrf.token}"/>
	    <!-- default header name is X-CSRF-TOKEN -->
	    <meta name="_csrf_header" content="${_csrf.headerName}"/>
	    
		<!-- jQuery (required) -->
		<script src="resources/bower_components/jquery/dist/jquery.min.js"></script>
		<!-- <script src="resources/bower_components/jquery-easing/jquery.easing.min.js"></script> -->

		
		<!-- Bootstrap -->
 		<link href="//netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
 		<script type="text/javascript" src="resources/bower_components/tether/dist/js/tether.min.js"></script>
 		<script type="text/javascript" src="resources/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
		
		<!-- AngularJS -->
		<script type="text/javascript" src="resources/bower_components/angular/angular.min.js"></script>
		<script type="text/javascript" src="resources/bower_components/angular-animate/angular-animate.min.js"></script>
		<script type="text/javascript" src="resources/bower_components/angular-cookies/angular-cookies.min.js"></script>
		<script type="text/javascript" src="resources/bower_components/angular-modal-service/dst/angular-modal-service.min.js"></script>
		<script type="text/javascript" src="resources/bower_components/angular-resource/angular-resource.min.js"></script>
		<script type="text/javascript" src="resources/bower_components/angular-route/angular-route.min.js"></script>
		<script type="text/javascript" src="resources/bower_components/angular-touch/angular-touch.min.js"></script>
		<script type="text/javascript" src="resources/bower_components/angular-ui-bootstrap/dist/ui-bootstrap-tpls.min.js"></script>	
		<script type="text/javascript" src="resources/bower_components/angular-promise-tracker/promise-tracker.js"></script>
		<script type="text/javascript" src="resources/bower_components/angular-auto-validate/dist/jcs-auto-validate.min.js"></script>
		<script type="text/javascript" src="resources/bower_components/angular-csrf-cross-domain/dist/angular-csrf-cross-domain.min.js"></script>
		
		<!-- Font Awsome -->
		<link rel="stylesheet" type="text/css" href="resources/bower_components/font-awesome/css/font-awesome.min.css" />
		
		<!-- log4javasctipt -->
		<script type="text/javascript" src="resources/bower_components/log4javascript/log4javascript.js"></script>
		
		<script type="text/javascript" src="resources/js/libs/leagueRepublicScript.js"></script>
		
		<!-- My app -->
		<script type="text/javascript" src="resources/js/modules/publicApp.js"></script>
		<script type="text/javascript" src="resources/js/modules/privateApp.js"></script>
		<script type="text/javascript" src="resources/js/controllers/newsController.js"></script>		
		<script type="text/javascript" src="resources/js/controllers/sponsorController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/merchandiseController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/clubHistoryController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/academyController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/teamViewController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/tableViewController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/farViewController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/resultsViewController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/messageUsController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/blankController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/photoController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/videoController.js"></script>
		<script type="text/javascript" src="resources/js/services/privateSessionData.js"></script>
		<script type="text/javascript" src="resources/js/services/dbService.js"></script>
		<script type="text/javascript" src="resources/js/services/mailService.js"></script>
		<script type="text/javascript" src="resources/js/directives/leagueRepublicDisplay.js"></script>
		<script type="text/javascript" src="resources/js/directives/leagueRepublicDisplayResults.js"></script>
		<script type="text/javascript" src="resources/js/libs/utilities.js"></script>
		<link rel="stylesheet" type="text/css" href="resources/css/default.css" />
		<link rel="shortcut icon" type="image/ico" href="resources/images/favicon.ico" >
		
<%-- 		<script>
			<%	TaskManagerService tms = new TaskManagerService();
				List<Media> photos = new ArrayList<Media>();
				Gson gson = new GsonBuilder().create();
				photos = tms.getPhotoMedia();
			%>
			pubModule.controller("photosController", function($scope){
				gPhotos = <%=gson.toJson(photos)%>;
				console.log("## photosController initialised");
				$scope.photos = <%=gson.toJson(photos)%>;
			});
		
		</script> --%>
		
	</head>  <!-- HEAD END -->
	<body>
	
		<!-- (1) Banner across the top & the menu -->
		<div ng-include="'resources/viewParts/headerNmenu.html'"></div>
		
		<!-- (2) Load the body of the page -->

		<!-- MAIN CONTENT AND INJECTED VIEWS -->
	    <div id="main">
	
	        <!-- angular templating -->
	        <!-- this is where content will be injected -->
	        <div ng-view></div>
	
	    </div>
		
		<div class="blankspace"></div>
		
		<!-- Footer across the bottom of the page -->
		<div ng-include="'resources/viewParts/footer.html'"></div>
		
	</body>
</html>
