mmModule.controller('userProfileController', function ($scope,$http,dbService) 
{
	console.log("## [userProfileController] ** LOADING **");
	
	//$scope.thisUser = {};
	
	$scope.showUser = function()
	{
		console.log("## [] -> showUser, user is: ", thisUser.username );
	}
	$scope.showUser();
	
	
	
});