import { Component }      from '@angular/core';
import { Router }         from '@angular/router';

import { TabView }        from 'primeng/primeng';
import { TabPanel }       from 'primeng/primeng';
import { Checkbox }       from 'primeng/primeng';
import { Growl }          from 'primeng/primeng';
import { Message }        from 'primeng/primeng';

import { LoggerService }  from '../services/logger.service';
import { BookingService } from '../services/booking.service';
import { ArrivalDatepickerComponent } from './arrival-datepicker.component';
import { DepartureDatepickerComponent } from './departure-datepicker.component';
import { NumberOfPeopleComponent } from './number-of-people.component';
import { InstructionsComponent } from '../booking/instructions.component';
import { TandCComponent } from '../booking/tandc.component';
import { TestComponent } from '../booking/test.component';

@Component({
	template: `
			<div class="panel">
				<div class="panel-heading avenue-heading">
					Step 1: Choose your preferred dates
				</div>
				<div class="panel-body avenue-body">
					<p-tabView orientation="left" class="parent">
					    <p-tabPanel header="Step 1: Dates" [selected]="true">
					    	
					    	<div class="ui-grid ui-grid-responsive">
							    <div class="ui-grid-row">
							        <div class="ui-grid-col-11" style="width:50%;"><tandc></tandc></div>
							        <div class="ui-grid-col-11"><instructions></instructions></div>
							    </div>
							    <div class="ui-grid-row">
							        <div class="ui-grid-col-1"><p-checkbox [(ngModel)]="bk$.tandc"></p-checkbox></div>
							        <div class="ui-grid-col-5"><label class="ui-widget">I accept T&C's</label></div>
							    </div>
							    <div class="ui-grid-row">
							        <div class="ui-grid-col-12">
							        	<div class="ui-grid-row">Arrival:</div>
							        	<div class="ui-grid-row"><arrival-datepicker></arrival-datepicker></div>
							        </div>
							        <div class="ui-grid-col-12">
							        	<div class="ui-grid-row">Departure:</div>
							        	<div class="ui-grid-row"><departure-datepicker></departure-datepicker></div>
							        </div>
							        <div class="ui-grid-col-7">
							        	<div class="ui-grid-row">Number of People:</div>
							        	<div class="ui-grid-row"><number-of-people></number-of-people></div>
							        </div>
							    </div>
							    <div class="ui-grid-row" style="padding-top:50px;">
							    	<div class="ui-grid-col-4">
							    		<button type="button" class="btn btn-warning"(click)="back()">Back</button>
							    	</div>
							    	<div class="ui-grid-col-14">
							    		Our campsite on the Tulla Road is the ONLY Official Fleadh 2016 Campsite in Ennis.<br />

										On site we have the Grove Bar & Restaurant, Off Licence, Supermarket, Takeaway & more!<br />
										
										We are located just off EXIT 13 on the M18 Motorway for really easy access and exit.<br />
										
										We will be serviced by the official Fleadh Shuttle Bus service to and from the town centre.<br />
										
										We are the best and the cheapest option for Fleadh Camping, with plenty room for everyone!
							    	</div>
							    	<div class="ui-grid-col-7">
							    		<button type="button" class="btn btn-warning"(click)="submit()">Next</button>
							    	</div>
							    </div>
							</div>

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
					<p-growl [value]="msgs" sticky="sticky"></p-growl>
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
	              Checkbox,
	              Growl,
	              ArrivalDatepickerComponent,
	              DepartureDatepickerComponent,
	              NumberOfPeopleComponent,
	              InstructionsComponent,
	              TandCComponent,
	              TestComponent ]
	
})

export class FleadhComponent{
	componentName:string = 'FleadhComponent';
	logdepth:number = 4;
	msgs: Message[] = [];

	constructor( private lg$: LoggerService, private bk$: BookingService, private router: Router  ) {}
	
	ngOnInit() {
    	this.lg$.setLogHdr(this.logdepth, this.componentName);
        this.lg$.log("ngOnInit()");
	}

	submit()
	{
		// If user has not accepted T&C's go no further
		if( !this.bk$.tandc )
		{
			this.lg$.log("---- YOU MUST ACCEPT THE T&C'S TO CONTINUE ----");
			this.showTCError();
			return;
		}
		
		if( (this.bk$.arrivalDate != undefined) && (this.bk$.departureDate != undefined) )  // must be defined
		{
			if( (this.bk$.arrivalDate != '') && (this.bk$.departureDate != '') )			// must have a value
			{
				let from:number = +(this.bk$.arrivalDate.slice(0,2));
				let to:number = +(this.bk$.departureDate.slice(0,2));
				this.bk$.numberOfNights = (to - from);
				this.lg$.log("---- Number of nights stay is: " + this.bk$.numberOfNights);
				
				if( this.bk$.numberOfNights < 3 )
				{
					this.lg$.log("---- MINIMUM STAY 3 NIGHTS ----");
					this.show3NError();
					return;
				}
			}
			else
			{
				this.showDateError();
				this.lg$.log("---- submit() called with start or end date empty!");
				return;
			}
		}
		else
		{
			this.showDateError();
			this.lg$.log("---- submit() called with start or end date undefined!");
			return;
		}
		
		if( (this.bk$.numberOfPeople == undefined) || (this.bk$.numberOfPeople < 1) )
		{
			this.lg$.log("---- YOU MUST INDICATE NUMBER OF PEOPLE ----");
			this.showNPError();
			return;
		}
		
		
		// If the user has pressed next then they need to pay camping deposit
		this.bk$.deposit = 30;
		
		// Log the details
		this.lg$.log("---- Arrival Date: "+ this.bk$.arrivalDate );
		this.lg$.log("---- Departure Date: "+ this.bk$.departureDate );
		this.lg$.log("---- Number of People: "+ this.bk$.numberOfPeople );
		this.lg$.log("---- Car parking: " + this.bk$.parking);
		this.lg$.log("---- T&C accepted: " + this.bk$.tandc);
		this.router.navigate(['/booking']);
	}
	
    showTCError() {
    	this.lg$.log("----> showTCError()");
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Error:', detail:'You must accept the T&C\'s to continue!'});
    }
    
    show3NError() {
    	this.lg$.log("----> show3NError()");
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Error:', detail:'Minimum stay is 3 nights!'});
    }
    
    showDateError() {
    	this.lg$.log("----> showDateError()");
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Error:', detail:'Please enter start and end dates!'});
    }
    
    showNPError() {
    	this.lg$.log("----> showNPError()");
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Error:', detail:'Please enter the number of people staying!'});
    }
	
	clear() {
        this.msgs = [];
    }
	
	back()
	{
		this.lg$.log("-> back()");
		this.router.navigate(['']);
	}
	
}