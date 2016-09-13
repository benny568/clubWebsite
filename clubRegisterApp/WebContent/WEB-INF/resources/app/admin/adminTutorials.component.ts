import { Component }          from '@angular/core';

import { SessionDataService } from '../services/session-data.service';
import { LoggerService }      from '../services/logger.service';


@Component({
	//templateUrl: 'app/htmltemplates/adminTutorials.component.html'
	template: `
			<div class="container">
			<div class="panel" style="marign-right:50px;">
				<div class="panel-heading avenue-heading" style="min-height:35px;">
					Avenue United Tutorials Home Page
				</div>
				<div class="panel-body avenue-body" style="height:100%;">
					Welcome to the tutorials page!<br><br>
					
				</div>
			</div>
		</div> <!-- end of container -->
		`
})

export class AdminTutorialsComponent
{
	componentName = 'AdminTutorialsComponent'; 
	logdepth = 2;
	
	constructor( private lg$: LoggerService, private d$: SessionDataService ) {}

	onInit()
    {
    	this.lg$.setLogHdr(this.logdepth, this.componentName);
        this.lg$.log("ngOnInit()");
    }
	
}