mmModule.controller('newsUploadController', ['$scope', 'multipartForm', function($scope, multipartForm){
	var logdepth = '        ';
	var loghdr = logdepth + "-> newsUploadController: ";
	log.debug(loghdr + "Initialized");
	
	console.log(loghdr + "Initialized");

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