<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html ng-app="">
<head>  <!-- HEAD START -->
	
	<title>Message Us</title>
		
		<script type="text/javascript" src="resources/js/libs/jquery-2.1.4.min.js"></script>
		<script type="text/javascript" src="resources/js/libs/bootstrap.js"></script>
		<script type="text/javascript" src="resources/js/libs/angular.js"></script>
		<script type="text/javascript" src="resources/js/libs/angular-animate.js"></script>

		<link rel="stylesheet" type="text/css" href="resources/css/bootstrap.css" />
		<link rel="stylesheet" type="text/css" href="resources/font-awesome-4.3.0/css/font-awesome.css" />
		<link rel="stylesheet" type="text/css" href="resources/css/default.css" />
		
		<!-- log4javasctipt -->
		<script type="text/javascript" src="resources/js/libs/log4javascript.js"></script>

</head>  <!-- HEAD END -->

<body>

	<!-- (1) Banner across the top & the menu -->
	<div ng-include="'resources/viewParts/headerNmenu.html'"></div>


	<div class="container">
		<div class="row">
			<div class="container">
			<div class="panel">
				<div class="panel-heading avenue-heading">
					<h3><i class="fa fa-envelope-o"></i> Email Avenue United:</h3>
				</div>
				<div class="panel-body avenue-body">
					If you wish to send Avenue United an email, please fill in your details and your message below.
					<div class="blankspace"></div>
					<form class="form-horizontal" method="post">
					    <fieldset>
					        <!-- <legend class="text-center">Contact us</legend> -->
					
					        <div class="form-group">
					            <span class="col-md-1 col-md-offset-2 text-center"><i class="glyphicon glyphicon-user"></i></span>
					            <div class="col-md-8">
					                <input id="fname" name="name" type="text" placeholder="First Name" class="form-control">
					            </div>
					        </div>
					        <div class="form-group">
					            <span class="col-md-1 col-md-offset-2 text-center" style="vertical-align:middle;"><i class="glyphicon glyphicon-user"></i></span>
					            <div class="col-md-8">
					                <input id="lname" name="name" type="text" placeholder="Last Name" class="form-control">
					            </div>
					        </div>
					
					        <div class="form-group">
					            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
					            <div class="col-md-8">
					                <input id="email" name="email" type="text" placeholder="Email Address" class="form-control">
					            </div>
					        </div>
					
					        <div class="form-group">
					            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
					            <div class="col-md-8">
					                <input id="phone" name="phone" type="text" placeholder="Phone" class="form-control">
					            </div>
					        </div>
					
					        <div class="form-group">
					            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
					            <div class="col-md-8">
					                <textarea class="form-control" id="message" name="message" placeholder="Enter your massage for us here. We will get back to you within 2 business days." rows="7"></textarea>
					            </div>
					        </div>
					
					        <div class="form-group">
					            <div class="col-md-12 text-center">
					                <button type="submit" class="btn btn-primary btn-lg">Submit</button>
					            </div>
					        </div>
					    </fieldset>
					</form>
				</div> <!-- end panel body -->
			</div> <!-- end panel -->
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
