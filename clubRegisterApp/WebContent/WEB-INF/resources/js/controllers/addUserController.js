mmModule.controller('AddUserController', ['$scope', 'close', function($scope, close) {
	
	$scope.newUser = {name: "", password: "", address: "", phone: "", email:"", avatar: "", enabled:1, roles: [""], permissions: {}};
	$scope.modalHeader = "Add Admin User";
	var usr = $scope.newUser;
	var userData = {};
	
	$scope.close = function(add, usr) {
		console.log("## AddUserController->close(): ", $scope.formModel);
		convertUserData(usr,userData);
		close({op:add,user:userData}, 500); // close, but give 500ms for bootstrap to animate
	 };
	 
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