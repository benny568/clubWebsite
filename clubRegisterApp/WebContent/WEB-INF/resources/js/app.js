var memberManagerModule = angular.module('memberManagerApp', ['ngAnimate', 'ngResource']);
memberManagerModule.controller('memberManagerController', function ($scope,$http) 
{	
	var urlBase="http://localhost:8080/clubRegisterApp";
	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

	$scope.showArray = [];
	$scope.TeamMembers = [];
	
	console.log("## Controller initialized");
	
	$http.get(urlBase+'/admin/teams').success(function(data) 
	{
		var i = 0;
		
		$scope.teams = data;

		// Initialise the array of visibility flags
		for( i=0; i<$scope.teams.length; i++)
			$scope.showArray[i] = 'false';
		// Initialise the team member arrays
		$scope.TeamMembers = new Array($scope.teams.length);
		
		console.log("## Read in [%d] teams", $scope.teams.length);
		console.log("## Show array 3: ", $scope.showArray[3])

	}); // End of get()
	
	 
	 $scope.getMembers4team = function(teamId) 
	 {
		$http.get(urlBase+'/admin/team/' + teamId).success(function(data) 
		{
			$scope.TeamMembers[teamId] = data;
		}); // End of get()
		$scope.showArray[teamId] = 'true';
		return;
	 };
	 $scope.getMembers4team();
	 
	 
	$scope.toggleView = function(teamId) {
		$scope.showArray[teamId] = 'false';
	}
	$scope.toggleView();
	
}); // End of memberManagerController

var teamViewModule = angular.module('teamViewApp', ['ngAnimate', 'ngResource']);
var lrcode; // Needed for API calls to LeagueRepublic site
teamViewModule.controller('teamViewController', function ($scope, $attrs, $http) 
{	
	var urlBase="http://localhost:8080/clubRegisterApp";
	var teamId;
	$scope.Team;
	$scope.teamId = 0;
	$scope.lrcode = 0;
	
	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
	
	$scope.teamName = $attrs.team; 

	
	console.log("## teamViewController initialized for: ", $scope.teamName);
	
	$http.get(urlBase+'/team/' + $scope.teamName).success(function(tdetails) 
	{
		console.log("## Getting team details for: ", $scope.teamName);
		$scope.teamId = tdetails.id;
		$scope.lrcode = tdetails.lrcode;
		console.log("## Team ID read: ", $scope.teamId, ":",$scope.lrcode);
				
		if( $scope.teamId != 0 )
			$http.get(urlBase+'/admin/team/' + $scope.teamId).success(function(data) 
			{
				$scope.Team = data;
			}); // End of get()
		else
			console.log("No team id found for team: ", $scope.teamName);
		
		lrcode = $scope.lrcode;
		console.log("## defined lrcode as: ", lrcode);
		require("http://api.leaguerepublic.com/l/client/api/cs1.js");
	});
	
	$scope.isManager = function(position)
	{
		if( position == 0 )
			return true;
		else
			return false;
	}
	$scope.isManager();
	
	
	$scope.initLR = function(lrId)
	{
		lrcode = lrId;
		console.log("## defined lrcode as: ", lrcode);
		require("http://api.leaguerepublic.com/l/client/api/cs1.js");
	}
	$scope.initLR();

	function require(script) 
	{
	    $.ajax({
	        url: script,
	        dataType: "script",
	        async: false,           // <-- This is the key
	        success: function () {
	            // all good...
	        },
	        error: function () {
	            throw new Error("Could not load script " + script);
	        }
	    });
	}
	
	
}); // End of teamViewController


var newsModule = angular.module('newsApp', []);

newsModule.controller('newsController', function ($scope,$http) 
{
	$scope.files = 0;
	
	function getFiles()
	{
		var inputs = document.getElementById("_files"), len = inputs.length, i, pONumb;
		if( inputs != null )
			$scope.files = inputs;

		return $scope.files;
	}	
	$scope.getFiles = getFiles;

	function handleFileSelect(evt) {
	    var files = evt.target.files; // FileList object
	
	    // Loop through the FileList and render image files as thumbnails.
	    for (var i = 0, f; f = files[i]; i++) {
	
	      // Only process image files.
	      if (!f.type.match('image.*')) {
	        continue;
	      }
	
	      var reader = new FileReader();
	
	      // Closure to capture the file information.
	      reader.onload = (function(theFile) {
	        return function(e) {
	          // Render thumbnail.
	          var span = document.createElement('span');
	          span.innerHTML = ['<img class="thumb" src="', e.target.result,
	                            '" title="', escape(theFile.name), '"/>'].join('');
	          document.getElementById('list').insertBefore(span, null);
	        };
	      })(f);
	
	      // Read in the image file as a data URL.
	      reader.readAsDataURL(f);
	    }
	  }
	
	  document.getElementById('files').addEventListener('change', handleFileSelect, false);
});


/**
 * AngularJS module to process a form.
 */
var contactModule = angular.module('contactApp', []);

contactModule.controller('contactController', function ($scope,$http) 
{

  });
