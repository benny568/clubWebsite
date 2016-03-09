pubModule.controller('newsController', ['$scope', '$http', function ($scope,$http) {
	 var loghdr = "## [newsController]: ";
	
	log.debug(loghdr);
	$scope.stories = new Array();
	var csrf = $("meta[name='_csrf']").attr("content");
	log.debug(loghdr+"csrf token is: ",csrf);
	
	$http.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
	$http.defaults.xsrfCookieName = 'CSRF-TOKEN';
	$http.defaults.headers.post["Content-Type"] = "application/json";
	$http.defaults.headers.post["X-CSRF-TOKEN"] = csrf;
	
	$http.get(_home + '/news').success(function(data) 
	{
		$scope.stories = data;
	})
	.then(function(){
	}); // End of get()

}]);