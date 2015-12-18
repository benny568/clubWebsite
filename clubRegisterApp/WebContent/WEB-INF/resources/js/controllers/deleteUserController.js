mmModule.controller('DeleteUserController', function($scope, user, modalHeader, close) {
	
	$scope.thisMember = user;
	$scope.modalHeader = modalHeader
	
	$scope.close = function(del) {
		close(del, 500); // close, but give 500ms for bootstrap to animate
	 };
});


/*mmModule.controller('DeleteUserController', function($scope, user, close) {
	$scope.modalHeader = "Delete User";
	$scope.opUser = user;
	
	$scope.close = function(add, usr) {
		console.log("## DeleteUserController->close()");
		close(del, 500); // close, but give 500ms for bootstrap to animate
	 };
	 
});*/
