/**
 * Created by odalybr on 08/04/2016.
 */
import { Component }            from '@angular/core';
//import { RouteParams }        from '@angular/router-deprecated';

import { SessionDataService }   from '../services/session-data.service';
import { LoggerService }        from '../services/logger.service';


@Component({
    selector: 'lr-results',
    template: '<div id=\"lrep{{lrcode}}\"></div>'
})

export class LeagueRepublicResults {

    lrcode:number;
    componentName:string = 'LeagueRepublicResults';
	logdepth:number = 2;

    constructor(private d$: SessionDataService, private lg$: LoggerService ) { }

    ngOnInit() {
    	this.lg$.setLogHdr(this.logdepth, this.componentName);

        this.lrcode = this.d$.dsCurrentTeam.lrResultsCode;
        this.lg$.log("### " + this.componentName + "-" + "ngOnInit(): lrResultsCode is: " + this.lrcode);

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
    
    ngDoCheck() 
    {
        this.lg$.log("--> ngDoCheck()");
        this.lrcode = this.d$.dsCurrentTeam.lrResultsCode;
        this.lg$.log("--- ngDoCheck(): lrResultsCode is: " + this.lrcode);


    	var code = this.lrcode;
    	this.lg$.log("--- Code is: " + code);
        var randno = Math[ "random" ]();
        var el = document[ "createElement" ]( "script" );
        el["src"] = "http://api.leaguerepublic.com/l/js/cs1.html?cs=" + this.lrcode + "&random=" + randno;
        el["type"] = "text/javascript";
        document["getElementsByTagName"]("head")[0]["appendChild"](el);
	}
}