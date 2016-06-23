import { Component }          from 'angular2/core';
import { SessionDataService } from '../services/session-data.service';
import { Member }             from '../dao/member';


@Component({
	templateUrl: 'app/htmltemplates/memberRegister.component.html'
})

export class MemberRegisterComponent
{
	componentName = 'MemberRegisterComponent'; 
	logdepth = 2;
	loghdr = "";
	showArray = [];
	
	constructor( private _dataService: SessionDataService )
	{
		this.loghdr = this._dataService.setLogHdr(this.logdepth, this.componentName);
	}
	
	ngOnInit()
	{
		console.log(this.loghdr+"-> ngOnInit()");

		this._dataService.dsGetAllMembers();
		
		console.log(this.loghdr+"<- ngOnInit");
	}
	
	
	/**********************************************************
	 * Name:		getAllMembers()
	 * Description:	Retrieves all club members from the server
	 * Scope:		Internal
	 * Params in:	None
	 * Return:		Sets $scope.members
	 **********************************************************/
	getAllMembers(){
		
		console.log(this.loghdr+"-> getAllMembers()");
		console.log(this.loghdr+"    | calling dataService.getAllMembers()..")
		
		this._dataService.dsGetAllMembers();
		
		console.log(this.loghdr+"<- getAllMembers()");
	}
	
	
	/**********************************************************
	 * Name:		getTeams()
	 * Description:	Retrieves a list of teams from the server
	 * Scope:		Internal
	 * Params in:	None
	 * Return:		Sets $scope.teams
	 **********************************************************/
	getTeams(){
		console.log(this.loghdr + "-> getTeams()");
		console.log(this.loghdr + "   | calling dataService.dsGetTeams()..")
		this._dataService.dsGetTeams()
		.subscribe(
            	data => this._dataService.dsTeams = data,
            	error => console.log(this.loghdr + " ** Error getting teams from server."),
            	() => console.log(this.loghdr + " <=== Received teams from server. <===")
            );

	}
	
	
	/**********************************************************
	 * Name:		toggleView()
	 * Description:	Used to make the member list for a team
	 * 				visible or hidden when the user clicks on it
	 * Scope:		Externally accessible
	 * Params in:	ID of the team in question.
	 * Return:		Sets showArray[teamId] to false.
	 **********************************************************/
	toggleView(teamId) 
	{
		//log.trace(this.loghdr+"-> toggleView("+teamId+")");
		this.showArray[teamId] = !this.showArray[teamId];
		//log.trace(this.loghdr+"    showArray["+teamId+") set to: "+this.showArray[teamId]);
		//log.trace(this.loghdr+"<- toggleView()");
	}
	
	/**********************************************************
	 * Name:		getMembers4team()
	 * Description:	Load the members for a particular team into
	 * 				the dataService
	 * Params in:	ID of the team in question.
	 * Return:		Sets showArray[teamId] to true.
	 **********************************************************/
	getMembers4team(teamId)
	{
		//log.debug(this.loghdr + "##    |-> getMembers4team("+teamId+")");
		this.showArray[teamId] = 'true';
		
		// Clear the array first
		this._dataService.dsTeamMembers[teamId] = new Array<Member>();
		// Populate the Team members from the complete list of members
		for( var i=0; i<this._dataService.dsAllMembers.length; i++ )
		{
			if( this._dataService.dsAllMembers[i].team == teamId )
			{
				// Find the members for this team and add them to the array
				this._dataService.dsTeamMembers[teamId].push( this._dataService.dsAllMembers[i] );
				//log.trace(loghdr + "      |- found team member (" + this._dataService.dsAllMembers[i].name + "), adding to array..");
			}
		}
		//log.debug(this.loghdr + "##    |<-getMembers4team()");
	}
	 
	/**********************************************************
     * Name:		allMembersAdmin()
     * Description:	Switch to all members admin page
     * Scope:		Internal
     * Params in:	
     * Return:		 
     **********************************************************/
	allMembersAdmin()
	{
		// TODO
	}
	
}