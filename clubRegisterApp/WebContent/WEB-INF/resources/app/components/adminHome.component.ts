import { Component }          from '@angular/core';

import { SessionDataService } from '../services/session-data.service';
import { NewsComponent }      from "./news.component";


@Component({
	templateUrl: 'app/htmltemplates/adminHome.component.html',
	directives: [ NewsComponent ]
})

export class AdminHomeComponent
{
	componentName = 'AdminHomeComponent'; 
	logdepth = 2;
	loghdr = "";
	
	constructor( private _dataService: SessionDataService ){ 
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
		for( i=0; i<depth; i++ )
		{
			hdr += " ";
		}
		
		// (2) Add on call stack indicator
		hdr += "|-";
		
		return hdr;
	}
	
}