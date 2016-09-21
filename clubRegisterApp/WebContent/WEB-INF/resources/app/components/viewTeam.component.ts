import { Component }           from '@angular/core';

import { SessionDataService }  from '../services/session-data.service';
import { LoggerService }       from '../services/logger.service';
import { LeagueRepublicTable } from "./leagueRepublicTable.component";

@Component({
    //templateUrl: 'app/htmltemplates/viewTeam.component.html',
    template: `
			<div id="wrap">
					<div class="container t1">
						<div class="row">
							<div class="col-md-12">
								<div class="panel">
									<div class="panel-heading avenue-heading">
										<i class="fa fa-bullhorn"></i> NOTICE BOARD:
									</div>
									<div class="panel-body avenue-body">
										<div class="row">
											<div style="margin:10px;">{{d$.dsCurrentTeam.noticeboard}}</div>
										</div>
									</div>
								</div>
							</div> <!-- end col -->
						</div> <!-- end row -->
					    	<div class="row">
					    		<div class="col-md-5">
					    			<div class="panel">
						    			<div class="panel-heading avenue-heading">
						    				Team Details:
						    			</div>
						    			<div class="panel-body avenue-body">
						    				<table class="table table-condensed">
						    					<tr style="color:white;">
						    						<th>Managers:</th>
						    						<td>
							    						<div *ngFor="let mem of d$.dsTeamMembers">
									    					<div *ngIf="mem.position == 0">
									    						{{mem.name}}
									    						<div style="float:right;">
									    							<i class="fa fa-phone"></i> {{mem.phone}}
									    						</div> 
									    					</div>
									    					
									    				</div>
						    						</td>
						 						</tr>
						 						<tr style="color:white;">
						 							<th>Captian:</th>
						 							<td>
						 								<div *ngFor="let mem of d$.dsTeamMembers">
									    					<div *ngIf="mem.position == 99">{{mem.name}}</div>
									    				</div>
						 							</td>
						 						</tr>
						 					</table>
						    			</div>
						    		</div>
					    		</div> <!-- end col -->
					    		<div class="col-md-7" style="">
					    			<div class="panel">
						    			<div class="panel-heading avenue-heading">
						    				Table:
						    			</div>
						    			<div class="panel-body avenue-body">
						    			
						    				<lr-table></lr-table>
		
						    			</div>
						    		</div>
					    		</div> <!-- end col -->
					    	</div> <!-- end row -->
					    	
		                    <div class="row">
					    		<div class="col-md-5">
					    			<div class="panel">
						    			<div class="panel-heading avenue-heading">
						    				Squad Details:
						    			</div>
						    			<div class="panel-body avenue-body">
						    				<div *ngFor="let mem of d$.dsTeamMembers; let i=index;">
						    					<div *ngIf="mem.position != 0"> 
													<div (click)="d$.setCurrentMember( mem )" style="cursor:pointer;">
														<font color="white">{{i+1}}: {{mem.name}}</font>
													</div>
												</div>
											</div>
						    			</div> <!-- end panel body -->
						    		</div> <!-- end panel -->
					    		</div> <!-- end col -->
					    		
					    		<div class="col-md-7" *ngIf="d$.displayMember">
					    			<div class="panel">
					    				<div class="panel-heading avenue-heading">
					    					<span style="font-weight:bold">{{d$.dsCurrentMember.name}}</span>
					    				</div>
					    				<div class="panel-body avenue-body">
					    					<img src='{{d$.dsCurrentMember.photo}}' align="left" HSPACE="5" VSPACE="5" width="40%">
					    					<div>
					    						<br/><span class="avenue-yellow-text">Age: </span>
					    						<span style="color:#D1CDCD">{{d$.dsCurrentMember.age}}</span> <br/>
						    					<span class="avenue-yellow-text">Position: </span>
						    					<span style="color:#D1CDCD">{{d$.dsCurrentMember.position}}</span> <br/>
						    					<span class="avenue-yellow-text">Favourite Team: </span>
						    					<span style="color:#D1CDCD">{{d$.dsCurrentMember.favteam}}</span> <br/>
						    					<span class="avenue-yellow-text">Favourite Player: </span>
						    					<span style="color:#D1CDCD">{{d$.dsCurrentMember.favplayer}}</span><br/><br/>
						    					<span class="avenue-yellow-text">Personal Achievements:</span><br/>
						    						{{d$.dsCurrentMember.achievements}}
					    					</div>
		
					    				</div>
					    			</div>
					    		</div>
					    		
					    	</div> <!-- end row -->
					    	
					</div> <!--  End of container t1 -->
				</div>
    `
})

export class ViewTeam {
	teamName:string;
	componentName:string = 'ViewTeam';
	logdepth:number = 2;
	
    constructor(private lg$: LoggerService, public d$: SessionDataService) { }

	ngOnInit() 
	{
		this.lg$.setLogHdr(this.logdepth, this.componentName);
	}
}