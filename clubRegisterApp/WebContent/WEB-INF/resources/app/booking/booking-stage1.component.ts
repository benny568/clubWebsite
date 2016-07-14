import { Component }      from '@angular/core';
import { Router }         from '@angular/router';

import { TabView }        from 'primeng/primeng';
import { TabPanel }       from 'primeng/primeng';
import { Checkbox }       from 'primeng/primeng';

import { LoggerService }  from '../services/logger.service';
import { BookingService } from '../services/booking.service';
import { NumberOfPeople4ParkingComponent } from './number-of-people-4parking.component';

@Component({
	template: `
			<div class="panel">
				<div class="panel-heading avenue-heading">
					Step 2: Parking
				</div>
				<div class="panel-body avenue-body">
					<p-tabView orientation="left" class="parent">
					    <p-tabPanel header="Step 1: Dates" [disabled]="true">
					       Booking Step 1
					    </p-tabPanel>
					    <p-tabPanel header="Step 2: Parking" [selected]="true">
					    
					    	<div class="ui-grid ui-grid-responsive">

							    <div class="ui-grid-row">
							        <div class="ui-grid-col-12">
										<img src="resources/images/fleadh/parking.png" width="100%"/>
							        </div>
							        <div class="ui-grid-col-12">
							        	<br /><br />
							        	<div class="ui-grid-row">
							        		<div class="ui-grid-col-1"><p-checkbox [(ngModel)]="parkingRequired"></p-checkbox></div>
							        		<div class="ui-grid-col-5"><label class="ui-widget">Parking Required</label></div>
										</div>
							        	<br />
							        	<div class="ui-grid-row" *ngIf="parkingRequired">Please enter the number of parking spaces required:</div>
							        	<br />
							        	<div class="ui-grid-row" *ngIf="parkingRequired">
											<i class="fa fa-car" aria-hidden="true"></i>
								        	&nbsp;&nbsp;
								        	<number-of-people-4parking></number-of-people-4parking>
										</div>
							        </div>
							    </div>
							    <div class="ui-grid-row" style="padding-top:50px;">
							    	<div class="ui-grid-col-12">
							    		<button type="button" class="btn btn-warning"(click)="back()">Back</button>
							    	</div>
							    	<div class="ui-grid-col-12"></div>
							    	<div class="ui-grid-col-7">
							    		<button type="button" class="btn btn-warning"(click)="submit()">Next</button>
							    	</div>
							    </div>
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
	directives: [ TabView, TabPanel, Checkbox, NumberOfPeople4ParkingComponent ]
	
})

export class BookingStage1Component{
	componentName:string = 'BookingStage1Component';
	logdepth:number = 4;
	parkingRequired:boolean = false;

	constructor( private lg$: LoggerService, private bk$: BookingService, private router: Router  ) {}
	
	ngOnInit() {
    	this.lg$.setLogHdr(this.logdepth, this.componentName);
        this.lg$.log("ngOnInit()");
	}

	submit()
	{
		this.lg$.log("---- parkingRequired: " + this.parkingRequired);
		if( this.bk$.parking > 0 )
		{
			this.lg$.log("Updating the deposit amount, current: " + this.bk$.deposit + ", parking: " + this.bk$.parking);
			this.bk$.deposit += this.bk$.parking * 10;
		}
	
		this.router.navigate(['/booking3']);
	}
	
	back()
	{
		this.lg$.log("-> back()");
		this.router.navigate(['/fleadh']);
	}
	
}