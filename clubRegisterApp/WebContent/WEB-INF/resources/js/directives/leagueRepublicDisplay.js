pubModule.directive("lrDisplay", ['DataService', function() {
	return {
		restrict: 	'E', // E=Element, A=Attribute, C=CCS Class, M=Comments
		replace:	true,
		template:	"<div id=\"lrep{{lrcode}}\"></div>"
	};
}]);