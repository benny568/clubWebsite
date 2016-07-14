System.register(['@angular/core', '@angular/router', 'primeng/primeng', '../services/logger.service', '../services/booking.service', './arrival-datepicker.component', './departure-datepicker.component', './number-of-people.component', '../booking/instructions.component', '../booking/tandc.component'], function(exports_1, context_1) {
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
    var core_1, router_1, primeng_1, primeng_2, primeng_3, primeng_4, logger_service_1, booking_service_1, arrival_datepicker_component_1, departure_datepicker_component_1, number_of_people_component_1, instructions_component_1, tandc_component_1;
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
                primeng_3 = primeng_1_1;
                primeng_4 = primeng_1_1;
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
            },
            function (tandc_component_1_1) {
                tandc_component_1 = tandc_component_1_1;
            }],
        execute: function() {
            FleadhComponent = (function () {
                function FleadhComponent(lg$, bk$, router) {
                    this.lg$ = lg$;
                    this.bk$ = bk$;
                    this.router = router;
                    this.componentName = 'FleadhComponent';
                    this.logdepth = 4;
                    this.msgs = [];
                }
                FleadhComponent.prototype.ngOnInit = function () {
                    this.lg$.setLogHdr(this.logdepth, this.componentName);
                    this.lg$.log("ngOnInit()");
                };
                FleadhComponent.prototype.submit = function () {
                    // If user has not accepted T&C's go no further
                    if (!this.bk$.tandc) {
                        this.lg$.log("---- YOU MUST ACCEPT THE T&C'S TO CONTINUE ----");
                        this.showTCError();
                        return;
                    }
                    if ((this.bk$.arrivalDate != undefined) && (this.bk$.departureDate != undefined)) {
                        if ((this.bk$.arrivalDate != '') && (this.bk$.departureDate != '')) {
                            var from = +(this.bk$.arrivalDate.slice(0, 2));
                            var to = +(this.bk$.departureDate.slice(0, 2));
                            this.bk$.numberOfNights = (to - from);
                            this.lg$.log("---- Number of nights stay is: " + this.bk$.numberOfNights);
                            if (this.bk$.numberOfNights < 3) {
                                this.lg$.log("---- MINIMUM STAY 3 NIGHTS ----");
                                this.show3NError();
                                return;
                            }
                        }
                        else {
                            this.showDateError();
                            this.lg$.log("---- submit() called with start or end date empty!");
                            return;
                        }
                    }
                    else {
                        this.showDateError();
                        this.lg$.log("---- submit() called with start or end date undefined!");
                        return;
                    }
                    if ((this.bk$.numberOfPeople == undefined) || (this.bk$.numberOfPeople < 1)) {
                        this.lg$.log("---- YOU MUST INDICATE NUMBER OF PEOPLE ----");
                        this.showNPError();
                        return;
                    }
                    // If the user has pressed next then they need to pay camping deposit
                    this.bk$.deposit = 30;
                    // Log the details
                    this.lg$.log("---- Arrival Date: " + this.bk$.arrivalDate);
                    this.lg$.log("---- Departure Date: " + this.bk$.departureDate);
                    this.lg$.log("---- Number of People: " + this.bk$.numberOfPeople);
                    this.lg$.log("---- Car parking: " + this.bk$.parking);
                    this.lg$.log("---- T&C accepted: " + this.bk$.tandc);
                    this.router.navigate(['/booking']);
                };
                FleadhComponent.prototype.showTCError = function () {
                    this.lg$.log("----> showTCError()");
                    this.msgs = [];
                    this.msgs.push({ severity: 'info', summary: 'Error:', detail: 'You must accept the T&C\'s to continue!' });
                };
                FleadhComponent.prototype.show3NError = function () {
                    this.lg$.log("----> show3NError()");
                    this.msgs = [];
                    this.msgs.push({ severity: 'info', summary: 'Error:', detail: 'Minimum stay is 3 nights!' });
                };
                FleadhComponent.prototype.showDateError = function () {
                    this.lg$.log("----> showDateError()");
                    this.msgs = [];
                    this.msgs.push({ severity: 'info', summary: 'Error:', detail: 'Please enter start and end dates!' });
                };
                FleadhComponent.prototype.showNPError = function () {
                    this.lg$.log("----> showNPError()");
                    this.msgs = [];
                    this.msgs.push({ severity: 'info', summary: 'Error:', detail: 'Please enter the number of people staying!' });
                };
                FleadhComponent.prototype.clear = function () {
                    this.msgs = [];
                };
                FleadhComponent.prototype.back = function () {
                    this.lg$.log("-> back()");
                    this.router.navigate(['']);
                };
                FleadhComponent = __decorate([
                    core_1.Component({
                        template: "\n\t\t\t<div class=\"panel\">\n\t\t\t\t<div class=\"panel-heading avenue-heading\">\n\t\t\t\t\tStep 1: Choose your preferred dates\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body avenue-body\">\n\t\t\t\t\t<p-tabView orientation=\"left\" class=\"parent\">\n\t\t\t\t\t    <p-tabPanel header=\"Step 1: Dates\" [selected]=\"true\">\n\t\t\t\t\t    \t\n\t\t\t\t\t    \t<div class=\"ui-grid ui-grid-responsive\">\n\t\t\t\t\t\t\t    <div class=\"ui-grid-row\">\n\t\t\t\t\t\t\t        <div class=\"ui-grid-col-11\" style=\"width:50%;\"><tandc></tandc></div>\n\t\t\t\t\t\t\t        <div class=\"ui-grid-col-11\"><instructions></instructions></div>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t    <div class=\"ui-grid-row\">\n\t\t\t\t\t\t\t        <div class=\"ui-grid-col-1\"><p-checkbox [(ngModel)]=\"bk$.tandc\"></p-checkbox></div>\n\t\t\t\t\t\t\t        <div class=\"ui-grid-col-5\"><label class=\"ui-widget\">I accept T&C's</label></div>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t    <div class=\"ui-grid-row\">\n\t\t\t\t\t\t\t        <div class=\"ui-grid-col-12\">\n\t\t\t\t\t\t\t        \t<div class=\"ui-grid-row\">Arrival:</div>\n\t\t\t\t\t\t\t        \t<div class=\"ui-grid-row\"><arrival-datepicker></arrival-datepicker></div>\n\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t        <div class=\"ui-grid-col-12\">\n\t\t\t\t\t\t\t        \t<div class=\"ui-grid-row\">Departure:</div>\n\t\t\t\t\t\t\t        \t<div class=\"ui-grid-row\"><departure-datepicker></departure-datepicker></div>\n\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t        <div class=\"ui-grid-col-7\">\n\t\t\t\t\t\t\t        \t<div class=\"ui-grid-row\">Number of People:</div>\n\t\t\t\t\t\t\t        \t<div class=\"ui-grid-row\"><number-of-people></number-of-people></div>\n\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t    <div class=\"ui-grid-row\" style=\"padding-top:50px;\">\n\t\t\t\t\t\t\t    \t<div class=\"ui-grid-col-4\">\n\t\t\t\t\t\t\t    \t\t<button type=\"button\" class=\"btn btn-warning\"(click)=\"back()\">Back</button>\n\t\t\t\t\t\t\t    \t</div>\n\t\t\t\t\t\t\t    \t<div class=\"ui-grid-col-14\">\n\t\t\t\t\t\t\t    \t\tOur campsite on the Tulla Road is the ONLY Official Fleadh 2016 Campsite in Ennis.<br />\n\n\t\t\t\t\t\t\t\t\t\tOn site we have the Grove Bar & Restaurant, Off Licence, Supermarket, Takeaway & more!<br />\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\tWe are located just off EXIT 13 on the M18 Motorway for really easy access and exit.<br />\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\tWe will be serviced by the official Fleadh Shuttle Bus service to and from the town centre.<br />\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\tWe are the best and the cheapest option for Fleadh Camping, with plenty room for everyone!\n\t\t\t\t\t\t\t    \t</div>\n\t\t\t\t\t\t\t    \t<div class=\"ui-grid-col-7\">\n\t\t\t\t\t\t\t    \t\t<button type=\"button\" class=\"btn btn-warning\"(click)=\"submit()\">Next</button>\n\t\t\t\t\t\t\t    \t</div>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t    </p-tabPanel>\n\t\t\t\t\t    <p-tabPanel header=\"Step 2: Parking\" [disabled]=\"true\">\n\t\t\t\t\t    \tParking\n\t\t\t\t\t    </p-tabPanel>\n\t\t\t\t\t    <p-tabPanel header=\"Step 3: Contact Details\" [disabled]=\"true\">\n\t\t\t\t\t        Contact Details  \n\t\t\t\t\t    </p-tabPanel>\n\t\t\t\t\t    <p-tabPanel header=\"Step 4: Payment\" [disabled]=\"true\">\n\t\t\t\t\t        Payment    \n\t\t\t\t\t    </p-tabPanel>\n\t\t\t\t\t</p-tabView>\n\t\t\t\t\t<p-growl [value]=\"msgs\" sticky=\"sticky\"></p-growl>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t",
                        styles: ["\n            img {\n\t\t\t\t    float: left;\n\t\t\t\t    margin: 0 20px 20px 0;\n\t\t\t\t}\n\t\t\t\t\n\t\t\tp {\n\t\t\t\ttext-align: justify;\n\t\t\t\ttext-indent: 2em;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t.center-me {\n\t\t\t  margin: 0 auto;\n\t\t\t}\n\t\t\t.parent {\n\t\t\t  position: relative;\n\t\t\t}\n\t\t\t.child {\n\t\t\t  position: absolute;\n\t\t\t  top: 50%;\n\t\t\t  transform: translateY(-10%);\n\t\t\t}\n\t\t\t.datespace{\n\t            min-width:40px;\n\t        }\n            "],
                        directives: [primeng_1.TabView,
                            primeng_2.TabPanel,
                            primeng_3.Checkbox,
                            primeng_4.Growl,
                            arrival_datepicker_component_1.ArrivalDatepickerComponent,
                            departure_datepicker_component_1.DepartureDatepickerComponent,
                            number_of_people_component_1.NumberOfPeopleComponent,
                            instructions_component_1.InstructionsComponent,
                            tandc_component_1.TandCComponent]
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