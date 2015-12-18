mmModule.controller('usersController', function ($scope, $http, umService, ModalService, dbService) 
{	
	log.debug("## Loading usersController...");

	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
	$scope.home = _home;
	
	$scope.dateOptions = {
			formatYear: 'yy',
			startingDay: 1,
			initDate: new Date('01-01-1900')
			};
	
	$http.get(_home + '/admin/users').success(function(data) 
	{
		$scope.users = data;
		console.log("## Got users..");
	}); // End of get()
	
	
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
	$scope.addUser = function(user) 
	{
		if( typeof user == 'undefined')
			return;
		umService.addUser($scope);
    };
	$scope.addUser();

	/**********************************************************
	 * Name:		editUser()
	 * Description:	Edit the user
	 * Scope:		Externally accessible
	 * Params in:	
	 * Return:		
	 **********************************************************/
	$scope.editUser = function(user)
	{
		if( typeof user == 'undefined')
			return;
		umService.editUser( user );
	}
	$scope.editUser();
	
	/**********************************************************
	 * Name:		deleteUser()
	 * Description:	Delete the user
	 * Scope:		Externally accessible
	 * Params in:	
	 * Return:		
	 **********************************************************/
	$scope.deleteUser = function(user)
	{		
		if( typeof user == 'undefined')
			return;
		
		umService.deleteUser( $scope, user );
	}
	$scope.deleteUser();
});