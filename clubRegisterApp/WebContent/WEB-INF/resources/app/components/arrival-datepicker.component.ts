import { Component }       from '@angular/core';

import { Calendar }        from 'primeng/primeng';

import { BookingService }  from '../services/booking.service';

@Component({
	selector: 'arrival-datepicker',
	template: `
	<ui-widget>
		<ui-widget-content>
			<p-calendar [(ngModel)]="bk$.arrivalDate" 
						dateFormat="dd/mm/yy"
						howAnim="slideDown"
						placeholder="Please pick arrival date"
						showIcon="true"
						defaultDate="17/08/16"
						minDate="17/08/2016"
						maxDate="22/08/2016"
						[readonlyInput]="true"
						>
			</p-calendar>
		</ui-widget-content>
	</ui-widget>	
			`
})


export class ArrivalDatepickerComponent {

	constructor( private bk$: BookingService ) { console.log("==> ArrivalDatepickerComponent..."); }
	
}