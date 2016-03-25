
mmModule.controller(	'teamManagementController', 
						[
						 	'$scope', 
						 	'$http', 
						 	'$routeParams',
						 	'ModalService',
						 	'DataService',
						 	'dbService',
						 	function(
						 				$scope, 
						 				$http, 
						 				$routeParams,
						 				ModalService,
						 				DataService,
						 				dbService
						 			) 
{
	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
	$scope.home = _home;
	$scope.data = DataService;
	$scope.teamName = $routeParams.team;
	var urlteam = _home + '/team/' + $scope.teamName;
	var urlmembers = _home + '/teammembers/' + $scope.teamName;
	var logdepth = '';
	var loghdr = logdepth + "## [teamManagementController]: ";
	
	// Initialise the ToolBox library
	var tools = TB$(log, logdepth + '    ');
	
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
		log.debug(loghdr+"Got Team details: ", result.data);
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
			
		log.trace(loghdr+"setCurrentMember() called with: ", member);
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
	 * Name:		editTeamNB()
	 * Description:	Edit a teams Notice Board, update to server
	 * 				and update local in-memory copy
	 * Scope:		Externally accessible via the service
	 * Params in:	scope: The parents scope
	 * 				thisTeam: the team to edit
	 * Return:		Updates $scope.team
	 **********************************************************/
	$scope.editTeamNB = function(thisTeam) {
		if(!thisTeam)
			return;
		
		 ModalService.showModal({
	            templateUrl: 'editTeamNBModal.html',
	            controller: "editTeamNBModalController",
	            inputs: { team : thisTeam}
	        }).then(function(modal) {
	            modal.element.modal();
	            modal.close.then(function(result) {
	            	var newTeam = result;
	            	var diff = tools.difference( newTeam, thisTeam);
	            	if(diff)
	            	{
	            		$scope.data.dsCurrentTeam = newTeam;
		                dbService.updateTeam( newTeam )
		        		.then( function(result) {
		        			$scope.data.applyTeamChange(newTeam);
		        			log.debug(loghdr+"-> editTeamNB: after update: ", newTeam);
		        		});
	            	}
	        	});

	        });
	      
    };
    $scope.editTeamNB();

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