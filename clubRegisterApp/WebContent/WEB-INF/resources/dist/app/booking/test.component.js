System.register(['@angular/core', '../services/logger.service', '../services/booking.service'], function(exports_1, context_1) {
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
    var core_1, logger_service_1, booking_service_1;
    var TestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (booking_service_1_1) {
                booking_service_1 = booking_service_1_1;
            }],
        execute: function() {
            TestComponent = (function () {
                function TestComponent(lg$, bk$) {
                    this.lg$ = lg$;
                    this.bk$ = bk$;
                }
                TestComponent.prototype.send = function () {
                    this.bk$.testIpn();
                };
                TestComponent = __decorate([
                    core_1.Component({
                        selector: 'test-ipn',
                        template: "\n\t\t\t<form target=\"_new\" method=\"post\" action=\"http://localhost:8080/clubRegisterApp/ipn\">\n\t\t\t\n\t\t\t  <!-- code for other variables to be tested ... -->\n\t\t\t\n\t\t\t  <input type=\"submit\" (click)=\"send()\"/>\n\t\t\t</form>\n\t\t\t\n\t\t\t"
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService, booking_service_1.BookingService])
                ], TestComponent);
                return TestComponent;
            }());
            exports_1("TestComponent", TestComponent);
        }
    }
});

//# sourceMappingURL=test.component.js.map
