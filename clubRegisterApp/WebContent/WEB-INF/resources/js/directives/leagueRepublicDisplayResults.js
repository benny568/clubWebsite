pubModule.directive("lrDisplayresults", ['dataService', function() {
	return {
		restrict: 	'E',
		replace:	true,
		template:	"<div id=\"lrep{{lrResultsCode}}\"></div>"
	};
}]);