System.register(['@angular/core', '@angular/common', '@angular/router', '../services/session-data.service'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, session_data_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (session_data_service_1_1) {
                session_data_service_1 = session_data_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_dataService, _router) {
                    this._dataService = _dataService;
                    this._router = _router;
                    this.componentName = 'LoginComponent';
                    this.logdepth = 2;
                    this.loghdr = "";
                    this.loghdr = this.setLogHdr(this.logdepth, this.componentName);
                }
                LoginComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    console.log(this.loghdr + "->onSubmit(): you submitted value:" + form);
                    var subscriber = this._dataService.authenticate(form.username, form.password);
                    subscriber.subscribe(function (data) { return _this.getUserDetails(form.username, data); }, function (err) { return console.log("ERROR: " + err); });
                };
                LoginComponent.prototype.getUserDetails = function (username, data) {
                    var _this = this;
                    console.log(this.loghdr + "->getUserDetails(" + username + "): " + data);
                    this._dataService.dsCurrentUser.username = username;
                    var subscriber = this._dataService.getUser(username);
                    subscriber.subscribe(function (data) { return _this._dataService.dsCurrentUser = data; }, function (err) { return console.log("ERROR: " + err); }, function () { return _this.goToAdmin(username); });
                };
                LoginComponent.prototype.goToAdmin = function (username) {
                    console.log(this.loghdr + "->goToAdmin(" + username + ")");
                    this._dataService.dsCurrentUser.username = username;
                    this._dataService.dsAuthenticated = true;
                    console.log("######>>>>>> AUTHENTICATED: [" + this._dataService.dsCurrentUser.username + "] <<<<<<#####");
                    console.log("Authenticated: " + this._dataService.dsAuthenticated);
                    this._router.navigate(['AdminHome', {}]);
                };
                /**********************************************************
                 * Name:		setLogHdr()
                 * Description:	Sets up the correct indentation and header
                 * 				information for the log messages.
                 * Scope:		Internal
                 * Params in:
                 * Return:
                 **********************************************************/
                LoginComponent.prototype.setLogHdr = function (logdepth, moduleName) {
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
                LoginComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/htmltemplates/login.component.html',
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [session_data_service_1.SessionDataService, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map