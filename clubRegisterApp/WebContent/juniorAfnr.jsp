<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html ng-app="myApp">
<head>  <!-- HEAD START -->
	
	<title>Avenue United</title>
		
		<script type="text/javascript" src="resources/js/libs/jquery-2.1.4.min.js"></script>
		<script type="text/javascript" src="resources/js/libs/bootstrap.js"></script>
		<script type="text/javascript" src="resources/js/libs/angular.js"></script>
		<script type="text/javascript" src="resources/js/libs/angular-cookies.js"></script>
		<script type="text/javascript" src="resources/js/libs/promise-tracker.js"></script>

		
		<link rel="stylesheet" type="text/css" href="resources/css/bootstrap.css" />
        
</head>  <!-- HEAD END -->

<body>

<div class="container" ng-controller="modal">
  <h2>Modal: {{person.name}}</h2>
  <!-- Trigger the modal with a button -->
  <button type="button" class="btn btn-default btn-lg" id="myBtn">Login</button>

  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header" style="padding:35px 50px;">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4><span class="glyphicon glyphicon-lock"></span> Login</h4>
        </div>
        <div class="modal-body" style="padding:40px 50px;">
          <form role="form">
            <div class="form-group">
              <label for="usrname"><span class="glyphicon glyphicon-user"></span> Username</label>
              <input type="text" class="form-control" id="usrname" placeholder="Enter email">
            </div>
            <div class="form-group">
              <label for="psw"><span class="glyphicon glyphicon-eye-open"></span> Password</label>
              <input type="text" class="form-control" id="psw" placeholder="Enter password">
            </div>
            <div class="checkbox">
              <label><input type="checkbox" value="" checked>Remember me</label>
            </div>
              <button type="submit" class="btn btn-success"><span class="glyphicon glyphicon-off"></span> Login</button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-danger btn-default pull-left" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span> Cancel</button>
          <p>Not a member? <a href="#">Sign Up</a></p>
          <p>Forgot <a href="#">Password?</a></p>
        </div>
      </div>
      
    </div>
  </div> 
</div>
 
<script>
$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });
});
</script>

<script type="text/javascript">
var app = angular.module('myApp', []);

app.controller('modal', function($scope) {
	
	  $scope.person = {
	      name : "Tamas Piros",
	      company : "Galactic Empire",
	      role : "Sith Lord"
	  };
	
});

app.controller('Profile', function($scope) {
	
	  $scope.person = {
	      name : "Tamas Piros",
	      company : "Galactic Empire",
	      role : "Sith Lord"
	  };
	
});

app.controller('Editor', function($scope) {

    $scope.name = $scope.person.name;
    $scope.role = $scope.person.role;
    $scope.company = $scope.person.company;

});
</script>

</body>
</html>
