import { Component }       from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

import { Spinner }        from 'primeng/primeng';

import { BookingService }  from '../services/booking.service';


@Component({
	selector: 'number-of-people',
	template: `

			<p-spinner size="2" 
			           [(ngModel)]="bk$.numberOfPeople" 
			           [min]="1" 
			           [max]="16" >
			</p-spinner>

			`,
	directives: [ FORM_DIRECTIVES, Spinner ]
})


export class NumberOfPeopleComponent {

	constructor( private bk$: BookingService ) { console.log("==> NumberOfPeopleComponent..."); }
	
}