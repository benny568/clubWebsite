var serverMode = {
	LOCAL: 0, // Running locally
	REMOTE: 1 // Running on Mochahost server
};
var _home = '';

var thisServerMode = serverMode.LOCAL;


/********************************************
/* Setup the logger
 * ********************************************/
var log = log4javascript.getLogger("publicWebApp");
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
log.debug("** Public Module Loaded....");
/********************************************/


var pubModule = angular.module(	'publicApp', 
								[
								 	'ngRoute', 
								 	'ngAnimate', 
								 	'ui.bootstrap', 
								 	'csrf-cross-domain', 
								 	'ajoslin.promise-tracker',
								 	'memberManagerApp'
								 ]);

//['memberManagerApp','ngRoute','angularModalService', 'ajoslin.promise-tracker', 'ui.bootstrap','csrf-cross-domain','jcs-autoValidate']);

pubModule.config(['$routeProvider', '$httpProvider', function($routeProvider,$httpProvider) {
	
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
    // route for the home page
    .when('/', {
        templateUrl : 'resources/viewParts/homeBody.html',
        controller  : 'newsController'
    })

    // route for the Merchandise page
    .when('/Merchandise', {
        templateUrl : 'resources/viewParts/merchandiseBody.html',
        controller  : 'MerchandiseController'
    })

    // route for the ClubHistory page
    .when('/ClubHistory', {
        templateUrl : 'resources/viewParts/clubHistoryBody.html',
        controller  : 'ClubHistoryController'
    })

    // route for the AcademyHome page
    .when('/AcademyHome', {
        templateUrl : 'resources/viewParts/academyHomeBody.html',
        controller  : 'academyController'
    })

    // route for the AcademyOverview page
    .when('/AcademyOverview', {
        templateUrl : 'resources/viewParts/academyOverviewBody.html',
        controller  : 'academyController'
    })

    // route for the AcademyCoaches page
    .when('/AcademyCoaches', {
        templateUrl : 'resources/viewParts/academyCoachesBody.html',
        controller  : 'academyController'
    })

    // route for the AcademySchedule page
    .when('/AcademySchedule', {
        templateUrl : 'resources/viewParts/academyScheduleBody.html',
        controller  : 'academyController'        	
    })

    // route for the AcademyRegistration page
    .when('/AcademyRegistration', {
        templateUrl : 'resources/viewParts/academyRegistrationBody.html',
        controller  : 'academyController'
    })
    
    // route for the AcademyPhotos page
    .when('/AcademyPhotos', {
        templateUrl : 'resources/viewParts/AcademyPhotosBody.html',
        controller  : 'academyController'
    })
    
    // route for the U18 Team page
    .when('/ViewTeam/:team', {
        templateUrl : 'resources/viewParts/teamViewBody.html',
        controller  : 'teamViewController'
    })
    // route for the U18 Fixtures & Results page
    .when('/farView/:team', {
        templateUrl : 'resources/viewParts/farViewBody.html',
        controller  : 'farViewController'
    })
    // route for the findUs page
    .when('/FindUs', {
        templateUrl : 'resources/viewParts/findUsBody.html',
        controller  : 'findUsController'
    })
    // route for the Message Us page
    .when('/MessageUs', {
        templateUrl : 'resources/viewParts/messageUsBody.html',
        controller  : 'MessageUsController'
    })
    // route for the Downloads page
    .when('/ContactUs', {
        templateUrl : 'resources/viewParts/contactUsBody.html',
        controller  : 'BlankController'
    })
    // route for the Downloads page
    .when('/Downloads', {
        templateUrl : 'resources/viewParts/downloadsBody.html',
        controller  : 'BlankController'
    })
    // route for the Links page
    .when('/Links', {
        templateUrl : 'resources/viewParts/linksBody.html',
        controller  : 'BlankController'
    })
    // route for the Admin home page
    .when('/admin', {
        templateUrl : 'resources/viewParts/adminHomeBody.html',
        controller  : 'newsController'
    })
    .otherwise({
        redirectTo: '/'
    });

}]);

/*pubModule.run( function(defaultErrorMessageResolver) {
	defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages) {
		errorMessages['invalidPassword'] = 'A password must contain 8 characters made up of letters, numbers and _ only.';
		errorMessages['minPasswordLength'] = 'A password must be a least 8 characters long.';
	});
});*/
