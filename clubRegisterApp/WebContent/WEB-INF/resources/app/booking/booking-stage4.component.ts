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
					        			<td>People:&nbsp;</td>
					        			<td>{{bk$.numberOfPeople}}<td>
					        		</tr>
					        		<tr>
					        			<td>Parking:&nbsp;</td>
					        			<td>{{bk$.parking}} cars<td>
					        		</tr>
					        	</table>
					       	</div>
					       	<br /><br />
					       	<div style="float:left;">
					       		Cost of deposit: €{{bk$.deposit}}
					       	</div>
					       	<div style="float:right;">
					       		<!-- <button type="button" class="btn btn-warning btn-xs"(click)="submit()" style="float:right">PayNow</button> -->
					       		
					       		<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
									<input type="hidden" name="cmd" value="_s-xclick">
									<input type="hidden" name="hosted_button_id" value="KVVGZRYS32PVQ">
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
	}

	submit()
	{
		this.lg$.log("---- Arrival Date: "+ this.bk$.arrivalDate );
		this.lg$.log("---- Departure Date: "+ this.bk$.departureDate );
		this.lg$.log("---- Number of People: "+ this.bk$.numberOfPeople );
		this.lg$.log("---- Car parking: " + this.bk$.parking);
		//this.router.navigate(['/booking3']);
	}
	
}