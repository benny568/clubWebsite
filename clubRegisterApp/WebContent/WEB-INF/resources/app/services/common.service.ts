import { Component }      from '@angular/core';
import { Injectable }     from '@angular/core';
import { Inject }         from '@angular/core';
import { ServerMode }     from '../dao/server-mode';


@Injectable()
export class CommonService {

    modes = { LOCAL:0, REMOTE:1};
    CurrentServerMode:number;

    logdepth = 3;
    loghdr = "";
    serviceName = 'CommonService';

     constructor () {

        var svr = new ServerMode();
        this.CurrentServerMode = svr.getServerMode();
     }

    /**********************************************************
     * Name:		getHome()
     * Description:	Returns the _home URL so that it can be used
     * 				as a local or remote app.
     * Scope:		Externally accessible
     * Params in:	none
     * Return:		_home URL
     **********************************************************/
    getHome() : string {
        var _home:string;

        if ( this.CurrentServerMode === this.modes.LOCAL )
        {
            _home = 'http://localhost:8080/clubRegisterApp';
        } else if ( this.CurrentServerMode === this.modes.REMOTE )
        {
            _home = 'http://www.avenueunited.ie';
        }

        return _home;
    }

}