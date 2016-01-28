mmModule.service('DataService', function($rootScope) 
{
	var logdepth = '    ';
	var loghdr = logdepth + '# DataService: ';
	log.debug(loghdr + "Service initialized");
	var self = this;
	this.dsTeams = [];
	this.dsTeamMembers = [];
	this.dsCurrentTeam = {};
	this.dsSessionPlans = [];
	this.dsTrainingRecords = [];
	this.dsTrainingPerMember = [];
	this.dsCurrentMember = {};
	this.dsAllMembers = [];
	this.dsCurrentUser = {};
	this.dsPosition = [ 'Manager','Goalkeeper','Full Back','Center Half','Mid Field','CAM','Winger','Striker', 'Chairman', 'Secretary', 'Treasurer', 'PRO', 'Committee'];

	this.hasPermission = 
	/**********************************************************
	 * Name:		hasPermission()
	 * Description:	Check the user's permission to perform the
	 * 				given action
	 * Scope:		Externally accessible
	 * Params in:	action: the action being requested
	 * Return:		true or false depending on the permissions
	 **********************************************************/
	function hasPermission(action, params)
	{
		var team = '';
		var allow = false;
		var index = 0;

		if( typeof action === undefined || params === undefined )
			return;
		
		log.trace(loghdr + " -> hasPermission("+action+")");
		for( var r=0; r<gThisUser.roles.length; r++ )
		{
			if( gThisUser.roles[r] === "ROLE_SUPER" )
			{
				// Super user has permissions to do anything
				return true;
			}
		}
		switch(action)
		{
			case 'MANAGE_TEAM':
				team = params;
				log.trace(loghdr + " -> checking if you have permissions for team ["+team+"]");
				// Check if the user is a manager of this team
				for( var i=0; i<gThisUser.permissions.teams.length; i++ )
				{
					for( var t=0; t<gTeams.length; t++ )
					{
						if( gTeams[t].id === gThisUser.permissions.teams[i] )
						{
							index = t;
							break;
						}
					}

					log.trace(loghdr + " -> checking team ["+gTeams[index].name+"]");
					if( gTeams[index].name === team )
					{
						log.trace(loghdr + " -> checking if user is manager for ["+gTeams[index].name+"]");
						if( gThisUser.permissions.positions[i] == 0 )
						{
							allow = true;
							break;
						}
					}
				}
				break;
				
			case 'ADD_TEAM':
			case 'EDIT_TEAM':
			case 'DEL_TEAM':
				for( var r=0; r<gThisUser.roles.length; r++ )
				{
					log.trace(loghdr + "     Checking ["+gThisUser.roles[r]+"]");
					if( gThisUser.roles[r] === "ROLE_SUPER" )
					{
						log.debug(loghdr + "     User has SUPER role")
						// Super user has permissions to do anything
						allow = true;
						break;
					}
				}
				break;
				
			case 'ADD_USER':
			case 'EDIT_USER':
			case 'DELETE_USER':
			case 'VIEW_USERS':
				for( var r=0; r<gThisUser.roles.length; r++ )
				{
					log.trace(loghdr + "     Checking ["+gThisUser.roles[r]+"]");
					if( gThisUser.roles[r] === "ROLE_SUPER" )
					{
						log.trace(loghdr + "     User has SUPER role")
						// Super user has permissions to do anything
						allow = true;
						break;
					}
				}
				break;
		}

		log.trace(loghdr + " <- hasPermission("+allow+")");
		return allow;
	};
	
	this.difference = 
		function difference(m1, m2) {
	    var diff = false;
	    Object.getOwnPropertyNames(m1).forEach(function(val, idx, array) {
	    	  console.log(val + ' -> ' + m1[val]);
	    	if( m1[val] != m2[val] )
	    		  diff = true;
	    });
	        
	    return diff;
	}
	
	this.applyMemberChange =
	function applyMemberChange(members, member)
	{
		console.log(loghdr + " -> applyMemberChange");

		var index = findMemberIndex( members, member );

		if( index === -1 )
		{
			log.debug(loghdr + "###### ERROR: applyMemberChange - member not found!");
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
	
	this.applyMemberDel =
	function applyMemberDel( members, member )
	{
		console.log(loghdr + " -> applyMemberDel");

		var index = findMemberIndex( members, member );

		if( index === -1 )
		{
			log.debug(loghdr + "###### ERROR: applyMemberDel - member not found!");
			return;
		}		
		else if( index > -1 ) 
		{   // Delete the member at index
		    members.splice(index, 1);
		}
	}
	
	this.applyMemberAdd =
	function applyMemberAdd( members, member )
	{
		console.log(loghdr + " -> applyMemberAdd");
		
		if( $scope.data.dsTeamMembers[member.team] === undefined )
			getMembers4team(member.team);

		var index = findMemberIndex( $scope.data.dsTeamMembers[member.team], member );

		if( index === -1 )
		{// Add the member if it doesn't exits
		    members[member.team].push( member );
		}		
		else if( index > -1 ) 
		{
			log.debug(loghdr + "###### ERROR: applyMemberAdd - member not found!");
		}
	}
	
	this.applyTeamChange =
		function(teams, thisTeam)
		{
			log.debug(loghdr + " -> applyTeamChange");
			var index = -1;
			
			//this.dsCurrentTeam = thisTeam;
			
			if( this.dsTeams.length === 0 )
			{
				log.debug(loghdr + "Teams not loaded, loading now...");
				this.getTeams();
			}
				
		
			for( var i=0; i<this.dsTeams.length; i++ )
			{
				if( this.dsTeams[i].id === thisTeam.id )
				{
					index = i;
					break;
				}
			}

	
			if( index === -1 )
			{
				log.debug(loghdr + "###### ERROR: applyTeamChange - team not found!");
			}		
			else if( index > -1 ) 
			{
				this.dsTeams[index] = thisTeam;
				log.debug(loghdr + " -> applyTeamChange - team updated: " + thisTeam.name );
			}
		}
	
	this.findMemberIndex =
	function findMemberIndex( members, member )
	{
		console.log(loghdr + " -> findMemberIndex");
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
	
	this.convertPosToInt =
	function convertPosToInt( sPos )
	{
		return $scope.data.dsPosition.indexOf(sPos);
	}
	
	this.convertTeamToInt =
	function convertTeamToInt( sTeam )
	{
		for( var i=0; i<$scope.data.dsTeams.length; i++ )
		{
			if( $scope.data.dsTeams[i].name == sTeam )
				return $scope.data.dsTeams[i].id;
		}
		return 0;
	}
	
	this.getTeams =
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

	
});