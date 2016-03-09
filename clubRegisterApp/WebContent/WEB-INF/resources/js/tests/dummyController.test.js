describe('testing dummyController', function () {
    it('should load module with string alias', function () {
        
    	beforeEach(angular.mock.module('publicApp', 'memberManagerApp'));
        
        var dataService;

        // Get the service from the injector
        angular.mock.inject(function GetDependencies(DataService) {
          dataService = DataService;
        });
        
        var $controller;

        beforeEach(inject(function(_$controller_){
          $controller = _$controller_;
        }));
        
        describe('getTeams', function(){
        	it('should load the teams', function(){
        		var $scope = {};
        		var controller = $controller('dummyController', { $scope: $scope });
        		
        		$scope.x = 1;
        		$scope.y = 2;
        		$scope.sum();
        		
        		expect($scope.z).toEqual(3);
        	});
        	
        });
        
        //var teams = dataService.getTeams();
        
        //expect(teams).not.toBe(null);

        // TBC - we will build upon this!
        //expect('what?').toBe('what?');
    });
});