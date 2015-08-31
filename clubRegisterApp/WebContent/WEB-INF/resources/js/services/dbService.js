mmModule.service('dbService', function($http, $q, promiseTracker) 
{
	
	return({
		getTeams: getTeams,
		getMembers4team: getMembers4team,
		updateMember: updateMember,
		deleteMember: deleteMember,
		getNewsStories: getNewsStories,
		addMember : addMember,
		getAllMembers : getAllMembers,
		addTeam : addTeam,
		updateTeam : updateTeam,
		deleteTeam : deleteTeam,
		getSessionsForTeam : getSessionsForTeam,
		getSessionsRecords : getSessionsRecords,
		getASessionRecord : getASessionRecord,
		getSessionRecordsForTeam : getSessionRecordsForTeam,
		getCurrentUser : getCurrentUser,
		updateUser : updateUser,
		addTrainingSession : addTrainingSession
		
	});
	
	
	/*******************************************************
	 * Get the list of teams from the db via a REST call.
	 *******************************************************/
	function getTeams() {
		var request = $http({
			method: "get",
			url: _home + "/admin/teams"
		});
		
		// The request returns a promise, which has a built in
		// 'then' function that takes the success and error callbacks
		// as the two parameters.
		return( request.then( handleSuccess, handleError ) );
	}
	
	/*******************************************************
	 * Get the members in a given team.
	 *******************************************************/
	function getMembers4team( teamId ) {
		var request = $http({
			method: "get",
			url: _home + "/admin/team/" + teamId
		});
		
		return( request.then( handleSuccess, handleError ) );
	}
	
	/*******************************************************
	 * Get all members.
	 *******************************************************/
	function getAllMembers() {
		var request = $http({
			method: "get",
			url: _home + "/admin/members"
		});
		
		return( request.then( handleSuccess, handleError ) );
	}
	
	
	/*******************************************************
	 * UPDATE MEMBER
	 *******************************************************/
	function updateMember( member ) {
		
		var csrf = $("meta[name='_csrf']").attr("content");
		console.log("## [updateMember] csrf token is: ",csrf);
		
		$http.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
		$http.defaults.xsrfCookieName = 'CSRF-TOKEN';
		$http.defaults.headers.put["Content-Type"] = "application/json";
		$http.defaults.headers.put["X-CSRF-TOKEN"] = csrf;
		
		var request = $http({
			method: "put",
			url: _home + "/admin/member",
			data: member
		});
		
		return( request.then( handleSuccess, handleError ) );
	}
	
	/*******************************************************
	 * ADD MEMBER
	 *******************************************************/
	function addMember( member ) {
		
		var csrf = $("meta[name='_csrf']").attr("content");
		console.log("## [dbService] - (addMember) csrf token is: ",csrf);
		console.log("## [dbService] - (addMember) member is: ",member);
		
		$http.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
		$http.defaults.xsrfCookieName = 'CSRF-TOKEN';
		$http.defaults.headers.post["Content-Type"] = "application/json";
		$http.defaults.headers.post["X-CSRF-TOKEN"] = csrf;
		
		var request = $http({
			method: "post",
			url: _home + "/admin/member",
			data: member
		});
		
		return( request.then( handleSuccess, handleError ) );
	}
	
	/*******************************************************
	 * DELETE MEMBER
	 *******************************************************/
	function deleteMember( member ) {
		
		var csrf = $("meta[name='_csrf']").attr("content");
		console.log("## [deleteMember] csrf token is: ",csrf);
		$http.defaults.headers.del = {'X-CSRF-TOKEN': csrf};
		
		var request = $http({
			method: "delete",
			url: _home + "/admin/member",
			data: member.id,
			headers: {"X-CSRF-TOKEN": csrf},
			xsrfHeaderName: 'X-CSRF-TOKEN',
			xsrfCookieName: 'CSRF-TOKEN'
		});
		
		return( request.then( handleSuccess, handleError ) );
	}
	
	/*******************************************************
	 * Get the news stories from the db.
	 *******************************************************/
	function getNewsStories() {
		$http.defaults.headers.common["Accept"] = "application/json, text/plain";
		console.log("## [dbService]->getNewsStories()");
		
		var request = $http({
			method: "get",
			url: _home + "/admin/news"
		});
		
		return( request.then( handleSuccess, handleError ) );
	}
	
	/*******************************************************
	 * ADD TEAM
	 *******************************************************/
	function addTeam( team ) {
		
		var csrf = $("meta[name='_csrf']").attr("content");
		console.log("## [dbService] - (addTeam) csrf token is: ",csrf);
		console.log("## [dbService] - (addTeam) team is: ",team);
		
		$http.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
		$http.defaults.xsrfCookieName = 'CSRF-TOKEN';
		$http.defaults.headers.post["Content-Type"] = "application/json";
		$http.defaults.headers.post["X-CSRF-TOKEN"] = csrf;
		
		var request = $http({
			method: "post",
			url: _home + "/admin/team",
			data: team
		});
		
		return( request.then( handleSuccess, handleError ) );
	}
	
	/*******************************************************
	 * UPDATE TEAM
	 *******************************************************/
	function updateTeam( team ) {
		
		var csrf = $("meta[name='_csrf']").attr("content");
		console.log("## [updateTeam] csrf token is: ",csrf);
		
		$http.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
		$http.defaults.xsrfCookieName = 'CSRF-TOKEN';
		$http.defaults.headers.put["Content-Type"] = "application/json";
		$http.defaults.headers.put["X-CSRF-TOKEN"] = csrf;
		
		var request = $http({
			method: "put",
			url: _home + "/admin/team",
			data: team
		});
		
		return( request.then( handleSuccess, handleError ) );
	}
	
	/*******************************************************
	 * DELETE TEAM
	 *******************************************************/
	function deleteTeam( team ) {
		
		var csrf = $("meta[name='_csrf']").attr("content");
		console.log("## [deleteTeam] csrf token is: ",csrf);
		
		$http.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
		$http.defaults.xsrfCookieName = 'CSRF-TOKEN';
		$http.defaults.headers.put["Content-Type"] = "application/json";
		$http.defaults.headers.put["X-CSRF-TOKEN"] = csrf;
		
		var request = $http({
			method: "delete",
			url: _home + "/admin/team",
			data: team.id,
			headers: {"X-CSRF-TOKEN": csrf},
			xsrfHeaderName: 'X-CSRF-TOKEN',
			xsrfCookieName: 'CSRF-TOKEN'
		});
		
		return( request.then( handleSuccess, handleError ) );
	}
	
	/***************************************************************
	 * Get the list of taining sessions for a team from the db via 
	 * a REST call.
	 ***************************************************************/
	function getSessionsForTeam(teamId) {
		console.log("## [dbService] -> getSessionsForTeam");
		
		var request = $http({
			method: "get",
			url: _home + "/admin/sessionplan/" + teamId
		});
		
		// The request returns a promise, which has a built in
		// 'then' function that takes the success and error callbacks
		// as the two parameters.
		return( request.then( handleSuccess, handleError ) );
	}
	
	
	/***************************************************************
	 * Get the list of taining records from the db via a REST call.
	 ***************************************************************/
	function getSessionsRecords() {
		console.log("## [dbService] -> getSessionRecords");
		
		var request = $http({
			method: "get",
			url: _home + "/admin/sessionrec"
		});
		
		// The request returns a promise, which has a built in
		// 'then' function that takes the success and error callbacks
		// as the two parameters.
		return( request.then( handleSuccess, handleError ) );
	}
	
	/***************************************************************
	 * Get taining records for a particular team from the db via a 
	 * REST call.
	 ***************************************************************/
	function getSessionRecordsForTeam(teamId) {
		console.log("## [dbService] -> getSessionRecordsForTeam - with id: ", teamId);
		
		var request = $http({
			method: "get",
			url: _home + "/admin/sessionrec/" + teamId,
		});
		
		// The request returns a promise, which has a built in
		// 'then' function that takes the success and error callbacks
		// as the two parameters.
		return( request.then( handleSuccess, handleError ) );
	}
	
	/***************************************************************
	 * Get a particular taining record from the db via a REST call.
	 ***************************************************************/
	function getASessionRecord(recId) {
		console.log("## [dbService] -> getASessionRecord - with id: ", recId);
		
		var request = $http({
			method: "get",
			url: _home + "/admin/sessionrec",
			data: recId
		});
		
		// The request returns a promise, which has a built in
		// 'then' function that takes the success and error callbacks
		// as the two parameters.
		return( request.then( handleSuccess, handleError ) );
	}
	
	/***************************************************************
	 * Get the user name from the db via a REST call.
	 ***************************************************************/
	function getCurrentUser() {
		console.log("## [dbService] -> getCurrentUser");
		
		var request = $http({
			method: "get",
			url: _home + "/admin/user"
		});
		
		// The request returns a promise, which has a built in
		// 'then' function that takes the success and error callbacks
		// as the two parameters.
		return( request.then( handleSuccess, handleError ) );
	}
	
	/*******************************************************
	 * UPDATE USER
	 *******************************************************/
	function updateUser( user ) {
		
		var csrf = $("meta[name='_csrf']").attr("content");
		console.log("## [updateUser] csrf token is: ",csrf);
		
		$http.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
		$http.defaults.xsrfCookieName = 'CSRF-TOKEN';
		$http.defaults.headers.put["Content-Type"] = "application/json";
		$http.defaults.headers.put["X-CSRF-TOKEN"] = csrf;
		
		var request = $http({
			method: "put",
			url: _home + "/admin/user",
			data: user
		});
		
		return( request.then( handleSuccess, handleError ) );
	}
	
	/*******************************************************
	 * ADD TRAINING SESSION
	 *******************************************************/
	function addTrainingSession( session ) {
		
		var csrf = $("meta[name='_csrf']").attr("content");
		console.log("## [dbService] - (addTrainingSession) csrf token is: ",csrf);
		console.log("## [dbService] - (addTrainingSession) record is: ",session);
		
		$http.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
		$http.defaults.xsrfCookieName = 'CSRF-TOKEN';
		$http.defaults.headers.post["Content-Type"] = "application/json";
		$http.defaults.headers.post["X-CSRF-TOKEN"] = csrf;
		
		var request = $http({
			method: "post",
			url: _home + "/admin/session",
			data: session
		});
		
		return( request.then( handleSuccess, handleError ) );
	}

	
	// Error handling
	
	function handleSuccess( response ) {
		console.log("## http success!!");
		return( response.data );
	}
	
	function handleError( response ) {
		console.log("## http ERROR!!");
		if(
			! angular.isObject( response.data ) ||
			! response.data.message
			){
			return( $q.reject( "An unknown error occured!" ));
		}
		return( $q.reject( response.data.message ));
	}
});
