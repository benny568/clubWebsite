
pubModule.controller('teamViewController', function ($scope, $http, $routeParams, dataService) 
{
	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
	$scope.home = _home;
	$scope.data = dataService;
	$scope.teamName = $routeParams.team;
	var urlteam = _home + '/team/' + $scope.teamName;
	var urlmembers = _home + '/teammembers/' + $scope.teamName;
	
	$http.get(urlteam)
	.then( function( result )
	{
		$scope.team = result.data;
		return $http.get(urlmembers);
	})
	.then(function(result) 
	{
		dataService.dsTeamMembers = result.data;
		console.log("## Got Team details: ", result.data);
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
		$scope.currentMember = member;
		
		if(typeof(member) != 'undefined')
		{
			$scope.displayMember = true;
			$scope.currentMember.age = calculateAge($scope.currentMember.dob);
			if( typeof $scope.currentMember.position == 'number' )
				$scope.currentMember.position = itsPosition[$scope.currentMember.position];
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
	
});