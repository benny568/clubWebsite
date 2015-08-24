<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html ng-app="memberManagerApp">
<head>  <!-- HEAD START -->
	
	<title>Documentation</title>
		
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
		
		<!-- Smart Table -->
		<script type="text/javascript" src="resources/js/libs/smart-table.min.js"></script>
		
		<!-- My app -->
		<script type="text/javascript" src="resources/js/app.js"></script>
		<script type="text/javascript" src="resources/js/controllers/academyController.js"></script>
		<script type="text/javascript" src="resources/js/services/dbService.js"></script>
		
		<script type="text/javascript" src="resources/js/leagueRepublic.js"></script>
		<link rel="stylesheet" type="text/css" href="resources/css/default.css" />

</head>  <!-- HEAD END -->

<body ng-controller="academyManagerController">

	<!-- (1) Banner across the top & the menu -->
	<div ng-include="'resources/viewParts/headerNmenu.html'"></div>

	<div id="wrap">
		<div class="container t1">
			<div class="row">
				<div class="col-md-1"></div>
				<div class="col-md-8">
					<div class="panel">
						<div class="panel-heading avenue-heading">
							<strong>Documentation Downloads 2015/2016</strong>
						</div>
						<div class="panel-body avenue-body">
							<table class="table-condensed table-bordered" style="background-color:#E6E3E3;">
					  <thead>
						<tr class="bg-primary avenue-heading">
						  <th><i class="fa fa-list-ol"></i> Number</th>
						  <th><i class="fa fa-file-text"></i> Document Title</th>
						  <th><i class="fa fa-link"></i> Download Link</th>
						</tr>
					  </thead>
					  <tbody class="avenue-body">
						<tr>
						  <th scope="row">1</th>
						  <td>Coaches Code of Conduct</td>
						  <td><a href="resources/docs/Coaches Code of Conduct.doc"><img src="resources/images/Sheet_of_paper.png" alt="Coches Code of Conduct" height="20px"/></a></td>
						</tr>
						<tr>
						  <th scope="row">2</th>
						  <td>Kicking for Killian fixtures and schedule</td>
						  <td><a href="resources/docs/Kicking For Killain Updated Fixtures Schedule.doc"><img src="resources/images/Sheet_of_paper.png" alt="Kicking for Killian" height="20px"/></a></td>
						</tr>
					  </tbody>
					</table>
						</div>
					</div>
				</div> <!--  end col -->
			</div> <!-- end row -->
			
		</div> <!--  End of container t1 -->
	</div>

	<!-- Footer across the bottom of the page -->
	<div ng-include="'resources/viewParts/footer.html'"></div>

</body>
</html>
