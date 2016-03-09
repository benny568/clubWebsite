describe('publicApp', function() {
  var dataService, dbs, teamsList;
  
  beforeEach(module('publicApp'));
  
  beforeEach(inject(function(_DataService_,_dbService_, _$log_) {
	  dataService = _DataService_;
	  dbs = _dbService_;
	  
	  dataService.dsCurrentUser = { "userId":4,
									"name":"benny",
									"password":"$2a$10$ZYceeuJWORumRqJU9JGGQ.UJNrrMzqnabzGTanP3Zi1sr9QTeFqTm",
									"address":"Reaskaun",
									"email":"odalybr@hotmail.com",
									"phone":"0876470883",
									"dob":"11/05/1968",
									"avatar":"resources/images/avatars/users/BrendanODaly.jpg",
									"enabled":1,
									"roles":["ROLE_USERS"],
									"permissions":{"teams":[20,15,4],
									"positions":[0,0,0]}
								};
	  
	  teamsList = [{'id': 1,'lrFixturesCode': 0,'lrResultsCode': 0,'lrcode': 0,'name': "U6"},
		           {'id': 2,'lrFixturesCode': 0,'lrResultsCode': 0,'lrcode': 0,'name': "U7"},
		           {'id': 3,'lrFixturesCode': 0,'lrResultsCode': 0,'lrcode': 0,'name': "U8"},
		           {'id': 4,'lrFixturesCode': 0,'lrResultsCode': 0,'lrcode': 0,'name': "U9"},
		           {'id': 5,'lrFixturesCode': 0,'lrResultsCode': 0,'lrcode': 0,'name': "U10 Red"},
		           {'id': 6,'lrFixturesCode': 0,'lrResultsCode': 0,'lrcode': 0,'name': "U10 White"},
		           {'id': 7,'lrFixturesCode': 0,'lrResultsCode': 0,'lrcode': 0,'name': "U10 Yellow"},
		           {'id': 8,'lrFixturesCode': 0,'lrResultsCode': 0,'lrcode': 0,'name': "U11 Red"},
		           {'id': 9,'lrFixturesCode': 0,'lrResultsCode': 0,'lrcode': 0,'name': "U11 Yellow"},
		           {'id': 10,'lrFixturesCode': 0,'lrResultsCode': 0,'lrcode': 0,'name': "U12 Yellow"},
		           {'id': 11,'lrFixturesCode': 0,'lrResultsCode': 0,'lrcode': 0,'name': "U12 Red"},
		           {'id': 12,'lrFixturesCode': 0,'lrResultsCode': 0,'lrcode': 0,'name': "U12 Black"},
		           {'id': 13,'lrFixturesCode': 0,'lrResultsCode': 0,'lrcode': 0,'name': "U13 Red"},
		           {'id': 14,'lrFixturesCode': 0,'lrResultsCode': 0,'lrcode': 0,'name': "U13 Yellow"},
		           {'id': 15,'lrFixturesCode': 0,'lrResultsCode': 0,'lrcode': 0,'name': "U14A"},
		           {'id': 16,'lrFixturesCode': 0,'lrResultsCode': 0,'lrcode': 0,'name': "U15A"},
		           {'id': 17,'lrFixturesCode': 0,'lrResultsCode': 0,'lrcode': 0,'name': "U15B"},
		           {'id': 18,'lrFixturesCode': 0,'lrResultsCode': 0,'lrcode': 0,'name': "U16A"},
		           {'id': 19,'lrFixturesCode': 0,'lrResultsCode': 0,'lrcode': 0,'name': "U17"},
		           {'id': 20,'lrFixturesCode': 0,'lrResultsCode': 0,'lrcode': 0,'name': "U18"},
		           {'id': 21,'lrFixturesCode': 0,'lrResultsCode': 0,'lrcode': 0,'name': "Junior B"},
		           {'id': 22,'lrFixturesCode': 0,'lrResultsCode': 0,'lrcode': 0,'name': "Junior A"}
		          ];
  }));

  describe('when invoked', function() {

    it('should set the _home', function() {
    	expect(dataService.CurrentServerMode).toEqual(0);
    });
    
    describe('the difference function', function(){
    	
    	it('should return true if two objects differ', function(){
    		var obj1 = {'first':1};
    		var obj2 = {'first':2};
    		var result = dataService.difference(obj1, obj2);
    		
    		expect(result).toBe(true);
    	});
    	
    	it('should return false if two objects are the same', function(){
    		var obj1 = {'first':1};
    		var obj2 = {'first':1};
    		var result = dataService.difference(obj1, obj2);
    		
    		expect(result).toBe(false);
    	});
    });
    
    describe('the hasPermissions function for ROLE_SUPER', function(){
    	
  	  beforeEach(function(){
    		dataService.dsCurrentUser.roles = ["ROLE_SUPER"];
    		dataService.dsTeams = teamsList;
    	});
    	
    	it('should return false if no params are passed', function(){
    		var allow = dataService.hasPermission();
    		expect(allow).toBe(false);
    	});
    	
    	it('should have permissions to manage U18', function(){
    		var allow = dataService.hasPermission('MANAGE_TEAM', 'U18');
    		expect(allow).toBe(true);
    	});
    	
    	it('should have permissions to add a team', function(){
    		var allow = dataService.hasPermission('ADD_TEAM', '');
    		expect(allow).toBe(true);
    	});
    	
    	it('should have permissions to edit the U18 team', function(){
    		var allow = dataService.hasPermission('EDIT_TEAM', '');
    		expect(allow).toBe(true);
    	});
    	
    	it('should have permissions to delete the U18 team', function(){
    		var allow = dataService.hasPermission('DEL_TEAM', '');
    		expect(allow).toBe(true);
    	});
    	
    	it('should have permissions to view users', function(){
    		var allow = dataService.hasPermission('VIEW_USERS', '');
    		expect(allow).toBe(true);
    	});
    });
    
    describe('the hasPermissions function for ROLE_MANAGER', function(){
    	beforeEach(function(){
    		dataService.dsCurrentUser.roles = ["ROLE_MANAGER"];
    		dataService.dsTeams = teamsList;
    	});
    	
    	it('should allow me to manage U18', function(){
    		var allow = dataService.hasPermission('MANAGE_TEAM', 'U18');
    		expect(allow).toBe(true);
    	});
    });
    
    describe('the hasPermissions function for ROLE_EDIT_TEAM', function(){
  	  	beforeEach(function(){
    		dataService.dsCurrentUser.roles = ["ROLE_EDIT_TEAM"];
    		dataService.dsTeams = teamsList;
    	});
    	
    	it('should allow me to edit the U18 team', function(){
    		var allow = dataService.hasPermission('EDIT_TEAM', 'U18');
    		expect(allow).toBe(true);
    	});
    });
    
    describe('the hasPermissions function for ROLE_DEL_TEAM', function(){
  	  	beforeEach(function(){
    		dataService.dsCurrentUser.roles = ["ROLE_DEL_TEAM"];
    		dataService.dsTeams = teamsList;
    	});
    	
    	it('should allow me to delete the U18 team', function(){
    		var allow = dataService.hasPermission('DEL_TEAM', 'U18');
    		expect(allow).toBe(true);
    	});
    });
    
    describe('the findMemberIndex() function', function(){
    	var members = [];
    	beforeEach( function(){
    		members = [{'id':'1'},{'id':'2'},{'id':'3'},{'id':'4'},{'id':'5'},{'id':'6'},{'id':'7'},{'id':'8'},{'id':'9'},{'id':'10'}];
    	});
    	
    	it('should pick out a given id from the list of member ids', function(){
    		var member = {'id':'5'};
    		var index = dataService.findMemberIndex(members,member);
    		expect(index).toBe(4);
    	});
    });
    
    describe('the convertPosToInt() function', function(){
    	
    	it('should convert position CAM to 5', function(){
    		var pos = dataService.convertPosToInt('CAM');
    		expect(pos).toBe(5);
    	});
    });
    
    describe('the convertTeamToInt() function', function(){
    	
    	beforeEach(function(){
    		dataService.dsTeams = teamsList;
    	});
    	
    	it('should convert team Junior A to 22', function(){
    		var team = dataService.convertTeamToInt('Junior A');
    		expect(team).toBe(22);
    	});
    	
    	it('should return zero if team not found', function(){
    		var team = dataService.convertTeamToInt('Manchester');
    		expect(team).toBe(0);
    	});
    });
    
    describe('the getHome() function', function(){ 
    	
    	it('should return the current setting of home (LOCAL)', function(){
    		var home = dataService.getHome();
    		expect(home).toEqual('http://localhost:8080/clubRegisterApp');
    	});
    });
    
    describe('the getTeams() function', function(){
    	
    	beforeEach(function() {
  		  spyOn(dbs, "getTeams").and.callFake(function() {
  		      return {
  		          then: function(callback) { return callback(teamsList); }
  		        };
  		      });
  		});
    	
     	it('should read the teams from the server', function(){
    		var teams = dataService.getTeams();
    		console.log(teams);
    		expect(teams).toBeDefined();
    		expect(teams.length).toEqual(22);
    	});
    });
    
  });
  
});