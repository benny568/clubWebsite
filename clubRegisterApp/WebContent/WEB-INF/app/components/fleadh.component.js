System.register(['@angular/core', '@angular/router', 'primeng/primeng', '../services/logger.service', '../services/booking.service', './arrival-datepicker.component', './departure-datepicker.component', './number-of-people.component', '../booking/instructions.component'], function(exports_1, context_1) {
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
    var core_1, router_1, primeng_1, primeng_2, logger_service_1, booking_service_1, arrival_datepicker_component_1, departure_datepicker_component_1, number_of_people_component_1, instructions_component_1;
    var FleadhComponent;
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
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (booking_service_1_1) {
                booking_service_1 = booking_service_1_1;
            },
            function (arrival_datepicker_component_1_1) {
                arrival_datepicker_component_1 = arrival_datepicker_component_1_1;
            },
            function (departure_datepicker_component_1_1) {
                departure_datepicker_component_1 = departure_datepicker_component_1_1;
            },
            function (number_of_people_component_1_1) {
                number_of_people_component_1 = number_of_people_component_1_1;
            },
            function (instructions_component_1_1) {
                instructions_component_1 = instructions_component_1_1;
            }],
        execute: function() {
            FleadhComponent = (function () {
                function FleadhComponent(lg$, bk$, router) {
                    this.lg$ = lg$;
                    this.bk$ = bk$;
                    this.router = router;
                    this.componentName = 'FleadhComponent';
                    this.logdepth = 4;
                }
                FleadhComponent.prototype.ngOnInit = function () {
                    this.lg$.setLogHdr(this.logdepth, this.componentName);
                    this.lg$.log("ngOnInit()");
                };
                FleadhComponent.prototype.submit = function () {
                    // If the user has pressed next then they need to pay camping deposit
                    this.bk$.deposit = 30;
                    // Log the details
                    this.lg$.log("---- Arrival Date: " + this.bk$.arrivalDate);
                    this.lg$.log("---- Departure Date: " + this.bk$.departureDate);
                    this.lg$.log("---- Number of People: " + this.bk$.numberOfPeople);
                    this.lg$.log("---- Car parking: " + this.bk$.parking);
                    this.router.navigate(['/booking']);
                };
                FleadhComponent = __decorate([
                    core_1.Component({
                        template: "\n\t\t\t<div class=\"panel\">\n\t\t\t\t<div class=\"panel-heading avenue-heading\">\n\t\t\t\t\tStep 1: Choose your preferred dates\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-xs\"(click)=\"submit()\" style=\"float:right\">Next</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body avenue-body\">\n\t\t\t\t\t<p-tabView orientation=\"left\" class=\"parent\">\n\t\t\t\t\t    <p-tabPanel header=\"Step 1: Dates\" [selected]=\"true\">\n\t\t\t\t\t    \t<instructions></instructions>\n\t\t\t\t\t    \t<table>\n\t\t\t\t\t    \t\t<tr>\n\t\t\t\t\t    \t\t\t<td>Arrival:</td>\n\t\t\t\t\t    \t\t\t<td class=\"datespace\"></td>\n\t\t\t\t\t    \t\t\t<td>Departure:</td>\n\t\t\t\t\t    \t\t\t<td class=\"datespace\"></td>\n\t\t\t\t\t    \t\t\t<td>Number of People:</td>\n\t\t\t\t\t    \t\t</tr>\n\t\t\t\t\t    \t\t<tr>\n\t\t\t\t\t    \t\t\t<td><arrival-datepicker></arrival-datepicker></td>\n\t\t\t\t\t    \t\t\t<td class=\"datespace\"></td>\n\t\t\t\t\t    \t\t\t<td><departure-datepicker></departure-datepicker></td>\n\t\t\t\t\t    \t\t\t<td class=\"datespace\"></td>\n\t\t\t\t\t    \t\t\t<td align=\"center\"><number-of-people></number-of-people></td>\n\t\t\t\t\t    \t\t</tr>\n\t\t\t\t\t    \t</table>\n\t\t\t\t\t    </p-tabPanel>\n\t\t\t\t\t    <p-tabPanel header=\"Step 2: Parking\" [disabled]=\"true\">\n\t\t\t\t\t    \tParking\n\t\t\t\t\t    </p-tabPanel>\n\t\t\t\t\t    <p-tabPanel header=\"Step 3: Contact Details\" [disabled]=\"true\">\n\t\t\t\t\t        Contact Details  \n\t\t\t\t\t    </p-tabPanel>\n\t\t\t\t\t    <p-tabPanel header=\"Step 4: Payment\" [disabled]=\"true\">\n\t\t\t\t\t        Payment    \n\t\t\t\t\t    </p-tabPanel>\n\t\t\t\t\t</p-tabView>\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t",
                        styles: ["\n            img {\n\t\t\t\t    float: left;\n\t\t\t\t    margin: 0 20px 20px 0;\n\t\t\t\t}\n\t\t\t\t\n\t\t\tp {\n\t\t\t\ttext-align: justify;\n\t\t\t\ttext-indent: 2em;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t.center-me {\n\t\t\t  margin: 0 auto;\n\t\t\t}\n\t\t\t.parent {\n\t\t\t  position: relative;\n\t\t\t}\n\t\t\t.child {\n\t\t\t  position: absolute;\n\t\t\t  top: 50%;\n\t\t\t  transform: translateY(-10%);\n\t\t\t}\n\t\t\t.datespace{\n\t            min-width:40px;\n\t        }\n            "],
                        directives: [primeng_1.TabView,
                            primeng_2.TabPanel,
                            arrival_datepicker_component_1.ArrivalDatepickerComponent,
                            departure_datepicker_component_1.DepartureDatepickerComponent,
                            number_of_people_component_1.NumberOfPeopleComponent,
                            instructions_component_1.InstructionsComponent]
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService, booking_service_1.BookingService, router_1.Router])
                ], FleadhComponent);
                return FleadhComponent;
            }());
            exports_1("FleadhComponent", FleadhComponent);
        }
    }
});
//# sourceMappingURL=fleadh.component.js.map