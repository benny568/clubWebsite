
pubModule.controller('academyController', ['$scope', '$http', function ($scope,$http) 
{
	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
	$scope.home = _home;
	
	$http.get(_home + '/academy/news').success(function(data) 
	{
		$scope.news = data;
		console.log("## Got academy news items..");
		console.log("## First News Story: ", $scope.news[0]);//$scope.news.title);
	}); // End of get()
	
}]);