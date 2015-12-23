<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@page import="java.util.ArrayList" %>
<%@page import="com.google.gson.Gson" %>
<%@page import="com.google.gson.GsonBuilder" %>
<%@page import="org.avenue.service.domain.Worker" %>
<%@page import="org.avenue.service.domain.NewsStory" %>
<html ng-app="memberManagerApp">
	<head>  <!-- HEAD START -->		
		<title>Avenue United Home Page</title>
		
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
		<script type="text/javascript" src="resources/js/libs/angular-route.js"></script>
		<script type="text/javascript" src="resources/js/libs/angular-animate.js"></script>
		<script type="text/javascript" src="resources/js/libs/promise-tracker.js"></script>
		<script type="text/javascript" src="resources/js/libs/angular-cookies.js"></script>
		<script type="text/javascript" src="resources/js/libs/jcs-auto-validate.min.js"></script>
		<script type="text/javascript" src="resources/js/modules/angular-csrf-cross-domain.js"></script>
		<script type="text/javascript" src="resources/js/modules/angularModalService.js"></script>
		<script type="text/javascript" src="resources/js/modules/ui-bootstrap-tpls-0.13.0.js"></script>
		
		<!-- Font Awsome -->
		<link rel="stylesheet" type="text/css" href="resources/font-awesome-4.3.0/css/font-awesome.css" />
		
		<!-- log4javasctipt -->
		<script type="text/javascript" src="resources/js/libs/log4javascript.js"></script>
		<script type="text/javascript" src="resources/js/libs/require.js"></script>
		
		<!-- My app -->
		<script type="text/javascript" src="resources/js/app.js"></script>
		<script type="text/javascript" src="resources/js/controllers/memberManagementController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/sponsorController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/userProfileController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/passwdChangeController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/trainingViewController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/teamPlanController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/addTrainingSessionController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/usersController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/addUserController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/editUserController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/deleteUserController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/datePickerController.js"></script>
		<script type="text/javascript" src="resources/js/services/memberManagerService.js"></script>
		<script type="text/javascript" src="resources/js/services/userManagementService.js"></script>
		<script type="text/javascript" src="resources/js/services/dbService.js"></script>
		<script type="text/javascript" src="resources/js/services/multiPartForm.js"></script>
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
			
			<%ArrayList<NewsStory> stories = (ArrayList<NewsStory>)session.getAttribute("stories");%>
			(function setNews(){ gNewsStories = <%=gson.toJson(stories)%> })();
		</script>
		
	</head>  <!-- HEAD END -->
	<body ng-controller="memberManagerController">
	
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
