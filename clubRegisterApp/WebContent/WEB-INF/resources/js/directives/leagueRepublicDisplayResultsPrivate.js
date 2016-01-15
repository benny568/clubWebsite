mmModule.directive("lrDisplayresults", ['privateDataService', function() {
	return {
		restrict: 	'E',
		replace:	true,
		template:	"<div id=\"lrep{{lrResultsCode}}\"></div>"
	};
}]);