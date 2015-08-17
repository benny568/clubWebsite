var lrcode; // Needed for API calls to LeagueRepublic site
//var site = 'localhost:8080';
var site = 'www.avenueunited.ie';
var urlBase="http://" + site;
var thisUser = {};

var mmModule = angular.module('memberManagerApp', ['ngAnimate', 'ngResource', 'ngCookies', 'angularModalService', 'ajoslin.promise-tracker', 'ui.bootstrap','csrf-cross-domain']);

mmModule.config(function($httpProvider) {
	  /**
	   * make delete type json
	   */
	  $httpProvider.defaults.headers["delete"] = {
	    'Content-Type': 'application/json;charset=utf-8'
	  };
	})

mmModule.controller('ModalController', function($scope, member, close) {
	
	$scope.thisMember = jQuery.extend({},member);

	 $scope.close = function(save) {
		 if(save)
			 close($scope.thisMember, 500); // close, but give 500ms for bootstrap to animate
		 else
			 close(member, 500);
	 };

	});

mmModule.controller('AddMemberController', function($scope, close) {
	
	$scope.thisMember = {name: "", address: "", phone: "", amount: 0, team: 0, position: 0, lid: 0, favteam: "", favplayer: "", sappears: 0, sassists: 0, sgoals: 0, photo: "", achievements: "", status: ""};
	var mem = $scope.thisMember;
	
	$scope.close = function(add, mem) {
		close({op:add,member:mem}, 500); // close, but give 500ms for bootstrap to animate
	 };
});

mmModule.controller('DelMemberController', function($scope, member, close) {
	
	$scope.thisMember = member;
	
	$scope.close = function(del) {
		close(del, 500); // close, but give 500ms for bootstrap to animate
	 };
});

mmModule.controller('newsController', function ($scope,$http, dbService,ModalService) {
	
	console.log("## [newsController]...");
	$scope.stories = new Array();
	
	getNews();

	function getNews(){		
		dbService.getNewsStories()
			.then( function(stories) {
				$scope.stories = stories;
		});
	}
});

mmModule.controller('AddTeamController', function($scope, close) {
	
	$scope.thisTeam = {name: "", lrcode: 0};
	var team = $scope.thisTeam;
	
	$scope.close = function(add, team) {
		console.log("## [AddTeamController] team is: ", $scope.thisTeam);
		close({op:add,team:$scope.thisTeam}, 500); // close, but give 500ms for bootstrap to animate
	 };
});


mmModule.controller('EditTeamController', function($scope, team, close) {
	$scope.thisTeam = team;
	
	$scope.close = function(update, team) {
		console.log("## [EditTeamController] team is: ", $scope.thisTeam);
		close({op:update,team:$scope.thisTeam}, 500); // close, but give 500ms for bootstrap to animate
	 };
});

mmModule.controller('DeleteTeamController', function($scope, team, close) {
	$scope.thisTeam = team;
	
	$scope.close = function(del, team) {
		console.log("## [DeleteTeamController] team to delete is: ", $scope.thisTeam);
		close({op:del,team:$scope.thisTeam}, 500); // close, but give 500ms for bootstrap to animate
	 };
});


