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
					<div class="ui-grid-row">
						<div class="ui-grid-col-3" style="font-weight: bold;">
							Firstname: 
						</div>
						<div class="ui-grid-col-7">
							{{ar$.firstname}}
						</div>
					</div>
					<div class="ui-grid-row">
						<div class="ui-grid-col-3" style="font-weight: bold;">
							Surname:
						</div>
						<div class="ui-grid-col-7"> 
							{{ar$.surname}}
						</div>
					</div>
					<div class="ui-grid-row">
						<div class="ui-grid-col-3" style="font-weight: bold;">
							email:
						</div>
						<div class="ui-grid-col-7"> 
							{{ar$.email}}
						</div>
					</div>
					<div class="ui-grid-row">
						<div class="ui-grid-col-3" style="font-weight: bold;">
							Date of Birth:
						</div>
						<div class="ui-grid-col-7">
							{{ar$.dob}}
						</div>
					</div>
					<div class="ui-grid-row">
						<div class="ui-grid-col-3" style="font-weight: bold;">
							Contact number 1:
						</div>
						<div class="ui-grid-col-7">
							{{ar$.phone1}}
						</div>
					</div>
					<div class="ui-grid-row">
						<div class="ui-grid-col-3" style="font-weight: bold;">
					 		Contact number 2:
					 	</div>
						<div class="ui-grid-col-7">
							{{ar$.phone2}}
						</div>
					</div>
					<div class="ui-grid-row">
						<div class="ui-grid-col-3" style="font-weight: bold;">
							Allergies:
						</div>
						<div class="ui-grid-col-7">
							{{ar$.allergies}}
						</div>
					</div>
					<div class="ui-grid-row">
						<div class="ui-grid-col-3" style="font-weight: bold;">
							Asthma:
						</div>
						<div class="ui-grid-col-7">
							{{ar$.asthma}}
						</div>
					</div>
					<div class="ui-grid-row">
						<div class="ui-grid-col-3" style="font-weight: bold;">
							Diabetes: 
						</div>
						<div class="ui-grid-col-7">	
							{{ar$.diabetes}}
						</div>
					</div>
					<div class="ui-grid-row">
						<div class="ui-grid-col-3" style="font-weight: bold;">
							Medication:
						</div>
						<div class="ui-grid-col-7">
							{{ar$.medication}}
						</div>
					</div>
					<div class="ui-grid-row">
						<div class="ui-grid-col-3" style="font-weight: bold;">
							Notes:
						</div>
						<div class="ui-grid-col-7">	
							{{ar$.notes}}
						</div>
					</div>
					<div class="ui-grid-row">
						<div class="ui-grid-col-3" style="font-weight: bold;">
							Date of registration:
						</div>
						<div class="ui-grid-col-7">	
							{{ar$.regDate}}
						</div>
					</div>
					<div class="ui-grid-row">
						<div class="ui-grid-col-3" style="font-weight: bold;">
							Mother's name:
						</div>
						<div class="ui-grid-col-7">
							{{ar$.mother}}
						</div>
					</div>
					<div class="ui-grid-row">
						<div class="ui-grid-col-3" style="font-weight: bold;">
							Father's name:
						</div>
						<div class="ui-grid-col-7">	
							{{ar$.father}}
						</div>
					</div>
					<div class="ui-grid-row">
						<div class="ui-grid-col-3" style="font-weight: bold;">
							General Consent:
						</div>
						<div class="ui-grid-col-7">
							{{ar$.generalConsent===true?'Given':'Not Given'}}				
						</div>
					</div>
					<div class="ui-grid-row">
						<div class="ui-grid-col-3" style="font-weight: bold;">
							Picture Consent:
						</div>
						<div class="ui-grid-col-7">
							{{ar$.pictureConsent===true?'Given':'Not Given'}}				
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
	`,
	directives: [ TabView, TabPanel, Checkbox ]
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