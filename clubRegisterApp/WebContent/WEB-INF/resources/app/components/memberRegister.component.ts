import { Component, 
         ViewChild,
         OnInit     }         from '@angular/core';
import { Router }             from '@angular/router';

import { MODAL_DIRECTIVES }   from 'ng2-bs3-modal/ng2-bs3-modal';
import { ModalComponent }     from 'ng2-bs3-modal/ng2-bs3-modal';

import { SessionDataService } from '../services/session-data.service';
import { LoggerService }      from '../services/logger.service';
import { Member }             from '../dao/member';


@Component({
	//templateUrl: 'app/htmltemplates/memberRegister.component.html',
	template: `
				<div class="container">
					<div style="margin-left:auto;margin-right:auto;width:80%;">
							<div class="row">
								<div class="col-md-10">
									<h3>Club Register 2016 Season</h3>
								</div>
								<div class="col-md-2">
									<div  style="float:right; align:bottom;">
										<button type="button" class="btn btn-warning btn-xs" (click)="allMembersAdmin()" style="cursor:pointer;" data-toggle="tooltip" data-placement="right">All Members</button>
									</div>
								</div>
							</div>
							<div class="row">
								<div *ngFor="let team of _dataService.dsTeams">
									<div class="panel">
										<div class="panel-heading avenue-heading" style="min-height:35px;">
											<div class="col-md-10 teamHdr" *ngIf="!showArray[team.id]"><span class="glyphicon glyphicon-triangle-bottom" (click)="getMembers4team(team.id)" style="cursor:pointer;"></span> {{team.name}}</div>
											<div class="col-md-10 teamHdr" *ngIf="showArray[team.id]"><span class="glyphicon glyphicon-triangle-top" (click)="toggleView(team.id)" style="cursor:pointer;"></span> {{team.name}}</div>
											<div  style="float:right; align:bottom;">
												<button type="button" class="btn btn-warning btn-xs" ng-click="addMember(team.id)" style="cursor:pointer;" data-toggle="tooltip" data-placement="right">Add Member</button>
											</div>
										</div>
							    		<div class="panel-body avenue-body" style="height:100%;">
											<div *ngIf="showArray[team.id]">
												<div class="row">
												    <div class="col-md-3 tblHdr">Name</div>
												    <div class="col-md-5 tblHdr">Address</div>
												    <div class="col-md-2 tblHdr">Phone</div>
												    <div class="col-md-2 tblHdr">Operations</div>
												</div> <!-- end of row -->
												<div *ngFor="let member of _dataService.dsTeamMembers[team.id]" class="row light-line">							    
										    		<div class="col-md-3">{{member.name}}</div>
													<div class="col-md-5">{{member.address}}</div>
													<div class="col-md-2">{{member.phone}}</div>
										    		<div class="col-md-2">
												    	<i *ngIf="(member.amount>0)" class="glyphicon glyphicon-euro" data-toggle="tooltip" data-placement="right" title="Paid" style="float:left;"></i>&nbsp;
												    	<i *ngIf="!(member.amount>0)" class="glyphicon glyphicon-remove" data-toggle="tooltip" data-placement="right" title="Not Paid" style="float:left;"></i>&nbsp;
												    	<i (click)="editMember(member)" style="cursor:pointer;" data-toggle="tooltip" data-placement="right" title="Edit" class="glyphicon glyphicon-pencil" style="float:left;padding-left:10px;"> </i>&nbsp;
												    	<i (click)="deleteMember(member)" style="cursor:pointer;" data-toggle="tooltip" data-placement="right" title="Delete" class="glyphicon glyphicon-trash" style="float:left;padding-left:10px;"></i>
												    </div>	
											    </div> <!-- end row -->
											</div> <!-- end ng-show -->
										</div> <!-- end panel body -->
									</div> <!-- end of panel -->			
								</div> <!-- End of ng-repeat -->
							</div> <!-- end row -->
					</div>
				</div> <!-- end of container -->
	`,
	directives: [MODAL_DIRECTIVES],
	providers: [ LoggerService ]
})

export class MemberRegisterComponent implements OnInit
{
	componentName = 'MemberRegisterComponent'; 
	logdepth = 2;
	showArray = [];
	
	// Modal stuff
	@ViewChild('modal')
	modal: ModalComponent;
	items: string[] = ['item1', 'item2', 'item3'];
    selected: string;
    output: string;
    model: Member = new Member();

    index: number = 0;
    backdropOptions = [true, false, 'static'];

    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;
	
    constructor( private d$: SessionDataService, private router: Router, private lg$: LoggerService ) {}
	
	ngOnInit()
	{
		this.lg$.setLogHdr(this.logdepth, this.componentName);
		this.lg$.log("-> ngOnInit()");

		this.d$.dsGetAllMembers();
		
		this.lg$.log("<- ngOnInit");
	}
	
	
	/**********************************************************
	 * Name:		getAllMembers()
	 * Description:	Retrieves all club members from the server
	 * Scope:		Internal
	 * Params in:	None
	 * Return:		Sets $scope.members
	 **********************************************************/
	getAllMembers(){
		
		this.lg$.log("-> getAllMembers()");
		this.lg$.log("    | calling dataService.getAllMembers()..")
		
		this.d$.dsGetAllMembers();
		
		this.lg$.log("<- getAllMembers()");
	}
	
	
	/**********************************************************
	 * Name:		getTeams()
	 * Description:	Retrieves a list of teams from the server
	 * Scope:		Internal
	 * Params in:	None
	 * Return:		Sets $scope.teams
	 **********************************************************/
	getTeams(){
		this.lg$.log("-> getTeams()");
		this.lg$.log("   | calling dataService.dsGetTeams()..")
		this.d$.dsGetTeams();

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
		this.lg$.log("-> getMembers4team("+teamId+")");
		this.showArray[teamId] = 'true';
		
		// Clear the array first
		this.d$.dsTeamMembers[teamId] = new Array<Member>();
		// Populate the Team members from the complete list of members
		for( var i=0; i<this.d$.dsAllMembers.length; i++ )
		{
			if( this.d$.dsAllMembers[i].team == teamId )
			{
				// Find the members for this team and add them to the array
				this.d$.dsTeamMembers[teamId].push( this.d$.dsAllMembers[i] );
				//log.trace(loghdr + "      |- found team member (" + this.d$.dsAllMembers[i].name + "), adding to array..");
			}
		}
		this.lg$.log("<-getMembers4team()");
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
	 * Return:		Sets this.d$.dsTeamMembers[team].<this member>
	 **********************************************************/	
	editMember(member)
	{
		this.router.navigate( ['EditMember', {member: member}] );
		//this.modal.open();
	}
	
	closed() {
        this.output = '(closed) ' + this.selected;
    }

    dismissed() {
        this.output = '(dismissed)';
    }

    opened() {
        this.output = '(opened)';
    }

    navigate() {
        //this.router.navigateByUrl('/hello');
    }

	
}