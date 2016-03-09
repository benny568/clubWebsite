mmModule.controller('EditTeamController', ['$scope', 'team', 'close', 'DataService', function($scope, team, close, DataService) {
	var logdepth = '    ';
	var loghdr = logdepth + "->EditTeamController: ";
	log.debug(loghdr + "Initialized");
	
	log.info(loghdr + "->EditTeamController..");
	$scope.data = DataService;
	$scope.thisTeam = team;
	
	$scope.close = function(update, team) {
		log.debug(loghdr + "## [EditTeamController] team is: ", $scope.thisTeam);
		close({op:update,team:$scope.thisTeam}, 500); // close, but give 500ms for bootstrap to animate
	 };
}]);