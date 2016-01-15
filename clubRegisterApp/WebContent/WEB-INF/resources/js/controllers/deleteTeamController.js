mmModule.controller('DeleteTeamController', ['$scope', 'team', 'close', function($scope, team, close) {
	$scope.team = team;
	
	$scope.close = function(del, team) {
		console.log("## [DeleteTeamController] team to delete is: ", team);
		close({op:del,team:team}, 500); // close, but give 500ms for bootstrap to animate
	 };
}]);