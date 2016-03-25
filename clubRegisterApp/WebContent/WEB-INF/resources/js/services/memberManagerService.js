mmModule.service('mmService', function($http, $q, promiseTracker, dbService, DataService, ModalService,$rootScope) 
{
	var cache = {};
	var self = this;
	self.teamName = null;
	self.teamId = 0;
	self.lrcode = 0;
	data = DataService;
	var logdepth = '';
	var loghdr = logdepth + '# mmService: ';
	
	// Initialise the ToolBox library
	var tools = TB$(log, logdepth + '    ');
	
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
		addUser : addUser,
		deleteUser : deleteUser
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
			log.debug(loghdr+"getManagerDetails() returned:");
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
			log.debug(loghdr+"- getFullTeamDetails(1): ", self.teamName, self.teamId, self.lrcode, lrcode);
			return $http.get(_home + '/admin/team/' + self.teamId);
		})
		.then( function(result){
				self.Team = result.data;
				scope.Team = result.data;
				log.debug(loghdr+"- getFullTeamDetails(2): ", self.Team);
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
			log.debug(loghdr+"- getTeamDetails()..Got team details: ", tdetails);
			log.debug(loghdr+"    |<-mmService.getTeamDetails()", tdetails);
		});
	}
	
	
	/*******************************************************
	 * GET TEAM MEMEMBERS
	 *******************************************************/
	function getTeammembers(teamId)
	{
		log.debug(loghdr+"- getTeammembers()..");
		
		$http.get(_home + '/admin/team/' + self.teamId);/*.success(function(data) 
		{
			self.TeamMembers = data;
			log.debug(loghdr+"- getTeammembers()..Added Team to the cache: ", self.TeamMembers);
			log.debug(loghdr+"- getTeammembers()..Other cache data: ", self.teamName, self.teamId, self.lrcode);
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
		log.debug(loghdr+"-> addMember", scope.teamName);
			
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
			            								log.debug(loghdr+"- addPMember (reurned from dbService): ", scope.thisMember);
			            								applyMemberAdd(scope);
			            							} );
			            						}
			            					}
			            				);
		            }
				); // End .then()
	} // End addMember()

	/**********************************************************
	 * Name:		addUser()
	 * Description:	Add new user, update local memory and send
	 * 				to the server.
	 * Scope:		Externally accessible
	 * Params in:	goNogo: avoids it being called when the
	 * 				script is loaded
	 * Return:		Adds the member on to the end of the members
	 * 				array for the team specified when adding,
	 * 				$scope.TeamMembers[member.team]
	 **********************************************************/
	function addUser( scope ) 
	{
		log.debug(loghdr+"-> addUser", scope.newUser);
			
		ModalService.showModal({templateUrl: 'addUserModal.html',controller: "AddUserController"})
			.then(	function(modal) 
					{
			            modal.element.modal();
			            modal.close.then(	function(result) 
			            					{
			            						if( result.op == 'save')
			            						{
			            							scope.newUser = result.user;
			            							dbService.addUser( result.user ).then( function(result){
			            								log.debug(loghdr+"- addUser (reurned from dbService): ", scope.newUser);
			            								applyUserAdd(scope);
			            							} );
			            						}
			            					}
			            				);
		            }
				); // End .then()
	} // End addUser()

	
	function convertPosToInt( sPos )
	{
		return data.dsPosition.indexOf(sPos);
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
		log.debug("[mmService] - addPlayer..", scope.teamName);
			
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
			            								log.debug(loghdr+"- addPlayer: ", result);
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
	            inputs: { member : thisMember,
	                	  modalHeader: 'member'
	                	}
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
	function editMember($scope,thisMember) {
		if(!thisMember)
			return;
		
		thisMember.position = $scope.data.dsPosition[thisMember.position];
		thisMember.team != 0 ? thisMember.team = getTeamNameFrmId(thisMember.team) : thisMember.team = "None";
		thisMember.position2 = $scope.data.dsPosition[thisMember.position2];
		thisMember.team2 != 0 ? thisMember.team2 = getTeamNameFrmId(thisMember.team2) : thisMember.team2 = "None";
		thisMember.position3 = $scope.data.dsPosition[thisMember.position3];
		thisMember.team3 != 0 ? thisMember.team3 = getTeamNameFrmId(thisMember.team3) : thisMember.team3 = "None";
		
		 ModalService.showModal({
	            templateUrl: 'memberModal.html',
	            controller: "ModalController",
	            inputs: { member : thisMember, modalType: "Edit" }
	        }).then(function(modal) {
	            modal.element.modal();
	            modal.close.then(function(result) {
	            	var newMem = result;
	            	var diff = tools.difference( newMem, thisMember);
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
		        			applyMemberChange(thisMember, newMem);
		        			log.debug(loghdr+"-> editMember: after update: ", thisMember);
		        		});
	            	}
	        	});
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
    	
    	for( var i=0; i<gTeams.length; i++ )
    	{
    		if( iTeam == i )
    		{
    			sTeamId = gTeams[i - 1].name;
    			return sTeamId;
    		}
    	}
    	
    	return sTeamId;
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
	function editTeamNB(thisTeam) {
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
	            	var diff = tools.difference( newTeam, thisTeam);
	            	if(diff)
	            	{
		                dbService.updateTeam( newTeam )
		        		.then( function(result) {
		        			//applyMemberChange(thisMember, newMem);
		        			log.debug(loghdr+"-> editTeamNB: after update: ", thisTeam);
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
	 * Return:		Updates DataService.dsCurrentUser
	 **********************************************************/
    function getUserDetails(scope)
	{
		dbService.getCurrentUser()
		.then(function(user){
			log.debug(loghdr+"->getUserDetails: ", user );
			DataService.dsCurrentUser = user;
			scope.orgUser = angular.copy(DataService.dsCurrentUser);
			if( DataService.dsCurrentUser.avatar == "" )
				DataService.dsCurrentUser = "resources/images/avatars/default.png";
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
		log.debug(loghdr+"-> isAuthorised, user[" + user + "], op[" + op +"]");
		
		dbService.isAuthorised(user,op)
		.then(function(authorisation){
			log.debug(loghdr+"<- isAuthorised returning [" + authorisation + "]");
			return authorisation;
		});
	}

	
	/*******************************************************
	 * DELETE USER
	 *******************************************************/
	function deleteUser(scope, user)
	{
		if(user === undefined)
			return;
		
		 ModalService.showModal({
	            templateUrl: 'delConfirmModal.html',
	            controller: "DeleteUserController",
	            inputs: {
	                user: user,
	                modalHeader: 'user'
	              }
	        }).then(function(modal) {
	            modal.element.modal();
	            modal.close.then(function(del) {
	            	if(del)
	            	{
		                dbService.deleteUser( user )
		        		.then( function(result) {
		        			applyUserDel(scope, user);
		        		});
	            	}
	        	});
            });
	      
	}

	
	
	/*******************************************************
	 * Utilities to update the scope after db access
	 *******************************************************/
	function applyRemoteTeamsData( rteams ){
		$scope.teams = rteams;
	}
	
	function applyMemberAdd(scope)
	{
		log.debug(loghdr+"-> applyMemberAdd");
		
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
		log.debug(loghdr+"-> applyMemberChange");

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
	
	function applyUserAdd(scope)
	{
		log.debug(loghdr+"-> applyUserAdd");

		scope.users.push(scope.newUser);
	}

});