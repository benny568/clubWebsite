
mmModule.directive("fileModel", ['$parse', function($parse){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			console.log("Inside directive, attr value is:" + attrs.fileModel );
			var model = $parse(attrs.fileModel); // Use parse to look at attributes, specifically fileModel attribute and assign to model
			var modelSetter = model.assign;
			
			element.bind('change', function(){
				scope.$apply(function(){
					modelSetter(scope, element[0].files[0]); 	// When the fileModel value changes, assign it to $scope.news.file
																// i.e. assigns the value to the scope. 'scope' is the context we
																// are going to change the attribute value on.
				});
			});
		}
	};
}]);