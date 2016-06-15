pubModule.controller('photoController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
	var logdepth = '    ';
	var loghdr = logdepth + "# photoController: ";
	log.debug(loghdr + "Initialized");
	var csrf = $("meta[name='_csrf']").attr("content");
	log.debug(loghdr+"csrf token is: ",csrf);

	$scope.team = $routeParams.team;
	$scope.year = $routeParams.year;
	$scope.event = $routeParams.event;

	log.debug(loghdr + "**routeParms: " + $scope.team + " : " + $scope.year + " : " + $scope.event);

	$scope.aAlbum = [];
	var files = [];
	var photo = {};
	var numPhotos = 0;
	var url = '';
	var path = '';
	
	if( $scope.event !== "none" && $scope.event != '' )
	{
		url = _home + '/photos/' + $scope.year + '/' + $scope.team + '/' + $scope.event;
		path = 'resources/galleries/' + $scope.year + '/' + $scope.team + '/' + $scope.event + '/';
	}
	else
	{
		url = _home + '/photos/' + $scope.year + '/' + $scope.team;
		path = 'resources/galleries/' + $scope.year + '/' + $scope.team + '/';
	}
	
	$http.get( url ).success(function(data) 
	{
		files = data;
	})
	.then(function(){
		log.debug(loghdr +  "Got num photos: " + files.length);
		setParams( $scope.team, $scope.year, files, path);
	}); // End of get()

	function setParams( team, year, files, filepath )
	{
		var cnt = 0;
		
		for( cnt=0; cnt<files.length; cnt++ )
		{
			photo = { title: team + ' ' + year, image: filepath + files[cnt] };
			$scope.aAlbum.push(photo);
			log.debug(loghdr + 'Added: ' + photo.image);
		}
	}
	
}]);