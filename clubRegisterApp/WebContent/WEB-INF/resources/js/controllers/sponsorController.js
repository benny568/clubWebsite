pubModule.controller('sponsorController', ['$scope', function ($scope) 
{
	log.debug("## Loading sponsorController...");
	
	$scope.sponsors = [ {name:"Enzo's Takeaway", image:"resources/images/adverts/enzos.png"},
						{name:"Rochford's Pharmacy", image: "resources/images/adverts/main-sponsor.png"},
						{name:"Ennis Cabs", image: "resources/images/adverts/ec.png"}
					];

}]);