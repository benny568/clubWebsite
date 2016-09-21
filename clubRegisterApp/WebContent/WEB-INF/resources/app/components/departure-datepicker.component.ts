import { Component }       from '@angular/core';

import { Calendar }        from 'primeng/primeng';

import { BookingService }  from '../services/booking.service';

@Component({
	selector: 'departure-datepicker',
	template: `	
	<ui-widget>
		<ui-widget-content>
			<p-calendar [(ngModel)]="bk$.departureDate" 
						dateFormat="dd/mm/yy"
						howAnim="slideDown"
						placeholder="Please pick departure date"
						showIcon="true"
						[readonlyInput]="true"
						minDate="17/08/2016"
						maxDate="22/08/2016" >
			</p-calendar>
		</ui-widget-content>
	</ui-widget>
			`
})


export class DepartureDatepickerComponent {

	constructor( private bk$: BookingService ) { console.log("==> DepartureDatepickerComponent..."); }
	
}