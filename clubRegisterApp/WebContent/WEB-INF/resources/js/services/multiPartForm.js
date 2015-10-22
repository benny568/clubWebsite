mmModule.service('multipartForm', function($http){
	this.post = function(uploadUrl, data){
		var fd = new FormData();
		for(var key in data)
			fd.append(key, data[key]);
		
		var csrf = $("meta[name='_csrf']").attr("content");
		console.log("## [multipartForm] csrf token is: ",csrf);
		
		// CSRF stuff
		$http.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
		$http.defaults.xsrfCookieName = 'CSRF-TOKEN';
		//$http.defaults.headers.post["Content-Type"] = "application/json";
		$http.defaults.headers.post["X-CSRF-TOKEN"] = csrf;
		
		$http.post(uploadUrl, fd, {
			transformRequest: angular.identity,
			headers: { 'Content-Type' : undefined } // Leave browser set the content type itself
		});
		
		resetForm();
		
		function resetForm() {
		    data.title='';
		    data.description='';
		    data.story='';
		    data.image='';
		    window.location.href='adminHome';
		}

	};
});