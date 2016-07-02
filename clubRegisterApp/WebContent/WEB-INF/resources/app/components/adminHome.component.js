System.register(['@angular/core', '../services/session-data.service', "./news.component"], function(exports_1, context_1) {
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
    var core_1, session_data_service_1, news_component_1;
    var AdminHomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (session_data_service_1_1) {
                session_data_service_1 = session_data_service_1_1;
            },
            function (news_component_1_1) {
                news_component_1 = news_component_1_1;
            }],
        execute: function() {
            AdminHomeComponent = (function () {
                function AdminHomeComponent(_dataService) {
                    this._dataService = _dataService;
                    this.componentName = 'AdminHomeComponent';
                    this.logdepth = 2;
                    this.loghdr = "";
                    this.loghdr = this.setLogHdr(this.logdepth, this.componentName);
                    console.log(this.loghdr + "User is: " + this._dataService.dsCurrentUser.username);
                }
                /**********************************************************
                 * Name:		setLogHdr()
                 * Description:	Sets up the correct indentation and header
                 * 				information for the log messages.
                 * Scope:		Internal
                 * Params in:
                 * Return:
                 **********************************************************/
                AdminHomeComponent.prototype.setLogHdr = function (logdepth, moduleName) {
                    var i = 0;
                    var depth = logdepth * 4;
                    var hdr = "## " + moduleName;
                    // (1) Set the indentation according to the depth
                    for (i = 0; i < depth; i++) {
                        hdr += " ";
                    }
                    // (2) Add on call stack indicator
                    hdr += "|-";
                    return hdr;
                };
                AdminHomeComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/htmltemplates/adminHome.component.html',
                        directives: [news_component_1.NewsComponent]
                    }), 
                    __metadata('design:paramtypes', [session_data_service_1.SessionDataService])
                ], AdminHomeComponent);
                return AdminHomeComponent;
            }());
            exports_1("AdminHomeComponent", AdminHomeComponent);
        }
    }
});
//# sourceMappingURL=adminHome.component.js.map