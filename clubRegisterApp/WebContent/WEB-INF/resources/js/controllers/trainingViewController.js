mmModule.controller('trainingViewController', function ($scope,$http,dbService,ModalService,$attrs) 
{
	console.log("## [trainingViewController] ** LOADING **");
	
	// Training records cache
	$scope.trainingRecords = [];
	$scope.trainingPerMember = null;
	$scope.teamId = gTeamId;
	$scope.thisSession = { sessionId:'', teamId:0, date:'', details:'' };
	$scope.sessionPlans = [];
	
	
	function getSessionsForTeam()
	{
		dbService.getSessionsForTeam(gTeamId)
		.then( function(result){
			$scope.sessionPlans = result;
			console.log("## [trainingViewController] -> getSessionsForTeam(", gTeamId, " - returned: ", $scope.sessionPlans);
			getSessionRecordsForTeam();
		});
	}
	
	function getSessionRecordsForTeam()
	{
		dbService.getSessionRecordsForTeam(gTeamId)
		.then( function(result){
			$scope.sessionRecs = result;
			console.log("## [trainingViewController] -> getSessionRecordsForTeam - returned: ", $scope.sessionRecs);
			if( $scope.sessionRecs.length > 0 )
				sortTeamSessionsByMember();
			else
				setAllToAbsent();
		});
	}
	
	function setAllToAbsent()
	{
		var teamId = gTeamId;
		$scope.trainingPerMember = new Array(gTeamMembers.length);
		
		for( var m=0; m<gTeamMembers.length; m++ )
		{
			$scope.trainingPerMember[m] = new Array($scope.sessionPlans.length);
			for( var i=0; i<$scope.sessionPlans.length; i++ )
			{
				$scope.trainingPerMember[m][i]= {"teamid" : gTeamId, "memberid" : gTeamMembers[m].id, "status": false};
			}
		}
	}
	
	function sortTeamSessionsByMember()
	{
		var teamId = gTeamId;
		$scope.trainingPerMember = new Array(gTeamMembers.length);
		
		for( var m=0; m<gTeamMembers.length; m++ ) // for each member in the team
		{
			$scope.trainingPerMember[m] = new Array($scope.sessionPlans.length);
			for( var i=0; i<$scope.sessionPlans.length; i++ ) // for each session
			{
				$scope.trainingPerMember[m][i]= {"teamid" : gTeamId, "memberid" : gTeamMembers[m].id, "sessionId" : $scope.sessionPlans[i].sessionId, "status" : false};
				
				for( var s=0; s<$scope.sessionRecs.length; s++ ) // Check through all the records for that member for that session
				{
					if( ($scope.sessionRecs[s].memberId == gTeamMembers[m].id) && 
						($scope.sessionRecs[s].teamId == gTeamMembers[m].team) && 
						($scope.sessionPlans[i].sessionId == $scope.sessionRecs[s].sessionId) )
					{
						console.log("## [trainingViewController] -> sortTeamSessionsByMember - found match: ", gTeamMembers[m].name, " : ", $scope.sessionRecs[s] );
						$scope.trainingPerMember[m][i] = $scope.sessionRecs[s];
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
		console.log("## [trainingViewController] -> toggleTrainingVew, value set to: ", $scope.viewTraining);
		
		if( $scope.viewTraining == true )
		{
			getSessionsForTeam();			
			//getSessionRecordsForTeam();
			$scope.TeamMembers = gTeamMembers;
		}
		/*if( $scope.trainingPerMember == null )
			sortTeamSessionsByMember();*/
		
	}
	$scope.toggleTrainingView();
	
	
	$scope.changeTrainingAttendence = function(sessionid, memberid, status)
	{
		if(loaded == undefined)
			return;
		console.log("## [trainingViewController] -> changeTrainingAttendence, currently: " + status + ", for session["+sessionid+"], Team["+gTeamId+"], member["+memberid+"].");
		dbService.setMemberTrainingRecForSession(sessionid, gTeamId, memberid, !status)
		.then(function(result){
			console.log("## [trainingViewController] -> changeTrainingAttendence, Status updated to: ", !status);
			var memindex = getMemIndex(memberid);
			var sessindex = getSessionIndex(sessionid);
			$scope.trainingPerMember[getMemIndex(memberid)][getSessionIndex(sessionid)].status = !status;
		});

	}
	$scope.changeTrainingAttendence();
	
	function getMemIndex( memberid )
	{
		for( var i=0; i<gTeamMembers.length; i++ )
		{
			if( gTeamMembers[i].id == memberid )
				return i;
		}
		return 0;
	}
	
	function getSessionIndex( sessionid )
	{
		for( var i=0; i<$scope.sessionPlans.length; i++ )
		{
			if( $scope.sessionPlans[i].sessionId == sessionid )
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
		console.log("## [trainingViewController] -> addTrainingSession");
		$scope.teamId = teamId;
		
		ModalService.showModal({templateUrl: 'addTrainingSessionModal.html',controller: "AddTrainingSessionController"})
		.then(	function(modal) 
				{
		            modal.element.modal();
		            modal.close.then(	function(result) 
		            					{
		            						if( result.op )
		            						{
		            							$scope.thisSession = result.session;
		            							$scope.thisSession.teamId = gTeamId;
		            							//$scope.thisSession.sessionId = '';
		            							dbService.addTrainingSession( $scope.thisSession ).then( function(result){
		            								console.log("[trainingViewController] - addTrainingSession: ", $scope.thisSession);
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
});