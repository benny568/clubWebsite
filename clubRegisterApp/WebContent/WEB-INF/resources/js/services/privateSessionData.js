mmModule.service('privateDataService', function($rootScope) 
{
	var self = this;
	this.dsTeams = [];
	this.dsTeamMembers = [];
	this.dsCurrentTeam = {};
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
					log.trace("##     Checking ["+gThisUser.roles[r]+"]");
					if( gThisUser.roles[r] === "ROLE_SUPER" )
					{
						log.debug("##     User has SUPER role")
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
					log.trace("##     Checking ["+gThisUser.roles[r]+"]");
					if( gThisUser.roles[r] === "ROLE_SUPER" )
					{
						log.trace("##     User has SUPER role")
						// Super user has permissions to do anything
						allow = true;
						break;
					}
				}
				break;
		}

		log.trace("## <- hasPermission("+allow+")");
		return allow;
	};
	
	
	
	
	/*return({
		'dsTeams': [],
		'dsTeamMembers': [],
		'dsCurrentTeam': {},
		'dsCurrentMember': {},
		'dsAllMembers': [],
		'dsCurrentUser': {},
		'dsPosition': [ 'Manager','Goalkeeper','Full Back','Center Half','Mid Field','CAM','Winger','Striker', 'Chairman', 'Secretary', 'Treasurer', 'PRO', 'Committee']
	});*/

});