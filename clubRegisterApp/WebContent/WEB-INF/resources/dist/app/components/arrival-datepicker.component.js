System.register(['@angular/core', '@angular/common', 'primeng/primeng', '../services/booking.service'], function(exports_1, context_1) {
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
    var core_1, common_1, primeng_1, booking_service_1;
    var ArrivalDatepickerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
            },
            function (booking_service_1_1) {
                booking_service_1 = booking_service_1_1;
            }],
        execute: function() {
            ArrivalDatepickerComponent = (function () {
                function ArrivalDatepickerComponent(bk$) {
                    this.bk$ = bk$;
                    console.log("==> ArrivalDatepickerComponent...");
                }
                ArrivalDatepickerComponent = __decorate([
                    core_1.Component({
                        selector: 'arrival-datepicker',
                        template: "\n\t<ui-widget>\n\t\t<ui-widget-content>\n\t\t\t<p-calendar [(ngModel)]=\"bk$.arrivalDate\" \n\t\t\t\t\t\tdateFormat=\"dd/mm/yy\"\n\t\t\t\t\t\thowAnim=\"slideDown\"\n\t\t\t\t\t\tplaceholder=\"Please pick arrival date\"\n\t\t\t\t\t\tshowIcon=\"true\"\n\t\t\t\t\t\tdefaultDate=\"17/08/16\"\n\t\t\t\t\t\tminDate=\"17/08/2016\"\n\t\t\t\t\t\tmaxDate=\"22/08/2016\"\n\t\t\t\t\t\t[readonlyInput]=\"true\"\n\t\t\t\t\t\t>\n\t\t\t</p-calendar>\n\t\t</ui-widget-content>\n\t</ui-widget>\t\n\t\t\t",
                        directives: [common_1.FORM_DIRECTIVES, primeng_1.Calendar]
                    }), 
                    __metadata('design:paramtypes', [booking_service_1.BookingService])
                ], ArrivalDatepickerComponent);
                return ArrivalDatepickerComponent;
            }());
            exports_1("ArrivalDatepickerComponent", ArrivalDatepickerComponent);
        }
    }
});

//# sourceMappingURL=arrival-datepicker.component.js.map
