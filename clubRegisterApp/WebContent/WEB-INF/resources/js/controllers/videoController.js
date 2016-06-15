pubModule.controller('videoController', ['$scope', '$routeParams', function($scope, $routeParams) {
	var logdepth = '    ';
	var loghdr = logdepth + "# videoController: ";
	log.debug(loghdr + "Initialized");
	var csrf = $("meta[name='_csrf']").attr("content");
	log.debug(loghdr+"csrf token is: ",csrf);

	$scope.team = $routeParams.team;
	$scope.year = $routeParams.year;

	log.debug(loghdr + "**routeParms: " + $scope.team + " : " + $scope.year);

	    
	// NEW CODE

	$scope.aAlbum = [];
	
	switch( $scope.team )
	{
		case 'U10':
			setParams( $scope.team, $scope.year, 1, 'resources/videos/2016/U10/');
			break;
		case 'Junior B':
			setParams( $scope.team, $scope.year, 1, 'https://www.youtube.com/embed/H27ccqxadqs');
			break;
		default:
			log.debug(loghdr + "No team found!");
			break;		
	}

	function setParams( team, year, num, path )
	{
		var cnt = 1;
		var photo = { title: "", link: "" };
		
		for( cnt=1; cnt<num+1; cnt++ )
		{
			photo = { title: team + ' 2016', link: path };
			$scope.aAlbum.push(photo);
		}
	}
	
}]);