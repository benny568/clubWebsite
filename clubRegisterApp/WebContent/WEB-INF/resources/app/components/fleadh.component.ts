import { Component }      from '@angular/core';
import { Router }         from '@angular/router';

import {TabView} from 'primeng/primeng';
import {TabPanel} from 'primeng/primeng';

import { LoggerService }  from '../services/logger.service';
import { BookingService } from '../services/booking.service';
import { ArrivalDatepickerComponent } from './arrival-datepicker.component';
import { DepartureDatepickerComponent } from './departure-datepicker.component';
import { NumberOfPeopleComponent } from './number-of-people.component';
import { InstructionsComponent } from '../booking/instructions.component';

@Component({
	template: `
			<div class="panel">
				<div class="panel-heading avenue-heading">
					Step 1: Choose your preferred dates
					<button type="button" class="btn btn-warning btn-xs"(click)="submit()" style="float:right">Next</button>
				</div>
				<div class="panel-body avenue-body">
					<p-tabView orientation="left" class="parent">
					    <p-tabPanel header="Step 1: Dates" [selected]="true">
					    	<instructions></instructions>
					    	<table>
					    		<tr>
					    			<td>Arrival:</td>
					    			<td class="datespace"></td>
					    			<td>Departure:</td>
					    			<td class="datespace"></td>
					    			<td>Number of People:</td>
					    		</tr>
					    		<tr>
					    			<td><arrival-datepicker></arrival-datepicker></td>
					    			<td class="datespace"></td>
					    			<td><departure-datepicker></departure-datepicker></td>
					    			<td class="datespace"></td>
					    			<td align="center"><number-of-people></number-of-people></td>
					    		</tr>
					    	</table>
					    </p-tabPanel>
					    <p-tabPanel header="Step 2: Parking" [disabled]="true">
					    	Parking
					    </p-tabPanel>
					    <p-tabPanel header="Step 3: Contact Details" [disabled]="true">
					        Contact Details  
					    </p-tabPanel>
					    <p-tabPanel header="Step 4: Payment" [disabled]="true">
					        Payment    
					    </p-tabPanel>
					</p-tabView>	
				</div>
			</div>
			`,			
	styles: [`
            img {
				    float: left;
				    margin: 0 20px 20px 0;
				}
				
			p {
				text-align: justify;
				text-indent: 2em;
				}
				
			.center-me {
			  margin: 0 auto;
			}
			.parent {
			  position: relative;
			}
			.child {
			  position: absolute;
			  top: 50%;
			  transform: translateY(-10%);
			}
			.datespace{
	            min-width:40px;
	        }
            `],
	directives: [ TabView, 
	              TabPanel,
	              ArrivalDatepickerComponent,
	              DepartureDatepickerComponent,
	              NumberOfPeopleComponent,
	              InstructionsComponent ]
	
})

export class FleadhComponent{
	componentName:string = 'FleadhComponent';
	logdepth:number = 4;

	constructor( private lg$: LoggerService, private bk$: BookingService, private router: Router  ) {}
	
	ngOnInit() {
    	this.lg$.setLogHdr(this.logdepth, this.componentName);
        this.lg$.log("ngOnInit()");
	}

	submit()
	{
		// If the user has pressed next then they need to pay camping deposit
		this.bk$.deposit = 30;
		
		// Log the details
		this.lg$.log("---- Arrival Date: "+ this.bk$.arrivalDate );
		this.lg$.log("---- Departure Date: "+ this.bk$.departureDate );
		this.lg$.log("---- Number of People: "+ this.bk$.numberOfPeople );
		this.lg$.log("---- Car parking: " + this.bk$.parking);
		this.router.navigate(['/booking']);
	}
	
}