
mmModule.controller('academyManagerController', function ($scope,$http, dbService) 
{
	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
	$scope.home = "http://" + site + "/clubRegisterApp";
	
	$http.get(urlBase+'/academy/news').success(function(data) 
	{
		$scope.news = data;
		console.log("## Got academy news items..");
		console.log("## First News Story: ", $scope.news[0]);//$scope.news.title);
	}); // End of get()
	
});