import { Component }          from 'angular2/core';
import { SessionDataService } from '../services/session-data.service';
import { ToolBox }            from '../utilities/toolbox';
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
	
	constructor( private _dataService: SessionDataService, private tb$: ToolBox )
	{
		this.loghdr = this.tb$.setLogHdr(this.logdepth, this.componentName);
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
	
	
	/**********************************************************
	 * Name:		editMember()
	 * Description:	Edit an existing member, update to server
	 * 				and update local in-memory copy
	 * Scope:		Externally accessible
	 * Params in:	thisMember: the member to edit
	 * Return:		Sets this._dataService.dsTeamMembers[team].<this member>
	 **********************************************************/	
/*	editMember(member)
	{
		if( typeof member == 'undefined' )
			return
		console.log(this.loghdr+" editMember()...");		

		if( typeof member.position == 'number' )
			member.position = this._dataService.dsPosition[member.position];
		if( typeof member.team == 'number' )
		if( typeof member.position2 == 'number' )
			member.position2 = this._dataService.dsPosition[member.position2];
		if( typeof member.team2 == 'number' )
			member.team2 != 0 ? member.team2 = this._dataService.getTeamNameFrmId(member.team2) : member.team2 = "None";
		if( typeof member.position3 == 'number' )
			member.position3 = this._dataService.dsPosition[member.position3];
		if( typeof member.team3 == 'number' )
			member.team3 != 0 ? member.team3 = this._dataService.getTeamNameFrmId(member.team3) : member.team3 = "None";
		
		this._dataService.dsCurrentMember = member;
		
		 ModalService.showModal({
	            templateUrl: 'memberModal.html',
	            controller: "ModalController",
	            inputs: { member : member, modalType: "Edit" }
	        }).then(function(modal) {
	            modal.element.modal();
	            modal.close.then(function(result) {
	            	var newMem = result;
	            	var diff = tools.difference( newMem, member);
	            	if(diff)
	            	{
	            		if( typeof newMem.position != 'number' )
	            			newMem.position = this._dataService.dsPosition.indexOf(newMem.position);
	            		if( typeof newMem.team != 'number' )
	            			newMem.team = getTeamIdFrmName(newMem.team);
	            		
	            		if( typeof newMem.position2 != 'number' )
	            			newMem.position2 = this._dataService.dsPosition.indexOf(newMem.position2);
	            		if( typeof newMem.team2 != 'number' )
	            			newMem.team2 = getTeamIdFrmName(newMem.team2);
	            		
	            		if( typeof newMem.position3 != 'number' )
	            			newMem.position3 = this._dataService.dsPosition.indexOf(newMem.position3);
	            		if( typeof newMem.team3 != 'number' )
	            			newMem.team3 = getTeamIdFrmName(newMem.team3);
	            		
		                dbService.updateMember( newMem )
		        		.then( function(result) {
		        			applyMemberChange(this._dataService.dsAllMembers, newMem);
		        			//this._dataService.dsCurrentMember = newMem;
		        			console.log(loghdr+"-> editMember: after update: ", this._dataService.dsCurrentMember);
		        		});
	            	}
	        	});
            });
	}*/
	
}