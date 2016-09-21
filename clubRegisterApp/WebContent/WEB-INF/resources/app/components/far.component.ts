/**
 * Created by odalybr on 07/04/2016.
 */
import { Component }              from '@angular/core';

import { SessionDataService }     from '../services/session-data.service';
import { LoggerService }          from '../services/logger.service';
import { LeagueRepublicResults }  from './leagueRepublicResults.component';

@Component({
    //templateUrl: 'app/htmltemplates/far.component.html',
    template: `
				<div id="wrap">
				    <div class="container t1">
				        <div class="row">
				            <div class="lead a-orange-text" style="margin-left:40px;">
				            	Fixtures and Results for <em>{{ d$.dsCurrentTeam.name }}</em> team.
				            </div>
				        </div>
				        <div class="row" style="margin-left:20px;">
				            <div class="col-md-6">
				                <div class="panel">
				                    <div class="panel-heading avenue-heading">
				                        Fixtures:
				                    </div>
				                    <div class="panel-body avenue-body">
				
				                        <!--<lr-display></lr-display>-->
				
				                    </div>
				                </div>
				            </div> <!-- end col -->
				            <div class="col-md-6">
				                <div class="panel" >
				                    <div class="panel-heading avenue-heading">
				                        Recent Results:
				                    </div>
				                    <div class="panel-body avenue-body">
				
				                        <lr-results></lr-results>
				
				                    </div>
				                </div>
				            </div> <!-- end col -->
				        </div> <!-- end row -->
				
				    </div> <!--  End of container t1 -->
				</div>
    `
})

export class FarViewComponent {
    componentName:string = 'FarViewComponent';
	logdepth:number = 2;
	
    constructor(private lg$: LoggerService, private d$: SessionDataService) { }

	ngOnInit() 
	{
		this.lg$.setLogHdr(this.logdepth, this.componentName);
	}

}