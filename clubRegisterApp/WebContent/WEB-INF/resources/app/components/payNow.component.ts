import { Component } from 'angular2/core';
import { FORM_DIRECTIVES,  
	     FormBuilder,  
	     ControlGroup  } from 'angular2/common';

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