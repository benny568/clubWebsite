import { Component }       from '@angular/core';
import { Router }          from '@angular/router';

import { TabView }         from 'primeng/primeng';
import { TabPanel }        from 'primeng/primeng';
import { Checkbox }        from 'primeng/primeng';
import { Growl }           from 'primeng/primeng';
import { Message }         from 'primeng/primeng';

import { LoggerService }   from '../services/logger.service';
import { AcademyRegistrationService }  from './academyRegistration.service';

@Component({
	template: `
			<div class="panel">
				<div class="panel-heading avenue-heading">
					Step 2: Registration Form
				</div>
				<div class="panel-body avenue-body">
					<p-tabView orientation="left" class="parent">
					    <p-tabPanel header="Step 1: Dates" [disabled]="true">
					       Step 1: Read & agree to terms and conditions
					    </p-tabPanel>
					    <p-tabPanel header="Step 2: Registration Form" [selected]="true">
					    
					    	<div class="ui-grid ui-grid-responsive">

								<div class="ui-grid-row">
							        <div class="ui-grid-col-3">
										<label for="name">First Name: </label>
							        </div>
							        <div class="ui-grid-col-4">
										<input 	type="text" 
											pInputText
											placeholder="Enter childs first name" 
											[(ngModel)]="ar$.firstname"/>
							        </div>
								</div>
								<div class="ui-grid-row">
							        <div class="ui-grid-col-3">
										<label for="surname">Surname: </label>
							        </div>
							        <div class="ui-grid-col-4">
										<input 	type="text" 
											pInputText
											placeholder="Enter childs Surname" 
											[(ngModel)]="ar$.surname"/>
							        </div>
								</div>
								<div class="ui-grid-row">
							        <div class="ui-grid-col-3">
										<label for="email">email: </label>
							        </div>
							        <div class="ui-grid-col-5">
										<input 	type="text" 
											pInputText
											placeholder="Parent's email" 
											[(ngModel)]="ar$.email"/>
							        </div>
								</div>
								<div class="ui-grid-row">
							        <div class="ui-grid-col-3">
										<label for="dob">Date of birth: </label>
							        </div>
							        <div class="ui-grid-col-4">
										<input 	type="text" 
											pInputText
											placeholder="Childs's dob" 
											[(ngModel)]="ar$.dob"/>
							        </div>
								</div>
								<div class="ui-grid-row">
							        <div class="ui-grid-col-3">
										<label for="phone1">Contact Number: </label>
							        </div>
							        <div class="ui-grid-col-4">
										<input 	type="text" 
											pInputText
											placeholder="Parent's phone" 
											[(ngModel)]="ar$.phone1"/>
							        </div>
								</div>
								<div class="ui-grid-row">
							        <div class="ui-grid-col-3">
										<label for="phone2">Contact Number 2: </label>
							        </div>
							        <div class="ui-grid-col-4">
										<input 	type="text" 
											pInputText
											placeholder="Parent's phone" 
											[(ngModel)]="ar$.phone2"/>
							        </div>
								</div>
								<div class="ui-grid-row">
							        <div class="ui-grid-col-3">
										<label for="allargies">Allargy Information: </label>
							        </div>
							        <div class="ui-grid-col-7">
										<input 	type="text" 
											pInputText
											placeholder="List Allergies" 
											[(ngModel)]="ar$.allergies"/>
							        </div>
								</div>
								<div class="ui-grid-row">
							        <div class="ui-grid-col-3">
										<label for="asthma">Asthma: </label>
							        </div>
							        <div class="ui-grid-col-7">
										<input 	type="text" 
											pInputText
											placeholder="Asthma details" 
											[(ngModel)]="ar$.asthma"/>
							        </div>
								</div>
								<div class="ui-grid-row">
							        <div class="ui-grid-col-3">
										<label for="diabetes">Diabetes: </label>
							        </div>
							        <div class="ui-grid-col-7">
										<input 	type="text" 
											pInputText
											placeholder="Has the child diabetes?" 
											[(ngModel)]="ar$.diabetes"/>
							        </div>
								</div>
								<div class="ui-grid-row">
							        <div class="ui-grid-col-3">
										<label for="medication">Current Medication: </label>
							        </div>
							        <div class="ui-grid-col-7">
										<input 	type="text" 
											pInputText
											placeholder="Child's medication" 
											[(ngModel)]="ar$.medication"/>
							        </div>
								</div>
								<div class="ui-grid-row">
							        <div class="ui-grid-col-3">
										<label for="notes">Other information: </label>
							        </div>
							        <div class="ui-grid-col-7">
										<input 	type="text" 
											pInputText
											placeholder="Any other information" 
											[(ngModel)]="ar$.notes"/>
							        </div>
								</div>
								<div class="ui-grid-row">
							        <div class="ui-grid-col-3">
										<label for="mother">Mother's name: </label>
							        </div>
							        <div class="ui-grid-col-7">
										<input 	type="text" 
											pInputText
											placeholder="Mother's name?" 
											[(ngModel)]="ar$.mother"/>
							        </div>
								</div>
								<div class="ui-grid-row">
							        <div class="ui-grid-col-3">
										<label for="Father">Father's name: </label>
							        </div>
							        <div class="ui-grid-col-7">
										<input 	type="text" 
											pInputText
											placeholder="Father's name" 
											[(ngModel)]="ar$.father"/>
							        </div>
								</div>
								
								<!-- Leave a space -->
								<div class="ui-grid-row">
									<br />
								</div>
								
								<!-- Add check boxes for half or full payment and for 2nd child -->
								<div class="ui-grid-row">

								    <div class="ui-grid-col-1"><p-checkbox [(ngModel)]="ar$.generalConsent"></p-checkbox></div>
								    <div class="ui-grid-col-5">
								    	<label class="ui-widget" style="font-weight:normal;">
											We the parents of the above named child give our consent for him/her to participate in All 
											Avenue United Soccer Academy’s Coaching sessions, Organised Events, Blitz & Competitions etc. 
											In the unlikely event of an Accident I/We give our permission for our child to be given 
											immediate First Aid or taken to the nearest Hospital.
										</label>
									</div>
									
									<div class="ui-grid-col-1"></div>
									
									<div class="ui-grid-col-1"><p-checkbox [(ngModel)]="ar$.pictureConsent"></p-checkbox></div>
								    <div class="ui-grid-col-5">
								    	<label class="ui-widget" style="font-weight:normal;">
								    		I, the child's parent/guardian, give permission for the club to use our child's picture on 
								    		their website.
								    	</label>
								    </div>

							    </div>
				    
								<div class="ui-grid-row">
									<br /><br /><br />
								    
								    
								    <div class="ui-grid-col-1"><p-checkbox [(ngModel)]="ar$.singleTerm"></p-checkbox></div>
								    <div class="ui-grid-col-5">
								    	<label class="ui-widget" style="font-weight:normal;">
								    		Single term payment(half)
								    	</label>
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
					    <p-tabPanel header="Step 3: Payment" [disabled]="true">
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
            `],
	directives: [ TabView, TabPanel, Checkbox, Growl ]
	
})

export class AcademyRegistrationComponent {
	componentName:string = 'AcademyRegistrationComponent';
	logdepth:number = 4;
	msgs: Message[] = [];

	constructor( private lg$: LoggerService, private ar$: AcademyRegistrationService, private router: Router  ) {}
	
	ngOnInit() {
    	this.lg$.setLogHdr(this.logdepth, this.componentName);
        this.lg$.log("ngOnInit()");
	}

	submit()
	{
		var today = new Date();
		this.ar$.regDate = today.toDateString();
		
		if ( this.ar$.generalConsent !== true )
		{
			this.showConsenterror();
		} else
		{
			this.lg$.log("Firstname: " + this.ar$.firstname);	
			this.lg$.log("Surname: " + this.ar$.surname);
			this.lg$.log("email: " + this.ar$.email);
			this.lg$.log("dob: " + this.ar$.dob);
			this.lg$.log("phone1: " + this.ar$.phone1);
			this.lg$.log("phone2: " + this.ar$.phone2);
			this.lg$.log("allergies: " + this.ar$.allergies);
			this.lg$.log("asthma: " + this.ar$.asthma);
			this.lg$.log("diabetes: " + this.ar$.diabetes);
			this.lg$.log("medication: " + this.ar$.medication);
			this.lg$.log("notes: " + this.ar$.notes);
			this.lg$.log("regDate: " + this.ar$.regDate);
			this.lg$.log("mother: " + this.ar$.mother);
			this.lg$.log("father: " + this.ar$.father);
			this.lg$.log("generalConsent: " + this.ar$.generalConsent);
			this.lg$.log("pictureConsent: " + this.ar$.pictureConsent);
			this.router.navigate(['/academyPayment']);
		}
	}
	
	back()
	{
		this.lg$.log("-> back()");
		this.router.navigate(['/academyTandC']);
	}
	
	showConsenterror() {
    	this.lg$.log("----> showConsenterror()");
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Error:', detail:'You must give your consent for your child to participate to continue!'});
    }
	
}