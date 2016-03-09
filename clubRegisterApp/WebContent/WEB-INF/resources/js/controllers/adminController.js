mmModule.controller('adminController', ['$scope', 'DataService', 'dbService', function($scope, DataService, dbService) {
	var logdepth = '    ';
	var loghdr = logdepth + "->adminController: ";
	log.debug(loghdr + "Initialized");
	$scope.data = DataService;
	DataService.dsCurrentUser = gThisUser;
	log.debug(loghdr + "gThisUser: " + gThisUser);
	log.debug(loghdr + "dsCurrentUser set to: " + $scope.data.dsCurrentUser);
	
	//getUserDetails();
	
	/**********************************************************
	 * Name:		getUserDetails()
	 * Description:	Get the currently logged in user details
	 * Scope:		Internally accessible
	 * Params in:	None
	 * Return:		user details
	 **********************************************************/
/*	function getUserDetails()
	{
		log.debug(loghdr + "-> getUserDetails()");
		dbService.getCurrentUser()
		.then(function(user){
			log.debug(loghdr + "-> getUserDetails: ", user );
			DataService.dsCurrentUser = user;
			if( DataService.dsCurrentUser.avatar == "" )
				DataService.dsCurrentUser.avatar = "resources/images/avatars/default.png";
			log.debug(loghdr + "<- getUserDetails()");
		});
	}*/
	
}]);