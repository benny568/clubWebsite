import { Component }      from '@angular/core';
import { Router }         from '@angular/router';

import { LoggerService }  from '../services/logger.service';
import { BookingService } from '../services/booking.service';

@Component({
	template: `
				<div class="panel">
					<div class="panel-heading avenue-heading">
						Thanks for your booking
					</div>
					<div class="panel-body avenue-body">
						A confirmation email has been sent to the email you provided.<br /> 
						Any queries should be directed to booking@avenueunited.ie<br />
						Please present the email receipt on arrival as proof of your deposit.<br /><br />
						Thank you from Avenue United
					</div>
				</div>
			`
})

export class SuccessComponent {
	componentName:string = 'SuccessComponent';
	logdepth:number = 5;

	constructor( private lg$: LoggerService, private bk$: BookingService, private router: Router  ) {}
	
	ngOnInit()
	{
		this.lg$.setLogHdr(this.logdepth, this.componentName);
        this.lg$.log("|- ngOnInit()");
        this.lg$.log("   |- calling sendEmailConfirmation()");
		//this.bk$.sendEmailConfirmation();
        return;
	}
}