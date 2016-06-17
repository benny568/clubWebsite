import { Component } from 'angular2/core';

@Component({
    templateUrl: 'app/htmltemplates/payNow.component.html'
})

export class PayNowComponent {
	componentName = 'PayNowComponent';

    ngOnInit() {
        console.log("### " + this.componentName + "-> ngOnInit()");
    }

}