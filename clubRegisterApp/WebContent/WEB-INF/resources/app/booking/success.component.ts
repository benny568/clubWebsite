import { Component }      from '@angular/core';
import { Router }         from '@angular/router';

import { LoggerService }  from '../services/logger.service';
import { BookingService } from '../services/booking.service';

@Component({
	template: `
				<h1 style="color:white;">Thanks for your booking</h1>
				<p style="color:white;">A confirmation email has been sent to the email you provided. 
				Any queries should be directed to booking@avenueunited.ie.</p>
				<strong style="color:white;">Thank you from Avenue United</strong>
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
		this.bk$.sendEmailConfirmation();
	}
}