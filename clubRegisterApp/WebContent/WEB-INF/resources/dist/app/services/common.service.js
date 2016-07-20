System.register(['@angular/core', '../dao/server-mode'], function(exports_1, context_1) {
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
    var core_1, server_mode_1;
    var CommonService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (server_mode_1_1) {
                server_mode_1 = server_mode_1_1;
            }],
        execute: function() {
            CommonService = (function () {
                function CommonService() {
                    this.modes = { LOCAL: 0, REMOTE: 1 };
                    this.logdepth = 3;
                    this.loghdr = "";
                    this.serviceName = 'CommonService';
                    var svr = new server_mode_1.ServerMode();
                    this.CurrentServerMode = svr.getServerMode();
                }
                /**********************************************************
                 * Name:		getHome()
                 * Description:	Returns the _home URL so that it can be used
                 * 				as a local or remote app.
                 * Scope:		Externally accessible
                 * Params in:	none
                 * Return:		_home URL
                 **********************************************************/
                CommonService.prototype.getHome = function () {
                    var _home;
                    if (this.CurrentServerMode === this.modes.LOCAL) {
                        _home = 'http://localhost:8080/clubRegisterApp';
                    }
                    else if (this.CurrentServerMode === this.modes.REMOTE) {
                        _home = 'http://www.avenueunited.ie';
                    }
                    return _home;
                };
                CommonService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CommonService);
                return CommonService;
            }());
            exports_1("CommonService", CommonService);
        }
    }
});

//# sourceMappingURL=common.service.js.map
