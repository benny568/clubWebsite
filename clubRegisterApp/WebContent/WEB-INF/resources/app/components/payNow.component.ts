import { Component } from '@angular/core';
import { FORM_DIRECTIVES,  
	     FormBuilder,  
	     ControlGroup  } from '@angular/common';

@Component({
    templateUrl: 'app/htmltemplates/payNow.component.html'
})

export class PayNowComponent {
	componentName = 'PayNowComponent';
	
	constructor( fb: FormBuilder ) {}

    ngOnInit() {
        console.log("### " + this.componentName + "-> ngOnInit()");
    }

}