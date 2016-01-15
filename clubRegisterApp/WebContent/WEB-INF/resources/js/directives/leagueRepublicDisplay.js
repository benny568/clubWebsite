pubModule.directive("lrDisplay", ['dataService', function() {
	return {
		restrict: 	'E',
		replace:	true,
		template:	"<div id=\"lrep{{lrcode}}\"></div>"
	};
}]);