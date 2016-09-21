import { Component }          from '@angular/core';
import { Router }             from '@angular/router';

import { SessionDataService } from '../services/session-data.service';
import { LoggerService }      from '../services/logger.service';

@Component({
	//templateUrl: 'app/htmltemplates/login.component.html',
	template: `
				<div class="container">
					<div class="loginbox">
						<div class="loginhead"><i class="glyphicon glyphicon-user" style="align:right;margin-right:0px;"></i> Please Login
						<div class="loginbody">
							<form #f="ngForm" (ngSubmit)="onSubmit(f.value)" >
								<input 	type="text" 
										name='j_username' 
										id="j_username" 
										ngControl="username" 
										placeholder="Username" 
										required />
								<input 	type="password" 
										name='j_password' 
										id="j_password" 
										ngControl="password" 
										placeholder="Password" 
										required />
								<input type="submit" value="Login Now">
								<!-- <button type="button" (click)="login(f.value)">Login Now</button> -->
							</form>
						</div> <!-- end loginbody -->
					</div> <!-- end loginbox -->
				</div>
	`
})

export class LoginComponent {

	componentName = 'LoginComponent'; 
	logdepth = 2;

	constructor( private lg$: LoggerService, private d$: SessionDataService, private _router: Router ) 
	{
		this.lg$.setLogHdr(this.logdepth, this.componentName);
	}
	
	login(user)
	{
		this.lg$.log("#### login() function called...");
		this.lg$.log("Username: " + user.username );
		this.lg$.log("Password: " + user.password );
	}


	onSubmit(form: any): void {
		this.lg$.log( "->onSubmit(): you submitted value:" + form);
		
		var subscriber = this.d$.authenticate( form.username, form.password );
		subscriber.subscribe(
								data => this.getUserDetails(form.username, data),
								err => console.log("ERROR: " + err)
								);
	}
	
	getUserDetails(username, data)
	{
		this.lg$.log("->getUserDetails(" + username + "): " + data );
		
		this.d$.dsCurrentUser.username = username;
		
		var subscriber = this.d$.getUser( username );
		subscriber.subscribe(
								data => this.d$.dsCurrentUser = data,
								err => console.log("ERROR: " + err),
								() => this.goToAdmin( username )
							);
	}
	
	goToAdmin( username )
	{
		this.lg$.log("->goToAdmin(" + username + ")" );
		this.d$.dsCurrentUser.username = username;
		this.d$.dsAuthenticated = true;
		this.lg$.log("######>>>>>> AUTHENTICATED: [" + this.d$.dsCurrentUser.username + "] <<<<<<#####");
		this.lg$.log("Authenticated: " + this.d$.dsAuthenticated );
		this._router.navigate( ['adminHome', {}] );
	}
	
}