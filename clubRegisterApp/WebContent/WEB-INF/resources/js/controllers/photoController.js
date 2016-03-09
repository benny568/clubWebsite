pubModule.controller('photoController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
	var logdepth = '    ';
	var loghdr = logdepth + "# photoController: ";
	log.debug(loghdr + "Initialized");
	var csrf = $("meta[name='_csrf']").attr("content");
	log.debug(loghdr+"csrf token is: ",csrf);
	
	$scope.team = $routeParams.team;
	$scope.year = $routeParams.year;
	
	log.debug(loghdr + "**routeParms: " + $scope.team + " : " + $scope.year);
	
	$http.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
	$http.defaults.xsrfCookieName = 'CSRF-TOKEN';
	$http.defaults.headers.post["Content-Type"] = "application/json";
	$http.defaults.headers.post["X-CSRF-TOKEN"] = csrf;
	
	$http.get(_home + '/photos/' + $scope.team + "/" + $scope.year)
	.success(
				function(data) 
				{
					$scope.photos = data;
				}
			)
	.then(
			function()
			{
			}
		); // End of get()

}]);