System.register(['@angular/core', '../services/session-data.service', "./leagueRepublicTable.component"], function(exports_1, context_1) {
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
    var core_1, session_data_service_1, leagueRepublicTable_component_1;
    var ViewTeam;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (session_data_service_1_1) {
                session_data_service_1 = session_data_service_1_1;
            },
            function (leagueRepublicTable_component_1_1) {
                leagueRepublicTable_component_1 = leagueRepublicTable_component_1_1;
            }],
        execute: function() {
            ViewTeam = (function () {
                function ViewTeam(_dataService) {
                    this._dataService = _dataService;
                }
                ViewTeam = __decorate([
                    core_1.Component({
                        templateUrl: 'app/htmltemplates/viewTeam.component.html',
                        directives: [leagueRepublicTable_component_1.LeagueRepublicTable]
                    }), 
                    __metadata('design:paramtypes', [session_data_service_1.SessionDataService])
                ], ViewTeam);
                return ViewTeam;
            }());
            exports_1("ViewTeam", ViewTeam);
        }
    }
});
//# sourceMappingURL=viewTeam.component.js.map