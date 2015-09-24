mmModule.controller('merchandiseController', function ($scope) 
{
	log.debug("## Loading merchandiseController...");
	
	$scope.items = [
					{name:"Shorts", image:"resources/images/merchandise/shorts.png", description:"", width:"300", height:"300"},
					{name:"Socks", image:"resources/images/merchandise/socks.png", description:"", width:"300", height:"300"},
					{name:"1/4 Zip Top", image:"resources/images/merchandise/quarterZipTop.png", description:"", width:"300", height:"300"},
					{name:"Tracksuit Top", image:"resources/images/merchandise/tracksuittop.png", description:"", width:"300", height:"300"},
					{name:"Windbreaker", image:"resources/images/merchandise/windbreaker.png", description:"", width:"300", height:"300"},
					{name:"Rucksack", image:"resources/images/merchandise/rucksack.png", description:"", width:"300", height:"300"},
					{name:"Beanie", image:"resources/images/merchandise/beanie.png", description:"", width:"300", height:"300"},
					{name:"Base-Layer Top", image:"resources/images/merchandise/baselayertop.png", description:"", width:"300", height:"300"},
					{name:"Base-Layer Shorts", image:"resources/images/merchandise/baselayershorts.png", description:"", width:"300", height:"300"},
					{name:"Combo 1", image:"resources/images/merchandise/combo1.png", description:"", width:"520", height:"300"},
					{name:"Combo 2", image:"resources/images/merchandise/combo2.png", description:"", width:"700", height:"300"}
					];

});