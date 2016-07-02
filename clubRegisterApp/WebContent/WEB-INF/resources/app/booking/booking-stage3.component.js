System.register(['@angular/core', '@angular/router', '@angular/common', 'primeng/primeng', '../services/logger.service', '../services/booking.service'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, primeng_1, primeng_2, logger_service_1, booking_service_1;
    var BookingStage3Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
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
            }],
        execute: function() {
            BookingStage3Component = (function () {
                function BookingStage3Component(lg$, bk$, router, fb) {
                    this.lg$ = lg$;
                    this.bk$ = bk$;
                    this.router = router;
                    this.componentName = 'BookingStage3Component';
                    this.logdepth = 4;
                    this.myForm = fb.group({
                        'firstname': ['', common_1.Validators.required],
                        'surname': ['', common_1.Validators.required],
                        'email': ['', common_1.Validators.required],
                        'phone': ['', common_1.Validators.required],
                        'vehicalReg': ['', common_1.Validators.required]
                    });
                    //		this.firstname = this.myForm.controls['firstname'];
                    //		
                    //		this.firstname.valuChanges.subscribe(
                    //				(value: string) => {console.log("Firstname changed to: " + value);}
                    //		);
                }
                BookingStage3Component.prototype.ngOnInit = function () {
                    this.lg$.setLogHdr(this.logdepth, this.componentName);
                    this.lg$.log("ngOnInit()");
                };
                BookingStage3Component.prototype.submit = function (value) {
                    this.bk$.firstname = value.firstname;
                    this.bk$.surname = value.surname;
                    this.bk$.email = value.email;
                    this.bk$.phone = value.phone;
                    this.bk$.vehicalReg = value.vehicalReg;
                    this.lg$.log("---- Arrival Date: " + this.bk$.arrivalDate);
                    this.lg$.log("---- Departure Date: " + this.bk$.departureDate);
                    this.lg$.log("---- Number of People: " + this.bk$.numberOfPeople);
                    this.lg$.log("---- Car parking: " + this.bk$.parking);
                    this.lg$.log("---- Firstname: " + this.bk$.firstname);
                    this.lg$.log("---- Surname: " + this.bk$.surname);
                    this.lg$.log("---- Email: " + this.bk$.email);
                    this.lg$.log("---- Phone: " + this.bk$.phone);
                    this.lg$.log("---- Car reg: " + this.bk$.vehicalReg);
                    this.router.navigate(['/booking4']);
                };
                BookingStage3Component = __decorate([
                    core_1.Component({
                        template: "\n\t\t\t<div class=\"panel\">\n\t\t\t\t<div class=\"panel-heading avenue-heading\">\n\t\t\t\t\tStep 3: Enter your Contact Details\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-xs\"(click)=\"submit(myForm.value)\" style=\"float:right\">Next</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body avenue-body\">\n\t\t\t\t\t<p-tabView orientation=\"left\" class=\"parent\">\n\t\t\t\t\t    <p-tabPanel header=\"Step 1: Dates\" [disabled]=\"true\">\n\t\t\t\t\t       Booking Step 1\n\t\t\t\t\t    </p-tabPanel>\n\t\t\t\t\t    <p-tabPanel header=\"Step 2: Parking\" [disabled]=\"true\">\n\t\t\t\t\t\t\tParking\n\t\t\t\t\t    </p-tabPanel>\n\t\t\t\t\t    <p-tabPanel header=\"Step 3: Contact Details\" [selected]=\"true\">\n\t\t\t\t\t    \tPlease enter your contact details....<br/><br/><br/>\n\t\t\t\t\t        <form [ngFormModel]=\"myForm\">\n\t\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td width=\"80px\">\n\t\t                                \t<label for=\"name\">First Name: </label>\n\t\t                                </td>\n\t\t                                <td width=\"70px\">\n\t\t\t                                <input type=\"text\"  \n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"firstname\"\n\t\t\t                                       placeholder=\"Enter your first name\"  \n\t\t\t                                       [ngFormControl]=\"myForm.controls['firstname']\" >\n\t\t                               </td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td width=\"80px\">\n\t\t                                \t<label for=\"name\">Surname: </label>\n\t\t                                </td>\n\t\t                                <td width=\"70px\">\n\t\t\t                                <input type=\"text\"  \n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"lastname\"\n\t\t\t                                       placeholder=\"Enter your surname\"  \n\t\t\t                                       [ngFormControl]=\"myForm.controls['surname']\" >\n\t\t                               </td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td width=\"80px\">\n\t\t                                \t<label for=\"name\">Email: </label>\n\t\t                                </td>\n\t\t                                <td width=\"70px\">\n\t\t\t                                <input type=\"email\"  \n\t\t\t                                       id=\"email\"  \n\t\t\t                                       placeholder=\"Enter your email\"  \n\t\t\t                                       [ngFormControl]=\"myForm.controls['email']\" >\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td width=\"80px\">\n\t\t                                <label for=\"name\">Mobile: </label>\n\t\t                                </td>\n\t\t                                <td width=\"70px\">\n\t\t                                <input type=\"text\"  \n\t\t                                       id=\"mobile\"  \n\t\t                                       placeholder=\"Enter your mobile number\"  \n\t\t                                       [ngFormControl]=\"myForm.controls['phone']\" >\n\t\t                               </td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td width=\"80px\">\n\t\t                                <label for=\"name\">Reg: </label>\n\t\t                                </td>\n\t\t                                <td width=\"70px\">\n\t\t                                <input type=\"text\"  \n\t\t                                       id=\"vehicalReg\"  \n\t\t                                       placeholder=\"Enter your car reg\"  \n\t\t                                       [ngFormControl]=\"myForm.controls['vehicalReg']\" >\n\t\t                               </td>\n                                    </tr>\n\t\t\t\t\t\t\t\t</table>\n                            </form>  \n\t\t\t\t\t    </p-tabPanel>\n\t\t\t\t\t    <p-tabPanel header=\"Step 4: Payment\" [disabled]=\"true\">\n\t\t\t\t\t       Payment\n\t\t\t\t\t    </p-tabPanel>\n\t\t\t\t\t</p-tabView>\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t",
                        styles: ["\n\n            "],
                        directives: [primeng_1.TabView, primeng_2.TabPanel, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService, booking_service_1.BookingService, router_1.Router, common_1.FormBuilder])
                ], BookingStage3Component);
                return BookingStage3Component;
            }());
            exports_1("BookingStage3Component", BookingStage3Component);
        }
    }
});
//# sourceMappingURL=booking-stage3.component.js.map