mmModule.controller('AddTeamController', ['$scope', 'close', function($scope, close) {
	
	$scope.thisTeam = {name: "", lrcode: 0, lrFixturesCode: 0, lrResultsCode: 0, noticeboard: ""};
	var team = $scope.thisTeam;
	
	$scope.close = function(add, team) {
		console.log("## [AddTeamController] team is: ", $scope.thisTeam);
		close({op:add,team:$scope.thisTeam}, 500); // close, but give 500ms for bootstrap to animate
	 };
}]);