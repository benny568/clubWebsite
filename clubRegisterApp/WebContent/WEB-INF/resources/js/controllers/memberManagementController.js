mmModule.controller(	'memberManagerController', 
						[
						 	'$scope', 
						 	'$http', 
						 	'$routeParams', 
						 	'ModalService', 
						 	'dbService', 
						 	'mmService', 
						 	'DataService', 
						 	function( $scope,$http,$routeParams, ModalService, dbService, mmService,DataService ) 
{	
	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

	var logdepth = '';
	var loghdr = logdepth + '# memberManagerController: ';
	log.debug(loghdr + "Controller initialized");
	$scope.showArray = [];
	$scope.data = DataService;
	$scope.data.dsCurrentMember = {name: "", address: "", phone: "", phone2: "", email:"", dob:"", amount: 0, receiptid:"", team: 0, team2: 0,team3: 0, position: 0, position2: 0, position3: 0, lid: 0, favteam: "", favplayer: "", sappears: 0, sassists: 0, sgoals: 0, photo: "", achievements: "", status: ""};

	/* (1) Get the members to display on the page*/
	log.trace("## Calling getTeams()");
	
	//log.debug(loghdr + "THE USER IS:", $scope.thisUser);
	
	//getUserDetails();
	getTeams();
	getAllMembers();
	
	
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
				$scope.data.dsAllMembers = mems;
				log.trace("## getAllMembers() returned: ", $scope.data.dsAllMembers);
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
		log.debug(loghdr + "-> getTeams()");
		log.trace(loghdr + "   | calling dbService.getTeams()..")
		dbService.getTeams()
			.then( function(teams) {
				log.debug(loghdr + " <- getTeams() returned: ", teams);
				$scope.data.dsTeams = teams;
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
	$scope.toggleView = function(teamId) 
	{
		if( typeof teamId == 'undefined' )
			return;
		log.trace("## -> toggleView("+teamId+")");
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
		log.trace("## [memberManagerController] calling editMember()...");		

		if( typeof member.position == 'number' )
			member.position = $scope.data.dsPosition[member.position];
		if( typeof member.team == 'number' )
			member.team != 0 ? member.team = getTeamNameFrmId(member.team) : member.team = "None";
		if( typeof member.position2 == 'number' )
			member.position2 = $scope.data.dsPosition[member.position2];
		if( typeof member.team2 == 'number' )
			member.team2 != 0 ? member.team2 = getTeamNameFrmId(member.team2) : member.team2 = "None";
		if( typeof member.position3 == 'number' )
			member.position3 = $scope.data.dsPosition[member.position3];
		if( typeof member.team3 == 'number' )
			member.team3 != 0 ? member.team3 = getTeamNameFrmId(member.team3) : member.team3 = "None";
		
		$scope.data.dsCurrentMember = member;
		
		 ModalService.showModal({
	            templateUrl: 'memberModal.html',
	            controller: "ModalController",
	            inputs: { member : member, modalType: "Edit" }
	        }).then(function(modal) {
	            modal.element.modal();
	            modal.close.then(function(result) {
	            	var newMem = result;
	            	var diff = difference( newMem, member);
	            	if(diff)
	            	{
	            		if( typeof newMem.position != 'number' )
	            			newMem.position = $scope.data.dsPosition.indexOf(newMem.position);
	            		if( typeof newMem.team != 'number' )
	            			newMem.team = getTeamIdFrmName(newMem.team);
	            		
	            		if( typeof newMem.position2 != 'number' )
	            			newMem.position2 = $scope.data.dsPosition.indexOf(newMem.position2);
	            		if( typeof newMem.team2 != 'number' )
	            			newMem.team2 = getTeamIdFrmName(newMem.team2);
	            		
	            		if( typeof newMem.position3 != 'number' )
	            			newMem.position3 = $scope.data.dsPosition.indexOf(newMem.position3);
	            		if( typeof newMem.team3 != 'number' )
	            			newMem.team3 = getTeamIdFrmName(newMem.team3);
	            		
		                dbService.updateMember( newMem )
		        		.then( function(result) {
		        			applyMemberChange($scope.data.dsAllMembers, newMem);
		        			//$scope.data.dsCurrentMember = newMem;
		        			console.log("## [mmService] -> editMember: after update: ", $scope.data.dsCurrentMember);
		        		});
	            	}
	        	});
            });
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
		log.trace("[memberManagerController] -> addMember, teamId: ", $scope.teamId);
		
		// Clear the current member array first
		$scope.data.dsCurrentMember = [];

		ModalService.showModal({templateUrl: 'memberModal.html',controller: "AddMemberController"})
		.then(	function(modal) 
				{
		            modal.element.modal();
		            modal.close.then(	function(result) 
		            					{
		            						if( result.op == 'save')
		            						{
		            							$scope.thisMember = result.member;
		            							$scope.thisMember.position = convertPosToInt(result.member.position);
		            							$scope.thisMember.team = convertTeamToInt(result.member.team);
		            							dbService.addMember( $scope.thisMember ).then( function(result){
		            								console.log("[memberManagerController] - addMember (reurned from dbService): ", $scope.thisMember);
		            								applyMemberAdd($scope.data.dsTeamMembers, $scope.thisMember);
		            							} );
		            						}
		            					}
		            				);
	            }
			); // End .then()
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
		log.trace("[memberManagerController] -> deleteMember, member: ", member);
		
		 ModalService.showModal({
	            templateUrl: 'delConfirmModal.html',
	            controller: "DelMemberController",
	            inputs: { member : member,
	                	  modalHeader: 'member'
	                	}
	        }).then(function(modal) {
	            modal.element.modal();
	            modal.close.then(function(del) {
	            	if(del)
	            	{
		                dbService.deleteMember( member )
		        		.then( function(result) {
		        			applyMemberDel($scope.data.dsAllMembers, member);
		        		});
	            	}
	        	});
            });
	}
	$scope.deleteMember();
	
	/**********************************************************
	 * Name:		setTeamId()
	 * Description:	Sets $scope.teamId for the current team
	 * Scope:		Internal
	 * Params in:	None
	 * Return:		
	 **********************************************************/
	function setTeamId()
	{
		log.debug("##    |->setTeamId()");
		for( var i=0; i<$scope.data.dsTeams.length; i++ )
		{
			if( $scope.data.dsCurrentTeam.name === $scope.teams[i].name )
			{
				$scope.data.dsCurrentTeam.id = $scope.teams[i].id;
				log.trace("##    -- teamId set to: "+ $scope.data.dsCurrentTeam.id);
				break;
			}
		}
		log.debug("##    |<-setTeamId()");
	}

	/**********************************************************
	 * Name:		getMembers4team()
	 * Description:	Get members for the specified team
	 * Scope:		Externally accessible
	 * Params in:	teamId: ID of the team in question
	 * Return:		
	 **********************************************************/
	$scope.getMembers4team = function( teamId ) 
	{
		if( teamId === undefined )
			return;
		getMembers4team(teamId);
	}
	$scope.getMembers4team();
	
	
	/**********************************************************
	 * Name:		getTeamIdFrmName()
	 * Description:	Convert a team name to it's id
	 * Scope:		Externally accessible via the service
	 * Params in:	scope: The parents scope
	 * 				
	 * Return:		The team id
	 **********************************************************/
    function getTeamIdFrmName(sTeam)
    {
    	var iTeamId = 0;
    	
    	for( var i=0; i<$scope.data.dsTeams.length; i++ )
    	{
    		if( $scope.data.dsTeams[i].name == sTeam )
    		{
    			iTeamId = $scope.data.dsTeams[i].id;
    			return iTeamId;
    		}
    	}
    	
    	return iTeamId;
    }
    
    
    /**********************************************************
	 * Name:		getTeamNameFrmId()
	 * Description:	Convert a team name to it's id
	 * Scope:		Externally accessible via the service
	 * Params in:	scope: The parents scope
	 * 				
	 * Return:		The team id
	 **********************************************************/
    function getTeamNameFrmId(iTeam)
    {
    	var sTeamId = "";
    	
    	for( var i=0; i<$scope.data.dsTeams.length; i++ )
    	{
    		if( iTeam == i )
    		{
    			sTeamId = $scope.data.dsTeams[i - 1].name;
    			return sTeamId;
    		}
    	}
    	
    	return sTeamId;
    }
    
    function getMembers4team(teamId)
	{
		log.debug(loghdr + "##    |-> getMembers4team("+teamId+")");
		$scope.showArray[teamId] = 'true';
		
		// Clear the array first
		$scope.data.dsTeamMembers[teamId] = [];
		// Populate the Team members from the complete list of members
		for( var i=0; i<$scope.data.dsAllMembers.length; i++ )
		{
			if( $scope.data.dsAllMembers[i].team == teamId )
			{
				// Find the members for this team and add them to the array
				$scope.data.dsTeamMembers[teamId].push( $scope.data.dsAllMembers[i] );
				log.trace(loghdr + "      |- found team member (" + $scope.data.dsAllMembers[i].name + "), adding to array..");
			}
		}
		log.debug(loghdr + "##    |<-getMembers4team()");
	}
    
	function getMembers4teamOLD(teamId)
	{
		log.debug("##    |-> getMembers4team("+teamId+")");
		$scope.data.dsCurrentTeam.id = teamId;
		$scope.showArray[teamId] = 'true';
		log.trace("##    |-- Calling dbService.getMembers4team("+teamId+")");
		dbService.getMembers4team( teamId )
		.then( function(team) {
			$scope.data.dsTeamMembers[teamId] = team;
			log.trace("   |-- [memberManagerController]->getTeams()->getMembers4team() returned: ", $scope.data.dsTeamMembers[teamId]);
			
		});
		log.debug("##    |<-getMembers4team()");
	}

	function applyMemberChange(members, member)
	{
		console.log("## [mmControler] -> applyMemberChange");

		var index = findMemberIndex( members, member );

		if( index === -1 )
		{
			log.debug("###### ERROR: applyMemberChange - member not found!");
			return;
		}
		
		members[index].name = member.name;
		members[index].address = member.address;
		members[index].phone = member.phone;
		members[index].dob = member.dob;
		members[index].email = member.email;
		members[index].amount = member.amount;
		members[index].team = member.team;
		members[index].position = member.position;
		members[index].lid = member.lid;
		members[index].favteam = member.favteam;
		members[index].favplayer = member.favplayer;
		members[index].sappears = member.sappears;
		members[index].sassists = member.sassists;
		members[index].sgoals = member.sgoals;
		members[index].photo = member.photo;
		members[index].achievments = member.achievments;
	}
	
	function applyMemberDel( members, member )
	{
		console.log("## [mmControler] -> applyMemberDel");

		var index = findMemberIndex( members, member );

		if( index === -1 )
		{
			log.debug("###### ERROR: applyMemberDel - member not found!");
			return;
		}		
		else if( index > -1 ) 
		{   // Delete the member at index
		    members.splice(index, 1);
		}
	}
	
	function applyMemberAdd( members, member )
	{
		console.log("## [memberManagerController] -> applyMemberAdd");
		
		if( $scope.data.dsTeamMembers[member.team] === undefined )
			getMembers4team(member.team);

		var index = findMemberIndex( $scope.data.dsTeamMembers[member.team], member );

		if( index === -1 )
		{// Add the member if it doesn't exits
		    members[member.team].push( member );
		}		
		else if( index > -1 ) 
		{
			log.debug("###### ERROR: applyMemberAdd - member not found!");
		}
	}
	
	function findMemberIndex( members, member )
	{
		console.log("## [memberManagerController] -> findMemberIndex");
		var index = -1;
		
		if( typeof members !== undefined )
		{
			for( var i=0; i<members.length; i++ )
			{
				if( members[i].id === member.id )
				{
					index = i;
					break;
				}
			}
		}

		return index;
	}
	
	function difference(m1, m2) {
	    var diff = false;
	    Object.getOwnPropertyNames(m1).forEach(function(val, idx, array) {
	    	  log.trace(val + ' -> ' + m1[val]);
	    	if( m1[val] != m2[val] )
	    		  diff = true;
	    });
	        
	    return diff;
	}
	
	function convertPosToInt( sPos )
	{
		return $scope.data.dsPosition.indexOf(sPos);
	}
	
	function convertTeamToInt( sTeam )
	{
		for( var i=0; i<$scope.data.dsTeams.length; i++ )
		{
			if( $scope.data.dsTeams[i].name == sTeam )
				return $scope.data.dsTeams[i].id;
		}
		return 0;
	}
	
}]); // End of memberManagerController
