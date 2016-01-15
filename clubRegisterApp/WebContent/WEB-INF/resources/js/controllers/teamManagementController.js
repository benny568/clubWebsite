
mmModule.controller('teamManagementController', ['$scope', '$http', '$routeParams', 'privateDataService', function ($scope, $http, $routeParams, privateDataService) 
{
	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
	$scope.home = _home;
	$scope.data = privateDataService;
	$scope.teamName = $routeParams.team;
	var urlteam = _home + '/team/' + $scope.teamName;
	var urlmembers = _home + '/teammembers/' + $scope.teamName;
	
	$http.get(urlteam)
	.then( function( result )
	{
		$scope.team = result.data;
		$scope.data.dsCurrentTeam = result.data;
		return $http.get(urlmembers);
	})
	.then(function(result) 
	{
		$scope.data.dsTeamMembers = result.data;
		console.log("## Got Team details: ", result.data);
	})
	.then( function(data)
	{
		// (3) Get the League table from the League Republic site
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
	
	
	/**********************************************************
	 * Name:		setCurrentMember()
	 * Description:	Set the member to display in the details box
	 * Scope:		Externally accessible
	 * Params in:	member: The member in question
	 * Return:		
	 **********************************************************/
	$scope.setCurrentMember = function(member)
	{
		log.trace("## -> setCurrentMember("+member+")");
		if( typeof member == 'undefined' )
			return
			
		log.trace("[setCurrentMember] called with: ", member);
		$scope.data.dsCurrentMember = member;
		
		if(typeof(member) != 'undefined')
		{
			$scope.displayMember = true;
			$scope.data.dsCurrentMember.age = calculateAge($scope.data.dsCurrentMember.dob);
			if( typeof $scope.data.dsCurrentMember.position == 'number' )
				$scope.data.dsCurrentMember.position = $scope.data.dsPosition[$scope.data.dsCurrentMember.position];
		}
		log.trace("## <- setCurrentMember()");
	}
	$scope.setCurrentMember();

	/**********************************************************
	 * Name:		calculateAge()
	 * Description:	Calculate the age based on the dob
	 * Scope:		Internal
	 * Params in:	dob: The member date of birth
	 * Return:		
	 **********************************************************/
	function calculateAge(dob)
	{
		var today = new Date();
		var birthday = new Date(dob);
		var age = 0;
		
		age = (today.getFullYear() - birthday.getFullYear() - 1);
		if( today.getMonth() > birthday.getMonth() )
			age++;
		else if( (today.getMonth() == birthday.getMonth()) && (today.getDate() >= birthday.getDate) )
			age++;
		
		return age;
		
	}
	
}]);