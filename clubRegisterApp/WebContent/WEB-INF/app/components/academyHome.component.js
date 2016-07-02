System.register(['@angular/core', "./academyMenu.component", "../services/session-data.service", "./news.component"], function(exports_1, context_1) {
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
    var core_1, academyMenu_component_1, session_data_service_1, news_component_1;
    var AcademyHomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (academyMenu_component_1_1) {
                academyMenu_component_1 = academyMenu_component_1_1;
            },
            function (session_data_service_1_1) {
                session_data_service_1 = session_data_service_1_1;
            },
            function (news_component_1_1) {
                news_component_1 = news_component_1_1;
            }],
        execute: function() {
            AcademyHomeComponent = (function () {
                function AcademyHomeComponent(_dataService) {
                    this._dataService = _dataService;
                }
                AcademyHomeComponent.prototype.ngOnInit = function () {
                    console.log("### AcademyHomeComponent -> ngOnInit()");
                    this._dataService.loadNewsStories();
                };
                AcademyHomeComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/htmltemplates/academyHome.component.html',
                        //stylesUrl: 'app/styles/academyHome.component.css',
                        directives: [academyMenu_component_1.AcademyMenuComponent, news_component_1.NewsComponent]
                    }), 
                    __metadata('design:paramtypes', [session_data_service_1.SessionDataService])
                ], AcademyHomeComponent);
                return AcademyHomeComponent;
            }());
            exports_1("AcademyHomeComponent", AcademyHomeComponent);
        }
    }
});
//# sourceMappingURL=academyHome.component.js.map