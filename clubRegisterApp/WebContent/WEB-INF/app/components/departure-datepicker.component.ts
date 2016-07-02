import { Component }       from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

import { Calendar }        from 'primeng/primeng';

import { BookingService }  from '../services/booking.service';

@Component({
	selector: 'departure-datepicker',
	template: `	
	<ui-widget>
		<ui-widget-content>
			<p-calendar [(ngModel)]="bk$.departureDate" 
						dateFormat="dd.mm.yy" s
						howAnim="slideDown"
						placeholder="Please pick departure date"
						showIcon="true"
						minDate="26.08.16"
						maxDate="30.08.16" >
			</p-calendar>
		</ui-widget-content>
	</ui-widget>
			`,
	directives: [ FORM_DIRECTIVES, Calendar ]
})


export class DepartureDatepickerComponent {

	constructor( private bk$: BookingService ) { console.log("==> DepartureDatepickerComponent..."); }
	
}