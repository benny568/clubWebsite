mmModule.controller('trainingViewController', function ($scope,$http,dbService) 
{
	console.log("## [trainingViewController] ** LOADING **");
	
	// Training records cache
	$scope.trainingRecords = [];
	$scope.trainingPerMember = null;
	
	getSessionsForTeam($scope.teamId);
	
	getSessionRecordsForTeam($scope.teamId);
	
	function getSessionsForTeam(teamId)
	{
		dbService.getSessionsForTeam(teamId)
		.then( function(result){
			$scope.sessionPlans = result;
			console.log("## [trainingViewController] -> getSessionsForTeam(", teamId, " - returned: ", $scope.sessionPlans);
		});
	}
	
	function getSessionRecordsForTeam(teamId)
	{
		dbService.getSessionRecordsForTeam(teamId)
		.then( function(result){
			$scope.sessionRecs = result;
			console.log("## [trainingViewController] -> getSessionRecordsForTeam - returned: ", $scope.sessionRecs);
		});
	}
	
	function sortTeamSessionsByMember()
	{
		var teamId = $scope.teamId;
		$scope.trainingPerMember = new Array($scope.TeamMembers[teamId].length);
		
		for( var m=0; m<$scope.TeamMembers[teamId].length; m++ )
		{
			$scope.trainingPerMember[m] = new Array($scope.sessionPlans.length);
			for( var i=0; i<$scope.sessionPlans.length; i++ )
			{
				for( var s=0; s<$scope.sessionRecs.length; s++ )
				{
						if( ($scope.sessionRecs[s].memberId == $scope.TeamMembers[teamId][m].id) && 
						($scope.sessionRecs[s].teamId == $scope.TeamMembers[teamId][m].team) && 
						($scope.sessionPlans[i].sessionId == $scope.sessionRecs[s].sessionId) )
					{
						console.log("## [trainingViewController] -> sortTeamSessionsByMember - found match: ", $scope.TeamMembers[teamId][m].name, " : ", $scope.sessionRecs[s] );
						$scope.trainingPerMember[m][i] = $scope.sessionRecs[s];
					}
				}
			}
		}
	}
	
	/**********************************************************
	 * Name:		toggleTrainingView()
	 * Description:	Used to make the taining records for a team
	 * 				visable or hidden when the user clicks on it
	 * Scope:		Externally accessible
	 * Params in:	None.
	 * Return:		Sets $scope.viewTraining to true/false.
	 **********************************************************/
	$scope.toggleTrainingView = function(teamId) {
		if( typeof teamId == 'undefined' )
			return;
		$scope.viewTraining = !$scope.viewTraining;
		console.log("## [trainingViewController] -> toggleTrainingVew, value set to: ", $scope.viewTraining);
		
		if( $scope.trainingPerMember == null )
			sortTeamSessionsByMember();
	}
	$scope.toggleTrainingView();
	
	
	$scope.changeTrainingAttendence = function()
	{
		console.log("## [trainingViewController] -> changeTrainingAttendence");
	}
	$scope.changeTrainingAttendence();
});