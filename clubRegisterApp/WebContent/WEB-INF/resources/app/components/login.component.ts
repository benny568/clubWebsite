import { Component }          from 'angular2/core';
import { FORM_DIRECTIVES }    from 'angular2/common';
import { Router }             from 'angular2/router';
import { SessionDataService } from '../services/session-data.service';

@Component({
	templateUrl: 'app/htmltemplates/login.component.html',
	directives: [ FORM_DIRECTIVES ]
})

export class LoginComponent {

	constructor( private _dataService: SessionDataService, private _router: Router ) {}
	
	componentName:String = 'LoginComponent'; 
    loghdr:String = "     " + "|-" + this.componentName + ": ";


	onSubmit(form: any): void {
		console.log('you submitted value:', form);
		
		var subscriber = this._dataService.authenticate( form.username, form.password );
		subscriber.subscribe(
								data => this.goToAdmin(),
								err => console.log("ERROR: " + err),
								() => console.log('Authentication Complete')
								);
	}
	
	goToAdmin()
	{
		console.log("######>>>>>> AUTHENTICATED <<<<<<#####");
		this._router.navigate( ['AdminHome', {}] );
	}

}