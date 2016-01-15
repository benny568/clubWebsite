angular.module('publicApp').service('dataService', function($rootScope) 
{
	return({
		'dsTeams': [],
		'dsTeamMembers': {},
		'dsCurrentTeam': {},
		'dsPosition': [ 'Manager','Goalkeeper','Full Back','Center Half','Mid Field','CAM','Winger','Striker', 'Chairman', 'Secretary', 'Treasurer', 'PRO', 'Committee']

	});
});