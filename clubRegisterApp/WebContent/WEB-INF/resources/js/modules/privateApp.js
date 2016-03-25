
var _home = '';

var gThisUser = {};

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


var mmModule = angular.module(	'memberManagerApp',
								[
								 	'ngRoute', 
								 	'angularModalService', 
								 	'ajoslin.promise-tracker', 
								 	'ui.bootstrap',
								 	'csrf-cross-domain',
								 	'jcs-autoValidate'
								 ]);

mmModule.config(function($routeProvider,$httpProvider) {
	
	/**
	* make delete type json
	*/
	$httpProvider.defaults.headers["delete"] = {
	'Content-Type': 'application/json;charset=utf-8'
	};
	
	$routeProvider
    // route for the admin home page
    .when('/', {
        templateUrl : 'resources/viewParts/adminHomeBody.html',
        controller  : 'dummyController',
        resolve: { _home: function (DataService) {return DataService.getHome();}}
    })

    // route for the AdminOverview page
    .when('/AdminOverview', {
        templateUrl : 'resources/viewParts/adminOverviewBody.html',
        controller  : 'dummyController',
        resolve: { _home: function (DataService) {return DataService.getHome();}}
    })

    // route for the AdminTutorials page
    .when('/AdminTutorials', {
        templateUrl : 'resources/viewParts/adminTutorialsBody.html',
        controller  : 'dummyController',
        resolve: { _home: function (DataService) {return DataService.getHome();}}
    })

    // route for the MemberRegister page
    .when('/MemberRegister', {
        templateUrl : 'resources/viewParts/memberRegisterBody.html',
        controller  : 'memberManagerController',
        resolve: { _home: function (DataService) {return DataService.getHome();}}
    })
    
    // route for the MemberRegister page
    .when('/AllMembersAdmin', {
        templateUrl : 'resources/viewParts/allMembersAdminBody.html',
        controller  : 'memberManagerController',
        resolve: { _home: function (DataService) {return DataService.getHome();}}
    })

    // route for the ManageTeams page
    .when('/ManageTeams', {
        templateUrl : 'resources/viewParts/manageTeamsBody.html',
        controller  : 'teamsManagerController',
        resolve: { _home: function (DataService) {return DataService.getHome();}}
    })

    // route for the UploadNewsStory page
    .when('/UploadNewsStory', {
        templateUrl : 'resources/viewParts/newsUploadBody.html',
        controller  : 'newsUploadController',
        resolve: { _home: function (DataService) {return DataService.getHome();}}
    })
    
    // route for the EditNewsStory page
    .when('/EditNewsStory', {
        templateUrl : 'resources/viewParts/newsListBody.html',
        controller  : 'newsController',
        resolve: { _home: function (DataService) {return DataService.getHome();}}
    })

    // route for the AllMembersAdmin page
    .when('/AllMembersAdmin/:mode', {
        templateUrl : 'resources/viewParts/allMembersAdminBody.html',
        controller  : 'memberManagerController',
        resolve: { _home: function (DataService) {return DataService.getHome();}}
    })
    // route for the ManageTeam page
    .when('/ManageTeam/:mode/:team', {
        templateUrl : 'resources/viewParts/manageTeamBody.html',
        controller  : 'teamManagementController',
        resolve: { _home: function (DataService) {return DataService.getHome();}}
    })
    // route for the UsersAdmin page
    .when('/UsersAdmin', {
        templateUrl : 'resources/viewParts/usersAdmin.html',
        controller  : 'usersController',
        resolve: { _home: function (DataService) {return DataService.getHome();}}
    })
    // route for the MyProfile page
    .when('/MyProfile', {
        templateUrl : 'resources/viewParts/myProfileBody.html',
        controller  : 'userProfileController',
        resolve: { _home: function (DataService) {return DataService.getHome();}}
    })
        // route for the ChangePassword page
    .when('/ChangePassword', {
        templateUrl : 'resources/viewParts/changePasswordBody.html',
        controller  : 'passwdChangeController',
        resolve: { _home: function (DataService) {return DataService.getHome();}}
    })
    .otherwise({
        redirectTo: '/',
        resolve: { _home: function (DataService) {return DataService.getHome();}}
    });

});

/*mmModule.run(function(defaultErrorMessageResolver) {
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
*/

mmModule.controller('ModalController', ['$scope', 'DataService', 'member', 'modalType', 'close', function($scope,DataService, member, modalType, close) {
	
	$scope.data = DataService;
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

}]);

mmModule.controller('editTeamNBModalController', ['$scope', 'team', 'close', 'DataService', function($scope, team, close, DataService) {
	//$log.info("->editTeamNBModalController..");
	$scope.data = DataService;
	$scope.team = jQuery.extend({},team);

	 $scope.close = function(save) {
		 if(save)
			 close($scope.team, 500); // close, but give 500ms for bootstrap to animate
		 else
			 close(team, 500);
	 };

}]);
