pubModule.controller('publicController', ['$scope', '$http', 'DataService', function ($scope,$http,DataService) 
{	
	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

	var logdepth = '';
	var loghdr = logdepth + '# publicController: ';
	log.debug(loghdr + "Controller initialized");
	$scope.showArray = [];
	$scope.data = DataService;
	$scope.data.dsCurrentMember = {name: "", address: "", phone: "", phone2: "", email:"", dob:"", amount: 0, receiptid:"", team: 0, team2: 0,team3: 0, position: 0, position2: 0, position3: 0, lid: 0, favteam: "", favplayer: "", sappears: 0, sassists: 0, sgoals: 0, photo: "", achievements: "", status: ""};

	/* (1) Get the members to display on the page*/
	log.trace("## Calling getTeams()");
	

	
}]); // End of memberManagerController
