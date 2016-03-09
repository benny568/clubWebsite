
mmModule.controller('FileUploadController', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {
	$scope.submit = function() {
	        $scope.upload($scope.news);
	    };

	    // upload on file select or drop
	    $scope.upload = function (file) {
	    	
	        Upload.upload({
	            url: _home + '/admin/upload',
	            data: $scope.news
	        }).then(function (resp) {
	            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
	        }, function (resp) {
	            console.log('Error status: ' + resp.status);
	        }, function (evt) {
	            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
	            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
	        });
	    };
}]);