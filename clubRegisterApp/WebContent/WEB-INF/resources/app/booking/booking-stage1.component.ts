import { Component }      from '@angular/core';
import { Router }         from '@angular/router';

import {TabView} from 'primeng/primeng';
import {TabPanel} from 'primeng/primeng';

import { LoggerService }  from '../services/logger.service';
import { BookingService } from '../services/booking.service';
import { NumberOfPeople4ParkingComponent } from './number-of-people-4parking.component';

@Component({
	template: `
			<div class="panel">
				<div class="panel-heading avenue-heading">
					Step 2: Parking
					<button type="button" class="btn btn-warning btn-xs"(click)="submit()" style="float:right">Next</button>
				</div>
				<div class="panel-body avenue-body">
					<p-tabView orientation="left" class="parent">
					    <p-tabPanel header="Step 1: Dates" [disabled]="true">
					       Booking Step 1
					    </p-tabPanel>
					    <p-tabPanel header="Step 2: Parking" [selected]="true">
					        <img src="resources/images/fleadh/parking.png" width="50%"/>
					        <p>10€ reservation deposit</p>
					        <div class="center-me">
					        	<i class="fa fa-car" aria-hidden="true"></i>
					        	&nbsp;&nbsp;
					        	<number-of-people-4parking></number-of-people-4parking>
					        </div>
					    </p-tabPanel>
					    <p-tabPanel header="Step 3: Contact Details" [disabled]="true">
					        Content 3    
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
            `],
	directives: [ TabView, TabPanel, NumberOfPeople4ParkingComponent ]
	
})

export class BookingStage1Component{
	componentName:string = 'BookingStage1Component';
	logdepth:number = 4;

	constructor( private lg$: LoggerService, private bk$: BookingService, private router: Router  ) {}
	
	ngOnInit() {
    	this.lg$.setLogHdr(this.logdepth, this.componentName);
        this.lg$.log("ngOnInit()");
	}

	submit()
	{
		if( this.bk$.parking > 0 )
		{
			this.lg$.log("Updating the deposit amount, current: " + this.bk$.deposit + ", parking: " + this.bk$.parking);
			this.bk$.deposit += this.bk$.parking * 10;
		}
	
		this.router.navigate(['/booking3']);
	}
	
}