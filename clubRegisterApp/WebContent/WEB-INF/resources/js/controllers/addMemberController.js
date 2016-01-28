mmModule.controller('AddMemberController', ['$scope', 'close', 'DataService', function($scope, close, DataService) {
	$scope.data = DataService;
	$scope.data.dsCurrentMember = {name: "", address: "", phone: "", phone2: "", email:"", dob:"", amount: 0, receiptid:"", team: 0, team2: 0,team3: 0, position: 0, position2: 0, position3: 0, lid: 0, favteam: "", favplayer: "", sappears: 0, sassists: 0, sgoals: 0, photo: "", achievements: "", status: ""};
	$scope.modalHeader = "Add";
	var mem = $scope.data.dsCurrentMember;
	
	$scope.close = function(add, mem) {
		close({op:add,member:mem}, 500); // close, but give 500ms for bootstrap to animate
	 };
}]);