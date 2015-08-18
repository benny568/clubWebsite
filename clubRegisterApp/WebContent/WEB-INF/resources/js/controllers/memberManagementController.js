mmModule.controller('memberManagerController', function ($scope,$http,$attrs, dbService,ModalService, mmService) 
{	
	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

	$scope.showArray = [];
	$scope.TeamMembers = [];
	$scope.teams = [];
	$scope.viewTraining = false;
	$scope.viewTeamPlan = false;
	$scope.currentMember = {};
	$scope.editable = '';
	$scope.teamName = $attrs.team;
	$scope.mode = $attrs.mode;
	$scope.home = "http://" + site;
	console.log("## [memberManagerController] Controller initialized, mode: ", $scope.mode);

	/* (1) Get the members to display on the page*/
	
	if( $scope.mode == "All" )
		getAllMembers();
	else if( $scope.mode == "Team" )
		getTeams();
	
	if( $scope.mode != "None" )
	{
		mmService.getTeamDetails($scope.teamName, lrcode, $scope.teamId)
		.then( function(result){
			$scope.teamId = result.data.id;
			$scope.lrcode = result.data.lrcode;
			lrcode = $scope.lrcode;
			require("http://api.leaguerepublic.com/l/client/api/cs1.js");
			console.log("## [memberManagerController] -> getTeamDetails - returned: ", result);
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
		
		dbService.getAllMembers()
			.then( function(mems) {
				$scope.members = mems;
			});
	}
	
	
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
				console.log("[memberManagerController] -> getTeams() returned: ", $scope.teams);
				getMembers4team($scope.teamId);
				$scope.viewTraining = false;
		});
	}

	
	/**********************************************************
	 * Name:		toggleView()
	 * Description:	Used to make the member list for a team
	 * 				visable or hidden when the user clicks on it
	 * Scope:		Externally accessible
	 * Params in:	ID of the team in question.
	 * Return:		Sets $scope.showArray[teamId] to false.
	 **********************************************************/
	$scope.toggleView = function(teamId) {
		if( typeof teamId == 'undefined' )
			return
		$scope.showArray[teamId] = !$scope.showArray[teamId];
		console.log("## [memberManagerController] -> toggleView, value for team: ", teamId, " set to: ", $scope.showArray[teamId])
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
		console.log("## [memberManagerController] -> editMember ");		
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
		console.log("[memberManagerController] -> addMember..", $scope.teamId);		
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
		console.log("[memberManagerController] -> deleteMember: ", $scope.mode, member);
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
		$scope.teamId = teamId;
		$scope.showArray[teamId] = 'true';
		dbService.getMembers4team( teamId )
		.then( function(team) {
			$scope.TeamMembers[teamId] = team;
			console.log("[memberManagerController]->getTeams()->getMembers4team() returned: ", $scope.TeamMembers[teamId]);
			
		});
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
		if( typeof member == 'undefined' )
			return
			
		console.log("[setCurrentMember] called with: ", member);
		$scope.currentMember = member;
		
		if(typeof(member) != 'undefined')
		{
			$scope.displayMember = true;
			$scope.currentMember.age = calculateAge($scope.currentMember.dob);
			$scope.currentMember.position = toStringPosition($scope.currentMember.position);
		}
	}
	$scope.setCurrentMember();
	
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
