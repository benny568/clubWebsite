<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@page import="com.google.gson.Gson" %>
<%@page import="com.google.gson.GsonBuilder" %>
<%@page import="org.avenue.service.domain.Worker" %>
<html ng-app="memberManagerApp">
	<head>  <!-- HEAD START -->		
		<title>Admin Home</title>
		
		<meta name="_csrf" content="${_csrf.token}"/>
	    <!-- default header name is X-CSRF-TOKEN -->
	    <meta name="_csrf_header" content="${_csrf.headerName}"/>
	    
		<!-- jQuery (required) -->
		<script src="resources/bower_components/jquery/dist/jquery.min.js"></script>
		<!-- <script src="resources/bower_components/jquery-easing/jquery.easing.min.js"></script> -->

		
		<!-- Bootstrap -->
 		<!-- <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet"> -->
 		<!-- <script type="text/javascript" src="resources/bower_components/bootstrap/dist/js/bootstrap.min.js"></script> -->
 		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
		
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
		
		<!-- My app -->
		<script type="text/javascript" src="resources/js/modules/privateApp.js"></script>
		<script type="text/javascript" src="resources/js/controllers/datePickerController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/memberManagementController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/userProfileController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/passwdChangeController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/trainingViewController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/teamPlanController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/addTrainingSessionController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/usersController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/addUserController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/editUserController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/deleteUserController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/addMemberController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/deleteMemberController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/teamsManagerController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/addTeamController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/deleteTeamController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/teamManagementController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/dummyController.js"></script>
		<script type="text/javascript" src="resources/js/services/privateSessionData.js"></script>
		<script type="text/javascript" src="resources/js/services/memberManagerService.js"></script>
		<script type="text/javascript" src="resources/js/services/userManagementService.js"></script>
		<script type="text/javascript" src="resources/js/services/dbService.js"></script>
		<script type="text/javascript" src="resources/js/services/multiPartForm.js"></script>
		<script type="text/javascript" src="resources/js/directives/leagueRepublicDisplayPrivate.js"></script>
		<script type="text/javascript" src="resources/js/directives/leagueRepublicDisplayResultsPrivate.js"></script>
		<script type="text/javascript" src="resources/js/directives/fileModel.js"></script>
		
		<!-- <script type="text/javascript" src="resources/js/leagueRepublic.js"></script> -->
		<link rel="stylesheet" type="text/css" href="resources/css/default.css" />
		<link rel="shortcut icon" type="image/ico" href="resources/images/favicon.ico" >
		
		<script>
			<%Worker user = (Worker) session.getAttribute("user");
			  Gson gson = new GsonBuilder().create();
			if (null == user) {
			   /* request.setAttribute("message", "Session has ended.  Please login.");
			   RequestDispatcher rd = request.getRequestDispatcher("login.jsp");
			   rd.forward(request, response); */
			} 
			%>
			(function setUser(){ gThisUser = <%=gson.toJson(user)%> })();
		</script>
		
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
