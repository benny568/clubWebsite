var upNews = angular.module('upNewsModule', []);
var serverMode = {
		LOCAL: 0, // Running locally
		REMOTE: 1 // Running on Mochahost server
	};

var thisServerMode = serverMode.REMOTE;
var _home = '';

/********************************************
/* Setup the logger
 * ********************************************/
var log = log4javascript.getDefaultLogger();
//Create an Appender with default options
var bcAppender = new log4javascript.BrowserConsoleAppender();
// Add the appender to the logger
log.addAppender(bcAppender);
// Test the logger
log.debug("## News Upload Module Loaded....");
/********************************************/

upNews.config(function($httpProvider) {
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

});
