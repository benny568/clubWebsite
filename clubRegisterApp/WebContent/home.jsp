<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@page import="java.util.ArrayList" %>
<%@page import="com.google.gson.Gson" %>
<%@page import="com.google.gson.GsonBuilder" %>
<%@page import="org.avenue.service.domain.Worker" %>
<%@page import="org.avenue.service.domain.NewsStory" %>
<html ng-app="publicApp">

	<head>  <!-- HEAD START -->

	<title>Avenue United Home</title>
		
		<meta name="_csrf" content="${_csrf.token}"/>
	    <!-- default header name is X-CSRF-TOKEN -->
	    <meta name="_csrf_header" content="${_csrf.headerName}"/>
	    
		<meta name="author" content="Brendan O'Daly" />
		<meta name="description" content="Avenue United FC website" />
	
		<!-- jQuery (required) -->
		<script src="resources/js/libs/jquery-2.1.4.min.js"></script>
		
		<!-- Bootstrap -->
		<script type="text/javascript" src="resources/js/libs/bootstrap.js"></script>
		<link rel="stylesheet" type="text/css" href="resources/css/bootstrap.css" />
		
		<!-- AngularJS -->
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.0/angular.js"></script>
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.0/angular-route.js"></script>
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.0/angular-resource.js"></script>
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.0/angular-animate.js"></script>
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.0/angular-cookies.js"></script>
		<script type="text/javascript" src="resources/js/libs/promise-tracker.js"></script>
		<script type="text/javascript" src="resources/js/libs/jcs-auto-validate.min.js"></script>
		<script type="text/javascript" src="resources/js/modules/angular-csrf-cross-domain.js"></script>
		<script type="text/javascript" src="resources/js/modules/angularModalService.js"></script>
		<script type="text/javascript" src="resources/js/modules/ui-bootstrap-tpls-0.13.0.js"></script>
		
		<!-- Font Awsome -->
		<link rel="stylesheet" type="text/css" href="resources/font-awesome-4.3.0/css/font-awesome.css" />
		
		<!-- log4javasctipt -->
		<script type="text/javascript" src="resources/js/libs/log4javascript.js"></script>
		
		<script type="text/javascript" src="resources/js/libs/leagueRepublicScript.js"></script>
		
		<!-- My app -->
		<script type="text/javascript" src="resources/js/modules/publicApp.js"></script>
		<script type="text/javascript" src="resources/js/modules/privateApp.js"></script>
		<script type="text/javascript" src="resources/js/controllers/sponsorController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/merchandiseController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/clubHistoryController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/academyController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/teamViewController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/tableViewController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/farViewController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/resultsViewController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/messageUsController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/newsController.js"></script>
		<script type="text/javascript" src="resources/js/controllers/blankController.js"></script>
		<script type="text/javascript" src="resources/js/services/sessionData.js"></script>
		<script type="text/javascript" src="resources/js/services/dbService.js"></script>
		<script type="text/javascript" src="resources/js/services/mailService.js"></script>
		<script type="text/javascript" src="resources/js/directives/leagueRepublicDisplay.js"></script>
		<script type="text/javascript" src="resources/js/directives/leagueRepublicDisplayResults.js"></script>
		<link rel="stylesheet" type="text/css" href="resources/css/default.css" />
		<link rel="shortcut icon" type="image/ico" href="resources/images/favicon.ico" >
		
		<style>
			.carousel-indicators {
		      top: auto;
		      bottom: 0px;
		    }
		</style>
		
	</head>

	<body ng-controller="newsController">
	
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
		
		
		<!-- Extract the logged in user from the session data -->
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
		
	</body>

</html>
