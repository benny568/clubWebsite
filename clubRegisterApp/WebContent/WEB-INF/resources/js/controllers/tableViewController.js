
pubModule.controller(	'tableViewController', 
						['$scope', 
						 '$http', 
						 '$routeParams', 
						 'DataService', 
						 function(
								 	$scope,
								 	$http,
								 	$routeParams,
								 	DataService
								 ) 
{
	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
	$scope.home = _home;
	$scope.data = DataService;
	$scope.teamName = $routeParams.team;
	
	$http.get(_home + '/team/' + $scope.teamName )
	.then( function(data) 
	{
		// (1) Get the Team details
		$scope.team = data.data;
		$scope.data.dsCurrentTeam = data.data;
		console.log("## Got team details..", $scope.team.name);
		console.log("## lrcode: ", $scope.team.lrcode);
	})
	.then( function(data)
	{
		// (2) Get the League table from the League Republic site
		$scope.lrcode = $scope.data.dsCurrentTeam.lrcode;
		console.log($scope.lrcode);
		
		var url = 'http://api.leaguerepublic.com/l/js/cs1.html?cs=' + $scope.data.dsCurrentTeam.lrcode;
		
		if( window[ "numCodeSnippets" ] == undefined )
		{
			window[ "numCodeSnippets" ] = 1;
		} 
		else 
		{
			window[ "numCodeSnippets" ]++;
		};

		if( window["numCodeSnippets"] <= 12 )
		{
			var randno = Math.random();
			var el = document.createElement( "script" );
			el.src = "http://api.leaguerepublic.com/l/js/cs1.html?cs=" + $scope.data.dsCurrentTeam.lrcode;// + "&random=" + randno;
			el.type = "text/javascript";
			document.getElementsByTagName("head")[0].appendChild(el);
			console.log(el);
		};
	}); // End of get()
	
}]);