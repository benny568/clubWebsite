mmModule.controller('AddTrainingSessionController', ['$scope', 'close', 'DataService', function($scope, close, DataService) {
	
	$scope.thisSession = {};
	$scope.team = DataService.dsCurrentTeam;

	 $scope.close = function(save,thisSession) {
		 if(save)
			 close({op:'save',session: thisSession}, 500); // close, but give 500ms for bootstrap to animate
		 else
			 close({op:'cancel', session:null}, 500);
	 };

}]);