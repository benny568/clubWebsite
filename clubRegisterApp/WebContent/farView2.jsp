<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html ng-appng="memberManagerApp">
	<%@page import="org.avenue.service.domain.Team"%>
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
	<% 	Team team = (Team) session.getAttribute("team");%>
	<body ng-controller="memberManagerController">		
	
		<!-- (1) Banner across the top & the menu -->
		<div ng-include="'resources/viewParts/headerNmenu.html'"></div>

		<div id="wrap">
			<div class="container t1">
				<div class="row">
					<div class="lead a-orange-text" style="margin-left:40px;">Fixtures and Results for <em><%=team.getName()%></em> team.</div>
				</div>
		    	<div class="row" style="margin-left:20px;">
			    	<div class="col-md-5">
		    			<div class="panel">
			    			<div class="panel-heading avenue-heading">
			    				Fixtures:
			    			</div>
			    			<div class="panel-body avenue-body">
			    			
			    				<div id="lrep<%=Integer.toString(team.getLrFixturesCode())%>" style="width: 350px;"></div>
								<script language="javascript" type="text/javascript">var lrcode = '<%=Integer.toString(team.getLrFixturesCode())%>'</script>
								<script language="Javascript" type="text/javascript" src="http://api.leaguerepublic.com/l/client/api/cs1.js"></script> 

			    			</div>
			    		</div>
		    		</div> <!-- end col -->
		    		<div class="col-md-5">
		    			<div class="panel">
			    			<div class="panel-heading avenue-heading">
			    				Recent Results:
			    			</div>
			    			<div class="panel-body avenue-body">
			    				<div id="lrep<%=Integer.toString(team.getLrResultsCode())%>" style="width: 350px;"></div>
								<script language="javascript" type="text/javascript">var lrcode = '<%=Integer.toString(team.getLrResultsCode())%>'</script>
								<script language="Javascript" type="text/javascript" src="http://api.leaguerepublic.com/l/client/api/cs1.js"></script>
			    			</div>
			    		</div>
		    		</div> <!-- end col -->
		    	</div> <!-- end row -->
			    	
			</div> <!--  End of container t1 -->
		</div>
		
	</body>
</html>