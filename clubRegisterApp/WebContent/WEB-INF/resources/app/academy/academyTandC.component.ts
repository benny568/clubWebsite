import { Component }      from '@angular/core';
import { Router }         from '@angular/router';

import { TabView }        from 'primeng/primeng';
import { TabPanel }       from 'primeng/primeng';
import { Checkbox }       from 'primeng/primeng';
import { Growl }          from 'primeng/primeng';
import { Message }        from 'primeng/primeng';

import { LoggerService }  from '../services/logger.service';

@Component({
	template: `<div class="panel">
					<div class="panel-heading avenue-heading">
					Step 1: Read & agree to terms and conditions
				</div>
				<div class="panel-body avenue-body">
					<p-tabView orientation="left" class="parent">
					    <p-tabPanel header="Step 1: Terms & Conditions" [selected]="true">							    
							    
							    <div class="ui-grid ui-grid-responsive">

								<div class="ui-grid-row">
									<ul style="line-height:80%;list-style-type: circle;">
							        	<li>A Registration Form  must  be completed for each child attending.</li><br />
										<li>Forms / Fees can be paid from 9.30 – 10.00 in car park.</li><br />
										<li>A texting/email service will be used to keep people informed.</li><br />
										<li>No coaching on Bank Holiday weekends.</li><br />
										<li>Coaching commences at 09.30 sharp for one hour only.</li><br />
										<li>Children should be brought down to & collected from the all-weather pitch.</li><br />
										<li>Children should wear appropriate clothing for prevailing weather conditions.</li><br />
										<li>Shin Guards and water bottles are compulsory.</li> <br />
										<li>Football boots with plastic Studs only, velcro boots advisable.</li><br /> 
										<li>Blitzes will be organised throughout the season.</li><br />
										<li>Children must NOT be left unsupervised before or after Coaching.</li><br />
										<li>Compulsory Training Tops / Junior Club Kits must be worn and are available from 
										    Rochford's pharmacy.
										</li>
									</ul>
								</div>
							    <div class="ui-grid-row">
									<br /><br /><br />
								    <div class="ui-grid-col-1"><p-checkbox [(ngModel)]="tandc"></p-checkbox></div>
								    <div class="ui-grid-col-5"><label class="ui-widget">I accept T&C's</label></div>
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
					    <p-tabPanel header="Step 2: Registration Form" [disabled]="true">
					    	Parking
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
            `]
})

export class AcademyTandCComponent {
	
	componentName:string = 'AcademyRegistrationComponent';
	logdepth:number = 3;
	msgs: Message[] = [];
	tandc = false;
	
	constructor( private lg$: LoggerService, private router: Router  ) {}
	
	ngOnInit() {
    	this.lg$.setLogHdr(this.logdepth, this.componentName);
        this.lg$.log("ngOnInit()");
	}
	
	submit()
	{
		this.lg$.log( "tandc: " + this.tandc );
		
		if ( this.tandc !== true )
		{
			this.showTaCerror();
		} else
		{
			this.router.navigate(['/academyRegistration']);
		}
	}
	
	back()
	{
		this.lg$.log("-> back()");
		this.router.navigate(['']);
	}
	
	showTaCerror() {
    	this.lg$.log("----> showTaCerror()");
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Error:', detail:'You must accept the terms and conditions to continue!'});
    }
}