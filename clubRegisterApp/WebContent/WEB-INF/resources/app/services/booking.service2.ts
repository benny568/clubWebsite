import { Injectable }     from '@angular/core';
import { Http }           from '@angular/http';
import { Headers }        from '@angular/http';
import { RequestOptions } from '@angular/http';

import { LoggerService }  from '../services/logger.service';
import { ServerMode }     from '../dao/server-mode';

@Injectable()
export class BookingService2 {
	arrivalDate		        : string;
	departureDate	        : string;
	numberOfNights          : number;
	numberOfPeople	        : number;
	parking                 : number;
	firstname               : string;
	surname                 : string;
	email                   : string;
	phone                   : string;
    country                 : string;
	vehicalReg              : string;
	deposit                 : number;
	totalCharge				: number;
	tandc                   : boolean;

	modes = { LOCAL:0, REMOTE:1};
	CurrentServerMode:number;

    logdepth = 3;
    loghdr = "";
    serviceName = 'BookingService';
    
	constructor ( private lg$: LoggerService, private _http: Http ) 
	{
		 this.lg$.setLogHdr(this.logdepth, this.serviceName);
		 
		 var svr = new ServerMode();
	     this.CurrentServerMode = svr.getServerMode();
		 
	}
	
	payPal()
	{
		this.lg$.log("-> payPal()");
		let body = JSON.stringify({});
	    let headers = new Headers({ 'Content-Type': 'application/json' });
	    let options = new RequestOptions({ headers: headers });
	    
		this._http.post('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DL6F88H4B6V64', body, options);
	}
	
    /**********************************************************
     * Name:		getHome()
     * Description:	Returns the _home URL so that it can be used
     * 				as a local or remote app.
     * Scope:		Externally accessible
     * Params in:	none
     * Return:		_home URL
     **********************************************************/
    getHome() : string
    {
        var _home:string;
        //log.debug(loghdr + "-> getHome()");
        if( this.CurrentServerMode == this.modes.LOCAL )
        {
            //log.debug(loghdr + "     | _home is LOCAL");
            _home = 'http://localhost:8080/clubRegisterApp';
            //_home = 'http://localhost:3000/';
        }
        else if( this.CurrentServerMode == this.modes.REMOTE )
        {
        	//log.debug(loghdr + "     | _home is REMOTE");
            _home = 'http://www.avenueunited.ie';
        }
        
        return _home;
    }
}