<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html ng-app="">
<head>  <!-- HEAD START -->
	
	<title>Find Us</title>
		
		<script type="text/javascript" src="resources/js/jquery-2.1.4.min.js"></script>
		<script type="text/javascript" src="resources/js/bootstrap.js"></script>
		<script type="text/javascript" src="resources/js/angular.js"></script>
		<script type="text/javascript" src="resources/js/angular-animate.js"></script>

		<link rel="stylesheet" type="text/css" href="resources/css/bootstrap.css" />
		<link rel="stylesheet" type="text/css" href="resources/font-awesome-4.3.0/css/font-awesome.css" />
		<link rel="stylesheet" type="text/css" href="resources/css/default.css" />

</head>  <!-- HEAD END -->

<body>

	<!-- (1) Banner across the top & the menu -->
	<div ng-include="'resources/viewParts/headerNmenu.html'"></div>


	<div class="container">
		<div class="row">
			<div class="col-sm-6">
			
				<div class="panel panel-default">
					<div class="panel-heading panel-heading-custom" style="background-color:#D90404;color:#FAE900;">
						<i class="fa fa-bus"></i><i class="fa fa-car" style="float:right"></i>
						<h3>How to find us:</h3>
					</div>
					<div class="panel-body" style="background-color:#E6E3E3;">
						Take exit 13 off the M18 motorway (Limerick - Galway) for Ennis town. 
						Take a left at the exit roundabout for Ennis town.
						At the next roundabout take a right. Take the first right 100m after the roundabout.
						Turn left into the Avenue United grounds.
					</div>
				</div>
			
			</div> <!-- end col -->
			<div class="col-sm-6">
				  <iframe width="100%" height="450" 
				  			frameborder="0" style="border:0" 
				  			src="https://www.google.com/maps/embed/v1/place?q=Pairc%20Ros%20Learnban%20Gaa&key=AIzaSyBb1P300yVwoKvGbF7Oq5IXcX8jUUF5rVY">
				  </iframe>		
			</div> <!-- end col -->
		</div> <!-- end row -->
	</div>

	<div class="blankspace"></div>
	<div class="blankspace"></div>
	
	<div class="navbar navbar-inverse navbar-fixed-bottom" role="navigation">
		<div class="container navbar-text pull-left" style="max-height:0px;">
			<p>© Avenue United 2015</p>
		</div>
	</div>			    
	
</body>
</html>
