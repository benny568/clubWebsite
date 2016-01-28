mmModule.controller('dummyController', ['$scope', '$log', 'DataService', function($scope, $log, DataService) {
	$log.info("->dummyController..");
	$scope.data = DataService;

}]);