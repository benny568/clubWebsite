import { Component }      from '@angular/core';
import { Router }         from '@angular/router';
import { FORM_DIRECTIVES,  
         FormBuilder,  
         ControlGroup,
         Validators }     from '@angular/common';

import {TabView}          from 'primeng/primeng';
import {TabPanel}         from 'primeng/primeng';
import { Growl }          from 'primeng/primeng';
import { Message }        from 'primeng/primeng';

import { LoggerService }  from '../services/logger.service';
import { BookingService } from '../services/booking.service';

@Component({
	template: `
			<div class="panel">
				<div class="panel-heading avenue-heading">
					Step 3: Enter your Contact Details
				</div>
				<div class="panel-body avenue-body">
					<p-tabView orientation="left" class="parent">
					    <p-tabPanel header="Step 1: Dates" [disabled]="true">
					       Booking Step 1
					    </p-tabPanel>
					    <p-tabPanel header="Step 2: Parking" [disabled]="true">
							Parking
					    </p-tabPanel>
					    <p-tabPanel header="Step 3: Contact Details" [selected]="true">
					    	Please enter your contact details....<br/><br/><br/>
					    	
					    	
					    	 <form [ngFormModel]="myForm">
					    	 
					    	 	<div class="ui-grid ui-grid-responsive">
								    <div class="ui-grid-row">
								        <div class="ui-grid-col-2">
											<label for="name">First Name: </label>
								        </div>
								        <div class="ui-grid-col-4">
											<input type="text"  
													id="firstname"
			                                       placeholder="Enter your first name"  
			                                       [ngFormControl]="myForm.controls['firstname']" >
								        </div>
								    </div>
								    <br/>
								    <div class="ui-grid-row">
								        <div class="ui-grid-col-2">
											<label for="name">Surname: </label>
								        </div>
								        <div class="ui-grid-col-4">
											<input type="text"  
													id="lastname"
			                                       placeholder="Enter your surname"  
			                                       [ngFormControl]="myForm.controls['surname']" >
								        </div>
								    </div>
								    <br/>
								    <div class="ui-grid-row">
								       <div class="ui-grid-col-2">
											<label for="name">Email: </label>
								        </div>
								        <div class="ui-grid-col-4">
											<input type="email"  
			                                       id="email"  
			                                       placeholder="Enter your email"  
			                                       [ngFormControl]="myForm.controls['email']" >
								        </div>
								    </div>
								    <br/>
								    <div class="ui-grid-row">
								        <div class="ui-grid-col-2">
											<label for="name">Mobile: </label>
								        </div>
								        <div class="ui-grid-col-4">
											<input type="text"  
		                                       id="mobile"  
		                                       placeholder="Enter your mobile number"  
		                                       [ngFormControl]="myForm.controls['phone']" >
								        </div>
								    </div>
								    <br/>
								    <div class="ui-grid-row">
								        <div class="ui-grid-col-2">
											 <label for="name">Car Reg: </label>
								        </div>
								        <div class="ui-grid-col-4">
											<input type="text"  
		                                       id="vehicalReg"  
		                                       placeholder="Enter your car reg"  
		                                       [ngFormControl]="myForm.controls['vehicalReg']" >
								        </div>
								    </div>
								    <br/>
								    <div class="ui-grid-row" style="padding-top:50px;">
								    	<div class="ui-grid-col-12">
								    		<button type="button" class="btn btn-warning"(click)="back()">Back</button>
								    	</div>
								    	<div class="ui-grid-col-12"></div>
								    	<div class="ui-grid-col-7">
								    		<button type="button" class="btn btn-warning"(click)="submit(myForm.value)">Next</button>
								    	</div>
								    </div>
								</div>
					    	 
					    	 </form>
								    
					    </p-tabPanel>
					    <p-tabPanel header="Step 4: Payment" [disabled]="true">
					       Payment
					    </p-tabPanel>
					</p-tabView>	
				</div>
				<p-growl [value]="msgs" sticky="sticky"></p-growl>
			</div>
			`,			
	styles: [`

            `],
	directives: [ TabView, TabPanel, Growl, FORM_DIRECTIVES ]
	
})

export class BookingStage3Component {
	componentName:string = 'BookingStage3Component';
	logdepth:number = 4;
	myForm: ControlGroup;
	msgs: Message[] = [];

	constructor( private lg$: LoggerService, private bk$: BookingService, private router: Router, fb: FormBuilder  ) 
	{
		this.myForm = fb.group({  
		      'firstname': ['', Validators.required],
		      'surname': ['', Validators.required],
		      'email': ['', Validators.required],
		      'phone': ['', Validators.required],
		      'vehicalReg' : ['', Validators.required]
		    });
	}
	
	ngOnInit() {
    	this.lg$.setLogHdr(this.logdepth, this.componentName);
        this.lg$.log("ngOnInit()");
	}

	submit( value: any )
	{
		if ( !this.checkName( value.firstname ) )
		{
			this.showFNError();
			return;
		}
		
		if ( !this.checkName( value.surname ) )
		{
			this.showsSNError();
			return;
		}
		
		if ( !this.checkEmail( value.email ) )
		{
			this.showEmailError();
			return;
		}
		
		if ( !this.checkPh( value.phone ) )
		{
			this.showPhError();
			return;
		}
		
		this.bk$.firstname = value.firstname;
		this.bk$.surname = value.surname;
		this.bk$.email = value.email;
		this.bk$.phone = value.phone;
		this.bk$.vehicalReg = value.vehicalReg;
		
		
		this.lg$.log("---- Arrival Date: " + this.bk$.arrivalDate );
		this.lg$.log("---- Departure Date: " + this.bk$.departureDate );
		this.lg$.log("---- Number of People: " + this.bk$.numberOfPeople );
		this.lg$.log("---- Car parking: " + this.bk$.parking);
		this.lg$.log("---- Firstname: " + this.bk$.firstname);
		this.lg$.log("---- Surname: " + this.bk$.surname);
		this.lg$.log("---- Email: " + this.bk$.email);
		this.lg$.log("---- Phone: " + this.bk$.phone);
		this.lg$.log("---- Car reg: " + this.bk$.vehicalReg);
		this.router.navigate(['/booking4']);
	}
	
	back()
	{
		this.lg$.log("-> back()");
		this.router.navigate(['/booking']);
	}
	
	checkName( name ) : boolean
	{
		this.lg$.log("----> checkName(" + name + ")");
		
		if ( ( name !== undefined ) && ( name !== '' ) )
		{
			return /^\w+/.test(name);
		} else
		{
			this.lg$.log("----> checkName(" + name + ") undefined or blank!");
			return false;
		}
	}
	
	checkEmail( email ) : boolean
	{
		this.lg$.log("----> checkEmail(" + email + ")");
		
		if ( ( email !== undefined ) && ( email !== '' ) )
		{
			return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(email);
		} else
		{
			this.lg$.log("----> checkEmail(" + email + ") undefined or blank!");
			return false;
		}
	}
	
	checkPh( phone ) : boolean
	{
		this.lg$.log("----> checkPh(" + phone + ")");
		this.lg$.log("== " + /^\d{10}$/.test(phone) );
		this.lg$.log("== " + /^\+\d{12}$/.test(phone) );
		
		if ( ( phone !== undefined ) && ( phone !== '' ) )
		{
			/*if ( (/^\d{10}$/.test(phone)) || (/^\+\d{12}$/.test(phone)) )
			{
				return true;
			} else
			{
				return false;
			}*/
			
			// Removing checks, once it is entered we'll take it
			return true;
			
		} else
		{
			this.lg$.log("----> checkPh(" + phone + ") undefined or blank!");
			return false;
		}
	}
	
	showFNError() {
    	this.lg$.log("----> showFNError()");
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Error:', detail:'You must enter a valid first name!'});
    }
	
	showsSNError() {
    	this.lg$.log("----> showSNError()");
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Error:', detail:'You must enter a valid surname!'});
    }
	
	showEmailError() {
    	this.lg$.log("----> showEmailError()");
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Error:', detail:'You must enter a valid email address!'});
    }
	
	showPhError() {
    	this.lg$.log("----> showPhError()");
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Error:', detail:'You must enter a valid phone number!'});
    }
	
}