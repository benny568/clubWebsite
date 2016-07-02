System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ServerMode;
    return {
        setters:[],
        execute: function() {
            ServerMode = (function () {
                function ServerMode() {
                    this.modes = { LOCAL: 0, REMOTE: 1 };
                    this.currentMode = this.modes.LOCAL;
                }
                ServerMode.prototype.getServerMode = function () {
                    return this.currentMode;
                };
                return ServerMode;
            }());
            exports_1("ServerMode", ServerMode);
        }
    }
});
//# sourceMappingURL=server-mode.js.map