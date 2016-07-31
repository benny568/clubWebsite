/**
 * Created by odalybr on 07/04/2016.
 */
import { Component }            from '@angular/core';

import { SessionDataService }   from '../services/session-data.service';
import { LoggerService }        from '../services/logger.service';

@Component({
    selector: 'lr-table',
    template: '<div id=\"lrep{{lrcode}}\"></div>',
    providers: [ LoggerService ]
})

export class LeagueRepublicTable {
	componentName:string = 'LeagueRepublicTable';
	logdepth:number = 3;
    lrcode:number;

    constructor(private lg$: LoggerService, public d$: SessionDataService) { this.lg$.setLogHdr(this.logdepth, this.componentName); }

    ngOnInit() {

        this.lg$.log("--> ngOnInit()");
        this.lrcode = this.d$.dsCurrentTeam.lrcode;
        this.lg$.log("--- ngOnInit(): lrcode is: " + this.lrcode);

        if ( window[ "numCodeSnippets" ] === undefined )
        {
            window[ "numCodeSnippets" ] = 1;
        } else
        {
            window[ "numCodeSnippets" ]++;
        };

        if ( window[ "numCodeSnippets" ] <= 12 )
        {
            var randno = Math[ "random" ]();
            var el = document[ "createElement" ]( "script" );
            el["src"] = "http://api.leaguerepublic.com/l/js/cs1.html?cs=" + this.lrcode + "&random=" + randno;
            el["type"] = "text/javascript";
            document["getElementsByTagName"]("head")[0]["appendChild"](el);
        };
    }
    
    ngDoCheck() {
        this.lg$.log("--> ngDoCheck()");
        this.lrcode = this.d$.dsCurrentTeam.lrcode;
        this.lg$.log("--- ngDoCheck(): lrcode is: " + this.lrcode);


    	var code = this.lrcode;
    	this.lg$.log("--- Code is: " + code);
        var randno = Math[ "random" ]();
        var el = document[ "createElement" ]( "script" );
        el["src"] = "http://api.leaguerepublic.com/l/js/cs1.html?cs=" + code + "&random=" + randno;
        el["type"] = "text/javascript";
        this.lg$.log("--- Element is: " + el);
        document["getElementsByTagName"]("head")[0]["appendChild"](el);
    }

}