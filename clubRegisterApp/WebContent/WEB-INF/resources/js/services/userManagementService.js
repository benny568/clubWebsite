mmModule.service('umService', function($http, $q, promiseTracker, dbService, ModalService,$rootScope) 
{
	
	return({
		addUser : addUser,
		editUser : editUser,
		deleteUser : deleteUser
	});
	
	
	/**********************************************************
	 * Name:		addUser()
	 * Description:	Add new user, update local memory and send
	 * 				to the server.
	 * Scope:		Externally accessible
	 * Params in:	goNogo: avoids it being called when the
	 * 				script is loaded
	 * Return:		Adds the member on to the end of the members
	 * 				array for the team specified when adding,
	 * 				$scope.TeamMembers[member.team]
	 **********************************************************/
	function addUser( $scope ) 
	{
		console.log("[umService] -> addUser");
			
		$scope.newUser = {};
		$scope.modalHeader = "Add User";
		
				
		ModalService.showModal({templateUrl: 'addUserModal.html',controller: "AddUserController"})
			.then(	function(modal) 
					{
			            modal.element.modal();
			            modal.close.then(	function(result) 
			            					{
			            						if( result.op == 'save')
			            						{
			            							dbService.addUser( result.user ).then( function(result){
			            								console.log("[mmService] - addUser (reurned from dbService): ", $scope.newUser);
			            								//applyUserAdd(scope);
			            							} );
			            						}
			            					}
			            				);
		            }
				); // End .then()
	} // End addUser()

	/**********************************************************
	 * Name:		editUser()
	 * Description:	Edit the user
	 * Scope:		Externally accessible
	 * Params in:	
	 * Return:		
	 **********************************************************/
	function editUser(user)
	{
		if( typeof user == 'undefined')
			return;
		gOpUser = user;

		ModalService.showModal({templateUrl: 'addUserModal.html',controller: "EditUserController"})
		.then(	function(modal) 
				{
		            modal.element.modal();
		            modal.close.then(	function(result) 
		            					{
		            						if( result.op == 'save')
		            						{
		            							//$scope.newUser = result.user;
		            							dbService.updateUser( result.user ).then( function(result){
		            								console.log("[mmService] - updateUser (reurned from dbService): ", $scope.newUser);
		            								//applyUserAdd(scope);
		            							} );
		            						}
		            					}
		            				);
	            }
			); // End .then()
	}
	
	/**********************************************************
	 * Name:		deleteUser()
	 * Description:	Delete a user record
	 * Scope:		Externally accessible
	 * Params in:	The user to be deleted
	 * Return:		
	 **********************************************************/
	function deleteUser($scope, user)
	{
		if(user === undefined)
			return;
		
		 ModalService.showModal({
	            templateUrl: 'delConfirmModal.html',
	            controller: "DeleteUserController",
	            inputs: {
	                user: user,
	                modalHeader: 'user'
	              }
	        }).then(function(modal) {
	            modal.element.modal();
	            modal.close.then(function(del) {
	            	if(del)
	            	{
		                dbService.deleteUser( user )
		        		.then( function(result) {
		        			applyUserDel($scope, user);
		        		});
	            	}
	        	});
            }).error(function(error) {
            	  // error contains a detailed error message.
            	  console.log(error);
	        });
	      
	}

	
		
	function applyUserAdd(scope)
	{
		console.log("## [mmService] -> applyUserAdd");

		scope.users.push(scope.newUser);
	}

});