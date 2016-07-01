import { Component }      from '@angular/core';
import { Router }         from '@angular/router';
import { FORM_DIRECTIVES,  
         FormBuilder,  
         ControlGroup,
         Validators }     from '@angular/common';

import {TabView}          from 'primeng/primeng';
import {TabPanel}         from 'primeng/primeng';

import { LoggerService }  from '../services/logger.service';
import { BookingService } from '../services/booking.service';

@Component({
	template: `
			<div class="panel">
				<div class="panel-heading avenue-heading">
					Step 3: Enter your Contact Details
					<button type="button" class="btn btn-warning btn-xs"(click)="submit(myForm.value)" style="float:right">Next</button>
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
								<table>
									<tr>
										<td width="80px">
		                                	<label for="name">First Name: </label>
		                                </td>
		                                <td width="70px">
			                                <input type="text"  
													id="firstname"
			                                       placeholder="Enter your first name"  
			                                       [ngFormControl]="myForm.controls['firstname']" >
		                               </td>
									</tr>
									
									<br/>
									
									<tr>
										<td width="80px">
		                                	<label for="name">Surname: </label>
		                                </td>
		                                <td width="70px">
			                                <input type="text"  
													id="lastname"
			                                       placeholder="Enter your surname"  
			                                       [ngFormControl]="myForm.controls['surname']" >
		                               </td>
									</tr>
									
									<br/>
									
									<tr>
										<td width="80px">
		                                	<label for="name">Email: </label>
		                                </td>
		                                <td width="70px">
			                                <input type="email"  
			                                       id="email"  
			                                       placeholder="Enter your email"  
			                                       [ngFormControl]="myForm.controls['email']" >
										</td>
									</tr>
									
									<br/>
									
									<tr>
										<td width="80px">
		                                <label for="name">Mobile: </label>
		                                </td>
		                                <td width="70px">
		                                <input type="text"  
		                                       id="mobile"  
		                                       placeholder="Enter your mobile number"  
		                                       [ngFormControl]="myForm.controls['phone']" >
		                               </td>
									</tr>
									
									<br/>
									
									<tr>
										<td width="80px">
		                                <label for="name">Reg: </label>
		                                </td>
		                                <td width="70px">
		                                <input type="text"  
		                                       id="vehicalReg"  
		                                       placeholder="Enter your car reg"  
		                                       [ngFormControl]="myForm.controls['vehicalReg']" >
		                               </td>
                                    </tr>
								</table>
                            </form>  
					    </p-tabPanel>
					    <p-tabPanel header="Step 4: Payment" [disabled]="true">
					       Payment
					    </p-tabPanel>
					</p-tabView>	
				</div>
			</div>
			`,			
	styles: [`

            `],
	directives: [ TabView, TabPanel, FORM_DIRECTIVES ]
	
})

export class BookingStage3Component{
	componentName:string = 'BookingStage3Component';
	logdepth:number = 4;
	myForm: ControlGroup;
	firstname;

	constructor( private lg$: LoggerService, private bk$: BookingService, private router: Router, fb: FormBuilder  ) 
	{
		this.myForm = fb.group({  
		      'firstname': ['', Validators.required],
		      'surname': ['', Validators.required],
		      'email': ['', Validators.required],
		      'phone': ['', Validators.required],
		      'vehicalReg' : ['', Validators.required]
		    });
		
//		this.firstname = this.myForm.controls['firstname'];
//		
//		this.firstname.valuChanges.subscribe(
//				(value: string) => {console.log("Firstname changed to: " + value);}
//		);
	}
	
	ngOnInit() {
    	this.lg$.setLogHdr(this.logdepth, this.componentName);
        this.lg$.log("ngOnInit()");
	}

	submit( value: any )
	{
		this.bk$.firstname = value.firstname;
		this.bk$.surname = value.surname;
		this.bk$.email = value.email;
		this.bk$.phone = value.phone;
		this.bk$.vehicalReg = value.vehicalReg;
		
		
		this.lg$.log("---- Arrival Date: "+ this.bk$.arrivalDate );
		this.lg$.log("---- Departure Date: "+ this.bk$.departureDate );
		this.lg$.log("---- Number of People: "+ this.bk$.numberOfPeople );
		this.lg$.log("---- Car parking: " + this.bk$.numberOfPeople4Parking);
		this.lg$.log("---- Firstname: " + this.bk$.firstname);
		this.lg$.log("---- Surname: " + this.bk$.surname);
		this.lg$.log("---- Email: " + this.bk$.email);
		this.lg$.log("---- Phone: " + this.bk$.phone);
		this.lg$.log("---- Car reg: " + this.bk$.vehicalReg);
		this.router.navigate(['/booking4']);
	}
	
}