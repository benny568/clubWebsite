mmModule.controller('fixturesAndResultsController', function ($scope,$http,$attrs, dbService,ModalService, mmService) 
{
	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
	

				$scope.showArray = [];
				$scope.TeamMembers = [];
				$scope.teams = [];
				$scope.viewTraining = false;
				$scope.viewTeamPlan = false;
				$scope.currentMember = {};
				$scope.editable = '';
				$scope.teamName = $attrs.team;
				$scope.mode = $attrs.mode;
				$scope.home = "http://" + site;
	console.log("## [fixturesAndResultsController] Controller initialized, mode: ", $scope.mode);


	$scope.lrcode = 918538347;
	lrcode = $scope.lrcode;
	//require("http://api.leaguerepublic.com/l/client/api/cs1.js");
	require(["http://api.leaguerepublic.com/l/client/api/cs1.js"], function () {
	    console.log("Loaded lr script..");
	});

});

mmModule.controller('resultsController', function ($scope,$http,$attrs, dbService,ModalService, mmService) 
{
	console.log("## [resultsController] Controller initialized, mode: ", $scope.mode);

	$scope.teamName = $attrs.team;
	$scope.mode = $attrs.mode;
	$scope.lrcode = 791410501;
	lrcode = $scope.lrcode;
	//require("http://api.leaguerepublic.com/l/client/api/cs1.js");
	require(["http://api.leaguerepublic.com/l/client/api/cs1.js"], function () {
	    console.log("Loaded lr script..");
	    console.log("=============================================================");
	    console.log(cs1.js);
	});
});
