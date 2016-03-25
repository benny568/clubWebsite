mmModule.controller('deleteStoryController', ['$scope', 'story', 'modalHeader', 'close', function($scope, story, modalHeader, close)
{
	 var loghdr = "## [deleteStoryController]: ";
	
	log.debug(loghdr);

	$scope.thisMember = story;
	$scope.modalHeader = modalHeader;
	
	$scope.close = function(del) {
		close(del, 500); // close, but give 500ms for bootstrap to animate
	 };
}]);