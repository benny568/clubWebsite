pubModule.controller(	'teamViewController', 
						[
						 	'$scope', 
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
	var urlteam = _home + '/team/' + $scope.teamName;
	var urlmembers = _home + '/teammembers/' + $scope.teamName;
	var loghdr = "## [teamViewController]: ";
	
	$http.get(urlteam)
	.then( function( result )
	{
		log.debug(loghdr+"Got the Team: ", result.data);
		$scope.team = result.data;
		$scope.data.dsCurrentTeam = result.data;
		return $http.get(urlmembers);
	})
	.then(function(result) 
	{
		$scope.data.dsTeamMembers = result.data;
		log.debug(loghdr+"Got Team members: ", result.data);
	})
	.then( function(data)
	{
		// (3) Get the League table from the League Republic site
		$scope.lrcode = $scope.data.dsCurrentTeam.lrcode;
		log.debug($scope.lrcode);
		
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
			log.debug(el);
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
		log.trace(loghdr+"-> setCurrentMember("+member+")");
		if( typeof member == 'undefined' )
			return
			
		log.trace(loghdr+"[setCurrentMember] called with: ", member);
		$scope.data.dsCurrentMember = member;
		
		if(typeof(member) != 'undefined')
		{
			$scope.displayMember = true;
			$scope.data.dsCurrentMember.age = calculateAge($scope.data.dsCurrentMember.dob);
			if( typeof $scope.data.dsCurrentMember.position == 'number' )
				$scope.data.dsCurrentMember.position = $scope.data.dsPosition[$scope.data.dsCurrentMember.position];
		}
		log.trace(loghdr+"<- setCurrentMember()");
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
		var birthday = new Date(reverseDateStr(dob));
		var age = 0;
		
		age = (today.getFullYear() - birthday.getFullYear() - 1);
		if( today.getMonth() > birthday.getMonth() )
			age++;
		else if( (today.getMonth() == birthday.getMonth()) && (today.getDate() >= birthday.getDate) )
			age++;
		
		return age;
		
	}
	
	/**********************************************************
	 * Name:		reverseDateStr()
	 * Description:	Reverse from dd/mm/yyyy to yyyy/mm/dd
	 * Scope:		Internal
	 * Params in:	dob: The member date of birth
	 * Return:		
	 **********************************************************/
	function reverseDateStr(dob)
	{
		var dd, mm, yyyy;
		
		dd = dob.slice(0,2);
		mm = dob.slice(3,5);
		yyyy = dob.slice(6,10);
		
		return yyyy + '/' + mm + '/' + dd;
	}
	
}]);