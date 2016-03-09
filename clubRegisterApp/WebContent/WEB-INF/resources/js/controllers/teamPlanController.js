mmModule.controller('teamPlanController', ['$scope', function ($scope) 
{
	var loghdr = "## [teamPlanController]: ";
	log.debug(loghdr+"** LOADING **");
	
	
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
		log.debug(loghdr+"-> toggleTeamPlanView, value set to: ", $scope.viewTeamPlan);
	}
	$scope.toggleTeamPlanView();

}]);