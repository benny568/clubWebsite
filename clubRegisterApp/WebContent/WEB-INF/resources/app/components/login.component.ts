import { Component }          from 'angular2/core';
import { FORM_DIRECTIVES }    from 'angular2/common';
import { SessionDataService } from '../services/session-data.service';

@Component({
	templateUrl: 'app/htmltemplates/login.component.html',
	directives: [ FORM_DIRECTIVES ]
})

export class LoginComponent {

	constructor( private _dataService: SessionDataService ) {}

	onSubmit(form: any): void {
		console.log('you submitted value:', form);
		
		this._dataService.authenticate( form.username, form.password );
	}

}