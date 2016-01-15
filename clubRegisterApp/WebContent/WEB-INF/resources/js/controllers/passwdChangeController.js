mmModule.controller('passwdChangeController', ['$scope', '$http', 'dbService', 'privateDataService', function ($scope,$http,dbService,privateDataService)
{	
	console.log("## [passwdChangeController] Loading....");
	
	$scope.data = privateDataService;
	
	$scope.onSubmit = function(proceed)
	{	
		if(proceed === undefined)
			return;
		if(proceed === false)
			window.location.href='adminHome'; // Cancelled
		
		console.log("## [passwdChangeController]->Submit, password is: ", $scope.formModel );
		
		getUserDetails($scope);
		
		function getUserDetails()
		{
			dbService.getCurrentUser()
			.then(function(user){
				console.log("## [passwdChangeController] -> getUserDetails: ", user );
				$scope.thisUser = user;
				$scope.orgUser = angular.copy($scope.thisUser);
				$scope.thisUser.password = $scope.formModel.pw1;
				if( $scope.thisUser.avatar == "" )
					$scope.thisUser.avatar = "resources/images/avatars/default.png";
				dbService.updateUserPassword($scope.thisUser)
				.then(function(user){
					console.log("## [passwdChangeController] -> after db update: ", $scope.thisUser );
					window.location.href='adminHome';
				});
			});
		}
	}
	$scope.onSubmit();
	
	$scope.cancel = function(proceed)
	{
		if(proceed === undefined)
			return;
		console.log("## [passwdChangeController]->cancel, operation canceled." );
		window.location.href='adminHome';
	}
	$scope.cancel();
	
}]);