import { Component }       from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

import { Spinner }        from 'primeng/primeng';

import { LoggerService }  from '../services/logger.service';
import { BookingService }  from '../services/booking.service';


@Component({
	selector: 'number-of-people-4parking',
	template: `

			<p-spinner size="2" 
			           [(ngModel)]="bk$.parking" 
			           [min]="1" 
			           [max]="16" >
			</p-spinner>

			`,
	directives: [ FORM_DIRECTIVES, Spinner ]
})


export class NumberOfPeople4ParkingComponent {
	componentName:string = 'NumberOfPeople4ParkingComponent';
	logdepth:number = 4;

	constructor( private lg$: LoggerService, private bk$: BookingService  ) {}
	
}