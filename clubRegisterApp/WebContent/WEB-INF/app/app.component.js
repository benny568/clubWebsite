System.register(['@angular/core', '@angular/router', './services/session-data.service', './services/logger.service'], function(exports_1, context_1) {
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
    var core_1, router_1, session_data_service_1, logger_service_1, core_2;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (session_data_service_1_1) {
                session_data_service_1 = session_data_service_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            core_2.enableProdMode();
            AppComponent = (function () {
                function AppComponent(lg$, d$) {
                    this.lg$ = lg$;
                    this.d$ = d$;
                    this.componentName = 'AppComponent';
                    this.logdepth = 0;
                    this.lg$.setLogHdr(this.logdepth, this.componentName);
                    this.lg$.log("constructor()");
                    // Load the teams to use in the menu system
                    this.d$.dsGetTeams();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/htmltemplates/nav.component.html',
                        styles: ["\n            .header\n            {\n                background-image: url(\"resources/images/banner.png\");\n                background-size: cover;\n                min-height:110px;\n                position:relative;\n                margin-top:5px;\n            }\n            .t2\n            {\n                position:absolute;\n                top:0px;\n                left:0px;\n                height:110px;\n            }\n            "],
                        //stylesUrl: '/app/styles/nav.component.css',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [logger_service_1.LoggerService]
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService, session_data_service_1.SessionDataService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map