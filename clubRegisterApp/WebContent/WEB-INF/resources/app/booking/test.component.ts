import { Component }      from '@angular/core';

import { LoggerService }  from '../services/logger.service';
import { BookingService } from '../services/booking.service';


@Component({
	selector: 'test-ipn',
	template: `
			<form target="_new" method="post" action="http://localhost:8080/clubRegisterApp/ipn">
			
			  <!-- code for other variables to be tested ... -->
			
			  <input type="submit" (click)="send()"/>
			</form>
			
			`
})


export class TestComponent {
	
	constructor( private lg$: LoggerService, private bk$: BookingService ) {}
	
	send()
	{		
		this.bk$.testIpn();
	}
}