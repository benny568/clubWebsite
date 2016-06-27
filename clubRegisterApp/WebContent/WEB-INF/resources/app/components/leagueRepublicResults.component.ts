/**
 * Created by odalybr on 08/04/2016.
 */
import { Component }            from 'angular2/core';
import { SessionDataService }   from '../services/session-data.service';
import { LoggerService }        from '../services/logger.service';
import {RouteParams}            from "angular2/router";
import {stringify}              from "angular2/src/upgrade/util";

@Component({
    selector: 'lr-results',
    template: '<div id=\"lrep{{lrcode}}\"></div>'
})

export class LeagueRepublicResults{

    lrcode:number;
    componentName:string = 'LeagueRepublicResults';
	logdepth:number = 2;

    constructor(private _dataService: SessionDataService, private rParams: RouteParams, private lg$: LoggerService ) 
    { 
    	this.lg$.setLogHdr(this.logdepth, this.componentName);
    }

    ngOnInit() {
        var teamName:string;

        this.lg$.log("ngOnInit()");

        teamName = this.rParams.get('team');

        // (1) Read in the list of teams
        this._dataService.dsGetTeams()
        .subscribe(
            	data => this._dataService.dsTeams = data,
            	error => this.lg$.error(" ** Error getting teams from server."),
            	() => this.lg$.log(" <=== Received teams from server. <===")
            );
        
        // (2) Set the current team to the one in question
        this._dataService.setCurrentTeamByName(teamName);

        this.lrcode = this._dataService.dsCurrentTeam.lrResultsCode;
        this.lg$.log("-" + "ngOnInit(): lrResultsCode is: " + this.lrcode);

        if( window[ "numCodeSnippets" ] == undefined )
        {
            window[ "numCodeSnippets" ] = 1;
        }
        else
        {
            window[ "numCodeSnippets" ]++;
        };

        if( window["numCodeSnippets"] <= 12 )
        {
            var randno = Math[ "random" ]();
            var el = document[ "createElement" ]( "script" );
            el["src"] = "http://api.leaguerepublic.com/l/js/cs1.html?cs=" + this.lrcode + "&random=" + randno;
            el["type"] = "text/javascript";
            document["getElementsByTagName"]("head")[0]["appendChild"](el);
        };
    }
}