<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html ng-app="memberManagerApp">
<head>  <!-- HEAD START -->
	
	<title>Academy Overview</title>
		
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
				<div class="col-md-1" style="padding-top:50px;">
					<!-- Add menu down left -->
					<div ng-include="'resources/viewParts/academyMenu.html'"></div>
				</div>
				<div class="col-md-1">
				</div>
				<div class="col-md-10">
					<div class="panel">
						<div class="panel-heading avenue-heading">
							<strong>Avenue United Academy Coaches for 2015/2016</strong>
						</div>
						<div class="panel-body avenue-body">
							<table class="table-condensed table-bordered" style="background-color:#E6E3E3;">
					  <thead>
						<tr class="bg-primary avenue-heading">
						  <th><i class="fa fa-child"></i> Age Group</th>
						  <th><i class="fa fa-calendar"></i> Year of Birth</th>
						  <th><i class="fa fa-user"></i> Coaches</th>
						</tr>
					  </thead>
					  <tbody class="avenue-body">
						<tr>
						  <th scope="row">4-5 years</th>
						  <td>2009 / 2010</td>
						  <td>Paul Cosgrove</td>
						</tr>
						<tr>
						  <th scope="row">6 years</th>
						  <td>2008's</td>
						  <td>Ray Crowley, Parvin Chad</td>
						</tr>
						<tr>
						  <th scope="row">7 years</th>
						  <td>2007's</td>
						  <td>Alan Ball, Paul Roche, Dermot Daly</td>
						</tr>
						<tr>
						  <th scope="row">8 years</th>
						  <td>2006's</td>
						  <td>Brendan O'Daly, Killian O'Daly</td>
						</tr>
						<tr>
						  <th scope="row">9 years</th>
						  <td>2005's</td>
						  <td>John O'Malley, Noel Purtill</td>
						</tr>
						<tr>
						  <th scope="row">10 years</th>
						  <td>2004</td>
						  <td>David Herlihy, Brian Aherne, Leo Herbert</td>
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
