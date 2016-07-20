import { Component }      from '@angular/core';

import {Dialog} from 'primeng/primeng';
import {Header} from 'primeng/primeng';
import {Footer} from 'primeng/primeng';
import {Button} from 'primeng/primeng';

@Component({
	selector: "tandc",
	template: `
				<div class="ContentSideSections Implementation rightJust">
				    <p-dialog 	header="Terms & Conditions" 
								[(visible)]="display" 
								modal="modal" 
								showEffect="fade"
								responsive="true"
								minWidth="150"
								width="500"
								height="90%"
								responsive="true" >

							<h4>Fleadh Cheoil 2016, Camping at Avenue United FC</h4>
							
							
							Roslevan, Tulla Road, Ennis <br />
							Take exit 13 off Motorway, and you’re there!<br /><br />
							
							
							<h5>INFORMATION & RULES</h5>
														
							Campsite Opens 1pm on Wed August 17th<br />
							Tents & Cars only.   NO caravans or campervans, sorry.<br />
							
							STRICTLY NO GLASS BOTTLES ALLOWED ON SITE.&nbsp;NO noise after Midnight<br />
							
							Toilets & Showers are Provided.<br />
							
							Anyone under 18 MUST be accompanied by an adult<br />
							
							NO PETS (except guide / assistive dogs)<br />
							
							Balance must be paid on arrival. You will NOT be admitted until balance is paid.<br />
							No Sterling accepted for balance. EURO cash only.  No refunds for early departure.<br />
							
							No electrical connections are available. Bring plenty batteries!<br />
							
							STRICTLY NO GLASS BOTTLES ALLOWED ON SITE.  This is our soccer pitch where our kids play matches. 
							NO Glass means NO Glass. Plastic only. This WILL be enforced.<br />  
							
							You must be vacated by 1pm on Mon 22 Aug.<br />
							
							By booking you agree to the above conditions.<br /><br />
							
							
							We hope you enjoy your stay!

				        <footer>
				            <div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
				                <button type="button" pButton icon="fa-close" (click)="display=false" label="Close"></button>
				            </div>
				        </footer>
				    </p-dialog>
				    
				    <button type="text" (click)="showDialog()" pButton icon="fa-external-link-square" label="View Terms & Conditions"></button>
				    
				    <br /><br />
				</div>
				`,
	styles: [`.rightJust {
	         		float: left;
	         	}
	         `],
	directives: [ Dialog, Header, Footer, Button ]
})

export class TandCComponent {
	

    display: boolean = false;

    showDialog() {
        this.display = true;
    }

}