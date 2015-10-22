<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html ng-app="memberManagerApp">
<head>  <!-- HEAD START -->
	
	<title>Message Us</title>
	
		<meta name="_csrf" content="${_csrf.token}"/>
		<!-- default header name is X-CSRF-TOKEN -->
		<meta name="_csrf_header" content="${_csrf.headerName}"/>
		
		<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
		<meta name="author" content="Brendan O'Daly" />
		<meta name="description" content="Avenue United FC website" />
	
		<!-- jQuery (required) -->
		<script src="resources/js/libs/jquery-2.1.4.min.js"></script>
		
		<!-- Bootstrap -->
		<script type="text/javascript" src="resources/js/libs/bootstrap.js"></script>
		<script type="text/javascript" src="resources/js/libs/bootstrap-theme.min.css"></script>
		<link rel="stylesheet" type="text/css" href="resources/css/bootstrap.css" />
		
		<!-- AngularJS -->
		<script type="text/javascript" src="resources/js/libs/angular.js"></script>
		<script type="text/javascript" src="resources/js/libs/angular-route.js"></script>
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
		<script type="text/javascript" src="resources/js/controllers/messageUsController.js"></script>
		<script type="text/javascript" src="resources/js/services/dbService.js"></script>
		<script type="text/javascript" src="resources/js/services/mailService.js"></script>
		<link rel="stylesheet" type="text/css" href="resources/css/default.css" />
		<link rel="shortcut icon" type="image/ico" href="resources/images/favicon.ico" >
		
		<style>
			.hidden {
			    display: none;
			}
			.vertical-middle {
			    display: table-cell;
			    vertical-align: middle;
			}
			.panel.panel-default {
			    max-width: 500px;
			    width: 100%;
			    margin: 0 auto;
			}
			.message {
			    padding: 15px; 
			    margin: 0;
			}
		</style>

</head>  <!-- HEAD END -->

<body>

	<!-- (1) Banner across the top & the menu -->
	<div ng-include="'resources/viewParts/headerNmenu.html'"></div>

    <div class="vertical-middle">
        <div class="container">
            <div class="panel" style="max-width:500px;margin-left:auto;margin-right:auto;">
                <div class="panel-heading avenue-heading">
                    Contact Form
                </div>
                <div ng-controller="MessageUsController" class="panel-body avenue-body">
                    <form ng-submit="submit(contactform)" name="contactform" method="post" action="" class="form-horizontal" role="form">
                        <div class="form-group" ng-class="{ 'has-error': contactform.inputName.$invalid && submitted }">
                            <label for="inputName" class="col-lg-2 control-label">Name</label>
                            <div class="col-lg-10">
                                <input ng-model="formData.name" type="text" class="form-control" id="inputName" name="inputName" placeholder="Your Name" required>
                            </div>
                        </div>
                        <div class="form-group" ng-class="{ 'has-error': contactform.inputEmail.$invalid && submitted }">
                            <label for="inputEmail" class="col-lg-2 control-label">Email</label>
                            <div class="col-lg-10">
                                <input ng-model="formData.senderAddress" type="email" class="form-control" id="inputEmail" name="inputEmail" placeholder="Your Email" required>
                            </div>
                        </div>
                        <div class="form-group" ng-class="{ 'has-error': contactform.inputSubject.$invalid && submitted }">
                            <label for="inputSubject" class="col-lg-2 control-label">Subject</label>
                            <div class="col-lg-10">
                                <input ng-model="formData.subject" type="text" class="form-control" id="inputSubject" name="inputSubject" placeholder="Subject Message" required>
                            </div>
                        </div>
                        <div class="form-group" ng-class="{ 'has-error': contactform.inputMessage.$invalid && submitted }">
                            <label for="inputMessage" class="col-lg-2 control-label">Message</label>
                            <div class="col-lg-10">
                                <textarea ng-model="formData.message" class="form-control" rows="4" id="inputMessage" name="inputMessage" placeholder="Your message..." required></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-lg-offset-2 col-lg-10">
                                <button type="submit" class="btn btn-default" ng-disabled="submitButtonDisabled">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                    <p ng-class="result" style="padding: 15px; margin: 0;">{{ resultMessage }}</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>