import { Component }          from '@angular/core';
import { FORM_DIRECTIVES }    from '@angular/common';
import { Router }             from '@angular/router';
import { SessionDataService } from '../services/session-data.service';

@Component({
	//templateUrl: 'app/htmltemplates/login.component.html',
	template: `
				<div class="container">
					<div class="loginbox">
						<div class="loginhead"><i class="glyphicon glyphicon-user" style="align:right;margin-right:0px;"></i> Please Login
						<div class="loginbody">
							<form #f="ngForm" (ngSubmit)="onSubmit(f.value)" > <!-- action="<c:url value='j_spring_security_check' />" method='POST'> -->
								<input type="text" name='j_username' id="j_username" ngControl="username" placeholder="Username" required/>
								<input type="password" name='j_password' id="j_password" ngControl="password" placeholder="Password" required/>
								<input type="submit" value="Login Now">
							</form>
						</div> <!-- end loginbody -->
					</div> <!-- end loginbox -->
				</div>
	`,
	directives: [ FORM_DIRECTIVES ]
})

export class LoginComponent {

	componentName = 'LoginComponent'; 
	logdepth = 2;
	loghdr = "";

	constructor( private _dataService: SessionDataService, private _router: Router ) 
	{
		this.loghdr = this.setLogHdr(this.logdepth, this.componentName);
	}


	onSubmit(form: any): void {
		console.log(this.loghdr + "->onSubmit(): you submitted value:" + form);
		
		var subscriber = this._dataService.authenticate( form.username, form.password );
		subscriber.subscribe(
								data => this.getUserDetails(form.username, data),
								err => console.log("ERROR: " + err)
								);
	}
	
	getUserDetails(username, data)
	{
		console.log(this.loghdr + "->getUserDetails(" + username + "): " + data );
		
		this._dataService.dsCurrentUser.username = username;
		
		var subscriber = this._dataService.getUser( username );
		subscriber.subscribe(
								data => this._dataService.dsCurrentUser = data,
								err => console.log("ERROR: " + err),
								() => this.goToAdmin( username )
							);
	}
	
	goToAdmin( username )
	{
		console.log(this.loghdr + "->goToAdmin(" + username + ")" );
		this._dataService.dsCurrentUser.username = username;
		this._dataService.dsAuthenticated = true;
		console.log("######>>>>>> AUTHENTICATED: [" + this._dataService.dsCurrentUser.username + "] <<<<<<#####");
		console.log("Authenticated: " + this._dataService.dsAuthenticated );
		this._router.navigate( ['AdminHome', {}] );
	}
	
	
	/**********************************************************
     * Name:		setLogHdr()
     * Description:	Sets up the correct indentation and header
     * 				information for the log messages.
     * Scope:		Internal
     * Params in:	
     * Return:		 
     **********************************************************/
	setLogHdr(logdepth, moduleName)
	{
		let i = 0;
		let depth = logdepth * 4;
		let hdr:string = "## " +  moduleName;
	
		// (1) Set the indentation according to the depth
		for( i=0; i<depth; i++ )
		{
			hdr += " ";
		}
		
		// (2) Add on call stack indicator
		hdr += "|-";
		
		return hdr;
	}

}