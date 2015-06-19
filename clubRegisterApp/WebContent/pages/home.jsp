<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html ng-app="">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="Avenue United AFC website, Ennis, Co. Clare, Ireland.">
    <meta name="author" content="Brendan O'Daly">
    <link rel="icon" href="images/favicon.ico">
	
	<title>Front page</title>
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="../bootstrap-3.3.4-dist/js/bootstrap.js"></script>
	<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
	<link href="../bootstrap-3.3.4-dist/css/bootstrap.css" rel="stylesheet">
	<link href="../font-awesome-4.3.0/css/font-awesome.min.css" rel="stylesheet">
	
	<script src="../js/jssor.js"></script>
	<script src="../js/jssor.slider.js"></script>	

    <link href="../css/default.css" rel="stylesheet" type="text/css" />
    
</head>

<body>

	<img src="../images/04.jpg">

	<!-- (1) Banner across the top & the menu -->
	<div ng-include="'../viewParts/headerNmenu.html'"></div>

	<div id="wrap">
		<div class="container t1">
			<img src="../images/AvenueColours.png" height="50" width="200" alt="Club Colours" data-toggle="tooltip" data-placement="top" title="Club Colours"/>
		
		
			<!-- (3) Image slider on main page -->
	    	<div class="container t1">
	    		<div class="t3" ng-include="'../viewParts/homeCarousel.html'"></div>
	    	</div>
	    	
		</div> <!--  End of container t1 -->
	</div>

	<!-- Add the footer -->
	<!-- <div ng-include="'viewParts/footer.html'"></div> -->
	
	<div class="navbar navbar-inverse navbar-fixed-bottom" role="navigation">
		<div class="container navbar-text pull-left" style="max-height:0px;">
			<p>� Avenue United 2015</p>
		</div>
	</div>

</body>
</html>
