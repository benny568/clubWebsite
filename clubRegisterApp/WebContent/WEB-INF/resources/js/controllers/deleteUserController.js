mmModule.controller('DeleteUserController', ['$scope', 'user', 'modalHeader', 'close', function($scope, user, modalHeader, close) {
	
	$scope.thisMember = user;
	$scope.modalHeader = modalHeader
	
	$scope.close = function(del) {
		close(del, 500); // close, but give 500ms for bootstrap to animate
	 };
}]);
