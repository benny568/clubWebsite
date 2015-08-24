upNews.controller('newsUploadController', ['$scope', 'multipartForm', function($scope, multipartForm){
	$scope.news = {};
	var pristineFormTemplate = $('#newsForm').html();
	$scope.home = _home;
	
	$scope.Submit = function(isValid){
		var uploadUrl = '/clubRegisterApp/admin/upload';
		
		if(!isValid) 
		      alert('Data is invalid, try again...');
		else
			multipartForm.post( uploadUrl, $scope.news );
	};

}]);