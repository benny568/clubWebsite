mmModule.service('mmService', function($http, $q, promiseTracker, dbService, ModalService,$rootScope) 
{
	var cache = {};
	var self = this;
	self.teamName = null;
	self.teamId = 0;
	self.lrcode = 0;
	
	return({
		addPlayer : addPlayer,
		addMember : addMember,
		deleteMember : deleteMember,
		editMember : editMember,
		getTeamDetails : getTeamDetails,
		getTeammembers : getTeammembers,
		getFullTeamDetails : getFullTeamDetails,
		editTeamNB : editTeamNB,
		getUserDetails : getUserDetails,
		hasPermission : hasPermission
	});
	
	
	/**********************************************************
	 * Name:		getManagerDetails()
	 * Description:	Get all details needed to determine what a
	 * 				manager can do, in the one REST call.
	 * Scope:		Internally accessible
	 * Params in:	None
	 * Return:		
	 **********************************************************/
	function getManagerDetails() 
	{
		$http.get(_home + '/admin/manager/details')
		.then( function(result){
			log.debug("## getManagerDetails() returned:");
		});
	}
	
	function getFullTeamDetails( scope, lrcode, teamName )
	{
		$http.get(_home + '/team/' + teamName)
		.then( function(result){
			self.teamName = teamName;
			self.teamId = result.data.id;
			self.lrcode = result.data.lrcode;
			lrcode = result.data.lrcode;
			console.log("## [mmService] - getFullTeamDetails(1): ", self.teamName, self.teamId, self.lrcode, lrcode);
			return $http.get(_home + '/admin/team/' + self.teamId);
		})
		.then( function(result){
				self.Team = result.data;
				scope.Team = result.data;
				console.log("## [mmService] - getFullTeamDetails(2): ", self.Team);
			});
		
		return self.Team;
	}
	
	/*******************************************************
	 * GET TEAM DETAILS
	 *******************************************************/
	function getTeamDetails(teamName, lrcode, teamId)
	{
		log.debug("##    |->mmService.getTeamDetails(" + teamName +")");
		return $http.get(_home + '/team/' + teamName).success(function(tdetails)
		{
			console.log("## [mmService] - getTeamDetails()..Got team details: ", tdetails);
			log.debug("##    |<-mmService.getTeamDetails()", tdetails);
		});
	}
	
	
	/*******************************************************
	 * GET TEAM MEMEMBERS
	 *******************************************************/
	function getTeammembers(teamId)
	{
		console.log("## [mmService] - getTeammembers()..");
		
		$http.get(_home + '/admin/team/' + self.teamId);/*.success(function(data) 
		{
			self.TeamMembers = data;
			console.log("## [mmService] - getTeammembers()..Added Team to the cache: ", self.TeamMembers);
			console.log("## [mmService] - getTeammembers()..Other cache data: ", self.teamName, self.teamId, self.lrcode);
		});*/
	}
	
	
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
	function addMember( scope ) 
	{
		console.log("[mmService] -> addMember", scope.teamName);
			
		ModalService.showModal({templateUrl: 'addMemModal.html',controller: "AddMemberController"})
			.then(	function(modal) 
					{
			            modal.element.modal();
			            modal.close.then(	function(result) 
			            					{
			            						if( result.op == 'save')
			            						{
			            							scope.thisMember = result.member;
			            							scope.thisMember.position = convertPosToInt(result.member.position);
			            							scope.thisMember.team = convertTeamToInt(result.member.team);
			            							dbService.addMember( result.member ).then( function(result){
			            								console.log("[mmService] - addPMember (reurned from dbService): ", scope.thisMember);
			            								applyMemberAdd(scope);
			            							} );
			            						}
			            					}
			            				);
		            }
				); // End .then()
	} // End addMember()
	
	
	function convertPosToInt( sPos )
	{
		return itsPosition.indexOf(sPos);
	}
	
	function convertTeamToInt( sTeam )
	{
		for( var i=0; i<gTeams.length; i++ )
		{
			if( gTeams[i].name == sTeam )
				return gTeams[i].id;
		}
		return 0;
	}
	
	/*******************************************************
	 * ADD PLAYER
	 *******************************************************/
	function addPlayer( scope ) 
	{
		console.log("[mmService] - addPlayer..", scope.teamName);
			
		ModalService.showModal({templateUrl: 'addMemModal.html',controller: "AddMemberController"})
			.then(	function(modal) 
					{
			            modal.element.modal();
			            modal.close.then(	function(result) 
			            					{
			            						if( result.op )
			            						{
			            							scope.thisMember = result.member;
			            							dbService.addMember( result.member ).then( function(result){
			            								console.log("[mmService] - addPlayer: ", result);
			            								applyMemberAdd(scope, scope.thisMember);
			            							} );
			            						}
			            					}
			            				);
		            }
				); // End .then()
	} // End addMember()

	/*******************************************************
	 * DELETE MEMBER
	 *******************************************************/
	function deleteMember(scope, thisMember)
	{
		if(!thisMember)
			return;
		
		 ModalService.showModal({
	            templateUrl: 'delConfirmModal.html',
	            controller: "DelMemberController",
	            inputs: { member : thisMember}
	        }).then(function(modal) {
	            modal.element.modal();
	            modal.close.then(function(del) {
	            	if(del)
	            	{
		                dbService.deleteMember( thisMember )
		        		.then( function(result) {
		        			applyMemberDel(scope, thisMember);
		        		});
	            	}
	        	});
            }).catch(function(error) {
            	  // error contains a detailed error message.
            	  console.log(error);
	        });
	      
	}
	
	/**********************************************************
	 * Name:		editMember()
	 * Description:	Edit an existing member, update to server
	 * 				and update local in-memory copy
	 * Scope:		Externally accessible via the service
	 * Params in:	scope: The parents scope
	 * 				thisMember: the member to edit
	 * Return:		Updates $scope.TeamMembers[team].<this member>
	 **********************************************************/
	function editMember(scope,thisMember) {
		if(!thisMember)
			return;
		
		 ModalService.showModal({
	            templateUrl: 'modal.html',
	            controller: "ModalController",
	            inputs: { member : thisMember}
	        }).then(function(modal) {
	            modal.element.modal();
	            modal.close.then(function(result) {
	            	var newMem = result;
	            	var diff = difference( newMem, thisMember);
	            	if(diff)
	            	{
	            		if( typeof newMem.position != 'number' )
	            			newMem.position = itsPosition.indexOf(newMem.position);
	            		if( typeof newMem.team != 'number' )
	            			newMem.team = getTeamIdFrmName(newMem.team);
		                dbService.updateMember( newMem )
		        		.then( function(result) {
		        			applyMemberChange(thisMember, newMem);
		        			console.log("## [mmService] -> editMember: after update: ", thisMember);
		        		});
	            	}
	        	});
            }).catch(function(error) {
            	  // error contains a detailed error message.
            	  console.log(error);
	        });
	      
    };
    

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
    	
    	for( var i=0; i<gTeams.length; i++ )
    	{
    		if( gTeams[i].name == sTeam )
    		{
    			iTeamId = gTeams[i].id;
    			return iTeamId;
    		}
    	}
    	
    	return iTeamId;
    }
    
	/**********************************************************
	 * Name:		editTeamNB()
	 * Description:	Edit a teams Notice Board, update to server
	 * 				and update local in-memory copy
	 * Scope:		Externally accessible via the service
	 * Params in:	scope: The parents scope
	 * 				thisTeam: the team to edit
	 * Return:		Updates $scope.team
	 **********************************************************/
	function editTeamNB(scope,thisTeam) {
		if(!thisTeam)
			return;
		
		 ModalService.showModal({
	            templateUrl: 'editTeamNBModal.html',
	            controller: "editTeamNBModalController",
	            inputs: { team : thisTeam}
	        }).then(function(modal) {
	            modal.element.modal();
	            modal.close.then(function(result) {
	            	var newTeam = result;
	            	var diff = difference( newTeam, thisTeam);
	            	if(diff)
	            	{
		                dbService.updateTeam( newTeam )
		        		.then( function(result) {
		        			//applyMemberChange(thisMember, newMem);
		        			console.log("## [mmService] -> editTeamNB: after update: ", thisTeam);
		        		});
	            	}
	        	});

	        });
	      
    };
    
    /**********************************************************
	 * Name:		getUserDetails()
	 * Description:	Get details of the currently logged in user
	 * Scope:		Externally accessible via the service
	 * Params in:	None
	 * Return:		Updates $scope.thisUser
	 **********************************************************/
    function getUserDetails(scope)
	{
		dbService.getCurrentUser()
		.then(function(user){
			console.log("## [mmService]->getUserDetails: ", user );
			scope.thisUser = user;
			scope.orgUser = angular.copy(scope.thisUser);
			if( scope.thisUser.avatar == "" )
				scope.thisUser.avatar = "resources/images/avatars/default.png";
		});
	}
    
	/**********************************************************
	 * Name:		isAuthorised()
	 * Description:	Given a user, is the user authorised for
	 * 				this operation.
	 * Scope:		Externally accessible
	 * Params in:	user: the user logged in
	 * 				op:	the operation being performed
	 * Return:		True if authorised, false if not.
	 **********************************************************/
	function isAuthorised( user, op ) 
	{
		console.log("[mmService] -> isAuthorised, user[" + user + "], op[" + op +"]");
		
		dbService.isAuthorised(user,op)
		.then(function(authorisation){
			console.log("[mmService] ,<- isAuthorised returning [" + authorisation + "]");
			return authorisation;
		});
	}
	
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
		
		log.trace("## -> hasPermission("+action+")");
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
				log.trace("## -> checking if you have permissions for team ["+team+"]");
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

					log.trace("## -> checking team ["+gTeams[index].name+"]");
					if( gTeams[index].name === team )
					{
						log.trace("## -> checking if user is manager for ["+gTeams[index].name+"]");
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
					log.debug("##     Checking ["+gThisUser.roles[r]+"]");
					if( gThisUser.roles[r] === "ROLE_SUPER" )
					{
						log.debug("##     User has SUPER role")
						// Super user has permissions to do anything
						allow = true;
						break;
					}
				}
				break;
		}

		log.trace("## <- hasPermission("+allow+")");
		return allow;
	}


	function difference(m1, m2) {
	    var diff = false;
	    Object.getOwnPropertyNames(m1).forEach(function(val, idx, array) {
	    	  console.log(val + ' -> ' + m1[val]);
	    	if( m1[val] != m2[val] )
	    		  diff = true;
	    });
	        
	    return diff;
	}
	
	
	/*******************************************************
	 * Utilities to update the scope after db access
	 *******************************************************/
	function applyRemoteTeamsData( rteams ){
		$scope.teams = rteams;
	}
	
	function applyMemberAdd(scope)
	{
		console.log("## [mmService] -> applyMemberAdd");
		
		switch( scope.mode )
		{
			case "All":
				scope.members.push(scope.thisMember);
				break;
			case "Team":
			default:
				scope.TeamMembers[scope.thisMember.team].push(scope.thisMember);
				break;
		}
	}
	
	function applyMemberChange(mem, member)
	{
		console.log("## [mmService] -> applyMemberChange");

		mem.name = member.name;
		mem.address = member.address;
		mem.phone = member.phone;
		mem.dob = member.dob;
		mem.amount = member.amount;
		mem.team = member.team;
		mem.position = member.position;
		mem.lid = member.lid;
		mem.favteam = member.favteam;
		mem.favplayer = member.favplayer;
		mem.sappears = member.sappears;
		mem.sassists = member.sassists;
		mem.sgoals = member.sgoals;
		mem.photo = member.photo;
		mem.achievments = member.achievments;
	}
	
	function applyMemberDel(scope, thisMember)
	{
		switch( scope.mode )
		{
			case "All":
				for( var i=0; i<scope.members.length; i++ )
				{
					if( scope.members[i].id == thisMember.id )
						scope.members.splice(i,1);
				}
				break;
			case "Team":
			default:
				for( var i=0; i<scope.TeamMembers[thisMember.team].length; i++ )
				{
					if( scope.TeamMembers[thisMember.team][i].id == thisMember.id )
						scope.TeamMembers[thisMember.team].splice(i,1);
				}
				break;
		}
	}

});