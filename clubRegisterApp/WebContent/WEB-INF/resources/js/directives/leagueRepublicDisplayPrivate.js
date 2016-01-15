mmModule.directive("lrDisplay", ['privateDataService', function() {
	return {
		restrict: 	'E',
		replace:	true,
		template:	"<div id=\"lrep{{lrcode}}\"></div>"
	};
}]);