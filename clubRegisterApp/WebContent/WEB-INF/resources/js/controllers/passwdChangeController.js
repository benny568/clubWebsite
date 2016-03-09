mmModule.controller(	'passwdChangeController', 
						[
						 	'$scope', 
						 	'$http', 
						 	'dbService', 
						 	'DataService', 
						 	function ($scope,$http,dbService,DataService)
{	
	var loghdr = "## [passwdChangeController]: ";
	console.log(loghdr+"Loading....");
	
	$scope.data = DataService;
	
	$scope.onSubmit = function(proceed)
	{	
		if(proceed === undefined)
			return;
		if(proceed === false)
			window.location.href='adminHome'; // Cancelled
		
		console.log(loghdr+"->Submit, password is: ", $scope.formModel );
		
		getUserDetails($scope);
		
		function getUserDetails()
		{
			dbService.getCurrentUser()
			.then(function(user){
				console.log(loghdr+"-> getUserDetails: ", user );
				DataService.dsCurrentUser = user;
				$scope.orgUser = angular.copy(DataService.dsCurrentUser);
				DataService.dsCurrentUser.password = $scope.formModel.pw1;
				if( DataService.dsCurrentUser.avatar == "" )
					DataService.dsCurrentUser.avatar = "resources/images/avatars/default.png";
				dbService.updateUserPassword(DataService.dsCurrentUser)
				.then(function(user){
					console.log(loghdr+"-> after db update: ", DataService.dsCurrentUser );
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
		console.log(loghdr+"->cancel, operation canceled." );
		window.location.href='adminHome';
	}
	$scope.cancel();
	
}]);