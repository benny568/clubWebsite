mmModule.controller('newsController', [	'$scope', 
                                       	'$http', 
                                       	'ModalService', 
                                       	'dbService',
                                       	'DataService',
                                       	function( 	$scope,
                                       				$http,
                                       				ModalService, 
                                                   	dbService,
                                       				DataService ) 
{
	var logdepth = '';
	var loghdr = logdepth + "## [newsController]: ";
	
	log.debug(loghdr);
	$scope.data = DataService;
	$scope.stories = $scope.data.dsNewsStories;
	var csrf = $("meta[name='_csrf']").attr("content");
	log.debug(loghdr+"csrf token is: ",csrf);
	
	$http.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
	$http.defaults.xsrfCookieName = 'CSRF-TOKEN';
	$http.defaults.headers.post["Content-Type"] = "application/json";
	$http.defaults.headers.post["X-CSRF-TOKEN"] = csrf;
	
	// Initialise the ToolBox library
	var tools = TB$(log, logdepth + '    ');
	
	$http.get(_home + '/news').success(function(data) 
	{
		$scope.data.dsNewsStories = data;
	})
	.then(function(){
		log.debug(loghdr +  "Read news: " + $scope.data.dsNewsStories);
	}); // End of get()
	
	$scope.editStory = function(story) {
		log.debug(loghdr+"Edit story pressed!");
		var oldStory = tools.clone(story);
		
		ModalService.showModal({
            templateUrl: 'editStoryModal.html',
            controller: "editStoryController",
            inputs: { story : story }
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
            	var newStory = result;
            	var diff = tools.difference( newStory, oldStory);
            	if(diff)
            	{            		
	                dbService.updateStory( newStory )
	        		.then( function(result) {
	        			//applyMemberChange($scope.data.dsAllMembers, newMem);
	        			console.log(loghdr+"-> editStory: after update: ", newStory);
	        		});
            	}
        	});
        });
	}
	
	$scope.deleteStory = function(story) {
		log.debug(loghdr+"Delete story pressed!");
		
		ModalService.showModal({
            templateUrl: 'delConfirmModal.html',
            controller: "deleteStoryController",
            inputs: { 	story: {name: story.title},
            			modalHeader: 'story'
                	}
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(del) {
            	if(del)
            	{
	                dbService.deleteStory( story )
	        		.then( function(result) {
	        			//applyMemberDel($scope.data.dsAllMembers, member);
	        		});
            	}
        	});
        });
	}

}]);