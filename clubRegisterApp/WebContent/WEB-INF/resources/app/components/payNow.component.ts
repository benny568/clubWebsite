import { Component } from '@angular/core';
import { FORM_DIRECTIVES,  
	     FormBuilder,  
	     ControlGroup  } from '@angular/common';

@Component({
    //templateUrl: 'app/htmltemplates/payNow.component.html'
	template: `
			<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
				<input type="hidden" name="cmd" value="_xclick">
				<input type="hidden" name="business" value="treasurer@avenueunited.ie">
				<input type="hidden" name="lc" value="US">
				<input type="hidden" name="item_name" value="Deposit for camping">
				<input type="hidden" name="amount" value="15.00">
				<input type="hidden" name="currency_code" value="EUR">
				<input type="hidden" name="button_subtype" value="services">
				<input type="hidden" name="no_note" value="0">
				<input type="hidden" name="bn" value="PP-BuyNowBF:btn_paynowCC_LG.gif:NonHostedGuest">
				<input  type="image" 
						src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif" 
						border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" >
				<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
			</form>
	`
})

export class PayNowComponent {
	componentName = 'PayNowComponent';
	
	constructor( fb: FormBuilder ) { /* need constructor to inject the form builder */ }

    ngOnInit() {
        console.log("### " + this.componentName + "-> ngOnInit()");
    }

}