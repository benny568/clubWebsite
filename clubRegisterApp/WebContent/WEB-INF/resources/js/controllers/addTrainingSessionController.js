mmModule.controller('AddTrainingSessionController', ['$scope', 'close', 'privateDataService', function($scope, close, privateDataService) {
	
	$scope.thisSession = {};
	$scope.team = privateDataService.dsCurrentTeam;

	 $scope.close = function(save,thisSession) {
		 if(save)
			 close({op:'save',session: thisSession}, 500); // close, but give 500ms for bootstrap to animate
		 else
			 close({op:'cancel', session:null}, 500);
	 };

}]);