import { Component }      from '@angular/core';
import { Http }           from '@angular/http';
import { Headers }        from '@angular/http';
import { RequestOptions } from '@angular/http';

import { LoggerService }  from '../services/logger.service';
import { CommonService }  from '../services/common.service';
import { ServerMode }     from '../dao/server-mode';

@Component({
	
})

export class LogoutComponent {
	logdepth = 1;
    componentName = 'LogoutComponent';
    
    constructor(private lg$: LoggerService, private com$: CommonService, private _http: Http) {}
    
    onInit()
    {
    	this.lg$.setLogHdr(this.logdepth, this.componentName);
        this.lg$.log("ngOnInit() - logout");

		var url = this.com$.getHome();
		
		let headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    let options = new RequestOptions({ headers: headers });
	    
	    this._http.post(url + '/j_spring_security_logout', 
				null, {headers:headers})
			.subscribe(
	            	data => console.log("Logout successfull"),
	            	error => console.log("===> Error logging out: " + error),
	            	() => console.log("Logout successfull")
	            );
    }
}