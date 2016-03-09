mmModule.controller(	'userProfileController', 
						[
						 '$scope', 
						 'dbService', 
						 'DataService', 
						 function(
								 	$scope,
								 	dbService,
								 	DataService
								 ) 
{
	var loghdr = "## [userProfileController]: ";
	log.debug(loghdr+"** LOADING **");
	
	DataService.dsCurrentUser = {};
	$scope.data = DataService;
	
	getUserDetails();
	
	function getUserDetails()
	{
		dbService.getCurrentUser()
		.then(function(user){
			$scope.data.dsCurrentUser = user;
			log.debug(loghdr+"getUserDetails: ", $scope.data.dsCurrentUser );
			$scope.orgUser = angular.copy($scope.data.dsCurrentUser);
			if( $scope.data.dsCurrentUser.avatar == "" )
				$scope.data.dsCurrentUser.avatar = "resources/images/avatars/default.png";
		});
	}
	
	$scope.close = function(save)
	{
		if( typeof save == 'undefined' )
			return;
		
		if(save)
		{
			log.debug(loghdr+"-> close(): save - ", save);
			dbService.updateUser($scope.data.dsCurrentUser)
				.then( function(){
					log.debug(loghdr+"-> close(): user updated successfully ");
				});
		}		
		else
		{
			$scope.data.dsCurrentUser = angular.copy($scope.orgUser);
			log.debug(loghdr+"-> close(): cancel");
			document.location = "#/";
		}
	}
	$scope.close();
	
	$scope.showUser = function()
	{
		log.debug(loghdr+"-> showUser, user is: ", $scope.data.dsCurrentUser.name );
	}
	$scope.showUser();
	
}]);
