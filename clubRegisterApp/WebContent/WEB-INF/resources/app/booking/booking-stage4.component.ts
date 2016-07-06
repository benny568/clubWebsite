import { Component }      from '@angular/core';
import { Router }         from '@angular/router';

import {TabView} from 'primeng/primeng';
import {TabPanel} from 'primeng/primeng';

import { LoggerService }  from '../services/logger.service';
import { BookingService } from '../services/booking.service';

@Component({
	//templateUrl: 'app/booking/booking-stage1.component.html',
	template: `
			<div class="panel">
				<div class="panel-heading avenue-heading">
					Step 4: Payment
				</div>
				<div class="panel-body avenue-body">
					<p-tabView orientation="left" class="parent">
					    <p-tabPanel header="Step 1: Dates" [disabled]="true">
					       Booking Step 1
					    </p-tabPanel>
					    <p-tabPanel header="Step 2: Parking" [disabled]="true">
							Parking
					    </p-tabPanel>
					    <p-tabPanel header="Step 3: Contact Details" [disabled]="true">
					        Contact Details    
					    </p-tabPanel>
					    <p-tabPanel header="Step 4: Payment" [selected]="true">
					        Order summary:
					        <div style="border: 1px solid;">
					        	<table>
					        		<tr>
					        			<td>Name: </td>
					        			<td>{{bk$.firstname}}&nbsp;{{bk$.surname}}<td>
					        		</tr>
					        		<tr>
					        			<td>Email:&nbsp;</td>
					        			<td>{{bk$.email}}<td>
					        		</tr>
					        		<tr>
					        			<td>Phone:&nbsp;</td>
					        			<td>{{bk$.phone}}<td>
					        		</tr>
					        		<tr>
					        			<td>Car Reg:&nbsp;</td>
					        			<td>{{bk$.vehicalReg}}<td>
					        		</tr>
					        		<tr>
					        			<td>Arrival:&nbsp;</td>
					        			<td>{{bk$.arrivalDate}}<td>
					        		</tr>
					        		<tr>
					        			<td>Departure:&nbsp;</td>
					        			<td>{{bk$.departureDate}}<td>
					        		</tr>
					        		<tr>
					        			<td>Nights:&nbsp;</td>
					        			<td>{{bk$.numberOfNights}}<td>
					        		</tr>
					        		<tr>
					        			<td>People:&nbsp;</td>
					        			<td>{{bk$.numberOfPeople}}<td>
					        		</tr>
					        		<tr>
					        			<td>Parking:&nbsp;</td>
					        			<td>{{bk$.parking}} car<span *ngIf="(bk$.parking>1)">s</span><td>
					        		</tr>
					        	</table>
					       	</div>
					       	<br /><br />
					       	<div style="float:left;">
					       		<button type="button" class="btn btn-warning"(click)="back()">Back</button>
					       	</div>
					       	<div style="float:left;min-width:10px;overflow:hidden;">&nbsp;&nbsp;</div>
					       	<div style="float:left;">
					       		Total cost: €{{bk$.totalCharge}} <br />
					       		Cost of deposit (50%): €{{bk$.deposit}}
					       	</div>
					       	<div style="float:right;">
					       		<!-- <button type="button" class="btn btn-warning btn-xs"(click)="submit()" style="float:right">PayNow</button> -->
					       		
					       		<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
									<input type="hidden" name="cmd" value="_s-xclick">
									<input type="hidden" name="hosted_button_id" value="DL6F88H4B6V64">
									<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
									<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
								</form>


					       		
					       	</div>
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
	directives: [ TabView, TabPanel ]
	
})

export class BookingStage4Component{
	componentName:string = 'BookingStage4Component';
	logdepth:number = 4;

	constructor( private lg$: LoggerService, private bk$: BookingService, private router: Router  ) {}
	
	ngOnInit() {
    	this.lg$.setLogHdr(this.logdepth, this.componentName);
        this.lg$.log("ngOnInit()");
        
        // Total up the charge       
        this.calculateTotalCharge();
        
	}

	submit()
	{
		this.lg$.log("---- Arrival Date: "+ this.bk$.arrivalDate );
		this.lg$.log("---- Departure Date: "+ this.bk$.departureDate );
		this.lg$.log("---- Number of People: "+ this.bk$.numberOfPeople );
		this.lg$.log("---- Car parking: " + this.bk$.parking);
		//this.router.navigate(['/booking3']);
	}
	
	calculateTotalCharge()
	{
		// Total up the charge
        // (€35 * number of nights) +
        // (€5 for each additional person over 2) +
        // (
		let from:number = +(this.bk$.arrivalDate.slice(0,2));
		let to:number = +(this.bk$.departureDate.slice(0,2));
		this.bk$.numberOfNights = (to - from);
		let extraPeople:number = this.bk$.numberOfPeople - 2;
		let basic = 35 * this.bk$.numberOfNights;
		let extraPeopleFee:number = 0;
		let extraCarFee:number = 0;
		
		if( extraPeople > 0 )
			extraPeopleFee = extraPeople * 5 * this.bk$.numberOfNights; // €5 extra per night per extra person
		if( this.bk$.parking > 1 )
			extraCarFee = (this.bk$.parking - 1) * 5 * this.bk$.numberOfNights; // €5 extra per night per extra car
		
		this.bk$.totalCharge = basic + extraPeopleFee + extraCarFee;
		this.bk$.deposit = this.bk$.totalCharge/2;
		
		this.lg$.log("---- Total Charge: " + this.bk$.totalCharge);
	}
	
	back()
	{
		this.lg$.log("-> back()");
		this.router.navigate(['/booking3']);
	}
	
}