mmModule.directive("lrDisplayresults", ['DataService', function() {
	return {
		restrict: 	'E',
		replace:	true,
		template:	"<div id=\"lrep{{lrResultsCode}}\"></div>"
	};
}]);