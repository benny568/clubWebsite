mmModule.controller('EditUserController', ['$scope', 'close', function($scope, close) {
	
	$scope.modalHeader = "Edit Admin User";
	$scope.newUser = {};
	var loghdr = "## [EditUserController]: ";
	
	prepForDisplay(gOpUser, $scope.newUser);
	
	$scope.close = function(add, usr) {
		console.log(loghdr+"->close(): ", $scope.formModel);
		convertUserData(usr,$scope.newUser);
		close({op:add,user:$scope.newUser}, 500); // close, but give 500ms for bootstrap to animate
	 };
	 
	 function prepForDisplay(u, r)
	 {
		r.userId = u.userId;
		r.name = u.name;
		r.password = u.password;
		r.address = u.address;
		r. phone = u.phone;
		r.email = u.email;
		r.dob = u.dob;
		r.avatar = u.avatar;
		r.enabled = u.enabled;
		 
		for( i=0; i<u.roles.length; i++ )
		{
			switch( u.roles[i] )
			{
				case "ROLE_USER":
					r.user = true;
					break;
				case "ROLE_MANAGER":
					r.manager = true;
					break;
				case "ROLE_ADMIN":
					r.admin = true;
					break;
				case "ROLE_SUPER":
					r.super = true;
					break;
			}
		}
 }
	 
	 function convertUserData(u,r)
	 {
		r.name = u.name;
		r.password = u.password;
		r.address = u.address;
		r. phone = u.phone;
		r.email = u.email;
		r.dob = u.dob;
		r.avatar = u.avatar;
		r.enabled = u.enabled;
		r.roles = [];
		 
		if( u.user )
			r.roles.push("ROLE_USER");
		if( u.manager )
			r.roles.push("ROLE_MANAGER");
		if( u.admin )
			r.roles.push("ROLE_ADMIN");
		if( u.super )
			r.roles.push("ROLE_SUPER");
	 }
}]);