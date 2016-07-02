System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var LoggerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoggerService = (function () {
                function LoggerService() {
                }
                LoggerService.prototype.trace = function (msg) { console.log(this.loghdr + msg); };
                LoggerService.prototype.log = function (msg) { console.log(this.loghdr + msg); };
                LoggerService.prototype.error = function (msg) { console.error(this.loghdr + msg); };
                LoggerService.prototype.warn = function (msg) { console.warn(this.loghdr + msg); };
                /**********************************************************
                 * Name:		setLogHdr()
                 * Description:	Sets up the correct indentation and header
                 * 				information for the log messages.
                 * Scope:		Internal
                 * Params in:
                 * Return:
                 **********************************************************/
                LoggerService.prototype.setLogHdr = function (logdepth, moduleName) {
                    console.log("** [Logger Service] Setting log header for [" + moduleName + "]");
                    var i = 0;
                    var depth = logdepth * 4;
                    var moduleSpace = 25;
                    var hdr = "## " + moduleName;
                    // Make sure the field width is the standard, pad if necessary
                    if (hdr.length < moduleSpace) {
                        var diff = moduleSpace - hdr.length;
                        var i_1 = 0;
                        for (i_1 = 0; i_1 < diff; i_1++)
                            hdr += ' ';
                    }
                    // (1) Set the indentation according to the depth
                    for (i = 0; i < depth; i++) {
                        hdr += " ";
                    }
                    // (2) Add on call stack indicator
                    hdr += "|-";
                    this.loghdr = hdr;
                };
                LoggerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LoggerService);
                return LoggerService;
            }());
            exports_1("LoggerService", LoggerService);
        }
    }
});
//# sourceMappingURL=logger.service.js.map