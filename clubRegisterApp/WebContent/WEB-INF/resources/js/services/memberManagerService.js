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
		getFullTeamDetails : getFullTeamDetails
	});
	
	
	function getFullTeamDetails( scope, lrcode, teamName )
	{
		$http.get(urlBase + '/team/' + teamName)
		.then( function(result){
			self.teamName = teamName;
			self.teamId = result.data.id;
			self.lrcode = result.data.lrcode;
			lrcode = result.data.lrcode;
			console.log("## [mmService] - getFullTeamDetails(1): ", self.teamName, self.teamId, self.lrcode, lrcode);
			return $http.get(urlBase + '/admin/team/' + self.teamId);
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
		return $http.get(urlBase + '/team/' + teamName).success(function(tdetails)
		{
			console.log("## [mmService] - getTeamDetails()..Got team details: ", tdetails);
		});
	}
	
	
	/*******************************************************
	 * GET TEAM MEMEMBERS
	 *******************************************************/
	function getTeammembers(teamId)
	{
		console.log("## [mmService] - getTeammembers()..");
		
		$http.get(urlBase + '/admin/team/' + self.teamId);/*.success(function(data) 
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
			            						if( result.op )
			            						{
			            							scope.thisMember = result.member;
			            							dbService.addMember( result.member ).then( function(result){
			            								console.log("[mmService] - addPlayer: ", scope.thisMember);
			            								applyMemberAdd(scope);
			            							} );
			            						}
			            					}
			            				);
		            }
				); // End .then()
	} // End addMember()
	
	
	
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
	
	function difference(m1, m2) {
	    var diff = false;
	    for (var name in m1)
	    {
	    	if( m1[name] != m2[name] )
	    		diff = true;
	    }
	        
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