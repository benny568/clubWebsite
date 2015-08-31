mmModule.controller('passwdChangeController', function ($scope,$http,$attrs, mmService, dbService) 
{	
	console.log("## [passwdChangeController] Loading....");
	
	$scope.Submit = function(newPasswd)
	{
		if( newPasswd == undefined )
			return;
		
		console.log("## [passwdChangeController]->Submit, password is: ", $scope.pw1 );
		
		getUserDetails($scope);
		
		function getUserDetails()
		{
			dbService.getCurrentUser()
			.then(function(user){
				console.log("## [passwdChangeController] -> getUserDetails: ", user );
				$scope.thisUser = user;
				$scope.orgUser = angular.copy($scope.thisUser);
				$scope.thisUser.password = $scope.pw1;
				if( $scope.thisUser.avatar == "" )
					$scope.thisUser.avatar = "resources/images/avatars/default.png";
				dbService.updateUser($scope.thisUser)
				.then(function(user){
					console.log("## [passwdChangeController] -> after db update: ", $scope.thisUser );
				});
			});
		}
	}
	$scope.Submit();
	
	$scope.cancel = function()
	{
		console.log("## [passwdChangeController]->cancel, operation canceled." );
	}
	$scope.cancel();
	
});