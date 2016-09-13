import { Component }       from '@angular/core';
import { Router }          from '@angular/router';

import { TabView }         from 'primeng/primeng';
import { TabPanel }        from 'primeng/primeng';
import { Checkbox }        from 'primeng/primeng';
import { Growl }           from 'primeng/primeng';
import { Message }         from 'primeng/primeng';

import { LoggerService }   from '../services/logger.service';
import { CommonService }   from '../services/common.service';
import { AcademyRegistrationService }  from './academyRegistration.service';

@Component({
	template: `
			<div class="panel">
				<div class="panel-heading avenue-heading">
					Step 2: Registration Form
				</div>
				<div class="panel-body avenue-body">
					<p-tabView orientation="left" class="parent">
					    <p-tabPanel header="Step 1: Terms & Conditions" [disabled]="true">
					       Step 1: Read & agree to terms and conditions
					    </p-tabPanel>
					    <p-tabPanel header="Step 2: Registration Form" [selected]="true">
					    
					    	<div class="ui-grid ui-grid-responsive">
					    		<div *ngFor="let item of ar$.regData">

						    		<div class="ui-grid-row" *ngIf="(item.type==='text')&&(item.display)" style="margin-bottom:5px;">
						    			
						    			<div class="ui-grid-col-3">
											<label for="name">{{item.name}}: </label>
								        </div>
								        <div class="ui-grid-col-4">
											<input 	type="{{item.type}}" 
												pInputText
												placeholder="{{item.placeholder}}" 
												[(ngModel)]="item.value"/>
								        </div>
							        </div>

								    <div *ngIf="(item.type==='checkbox')&&(item.display)" style="margin-top:20px;">
								    	<div class="ui-grid-row"></div> <!-- Leave a space -->
								    	<div class="ui-grid-col-1"><p-checkbox [(ngModel)]="item.value"></p-checkbox></div>
								    	<div class="ui-grid-col-5">
									    	<label class="ui-widget" style="font-weight:normal;">
									    		{{item.placeholder}}
									    	</label>
									    </div>
								    </div>
					    		</div> <!-- ngFor loop -->

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

	constructor( private lg$: LoggerService, 
			     private com$: CommonService,
			     private ar$: AcademyRegistrationService, 
			     private router: Router  ) {}
	
	ngOnInit() {
    	this.lg$.setLogHdr(this.logdepth, this.componentName);
        this.lg$.log("ngOnInit()");
	}

	submit()
	{
		var today = new Date();
		this.ar$.setFieldValue( 'Registration Date', today.toDateString() );

		if ( !this.ar$.getFieldValue('General Consent') )
		{
			this.showConsenterror();
		
		} else if ( !this.com$.isEmpty( this.ar$.getFieldValue('First name') ) )
		{
			this.showFNError();
		} else if ( !this.com$.isEmpty( this.ar$.getFieldValue('Last name') ) )
		{
			this.showsSNError();
		} else if ( !this.com$.isValidEmail( this.ar$.getFieldValue('email') ) )
		{
			this.showEmailError();
		} else if ( !this.com$.isEmpty( this.ar$.getFieldValue('Date of Birth') ) )
		{
			this.showDOBError();
			
		} else if ( !this.com$.isValidPhone( this.ar$.getFieldValue('First contact number') ) )
		{
			this.showPhError();
			
		} else if ( !this.com$.isEmpty( this.ar$.getFieldValue('Allergy information') ) )
		{
			this.showInfoError();
			
		} else if ( !this.com$.isEmpty( this.ar$.getFieldValue('Asthma') ) )
		{
			this.showAsthmaError();
			
		} else if ( !this.com$.isEmpty( this.ar$.getFieldValue('Diabetes') ) )
		{
			this.showDiabetesError();
			
		} else if ( !this.com$.isEmpty( this.ar$.getFieldValue('Medication') ) )
		{
			this.showMedicationError();
			
		} else if ( !this.com$.isValidName( this.ar$.getFieldValue('Mother\'s Name') ) )
		{
			this.showMomError();
			
		} else if ( !this.com$.isValidName( this.ar$.getFieldValue('Father\'s name') ) )
		{
			this.showDadError();
			
		} else
		{
			this.ar$.logValues();
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
	
	showDOBError() {
    	this.lg$.log("----> showDOBError()");
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Error:', detail:'You must enter a valid date of birth!'});
    }
	
	showMomError() {
    	this.lg$.log("----> showMomError()");
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Error:', detail:'You must enter the child\'s Mother\'s name!'});
    }
	showDadError() 
	{
    	this.lg$.log("----> showDadError()");
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Error:', detail:'You must enter the child\'s Father\'s name!'});
    }
	
	showInfoError() 
	{
    	this.lg$.log("----> showInfoError()");
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Error:', detail:'Please enter any allergy information or state none if applicable.'});
    }
	showAsthmaError() 
	{
    	this.lg$.log("----> showInfoError()");
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Error:', detail:'Please idicate if your child has asthma.'});
    }
	showDiabetesError() 
	{
    	this.lg$.log("----> showInfoError()");
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Error:', detail:'Please idicate if your child has diabetes.'});
    }
	showMedicationError() 
	{
    	this.lg$.log("----> showInfoError()");
        this.msgs = [];
        this.msgs.push({	severity:'info', 
        					summary:'Error:', 
        					detail:'Please list any medication your child may need during academy sessions.'
        				});
    }
}