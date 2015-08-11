mmModule.controller('userProfileController', function ($scope,$http,dbService) 
{
	console.log("## [userProfileController] ** LOADING **");
	
	$scope.thisUser = {};
	
	getUserDetails();
	
	function getUserDetails()
	{
		dbService.getCurrentUser()
		.then(function(user){
			console.log("## [userProfileController] -> getUserDetails: ", user );
			$scope.thisUser = user;
			$scope.orgUser = angular.copy($scope.thisUser);
		});
	}
	
	$scope.close = function(save)
	{
		if( typeof save == 'undefined' )
			return;
		
		if(save)
		{
			console.log("## [userProfileController] -> close(): save - ", save);
			dbService.updateUser($scope.thisUser)
				.then( function(){
					console.log("## [userProfileController] -> close(): user updated successfully ");
				});
		}
		else
		{
			$scope.thisUser = angular.copy($scope.orgUser);
			console.log("## [userProfileController] -> close(): cancel");
			document.location = "adminHome";
		}
	}
	$scope.close();
		
});