mmModule.controller('DelMemberController', ['$scope', 'member', 'modalHeader', 'close', function($scope, member, modalHeader, close) {
	
	$scope.thisMember = member;
	$scope.modalHeader = modalHeader;
	
	$scope.close = function(del) {
		close(del, 500); // close, but give 500ms for bootstrap to animate
	 };
}]);