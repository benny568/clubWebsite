mmModule.controller('editStoryController', ['$scope', 'story', 'close', function($scope, story, close)
{
	 var loghdr = "## [editStoryController]: ";
	
	log.debug(loghdr);

	$scope.news = story;
	
	$scope.close = function(del) {
		close(del, 500); // close, but give 500ms for bootstrap to animate
	 };
}]);