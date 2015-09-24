mmModule.controller('memberManagerController', function ($scope,$http,$attrs, dbService,ModalService, mmService) 
{	
	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

	$scope.showArray = [];
	$scope.TeamMembers = [];
	$scope.teams = [];
	$scope.viewTraining = false;
	$scope.viewTeamPlan = false;
	$scope.currentMember = {};
	$scope.teamId = 0;
	$scope.editable = '';
	$scope.teamName = $attrs.team;
	$scope.mode = $attrs.mode;
	$scope.home = _home;
	$scope.itsPosition = itsPosition;
	log.debug("## [memberManagerController] Controller initialized, mode: " + $scope.mode + ", Team: " + $scope.teamName);

	/* (1) Get the members to display on the page*/
	log.trace("## Calling getTeams()");
	getTeams();
	
	if( $scope.mode == "All" )
		getAllMembers();
	
	if( $scope.mode != "None" )
	{
		log.trace("## mode is None, calling getTeamDetails..");
		mmService.getTeamDetails($scope.teamName, lrcode, $scope.teamId)
		.then( function(result){
			$scope.teamId = result.data.id;
			$scope.lrcode = result.data.lrcode;
			$scope.team = result.data;
			gTeamId = $scope.teamId; // Set the global team id for use in other controllers
			lrcode = $scope.lrcode;
			require("http://api.leaguerepublic.com/l/client/api/cs1.js");
			log.trace("## [memberManagerController] -> getTeamDetails - returned: ", result);
		});
	}
	
	/**********************************************************
	 * Name:		getAllMembers()
	 * Description:	Retrieves all club members from the server
	 * Scope:		Internal
	 * Params in:	None
	 * Return:		Sets $scope.members
	 **********************************************************/
	function getAllMembers(){
		
		log.trace("## -> getAllMembers()");
		log.trace("##    | calling dbService.getAllMembers()..")
		dbService.getAllMembers()
			.then( function(mems) {
				$scope.members = mems;
				log.trace("## getAllMembers() returned: ", $scope.members);
			});
		log.trace("## <- getAllMembers()");
	}
	
	
	/**********************************************************
	 * Name:		getTeams()
	 * Description:	Retrieves a list of teams from the server
	 * Scope:		Internal
	 * Params in:	None
	 * Return:		Sets $scope.teams
	 **********************************************************/
	function getTeams(){
		log.trace("## -> getTeams()");
		log.trace("##    | calling dbService.getTeams()..")
		dbService.getTeams()
			.then( function(teams) {
				$scope.teams = teams;
				gTeams = teams;
				setTeamId();
				log.trace("[memberManagerController] -> getTeams() returned: ", $scope.teams);
				getMembers4team($scope.teamId);
				$scope.viewTraining = false;
		});
		log.trace("## <- getTeams()");
	}

	
	/**********************************************************
	 * Name:		toggleView()
	 * Description:	Used to make the member list for a team
	 * 				visable or hidden when the user clicks on it
	 * Scope:		Externally accessible
	 * Params in:	ID of the team in question.
	 * Return:		Sets $scope.showArray[teamId] to false.
	 **********************************************************/
	$scope.toggleView = function(teamId) 
	{
		log.trace("## -> toggleView("+teamId+")");
		if( typeof teamId == 'undefined' )
			return;
		$scope.showArray[teamId] = !$scope.showArray[teamId];
		log.trace("##    showArray["+teamId+") set to: "+$scope.showArray[teamId]);
		log.trace("## <- toggleView()");
	}
	$scope.toggleView();
	
	
	/**********************************************************
	 * Name:		editMember()
	 * Description:	Edit an existing member, update to server
	 * 				and update local in-memory copy
	 * Scope:		Externally accessible
	 * Params in:	thisMember: the member to edit
	 * Return:		Sets $scope.TeamMembers[team].<this member>
	 **********************************************************/	
	$scope.editMember = function(member)
	{
		if( typeof member == 'undefined' )
			return
		log.trace("## [memberManagerController] calling mmService.editMember()...");		
		mmService.editMember($scope,member);
	}
	$scope.editMember();
	
	
	/**********************************************************
	 * Name:		addMember()
	 * Description:	Add new member, update local memory and send
	 * 				to the server.
	 * Scope:		Externally accessible
	 * Params in:	goNogo: avoids it being called when the
	 * 				script is loaded
	 * Return:		Adds the member on to the end of the members
	 * 				array for the team specified when adding,
	 * 				$scope.TeamMembers[member.team]
	 **********************************************************/
	$scope.addMember = function(teamId) 
	{
		if( typeof teamId == 'undefined')
			return;
		$scope.teamId = teamId;
		log.trace("[memberManagerController] calling mmServcice.addMember, teamId: ", $scope.teamId);		
		mmService.addMember( $scope );
    };
	$scope.addMember();

	
	/**********************************************************
	 * Name:		deleteMember()
	 * Description:	Delete a member, update local memory and
	 * 				remove from the server.
	 * Scope:		Externally accessible
	 * Params in:	thisMember: member to delete
	 * Return:		Deletes the entry from the members array,
	 * 				$scope.TeamMembers[team]
	 **********************************************************/
	$scope.deleteMember = function(member)
	{
		if( typeof member == 'undefined' )
			return;
		log.trace("[memberManagerController] calling mmService.deleteMember with mode, member: ", $scope.mode, member);
		mmService.deleteMember($scope, member);
	}
	$scope.deleteMember();
	
	
	/**********************************************************
	 * Name:		getMembers4team()
	 * Description:	Get members for the specified team
	 * Scope:		Externally accessible
	 * Params in:	teamId: ID of the team in question
	 * Return:		
	 **********************************************************/
	$scope.getMembers4team = function( teamId ) {
		
		getMembers4team(teamId);
	}
	$scope.getMembers4team();
	
	function getMembers4team(teamId)
	{
		log.trace("## -> getMembers4team("+teamId+")");
		$scope.teamId = teamId;
		$scope.showArray[teamId] = 'true';
		log.trace("## Calling dbService.getMembers4team("+teamId+")");
		dbService.getMembers4team( teamId )
		.then( function(team) {
			$scope.TeamMembers[teamId] = team;
			gTeamMembers = team;
			log.trace("[memberManagerController]->getTeams()->getMembers4team() returned: ", $scope.TeamMembers[teamId]);
			
		});
		log.trace("## <- getMembers4team()");
	}
	
	
	/**********************************************************
	 * Name:		setCurrentMember()
	 * Description:	Set the member to display in the details box
	 * Scope:		Externally accessible
	 * Params in:	member: The member in question
	 * Return:		
	 **********************************************************/
	$scope.setCurrentMember = function(member)
	{
		log.trace("## -> setCurrentMember("+member+")");
		if( typeof member == 'undefined' )
			return
			
		log.trace("[setCurrentMember] called with: ", member);
		$scope.currentMember = member;
		
		if(typeof(member) != 'undefined')
		{
			$scope.displayMember = true;
			$scope.currentMember.age = calculateAge($scope.currentMember.dob);
			if( typeof $scope.currentMember.position == 'number' )
				$scope.currentMember.position = itsPosition[$scope.currentMember.position];
		}
		log.trace("## <- setCurrentMember()");
	}
	$scope.setCurrentMember();
	
	/**********************************************************
	 * Name:		editTeamNB()
	 * Description:	Set the member to display in the details box
	 * Scope:		Externally accessible
	 * Params in:	member: The member in question
	 * Return:		
	 **********************************************************/
	$scope.editTeamNB = function(team)
	{
		log.trace("## -> editTeamNB("+team+")");
		if( typeof team == 'undefined' )
			return
		log.trace("##    |- calling mmService.editTeamNB("+$scope.team+")");
		mmService.editTeamNB($scope,team);
		log.trace("## <- editTeamNB()");
	}
	$scope.editTeamNB();
	
	
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
	 * Name:		toStringPosition()
	 * Description:	Converts the int value to a string for 
	 * 				position
	 * Scope:		Internal
	 * Params in:	Int version of the position
	 * Return:		String version of the position
	 **********************************************************/
	function toStringPosition(iPos)
	{
		var sPos = "Not Defined";
		
		switch( iPos )
		{
		case 0:
			sPos = "Manager";
			break;
		case 1:
			sPos = "Goalkeeper";
			break;
		case 2:
			sPos = "Full Back";
			break;
		case 3:
			sPos = "Full Back";
			break;
		case 4:
			sPos = "Center Half";
			break;
		case 5:
			sPos = "Center Half";
			break;
		case 6:
			sPos = "Mid Field";
			break;
		case 7:
			sPos = "Winger";
			break;
		case 8:
			sPos = "Winger";
			break;
		case 9:
			sPos = "Striker";
			break;
		case 10:
			sPos = "CAM";
			break;
		case 11:
			sPos = "Striker";
			break;
		case 99:
			sPos = "Captain";
			break;
		}
		
		return sPos;
	}

	
	function calculateAge(dob)
	{
		var today = new Date();
		var birthday = new Date(dob);
		var age = 0;
		
		age = (today.getFullYear() - birthday.getFullYear() - 1);
		if( today.getMonth() > birthday.getMonth() )
			age++;
		else if( (today.getMonth() == birthday.getMonth()) && (today.getDate() >= birthday.getDate) )
			age++;
		
		return age;
		
	}
	
	function require(script) 
	{
	    $.ajax({
	        url: script,
	        dataType: "script",
	        async: false,           // <-- This is the key
	        success: function () {
	            // all good...
	        },
	        error: function () {
	            throw new Error("Could not load script " + script);
	        }
	    });
	}

}); // End of memberManagerController
