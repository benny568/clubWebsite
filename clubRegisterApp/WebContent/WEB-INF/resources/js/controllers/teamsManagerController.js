mmModule.controller('teamsManagerController', function ($scope,$http,$attrs, dbService,ModalService, mmService) 
{
	$scope.teams = [];
	$scope.home = "http://" + site;
	
	// (1) Get the teams from the server
	getTeams();
	
	
	/**********************************************************
	 * Name:		getTeams()
	 * Description:	Retrieves a list of teams from the server
	 * Scope:		Internal
	 * Params in:	None
	 * Return:		Sets $scope.teams
	 **********************************************************/
	function getTeams(){
		
		dbService.getTeams()
			.then( function(teams) {
				$scope.teams = teams;
				setTeamId();
		});
	}
	
	/**********************************************************
	 * Name:		addTeam()
	 * Description:	Add new Team, update local memory and send
	 * 				to the server.
	 * Scope:		Externally accessible
	 * Params in:	None
	 * Return:		Adds the member on to the end of the teams
	 * 				array.
	 **********************************************************/
	$scope.addTeam = function(goNogo)
	{
		if( typeof goNogo == 'undefined')
			return;
			
		console.log("## [teamsManagerController] -> (addTeam)");
		
		ModalService.showModal({templateUrl: 'addTeamModal.html',controller: "AddTeamController"})
		.then(	function(modal) 
				{
		            modal.element.modal();
		            modal.close.then(	function(result) 
		            					{
		            						if( result.op )
		            						{
		            							$scope.thisTeam = result.team;
		            							dbService.addTeam( result.team ).then( function(result){
		            								console.log("[teamsManagerController] - addTeam: ", $scope.thisTeam);
		            								$scope.teams.push($scope.thisTeam);
		            							} );
		            						}
		            					}
		            				);
	            }
			); // End .then()
		//dbService.addTeam();
	}
	$scope.addTeam();
	
	/**********************************************************
	 * Name:		editTeam()
	 * Description:	Edit the currently selected team
	 * Scope:		Externally Accessible
	 * Params in:	The team to edit
	 * Return:		
	 **********************************************************/
	$scope.editTeam = function(team)
	{
		if( typeof team == 'undefined')
			return;
		$scope.thisTeam = team;
		console.log("## [teamsManagerController] -> (editTeam) team: ", $scope.thisTeam);
		
		ModalService.showModal({
			templateUrl: 'editTeamModal.html',
			controller: "EditTeamController",
            inputs: { team : team}
		}).then(	function(modal) 
				{
		            modal.element.modal();
		            modal.close.then(	function(result) 
		            					{
		            						if( result.op )
		            						{
		            							$scope.team = result.team;
		            							dbService.updateTeam( result.team ).then( function(result){
		            								console.log("[teamsManagerController] - editTeam - updates: ", $scope.thisTeam);
		            							});
		            						}
		            					}
		            				);
	            }
			); // End .then()
		
	}
	$scope.editTeam();
	
	/**********************************************************
	 * Name:		deleteTeam()
	 * Description:	Delete the currently selected team
	 * Scope:		Externally Accessible
	 * Params in:	The team to delete
	 * Return:		
	 **********************************************************/
	$scope.deleteTeam = function(team)
	{
		if( typeof team == 'undefined')
			return;
		$scope.thisTeam = team;
		console.log("## [teamsManagerController] -> (deleteTeam) Requested to delete team: ", $scope.thisTeam);
		
		ModalService.showModal({
			templateUrl: 'delTeamConfirmModal.html',
			controller: "DeleteTeamController",
            inputs: { team : team}
		}).then(	function(modal) 
				{
		            modal.element.modal();
		            modal.close.then(	function(result) 
		            					{
		            						if( result.op )
		            						{
		            							dbService.deleteTeam( $scope.thisTeam ).then( function(result){
		            								console.log("[teamsManagerController] - deleteTeam - deleted: ", $scope.thisTeam);
		            								delTeamFrmMemory($scope.thisTeam);
		            							});
		            						}
		            					}
		            				);
	            }
			); // End .then()
		
	}
	$scope.deleteTeam();
	
	/**********************************************************
	 * Name:		setTeamId()
	 * Description:	Sets $scope.teamId for the current team
	 * Scope:		Internal
	 * Params in:	None
	 * Return:		
	 **********************************************************/
	function setTeamId()
	{
		for( var i=0; i<$scope.teams.length; i++ )
		{
			if( $scope.teamName == $scope.teams[i].name )
			{
				$scope.teamId = $scope.teams[i].id;
				//$scope.lrcode = $scope.teams[i].lrcode;
				break;
			}
		}
	}
	
	/**********************************************************
	 * Name:		updateTeamInMemory()
	 * Description:	Updates the in-memory list of teams with the
	 * 				updates the user just made.
	 * Scope:		Internal
	 * Params in:	team: Updated team info
	 * Return:		
	 **********************************************************/
/*	function updateTeamInMemory(team)
	{
		for( var i=0; i<$scope.teams.length; i++ )
		{
			if( team.id == $scope.teams[i].id )
			{
				$scope.teams[i].name = team.name;
				$scope.teams[i].lrcode = team.lrcode;
				break;
			}
		}
	}*/
	
	/**********************************************************
	 * Name:		delTeamFrmMemory()
	 * Description:	Updates the in-memory list of teams with the
	 * 				updates the user just made.
	 * Scope:		Internal
	 * Params in:	team: Updated team info
	 * Return:		
	 **********************************************************/
	function delTeamFrmMemory(team)
	{
		for( var i=0; i<$scope.teams.length; i++ )
		{
			if( team.id == $scope.teams[i].id )
			{
				// Found the team, remove it from the array
				$scope.teams.splice(i,1);
				$scope.thisTeam = null;
				break;
			}
		}
	}
});
