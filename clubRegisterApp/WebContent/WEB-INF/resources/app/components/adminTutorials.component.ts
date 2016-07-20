import { Component }          from '@angular/core';
import { SessionDataService } from '../services/session-data.service';


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
	loghdr = "";
	
	constructor( private _dataService: SessionDataService ) {}

	
	/**********************************************************
     * Name:		setLogHdr()
     * Description:	Sets up the correct indentation and header
     * 				information for the log messages.
     * Scope:		Internal
     * Params in:	
     * Return:		 
     **********************************************************/
	setLogHdr(logdepth, moduleName)
	{
		let i = 0;
		let depth = logdepth * 4;
		let hdr:string = "## " +  moduleName;
	
		// (1) Set the indentation according to the depth
		for ( i = 0; i < depth; i++ )
		{
			hdr += " ";
		}
		
		// (2) Add on call stack indicator
		hdr += "|-";
		
		return hdr;
	}
	
}