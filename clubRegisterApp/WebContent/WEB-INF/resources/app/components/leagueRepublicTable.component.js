System.register(['@angular/core', '../services/session-data.service'], function(exports_1, context_1) {
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
    var core_1, session_data_service_1;
    var LeagueRepublicTable;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (session_data_service_1_1) {
                session_data_service_1 = session_data_service_1_1;
            }],
        execute: function() {
            LeagueRepublicTable = (function () {
                function LeagueRepublicTable(_dataService) {
                    this._dataService = _dataService;
                    this.className = 'LeagueRepublicTable';
                }
                LeagueRepublicTable.prototype.ngOnInit = function () {
                    console.log("### " + this.className + "-" + "ngOnInit()");
                    this.lrcode = this._dataService.dsCurrentTeam.lrcode;
                    console.log("### " + this.className + "-" + "ngOnInit(): lrcode is: " + this.lrcode);
                    if (window["numCodeSnippets"] == undefined) {
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
                LeagueRepublicTable = __decorate([
                    core_1.Component({
                        selector: 'lr-table',
                        template: '<div id=\"lrep{{lrcode}}\"></div>'
                    }), 
                    __metadata('design:paramtypes', [session_data_service_1.SessionDataService])
                ], LeagueRepublicTable);
                return LeagueRepublicTable;
            }());
            exports_1("LeagueRepublicTable", LeagueRepublicTable);
        }
    }
});
//# sourceMappingURL=leagueRepublicTable.component.js.map