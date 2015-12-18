mmModule.controller('userProfileController', function ($scope,$http,dbService,mmService) 
{
	console.log("## [userProfileController] ** LOADING **");
	
	$scope.thisUser = {};
	
	getUserDetails($scope);
	
	function getUserDetails()
	{
		dbService.getCurrentUser()
		.then(function(user){
			console.log("## [userProfileController] -> getUserDetails: ", user );
			$scope.thisUser = user;
			$scope.orgUser = angular.copy($scope.thisUser);
			if( $scope.thisUser.avatar == "" )
				$scope.thisUser.avatar = "resources/images/avatars/default.png";
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
					alert("Updated Successfully");
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
	
	$scope.showUser = function()
	{
		console.log("## [] -> showUser, user is: ", thisUser.name );
	}
	$scope.showUser();
	
	
	
});
