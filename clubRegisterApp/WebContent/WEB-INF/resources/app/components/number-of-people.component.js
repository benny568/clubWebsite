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
    var NumberOfPeopleComponent;
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
            NumberOfPeopleComponent = (function () {
                function NumberOfPeopleComponent(bk$) {
                    this.bk$ = bk$;
                    console.log("==> NumberOfPeopleComponent...");
                }
                NumberOfPeopleComponent = __decorate([
                    core_1.Component({
                        selector: 'number-of-people',
                        template: "\n\n\t\t\t<p-spinner size=\"2\" \n\t\t\t           [(ngModel)]=\"bk$.numberOfPeople\" \n\t\t\t           [min]=\"1\" \n\t\t\t           [max]=\"16\" >\n\t\t\t</p-spinner>\n\n\t\t\t",
                        directives: [common_1.FORM_DIRECTIVES, primeng_1.Spinner]
                    }), 
                    __metadata('design:paramtypes', [booking_service_1.BookingService])
                ], NumberOfPeopleComponent);
                return NumberOfPeopleComponent;
            }());
            exports_1("NumberOfPeopleComponent", NumberOfPeopleComponent);
        }
    }
});
//# sourceMappingURL=number-of-people.component.js.map