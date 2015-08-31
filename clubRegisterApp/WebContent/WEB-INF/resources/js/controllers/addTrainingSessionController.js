mmModule.controller('AddTrainingSessionController', function($scope, close) {
	
	$scope.itsPosition = itsPosition;
	$scope.teams = gTeams;
	$scope.teamId = gTeamId;
	$scope.teamName = gTeams[gTeamId].name;
	$scope.thisSession = {};

	 $scope.close = function(save,thisSession) {
		 if(save)
			 close({op:save,session: thisSession}, 500); // close, but give 500ms for bootstrap to animate
		 else
			 close(500);
	 };

	});