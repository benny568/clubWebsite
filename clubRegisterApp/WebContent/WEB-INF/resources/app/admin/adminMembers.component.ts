import { Component }          from '@angular/core';
import { SessionDataService } from '../services/session-data.service';
import { LoggerService }      from '../services/logger.service';

@Component({
	template: ''
})

export class AdminMembersComponent {
	component:string = 'AdminMembersComponent';
	logdepth:number = 0;
	
	constructor( private lg$: LoggerService, 
				 public d$: SessionDataService ) 
	{
		this.lg$.setLogHdr(this.logdepth, this.component);
	}
}