pubModule.service('mailService', function($http, $q, promiseTracker) 
{
	
	return({
		sendMail : sendMail
		
	});
	
	function sendMail( mailMessage )
	{
		$http({
			method: "post",
			url: _home + "/mail",
			data: mailMessage
		})
		.then( function(result){
			log.debug("## [mailService]: sendMail() returned: " + result);
			if(result)
				document.location("/mailSuccess.jsp");
			else
				document.location("/mailFailed.jsp");
		});
	}
});