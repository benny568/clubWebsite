mmModule.controller(	'trainingViewController', 
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
	var loghdr = "## [trainingViewController]: ";
	log.debug(loghdr+"** LOADING **");
	
	// Training records cache
	$scope.data = DataService;
	$scope.teamId = $scope.data.dsCurrentTeam.id;
	$scope.thisSession = { sessionId:'', teamId:0, date:'', details:'' };
	
	
	function getSessionsForTeam()
	{
		dbService.getSessionsForTeam($scope.data.dsCurrentTeam.id)
		.then( function(result){
			$scope.data.dsSessionPlans = result;
			log.debug(loghdr+"-> getSessionsForTeam(", $scope.data.dsCurrentTeam.id, " - returned: ", $scope.data.dsSessionPlans);
			getSessionRecordsForTeam();
		});
	}
	
	function getSessionRecordsForTeam()
	{
		dbService.getSessionRecordsForTeam($scope.data.dsCurrentTeam.id)
		.then( function(result){
			$scope.sessionRecs = result;
			log.debug(loghdr+"-> getSessionRecordsForTeam - returned: ", $scope.sessionRecs);
			if( $scope.sessionRecs.length > 0 )
				sortTeamSessionsByMember();
			else
				setAllToAbsent();
		});
	}
	
	function setAllToAbsent()
	{
		var teamId = $scope.data.dsCurrentTeam.id;
		$scope.data.dsTrainingPerMember = new Array($scope.data.dsTeamMembers.length);
		
		for( var m=0; m<$scope.data.dsTeamMembers.length; m++ )
		{
			$scope.data.dsTrainingPerMember[m] = new Array($scope.data.dsSessionPlans.length);
			for( var i=0; i<$scope.data.dsSessionPlans.length; i++ )
			{
				$scope.data.dsTrainingPerMember[m][i]= {"teamid" : $scope.data.dsCurrentTeam.id, "memberid" : $scope.data.dsTeamMembers[m].id, "status": false};
			}
		}
	}
	
	function sortTeamSessionsByMember()
	{
		var teamId = $scope.data.dsCurrentTeam.id;
		$scope.data.dsTrainingPerMember = new Array($scope.data.dsTeamMembers.length);
		
		for( var m=0; m<$scope.data.dsTeamMembers.length; m++ ) // for each member in the team
		{
			$scope.data.dsTrainingPerMember[m] = new Array($scope.data.dsSessionPlans.length);
			for( var i=0; i<$scope.data.dsSessionPlans.length; i++ ) // for each session
			{
				$scope.data.dsTrainingPerMember[m][i]= {"teamid" : $scope.data.dsCurrentTeam.id, "memberid" : $scope.data.dsTeamMembers[m].id, "sessionId" : $scope.data.dsSessionPlans[i].sessionId, "status" : false};
				
				for( var s=0; s<$scope.sessionRecs.length; s++ ) // Check through all the records for that member for that session
				{
					if( ($scope.sessionRecs[s].memberId == $scope.data.dsTeamMembers[m].id) && 
						($scope.sessionRecs[s].teamId == $scope.data.dsTeamMembers[m].team) && 
						($scope.data.dsSessionPlans[i].sessionId == $scope.sessionRecs[s].sessionId) )
					{
						log.debug(loghdr+"-> sortTeamSessionsByMember - found match: ", $scope.data.dsTeamMembers[m].name, " : ", $scope.sessionRecs[s] );
						$scope.data.dsTrainingPerMember[m][i] = $scope.sessionRecs[s];
						break;
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
		log.debug(loghdr+"-> toggleTrainingVew, value set to: ", $scope.viewTraining);
		
		if( $scope.viewTraining == true )
		{
			getSessionsForTeam();			
			//getSessionRecordsForTeam();
			$scope.TeamMembers = $scope.data.dsTeamMembers;
		}
		/*if( $scope.data.dsTrainingPerMember == null )
			sortTeamSessionsByMember();*/
		
	}
	$scope.toggleTrainingView();
	
	
	$scope.changeTrainingAttendence = function(sessionid, memberid, status)
	{
		if(loaded == undefined)
			return;
		log.debug(loghdr+"-> changeTrainingAttendence, currently: " + status + ", for session["+sessionid+"], Team["+$scope.data.dsCurrentTeam.id+"], member["+memberid+"].");
		dbService.setMemberTrainingRecForSession(sessionid, $scope.data.dsCurrentTeam.id, memberid, !status)
		.then(function(result){
			log.debug(loghdr+"-> changeTrainingAttendence, Status updated to: ", !status);
			var memindex = getMemIndex(memberid);
			var sessindex = getSessionIndex(sessionid);
			$scope.data.dsTrainingPerMember[getMemIndex(memberid)][getSessionIndex(sessionid)].status = !status;
		});

	}
	$scope.changeTrainingAttendence();
	
	function getMemIndex( memberid )
	{
		for( var i=0; i<$scope.data.dsTeamMembers.length; i++ )
		{
			if( $scope.data.dsTeamMembers[i].id == memberid )
				return i;
		}
		return 0;
	}
	
	function getSessionIndex( sessionid )
	{
		for( var i=0; i<$scope.data.dsSessionPlans.length; i++ )
		{
			if( $scope.data.dsSessionPlans[i].sessionId == sessionid )
				return i;
		}
		return 0;
	}
	
	/**********************************************************
	 * Name:		addTrainingSession()
	 * Description:	Add new training session
	 * 				to the server.
	 * Scope:		Externally accessible
	 * Params in:	
	 * Return:		
	 **********************************************************/
	$scope.addTrainingSession = function(teamId)
	{
		if( typeof teamId == 'undefined')
			return;
		log.debug(loghdr+"-> addTrainingSession(" + teamId + ")");
		$scope.teamId = teamId;
		
		ModalService.showModal({
			templateUrl: 'addTrainingSessionModal.html',
			controller: "AddTrainingSessionController",
			input: {team: $scope.data.dsCurrentTeam}
		})
		.then(	function(modal) 
				{
		            modal.element.modal();
		            modal.close.then(	function(result) 
		            					{
		            						if( result.op == 'save' )
		            						{
		            							$scope.thisSession = result.session;
		            							$scope.thisSession.teamId = $scope.data.dsCurrentTeam.id;
		            							//$scope.thisSession.sessionId = '';
		            							dbService.addTrainingSession( $scope.thisSession ).then( function(result){
		            								log.debug(loghdr+"-> addTrainingSession: ", $scope.thisSession);
		            								//applyMemberAdd(scope);
		            							} );
		            						}
		            					}
		            				);
	            }
			); // End .then()
	}
	$scope.addTrainingSession();
	
	var loaded = true;
}]);