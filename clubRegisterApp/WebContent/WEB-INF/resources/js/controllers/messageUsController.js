pubModule.controller('MessageUsController', ['$scope', '$http', 'mailService', function ($scope, $http,mailService) {
    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    var loghdr = "## [MessageUsController]: ";
    
    console.log(loghdr);
	
    $scope.submit = function(contactform) 
    {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
		
        if (contactform.$valid) {
        	var csrf = $("meta[name='_csrf']").attr("content");
    		console.log(loghdr+"- (submit) csrf token is: ",csrf);
    		console.log(loghdr+"- (submit) contactform is: ",contactform);
    		
    		$http.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
    		$http.defaults.xsrfCookieName = 'CSRF-TOKEN';
    		$http.defaults.headers.post["Content-Type"] = "application/json";
    		$http.defaults.headers.post["X-CSRF-TOKEN"] = csrf;
    		
    		mailService.sendMail($scope.formData);
        }
    }
}]);