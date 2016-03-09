describe('publicApp', function() {
  var dataService, dbs, teamsList;
  
  beforeEach(module('publicApp'));
  
    describe('the getTeams() function', function(){
    	beforeEach(inject(function(_DataService_,_dbService_, _$log_) {
    		  dataService = _DataService_;
    		  dbs = _dbService_;
    		  
    		  spyOn(dbs, "getTeams").and.callFake(function() {
      		      return {
      		          then: function(callback) { return callback(teamsList); }
      		        };
      		      });
    	}));
    	
     	it('should read the teams from the server', function(){
    		var teams = dataService.getTeams();
    		console.log(teams);
    		expect(dataService.dsTeams).toBeDefined();
    		expect(dataService.dsTeams.length).toEqual(22);
    	});
    });
  
});