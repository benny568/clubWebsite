mmModule.controller('teamPlanController', function ($scope,$http,dbService) 
{
	console.log("## [teamPlanController] ** LOADING **");
	
	
	/**********************************************************
	 * Name:		toggleTeamPlanView()
	 * Description:	Used to make the team plan view
	 * 				visable or hidden when the user clicks on it
	 * Scope:		Externally accessible
	 * Params in:	None.
	 * Return:		Sets $scope.viewTeamPlan to true/false.
	 **********************************************************/
	$scope.toggleTeamPlanView = function(teamId) {
		if( typeof teamId == 'undefined' )
			return;
		$scope.viewTeamPlan = !$scope.viewTeamPlan;
		console.log("## [teamPlanController] -> toggleTeamPlanView, value set to: ", $scope.viewTeamPlan);
	}
	$scope.toggleTeamPlanView();

});