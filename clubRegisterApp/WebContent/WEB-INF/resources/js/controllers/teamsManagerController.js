mmModule.controller(	'teamsManagerController', 
						[
						 	'$scope', 
						 	'ModalService', 
						 	'dbService', 
						 	'DataService', 
						 	function(
						 				$scope, 
						 				ModalService, 
						 				dbService, 
						 				DataService
						 			) 
{
	$scope.home = _home;
	var logdepth = '----';
	var loghdr = logdepth + '# teamsViewController: ';
	log.debug(loghdr + "Controller initialized");
	$scope.data = DataService;
	var thisTeam = {};
	
	// (1) Get the teams from the server
	getTeams();
	
	// (2) Get the currently logged in user details
	getUserDetails();
	
	
	/**********************************************************
	 * Name:		getTeams()
	 * Description:	Retrieves a list of teams from the server
	 * Scope:		Internal
	 * Params in:	None
	 * Return:		Sets $scope.teams
	 **********************************************************/
	function getTeams(){
		log.debug(loghdr + "-> getTeams()");
		log.trace(loghdr + "   | calling dbService.getTeams()..")
		dbService.getTeams()
			.then( function(teams) {
				log.debug(loghdr + " <- getTeams() returned: ", teams);
				$scope.data.dsTeams = teams;
		});
	}
	
	/**********************************************************
	 * Name:		getUserDetails()
	 * Description:	Get the currently logged in user details
	 * Scope:		Internally accessible
	 * Params in:	None
	 * Return:		user details
	 **********************************************************/
	function getUserDetails()
	{
		log.debug("## [teamsManagerController] -> getUserDetails()");
		dbService.getCurrentUser()
		.then(function(user){
			console.log("## [teamsManagerController] -> getUserDetails: ", user );
			$scope.thisUser = user;
			gThisUser = user
			if( $scope.thisUser.avatar == "" )
				$scope.thisUser.avatar = "resources/images/avatars/default.png";
			log.debug("## [teamsManagerController] <- getUserDetails()");
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
		            							$scope.data.dsCurrentTeam = result.team;
		            							dbService.addTeam( $scope.data.dsCurrentTeam ).then( function(result){
		            								console.log("[teamsManagerController] - addTeam: ", $scope.data.dsCurrentTeam);
		            								$scope.data.dsTeams.push($scope.data.dsCurrentTeam);
		            							} );
		            						}
		            					}
		            				);
	            }
			); // End .then()
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
		            							thisTeam = result.team;
		            							dbService.updateTeam( result.team ).then( function(result){
		            								updateTeamInMemory(thisTeam);
		            								console.log("[teamsManagerController] - editTeam - updates: ", thisTeam);
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

		$scope.data.dsCurrentTeam = team;
		console.log("## [teamsManagerController] -> (deleteTeam) Requested to delete team: ", $scope.data.dsCurrentTeam);
		
		ModalService.showModal({
			templateUrl: 'delTeamConfirmModal.html',
			controller: "DeleteTeamController",
            inputs: { team : $scope.data.dsCurrentTeam }
		}).then(	function(modal) 
				{
		            modal.element.modal();
		            modal.close.then(	function(result) 
		            					{
		            						if( result.op )
		            						{
		            							dbService.deleteTeam( $scope.data.dsCurrentTeam ).then( function(result){
		            								console.log("[teamsManagerController] - deleteTeam - deleted: ", $scope.data.dsCurrentTeam);
		            								delTeamFrmMemory($scope.data.dsCurrentTeam);
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
	function updateTeamInMemory(team)
	{
		for( var i=0; i<$scope.data.dsTeams.length; i++ )
		{
			if( team.id == $scope.data.dsTeams[i].id )
			{
				$scope.data.dsTeams[i].name = team.name;
				$scope.data.dsTeams[i].lrcode = team.lrcode;
				break;
			}
		}
	}
	
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
		for( var i=0; i<$scope.data.dsTeams.length; i++ )
		{
			if( team.id == $scope.data.dsTeams[i].id )
			{
				// Found the team, remove it from the array
				$scope.data.dsTeams.splice(i,1);
				break;
			}
		}
	}

}]);
