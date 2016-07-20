import { Component }          from '@angular/core';

import { SessionDataService } from '../services/session-data.service';
import { NewsComponent }      from "./news.component";


@Component({
	//templateUrl: 'app/htmltemplates/adminHome.component.html',
	template: `
		<div class="container">
			<div class="panel" style="marign-right:50px;">
				<div class="panel-heading avenue-heading" style="min-height:35px;">
					Avenue United Administration Home Page
				</div>
				<div class="panel-body avenue-body" style="height:100%;">
					Welcome <strong>{{_dataService.dsCurrentUser.username}}</strong> to the administration portal!<br><br>
					From here you can add, edit, remove, various details of the club records such
					 as member information, upload news stories and photos and manage your team. 
					 Take a look at the tutorials section for more information on how to perform certain tasks.
				</div>
			</div> <!-- end panel -->

		</div> <!-- end of container -->
	`,
	directives: [ NewsComponent ]
})

export class AdminHomeComponent
{
	componentName = 'AdminHomeComponent'; 
	logdepth = 2;
	loghdr = "";
	
	constructor( private _dataService: SessionDataService ) { 
		this.loghdr = this.setLogHdr(this.logdepth, this.componentName);
		
		console.log(this.loghdr + "User is: " + this._dataService.dsCurrentUser.username);
	}

	
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