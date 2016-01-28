var serverMode = {
	LOCAL: 0, // Running locally
	REMOTE: 1 // Running on Mochahost server
};
var _home = '';

var thisServerMode = serverMode.LOCAL;

/********************************************
/* Setup the logger
 * ********************************************/
var log = log4javascript.getLogger("ClubRegisterApp");
//Create an Appender with default options
var bcAppender = new log4javascript.BrowserConsoleAppender();
bcAppender.setThreshold(log4javascript.Level.TRACE);
// Add the appender to the logger
log.addAppender(bcAppender);

/*log4javascript.Level.ALL
log4javascript.Level.TRACE
log4javascript.Level.DEBUG
log4javascript.Level.INFO
log4javascript.Level.WARN
log4javascript.Level.ERROR
log4javascript.Level.FATAL
log4javascript.Level.OFF*/
log.setLevel(log4javascript.Level.ALL);

// Test the logger
log.debug("** Private Module Loaded....");
/********************************************/


var mmModule = angular.module(	'memberManagerApp', []);
								/*[
								 	'ngRoute', 
								 	'angularModalService', 
								 	'ajoslin.promise-tracker', 
								 	'ui.bootstrap',
								 	'csrf-cross-domain',
								 	'jcs-autoValidate'
								 ]);*/

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
        controller  : 'dummyController'
    })

    // route for the AdminOverview page
    .when('/AdminOverview', {
        templateUrl : 'resources/viewParts/adminOverviewBody.html',
        controller  : 'dummyController'
    })

    // route for the AdminTutorials page
    .when('/AdminTutorials', {
        templateUrl : 'resources/viewParts/adminTutorialsBody.html',
        controller  : 'dummyController'
    })

    // route for the MemberRegister page
    .when('/MemberRegister', {
        templateUrl : 'resources/viewParts/memberRegisterBody.html',
        controller  : 'memberManagerController'
    })
    
    // route for the MemberRegister page
    .when('/AllMembersAdmin', {
        templateUrl : 'resources/viewParts/allMembersAdminBody.html',
        controller  : 'memberManagerController'
    })

    // route for the ManageTeams page
    .when('/ManageTeams', {
        templateUrl : 'resources/viewParts/manageTeamsBody.html',
        controller  : 'teamsManagerController'
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
        controller  : 'teamManagementController'
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

mmModule.run( function(defaultErrorMessageResolver) {
	defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages) {
		errorMessages['invalidPassword'] = 'A password must contain 8 characters made up of letters, numbers and _ only.';
		errorMessages['minPasswordLength'] = 'A password must be a least 8 characters long.';
	});
});

mmModule.controller('dummyController', ['$scope', '$log', 'privateDataService', function($scope, $log, privateDataService) {
	$log.info("->dummyController..");
	$scope.data = privateDataService;

}]);

mmModule.controller('adminHomeController', ['$scope', '$log', 'privateDataService', function($scope, $log, privateDataService) {
	$log.info("->adminHomeController..");
	$scope.data = privateDataService;
}]);

mmModule.controller('adminOverviewController', ['$scope', '$log', 'privateDataService', function($scope, $log, privateDataService) {
	$log.info("->adminOverviewController..");
	$scope.data = privateDataService;
}]);

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

mmModule.controller('ModalController', ['$scope', 'privateDataService', 'member', 'modalType', 'close', function($scope,privateDataService, member, modalType, close) {
	
	$scope.data = privateDataService;
	$scope.modalHeader = modalType;
	
	$scope.data.dsCurrentMember = jQuery.extend({},member);

	$scope.close = function(save) {
    if(save)
	{
		close($scope.data.dsCurrentMember, 500); // close, but give 500ms for bootstrap to animate
	}
	else
		close(member, 500);
	};
	 
	 function truncateDate( date )
	 {
		 if( date.length > 10 )
			 return date.slice(0,10);
	 }

}]);

mmModule.controller('editTeamNBModalController', ['$scope', 'team', 'close', 'privateDataService', function($scope, team, close, privateDataService) {
	$log.info("->editTeamNBModalController..");
	$scope.data = privateDataService;
	$scope.team = jQuery.extend({},team);

	 $scope.close = function(save) {
		 if(save)
			 close($scope.team, 500); // close, but give 500ms for bootstrap to animate
		 else
			 close(team, 500);
	 };

}]);

mmModule.controller('newsController', ['$scope', '$http', 'ModalService', 'dbService', function ($scope,$http, ModalService, dbService) {
	
	console.log("## [newsController]...");
	$scope.stories = new Array();
	
	getNews();

	function getNews(){		
		dbService.getNewsStories()
			.then( function(stories) {
				$scope.stories = stories;
		});
	}
}]);


mmModule.controller('EditTeamController', ['$scope', 'team', 'close', 'privateDataService', function($scope, team, close, privateDataService) {
	$log.info("->EditTeamController..");
	$scope.data = privateDataService;
	$scope.thisTeam = team;
	
	$scope.close = function(update, team) {
		$log.log("## [EditTeamController] team is: ", $scope.thisTeam);
		close({op:update,team:$scope.thisTeam}, 500); // close, but give 500ms for bootstrap to animate
	 };
}]);



