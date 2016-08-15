import { Component }      from '@angular/core';

import {Dialog} from 'primeng/primeng';
import {Header} from 'primeng/primeng';
import {Footer} from 'primeng/primeng';
import {Button} from 'primeng/primeng';

@Component({
	selector: "instructions",
	template: `
				<div class="ContentSideSections Implementation">
				    <p-dialog 	header="Booking Instructions" 
								[(visible)]="display" 
								modal="modal" 
								showEffect="fade"
								responsive="true"
								minWidth="150"
								width="500" >
						<p>
							<strong>Up to 2-Night Stay: </strong>
							Price per night: €40 <br /><br />
							
							<strong>3-Night Stay or more: </strong>
							Price per night: €35 <br /><br />
							
							Includes: <br />
							1 x camping area for up to 2 people <br />
							1 x parking space <br />
						</p>
						<p>
							NOTE: <br />
							- €5 extra per person above 2 and up to 8 <br />
							- Extra parking space €5 per day
							- NO CAMPERVANS
						</p>
				        <p>There are four steps in the booking process:
				        	<br />1. Pick the dates you prefer and the number of people staying
				        	<br />2. Indicate if you require parking and the number of parking spaces
				        	<br />3. Provide your contact details
				        	<br />4. Pay the deposit (€50) via PayPal, <strong>Balance payable ON ARRIVAL.</strong></p>
				        	<!-- <br />4. Pay the deposit (50% of total) via PayPal, <strong>Balance payable ON ARRIVAL.</strong></p> -->
				        <footer>
				            <div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
				                <button type="button" pButton icon="fa-close" (click)="display=false" label="Close"></button>
				            </div>
				        </footer>
				    </p-dialog>
				    
				    <button type="text" (click)="showDialog()" pButton icon="fa-external-link-square" label="Booking Instructions"></button>
				    
				    <br /><br />
				</div>
				`,
	directives: [ Dialog, Header, Footer, Button ]
})

export class InstructionsComponent {
	

    display: boolean = false;

    showDialog() {
        this.display = true;
    }

}