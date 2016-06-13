import { Component }       from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';

@Component({
	templateUrl: 'app/htmltemplates/login.component.html',
	directives: [ FORM_DIRECTIVES ]
})

export class LoginComponent {

	onSubmit(form: any): void {
		console.log('you submitted value:', form);
	}

}