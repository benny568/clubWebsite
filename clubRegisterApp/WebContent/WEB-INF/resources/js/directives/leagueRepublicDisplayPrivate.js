mmModule.directive("lrDisplay", ['DataService', function() {
	return {
		restrict: 	'E',
		replace:	true,
		template:	"<div id=\"lrep{{lrcode}}\"></div>"
	};
}]);