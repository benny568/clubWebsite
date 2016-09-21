import { Component }       from '@angular/core';
import { Router }          from '@angular/router';

import { TabView }         from 'primeng/primeng';
import { TabPanel }        from 'primeng/primeng';
import { Checkbox }        from 'primeng/primeng';

import { LoggerService }   from '../services/logger.service';
import { BookingService }  from '../services/booking.service';
import { AcademyRegistrationService }  from './academyRegistration.service';

@Component({
	template: `<div class="panel">
		<div class="panel-heading avenue-heading">
		Step 3: Payment
	</div>
	<div class="panel-body avenue-body">
		<p-tabView orientation="left" class="parent">
		    <p-tabPanel header="Step 1: Terms & Conditions" [disabled]="true">							    
			</p-tabPanel>
		    <p-tabPanel header="Step 2: Registration Form" [disabled]="true">
		    	Parking
		    </p-tabPanel>
		    <p-tabPanel header="Step 3: Payment" [selected]="true">	   

				<div class="ui-grid ui-grid-responsive">
				
					<div *ngFor="let item of ar$.regData">

			    		<div class="ui-grid-row" *ngIf="(item.type==='text')&&(item.display)" style="margin-bottom:5px;">
			    			
			    			<div class="ui-grid-col-3">
								<strong>{{item.name}}:</strong>
					        </div>
					        <div class="ui-grid-col-4">
								{{item.value}}
					        </div>
					        
				        </div>
				        
					</div>	
				
					<!-- Leave a space -->
					<div class="ui-grid-row">
						<br />
					</div>
					
					<!-- Add the total cost calculations -->
					<div class="ui-grid-row">
						<div class="ui-grid-col-4" style="font-weight: bold;">
							TOTAL PAYMENT DUE:
						</div>
						<div class="ui-grid-col-3">
							{{ar$.payment | currency:'EUR':true:'1.2-2'}}
						</div>
					</div>

				    <div class="ui-grid-row" style="padding-top:50px;">
				    	<div class="ui-grid-col-12">
				    		<button type="button" class="btn btn-warning"(click)="back()">Back</button>
				    	</div>
				    	<div class="ui-grid-col-12"></div>
				    	<div class="ui-grid-col-7">
				    		<button type="button" (click)="ar$.payPal()" style="float:right;">
				       			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif" border="0">
				       		</button>
				    	</div>
				    </div>
				</div>
	
		    </p-tabPanel>

		</p-tabView>
		<p-growl [value]="msgs" sticky="sticky"></p-growl>
	</div>
	</div>
	`
})

export class AcademyMemberPaymentComponent {
	componentName:string = 'AcademyMemberPaymentComponent';
	logdepth:number = 4;
	
	constructor( private lg$: LoggerService, private ar$: AcademyRegistrationService, private router: Router  ) {}
	
	ngOnInit() {
		this.lg$.setLogHdr(this.logdepth, this.componentName);
	    this.lg$.log("ngOnInit()");
	    
	    this.ar$.calculateTotalCost();
	    
	    this.ar$.logValues();
	}

	back()
	{
		this.lg$.log("-> back()");
		this.router.navigate(['/academyRegistration']);
	}
	
}