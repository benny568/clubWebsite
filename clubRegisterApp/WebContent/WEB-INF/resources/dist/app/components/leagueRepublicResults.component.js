System.register(['@angular/core', '../services/session-data.service', '../services/logger.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, session_data_service_1, logger_service_1;
    var LeagueRepublicResults;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (session_data_service_1_1) {
                session_data_service_1 = session_data_service_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            LeagueRepublicResults = (function () {
                function LeagueRepublicResults(_dataService, /*private rParams: RouteParams,*/ lg$) {
                    this._dataService = _dataService;
                    this.lg$ = lg$;
                    this.componentName = 'LeagueRepublicResults';
                    this.logdepth = 2;
                    this.lg$.setLogHdr(this.logdepth, this.componentName);
                }
                LeagueRepublicResults.prototype.ngOnInit = function () {
                    var teamName;
                    this.lg$.log("ngOnInit()");
                    teamName = ''; //this.rParams.get('team');
                    // (1) Read in the list of teams
                    this._dataService.dsGetTeams();
                    // (2) Set the current team to the one in question
                    this._dataService.setCurrentTeamByName(teamName);
                    this.lrcode = this._dataService.dsCurrentTeam.lrResultsCode;
                    this.lg$.log("-" + "ngOnInit(): lrResultsCode is: " + this.lrcode);
                    if (window["numCodeSnippets"] === undefined) {
                        window["numCodeSnippets"] = 1;
                    }
                    else {
                        window["numCodeSnippets"]++;
                    }
                    ;
                    if (window["numCodeSnippets"] <= 12) {
                        var randno = Math["random"]();
                        var el = document["createElement"]("script");
                        el["src"] = "http://api.leaguerepublic.com/l/js/cs1.html?cs=" + this.lrcode + "&random=" + randno;
                        el["type"] = "text/javascript";
                        document["getElementsByTagName"]("head")[0]["appendChild"](el);
                    }
                    ;
                };
                LeagueRepublicResults = __decorate([
                    core_1.Component({
                        selector: 'lr-results',
                        template: '<div id=\"lrep{{lrcode}}\"></div>'
                    }), 
                    __metadata('design:paramtypes', [session_data_service_1.SessionDataService, logger_service_1.LoggerService])
                ], LeagueRepublicResults);
                return LeagueRepublicResults;
            }());
            exports_1("LeagueRepublicResults", LeagueRepublicResults);
        }
    }
});

//# sourceMappingURL=leagueRepublicResults.component.js.map
