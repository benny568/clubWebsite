mmModule.controller('dummyController', ['$scope', '$log', 'DataService', function($scope, $log, DataService) {
	$log.info("->dummyController..");
	$scope.data = DataService;
	
	$scope.sum = function() {
	    $scope.z = $scope.x + $scope.y;
	  };

}]);