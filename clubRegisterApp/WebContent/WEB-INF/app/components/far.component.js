System.register(['@angular/core', '../services/session-data.service', './leagueRepublicResults.component'], function(exports_1, context_1) {
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
    var core_1, session_data_service_1, leagueRepublicResults_component_1;
    var FarViewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (session_data_service_1_1) {
                session_data_service_1 = session_data_service_1_1;
            },
            function (leagueRepublicResults_component_1_1) {
                leagueRepublicResults_component_1 = leagueRepublicResults_component_1_1;
            }],
        execute: function() {
            FarViewComponent = (function () {
                function FarViewComponent(_dataService) {
                    this._dataService = _dataService;
                }
                FarViewComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/htmltemplates/far.component.html',
                        directives: [leagueRepublicResults_component_1.LeagueRepublicResults]
                    }), 
                    __metadata('design:paramtypes', [session_data_service_1.SessionDataService])
                ], FarViewComponent);
                return FarViewComponent;
            }());
            exports_1("FarViewComponent", FarViewComponent);
        }
    }
});
//# sourceMappingURL=far.component.js.map