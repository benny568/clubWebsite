System.register(['@angular/core', '@angular/router', 'primeng/primeng', '../services/logger.service', '../services/booking.service', './number-of-people-4parking.component'], function(exports_1, context_1) {
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
    var core_1, router_1, primeng_1, primeng_2, primeng_3, logger_service_1, booking_service_1, number_of_people_4parking_component_1;
    var BookingStage1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
                primeng_2 = primeng_1_1;
                primeng_3 = primeng_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (booking_service_1_1) {
                booking_service_1 = booking_service_1_1;
            },
            function (number_of_people_4parking_component_1_1) {
                number_of_people_4parking_component_1 = number_of_people_4parking_component_1_1;
            }],
        execute: function() {
            BookingStage1Component = (function () {
                function BookingStage1Component(lg$, bk$, router) {
                    this.lg$ = lg$;
                    this.bk$ = bk$;
                    this.router = router;
                    this.componentName = 'BookingStage1Component';
                    this.logdepth = 4;
                    this.parkingRequired = false;
                }
                BookingStage1Component.prototype.ngOnInit = function () {
                    this.lg$.setLogHdr(this.logdepth, this.componentName);
                    this.lg$.log("ngOnInit()");
                };
                BookingStage1Component.prototype.submit = function () {
                    this.lg$.log("---- parkingRequired: " + this.parkingRequired);
                    if (this.bk$.parking > 0) {
                        this.lg$.log("Updating the deposit amount, current: " + this.bk$.deposit + ", parking: " + this.bk$.parking);
                        this.bk$.deposit += this.bk$.parking * 10;
                    }
                    this.router.navigate(['/booking3']);
                };
                BookingStage1Component.prototype.back = function () {
                    this.lg$.log("-> back()");
                    this.router.navigate(['/fleadh']);
                };
                BookingStage1Component = __decorate([
                    core_1.Component({
                        template: "\n\t\t\t<div class=\"panel\">\n\t\t\t\t<div class=\"panel-heading avenue-heading\">\n\t\t\t\t\tStep 2: Parking\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-xs\"(click)=\"submit()\" style=\"float:right\">Next</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body avenue-body\">\n\t\t\t\t\t<p-tabView orientation=\"left\" class=\"parent\">\n\t\t\t\t\t    <p-tabPanel header=\"Step 1: Dates\" [disabled]=\"true\">\n\t\t\t\t\t       Booking Step 1\n\t\t\t\t\t    </p-tabPanel>\n\t\t\t\t\t    <p-tabPanel header=\"Step 2: Parking\" [selected]=\"true\">\n\t\t\t\t\t    \n\t\t\t\t\t    \t<div class=\"ui-grid ui-grid-responsive\">\n\n\t\t\t\t\t\t\t    <div class=\"ui-grid-row\">\n\t\t\t\t\t\t\t        <div class=\"ui-grid-col-12\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"resources/images/fleadh/parking.png\" width=\"100%\"/>\n\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t        <div class=\"ui-grid-col-12\">\n\t\t\t\t\t\t\t        \t<br /><br />\n\t\t\t\t\t\t\t        \t<div class=\"ui-grid-row\">\n\t\t\t\t\t\t\t        \t\t<div class=\"ui-grid-col-1\"><p-checkbox [(ngModel)]=\"parkingRequired\"></p-checkbox></div>\n\t\t\t\t\t\t\t        \t\t<div class=\"ui-grid-col-5\"><label class=\"ui-widget\">Parking Required</label></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t        \t<br />\n\t\t\t\t\t\t\t        \t<div class=\"ui-grid-row\" *ngIf=\"parkingRequired\">Please enter the number of parking spaces required:</div>\n\t\t\t\t\t\t\t        \t<br />\n\t\t\t\t\t\t\t        \t<div class=\"ui-grid-row\" *ngIf=\"parkingRequired\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-car\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t        \t&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t        \t<number-of-people-4parking></number-of-people-4parking>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t    <div class=\"ui-grid-row\" style=\"padding-top:50px;\">\n\t\t\t\t\t\t\t    \t<div class=\"ui-grid-col-12\">\n\t\t\t\t\t\t\t    \t\t<button type=\"button\" class=\"btn btn-warning\"(click)=\"back()\">Back</button>\n\t\t\t\t\t\t\t    \t</div>\n\t\t\t\t\t\t\t    \t<div class=\"ui-grid-col-12\"></div>\n\t\t\t\t\t\t\t    \t<div class=\"ui-grid-col-7\">\n\t\t\t\t\t\t\t    \t\t<button type=\"button\" class=\"btn btn-warning\"(click)=\"submit()\">Next</button>\n\t\t\t\t\t\t\t    \t</div>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t    \n\t\t\t\t\t    </p-tabPanel>\n\t\t\t\t\t    <p-tabPanel header=\"Step 3: Contact Details\" [disabled]=\"true\">\n\t\t\t\t\t        Content 3    \n\t\t\t\t\t    </p-tabPanel>\n\t\t\t\t\t    <p-tabPanel header=\"Step 4: Payment\" [disabled]=\"true\">\n\t\t\t\t\t        Payment    \n\t\t\t\t\t    </p-tabPanel>\n\t\t\t\t\t</p-tabView>\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t",
                        styles: ["\n            img {\n\t\t\t\t    float: left;\n\t\t\t\t    margin: 0 20px 20px 0;\n\t\t\t\t}\n\t\t\t\t\n\t\t\tp {\n\t\t\t\ttext-align: justify;\n\t\t\t\ttext-indent: 2em;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t.center-me {\n\t\t\t  margin: 0 auto;\n\t\t\t}\n\t\t\t.parent {\n\t\t\t  position: relative;\n\t\t\t}\n\t\t\t.child {\n\t\t\t  position: absolute;\n\t\t\t  top: 50%;\n\t\t\t  transform: translateY(-10%);\n\t\t\t}\n            "],
                        directives: [primeng_1.TabView, primeng_2.TabPanel, primeng_3.Checkbox, number_of_people_4parking_component_1.NumberOfPeople4ParkingComponent]
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService, booking_service_1.BookingService, router_1.Router])
                ], BookingStage1Component);
                return BookingStage1Component;
            }());
            exports_1("BookingStage1Component", BookingStage1Component);
        }
    }
});
//# sourceMappingURL=booking-stage1.component.js.map