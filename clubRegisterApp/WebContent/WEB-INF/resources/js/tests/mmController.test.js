describe('testing memberManagerController', function () {
    it('should load module with string alias', function () {
        
    	beforeEach(angular.mock.module('publicApp', 'memberManagerApp', 'upNewsModule'));
        
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
        	
        	beforeEach(function(){
            	var $scope = {};
            	var controller = $controller('memberManagerController', { $scope: $scope });
            });
        	
        	it('should set home', function(){        		     		
        		expect(_home).toEqual('http://localhost:8080/clubRegisterApp');
        	});
        	
        	it('should load the teams', function(){
        		var teams = controller.getTeams();        		
        		expect(teams).toBe([]);
        	});
        	
        });

    });
});