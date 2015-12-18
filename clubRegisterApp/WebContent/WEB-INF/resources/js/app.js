//require(['resources/js/libs/log4javascript.js'], function(){console.log("##[app.js] loaded log4javascipted.")});
var lrcode; // Needed for API calls to LeagueRepublic site
var serverMode = {
	LOCAL: 0, // Running locally
	REMOTE: 1 // Running on Mochahost server
};
var itsPosition = [ 'Manager','Goalkeeper','Full Back','Center Half','Mid Field','CAM','Winger','Striker', 'Chairman', 'Secretary', 'Treasurer', 'PRO', 'Committee'];
var _home = '';
var thisUser = {};
var gTeams = [];
var gTeamId = 0;
var gTeamName = '';
var gTeamMembers={};
var gThisUser = {};
var gOpUser = {};

var thisServerMode = serverMode.REMOTE;

/********************************************
/* Setup the logger
 * ********************************************/
var log = log4javascript.getLogger("ClubRegisterApp");
//Create an Appender with default options
var bcAppender = new log4javascript.BrowserConsoleAppender();
bcAppender.setThreshold(log4javascript.Level.TRACE);
// Add the appender to the logger
log.addAppender(bcAppender);
// Test the logger
log.debug("** Member Manager Module Loaded....");
log.trace("** TRACE: Member Manager Module Loaded....");
/********************************************/


var mmModule = angular.module('memberManagerApp', ['ngRoute','ngAnimate', 'ngResource', 'ngCookies', 'angularModalService', 'ajoslin.promise-tracker', 'ui.bootstrap','csrf-cross-domain','jcs-autoValidate']);

mmModule.config(function($routeProvider,$httpProvider) {
	
	/**
	* make delete type json
	*/
	$httpProvider.defaults.headers["delete"] = {
	'Content-Type': 'application/json;charset=utf-8'
	};
	  
	if( thisServerMode == serverMode.LOCAL )
	{
		_home = 'http://localhost:8080/clubRegisterApp';
	}
	else if( thisServerMode == serverMode.REMOTE )
	{
		_home = 'http://www.avenueunited.ie';
	}
	
	$routeProvider
    // route for the admin home page
    .when('/', {
        templateUrl : 'resources/viewParts/adminHomeBody.html',
        controller  : 'adminHomeController'
    })

    // route for the AdminOverview page
    .when('/AdminOverview', {
        templateUrl : 'resources/viewParts/adminOverviewBody.html',
        controller  : 'adminOverviewController'
    })

    // route for the AdminTutorials page
    .when('/AdminTutorials', {
        templateUrl : 'resources/viewParts/adminTutorialsBody.html',
        controller  : 'adminOverviewController'
    })

    // route for the MemberRegister page
    .when('/MemberRegister', {
        templateUrl : 'resources/viewParts/memberRegisterBody.html',
        controller  : 'adminOverviewController'
    })

    // route for the ManageTeams page
    .when('/ManageTeams', {
        templateUrl : 'resources/viewParts/manageTeamsBody.html',
        controller  : 'adminOverviewController'
    })

    // route for the UploadNewsStory page
    .when('/UploadNewsStory', {
        templateUrl : 'resources/viewParts/newsUploadBody.html',
        controller  : 'newsUploadController'
    })

    // route for the UploadNewsStory page
    .when('/UploadNewsStory', {
        templateUrl : 'resources/viewParts/newsUploadBody.html',
        controller  : 'newsUploadController'        	
    })

    // route for the AllMembersAdmin page
    .when('/AllMembersAdmin/:mode', {
        templateUrl : 'resources/viewParts/allMembersAdminBody.html',
        controller  : 'memberManagerController'
    })
    // route for the ManageTeam page
    .when('/ManageTeam/:mode/:team', {
        templateUrl : 'resources/viewParts/manageTeamBody.html',
        controller  : 'memberManagerController'
    })
    // route for the UsersAdmin page
    .when('/UsersAdmin', {
        templateUrl : 'resources/viewParts/usersAdmin.html',
        controller  : 'usersController'
    })
    // route for the MyProfile page
    .when('/MyProfile', {
        templateUrl : 'resources/viewParts/myProfileBody.html',
        controller  : 'userProfileController'
    })
        // route for the ChangePassword page
    .when('/ChangePassword', {
        templateUrl : 'resources/viewParts/changePasswordBody.html',
        controller  : 'passwdChangeController'
    })
    .otherwise({
        redirectTo: '/'
    });
	
	// Add an object to the scope to hold any data input in a form
	formModel = {};
	newUser = {};

});

mmModule.run(function(defaultErrorMessageResolver) {
	defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages) {
		errorMessages['invalidPassword'] = 'A password must contain 8 characters made up of letters, numbers and _ only.';
		errorMessages['minPasswordLength'] = 'A password must be a least 8 characters long.';
	});
});

mmModule.controller('adminHomeController', function($scope, $routeParams) {
	console.log("===== mode is: " + $routeParams.mode);
});

mmModule.controller('adminOverviewController', function($scope) {
	console.log("######## adminOverviewController() ###########");
});

mmModule.controller('newsUploadController', ['$scope', 'multipartForm', function($scope, multipartForm){
	$scope.news = {};
	var pristineFormTemplate = $('#newsForm').html();
	$scope.home = _home;
	
	$scope.Submit = function(isValid){
		var uploadUrl = _home + '/admin/upload';
		
		if(!isValid) 
		      alert('Data is invalid, try again...');
		else
			multipartForm.post( uploadUrl, $scope.news );
	};

}]);

mmModule.controller('ModalController', function($scope, member, modalType, close) {
	
	$scope.thisMember = jQuery.extend({},member);
	$scope.itsPosition = itsPosition;
	$scope.teams = gTeams;
	$scope.modalHeader = modalType;

	 $scope.close = function(save) {
		if(save)
		{
			 // The datepicker is sending in a string that's too long so cut it
			 //$scope.thisMember.dob = truncateDate($scope.thisMember.dob);
			 close($scope.thisMember, 500); // close, but give 500ms for bootstrap to animate
		}
		 else
			 close(member, 500);
	 };
	 
	 function truncateDate( date )
	 {
		 if( date.length > 10 )
			 return date.slice(0,10);
	 }

});

mmModule.controller('editTeamNBModalController', function($scope, team, close) {
	
	$scope.team = jQuery.extend({},team);

	 $scope.close = function(save) {
		 if(save)
			 close($scope.team, 500); // close, but give 500ms for bootstrap to animate
		 else
			 close(team, 500);
	 };

	});

mmModule.controller('AddMemberController', function($scope, close) {
	
	$scope.thisMember = {name: "", address: "", phone: "", phone2: "", email:"", amount: 0, team: 0, position: 0, lid: 0, favteam: "", favplayer: "", sappears: 0, sassists: 0, sgoals: 0, photo: "", achievements: "", status: ""};
	var mem = $scope.thisMember;
	$scope.itsPosition = itsPosition;
	$scope.teams = gTeams;
	
	$scope.close = function(add, mem) {
		close({op:add,member:mem}, 500); // close, but give 500ms for bootstrap to animate
	 };
});

mmModule.controller('DelMemberController', function($scope, member, modalHeader, close) {
	
	$scope.thisMember = member;
	$scope.modalHeader = modalHeader;
	
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


