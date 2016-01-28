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
	console.log("## [userProfileController] ** LOADING **");
	
	$scope.thisUser = {};
	$scope.data = DataService;
	
	getUserDetails();
	
	function getUserDetails()
	{
		dbService.getCurrentUser()
		.then(function(user){
			$scope.data.dsCurrentUser = user;
			console.log("## [userProfileController] -> getUserDetails: ", $scope.data.dsCurrentUser );
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
			console.log("## [userProfileController] -> close(): save - ", save);
			dbService.updateUser($scope.data.dsCurrentUser)
				.then( function(){
					console.log("## [userProfileController] -> close(): user updated successfully ");
					alert("Updated Successfully");
				});
		}		
		else
		{
			$scope.data.dsCurrentUser = angular.copy($scope.orgUser);
			console.log("## [userProfileController] -> close(): cancel");
			document.location = "#/";
		}
	}
	$scope.close();
	
	$scope.showUser = function()
	{
		console.log("## [] -> showUser, user is: ", $scope.data.dsCurrentUser.name );
	}
	$scope.showUser();
	
}]);
