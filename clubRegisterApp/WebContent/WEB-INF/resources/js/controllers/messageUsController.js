mmModule.controller('MessageUsController', function ($scope, $http) {
    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    
    console.log("## [MessageUsController]...");
	
    $scope.submit = function(contactform) 
    {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
		
        if (contactform.$valid) {
        	var csrf = $("meta[name='_csrf']").attr("content");
    		console.log("## [MessageUsController] - (submit) csrf token is: ",csrf);
    		console.log("## [MessageUsController] - (submit) contactform is: ",contactform);
    		
    		$http.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
    		$http.defaults.xsrfCookieName = 'CSRF-TOKEN';
    		$http.defaults.headers.post["Content-Type"] = "application/json";
    		$http.defaults.headers.post["X-CSRF-TOKEN"] = csrf;
    		
    		var request = $http({
    			method: "post",
    			url: _home + "/mail",
    			data: $scope.formData
    		});
        }
    }
});