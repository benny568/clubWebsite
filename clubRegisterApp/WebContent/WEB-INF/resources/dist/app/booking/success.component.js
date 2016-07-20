System.register(['@angular/core', '@angular/router', '../services/logger.service', '../services/booking.service'], function(exports_1, context_1) {
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
    var core_1, router_1, logger_service_1, booking_service_1;
    var SuccessComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (booking_service_1_1) {
                booking_service_1 = booking_service_1_1;
            }],
        execute: function() {
            SuccessComponent = (function () {
                function SuccessComponent(lg$, bk$, router) {
                    this.lg$ = lg$;
                    this.bk$ = bk$;
                    this.router = router;
                    this.componentName = 'SuccessComponent';
                    this.logdepth = 5;
                }
                SuccessComponent.prototype.ngOnInit = function () {
                    this.lg$.setLogHdr(this.logdepth, this.componentName);
                    this.lg$.log("|- ngOnInit()");
                    this.lg$.log("   |- calling sendEmailConfirmation()");
                    //this.bk$.sendEmailConfirmation();
                    return;
                };
                SuccessComponent = __decorate([
                    core_1.Component({
                        template: "\n\t\t\t\t<div class=\"panel\">\n\t\t\t\t\t<div class=\"panel-heading avenue-heading\">\n\t\t\t\t\t\tThanks for your booking\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body avenue-body\">\n\t\t\t\t\t\tA confirmation email has been sent to the email you provided.<br /> \n\t\t\t\t\t\tAny queries should be directed to booking@avenueunited.ie<br />\n\t\t\t\t\t\tPlease present the email receipt on arrival as proof of your deposit.<br /><br />\n\t\t\t\t\t\tThank you from Avenue United\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t"
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService, booking_service_1.BookingService, router_1.Router])
                ], SuccessComponent);
                return SuccessComponent;
            }());
            exports_1("SuccessComponent", SuccessComponent);
        }
    }
});

//# sourceMappingURL=success.component.js.map
