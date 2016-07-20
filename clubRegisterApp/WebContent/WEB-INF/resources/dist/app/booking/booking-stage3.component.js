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
    var core_1, router_1, common_1, primeng_1, primeng_2, primeng_3, logger_service_1, booking_service_1;
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
                primeng_3 = primeng_1_1;
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
                    this.msgs = [];
                    this.myForm = fb.group({
                        'firstname': ['', common_1.Validators.required],
                        'surname': ['', common_1.Validators.required],
                        'email': ['', common_1.Validators.required],
                        'phone': ['', common_1.Validators.required],
                        'vehicalReg': ['', common_1.Validators.required]
                    });
                }
                BookingStage3Component.prototype.ngOnInit = function () {
                    this.lg$.setLogHdr(this.logdepth, this.componentName);
                    this.lg$.log("ngOnInit()");
                };
                BookingStage3Component.prototype.submit = function (value) {
                    if (!this.checkName(value.firstname)) {
                        this.showFNError();
                        return;
                    }
                    if (!this.checkName(value.surname)) {
                        this.showsSNError();
                        return;
                    }
                    if (!this.checkEmail(value.email)) {
                        this.showEmailError();
                        return;
                    }
                    if (!this.checkPh(value.phone)) {
                        this.showPhError();
                        return;
                    }
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
                BookingStage3Component.prototype.back = function () {
                    this.lg$.log("-> back()");
                    this.router.navigate(['/booking']);
                };
                BookingStage3Component.prototype.checkName = function (name) {
                    this.lg$.log("----> checkName(" + name + ")");
                    if ((name !== undefined) && (name !== '')) {
                        return /^\w+/.test(name);
                    }
                    else {
                        this.lg$.log("----> checkName(" + name + ") undefined or blank!");
                        return false;
                    }
                };
                BookingStage3Component.prototype.checkEmail = function (email) {
                    this.lg$.log("----> checkEmail(" + email + ")");
                    if ((email !== undefined) && (email !== '')) {
                        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(email);
                    }
                    else {
                        this.lg$.log("----> checkEmail(" + email + ") undefined or blank!");
                        return false;
                    }
                };
                BookingStage3Component.prototype.checkPh = function (phone) {
                    this.lg$.log("----> checkPh(" + phone + ")");
                    this.lg$.log("== " + /^\d{10}$/.test(phone));
                    this.lg$.log("== " + /^\+\d{12}$/.test(phone));
                    if ((phone !== undefined) && (phone !== '')) {
                        if ((/^\d{10}$/.test(phone)) || (/^\+\d{12}$/.test(phone))) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        this.lg$.log("----> checkPh(" + phone + ") undefined or blank!");
                        return false;
                    }
                };
                BookingStage3Component.prototype.showFNError = function () {
                    this.lg$.log("----> showFNError()");
                    this.msgs = [];
                    this.msgs.push({ severity: 'info', summary: 'Error:', detail: 'You must enter a valid first name!' });
                };
                BookingStage3Component.prototype.showsSNError = function () {
                    this.lg$.log("----> showSNError()");
                    this.msgs = [];
                    this.msgs.push({ severity: 'info', summary: 'Error:', detail: 'You must enter a valid surname!' });
                };
                BookingStage3Component.prototype.showEmailError = function () {
                    this.lg$.log("----> showEmailError()");
                    this.msgs = [];
                    this.msgs.push({ severity: 'info', summary: 'Error:', detail: 'You must enter a valid email address!' });
                };
                BookingStage3Component.prototype.showPhError = function () {
                    this.lg$.log("----> showPhError()");
                    this.msgs = [];
                    this.msgs.push({ severity: 'info', summary: 'Error:', detail: 'You must enter a valid phone number!' });
                };
                BookingStage3Component = __decorate([
                    core_1.Component({
                        template: "\n\t\t\t<div class=\"panel\">\n\t\t\t\t<div class=\"panel-heading avenue-heading\">\n\t\t\t\t\tStep 3: Enter your Contact Details\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body avenue-body\">\n\t\t\t\t\t<p-tabView orientation=\"left\" class=\"parent\">\n\t\t\t\t\t    <p-tabPanel header=\"Step 1: Dates\" [disabled]=\"true\">\n\t\t\t\t\t       Booking Step 1\n\t\t\t\t\t    </p-tabPanel>\n\t\t\t\t\t    <p-tabPanel header=\"Step 2: Parking\" [disabled]=\"true\">\n\t\t\t\t\t\t\tParking\n\t\t\t\t\t    </p-tabPanel>\n\t\t\t\t\t    <p-tabPanel header=\"Step 3: Contact Details\" [selected]=\"true\">\n\t\t\t\t\t    \tPlease enter your contact details....<br/><br/><br/>\n\t\t\t\t\t    \t\n\t\t\t\t\t    \t\n\t\t\t\t\t    \t <form [ngFormModel]=\"myForm\">\n\t\t\t\t\t    \t \n\t\t\t\t\t    \t \t<div class=\"ui-grid ui-grid-responsive\">\n\t\t\t\t\t\t\t\t    <div class=\"ui-grid-row\">\n\t\t\t\t\t\t\t\t        <div class=\"ui-grid-col-2\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"name\">First Name: </label>\n\t\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t\t        <div class=\"ui-grid-col-4\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  \n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"firstname\"\n\t\t\t                                       placeholder=\"Enter your first name\"  \n\t\t\t                                       [ngFormControl]=\"myForm.controls['firstname']\" >\n\t\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t    <br/>\n\t\t\t\t\t\t\t\t    <div class=\"ui-grid-row\">\n\t\t\t\t\t\t\t\t        <div class=\"ui-grid-col-2\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"name\">Surname: </label>\n\t\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t\t        <div class=\"ui-grid-col-4\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  \n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"lastname\"\n\t\t\t                                       placeholder=\"Enter your surname\"  \n\t\t\t                                       [ngFormControl]=\"myForm.controls['surname']\" >\n\t\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t    <br/>\n\t\t\t\t\t\t\t\t    <div class=\"ui-grid-row\">\n\t\t\t\t\t\t\t\t       <div class=\"ui-grid-col-2\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"name\">Email: </label>\n\t\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t\t        <div class=\"ui-grid-col-4\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\"  \n\t\t\t                                       id=\"email\"  \n\t\t\t                                       placeholder=\"Enter your email\"  \n\t\t\t                                       [ngFormControl]=\"myForm.controls['email']\" >\n\t\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t    <br/>\n\t\t\t\t\t\t\t\t    <div class=\"ui-grid-row\">\n\t\t\t\t\t\t\t\t        <div class=\"ui-grid-col-2\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"name\">Mobile: </label>\n\t\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t\t        <div class=\"ui-grid-col-4\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  \n\t\t                                       id=\"mobile\"  \n\t\t                                       placeholder=\"Enter your mobile number\"  \n\t\t                                       [ngFormControl]=\"myForm.controls['phone']\" >\n\t\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t    <br/>\n\t\t\t\t\t\t\t\t    <div class=\"ui-grid-row\">\n\t\t\t\t\t\t\t\t        <div class=\"ui-grid-col-2\">\n\t\t\t\t\t\t\t\t\t\t\t <label for=\"name\">Car Reg: </label>\n\t\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t\t        <div class=\"ui-grid-col-4\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  \n\t\t                                       id=\"vehicalReg\"  \n\t\t                                       placeholder=\"Enter your car reg\"  \n\t\t                                       [ngFormControl]=\"myForm.controls['vehicalReg']\" >\n\t\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t    <br/>\n\t\t\t\t\t\t\t\t    <div class=\"ui-grid-row\" style=\"padding-top:50px;\">\n\t\t\t\t\t\t\t\t    \t<div class=\"ui-grid-col-12\">\n\t\t\t\t\t\t\t\t    \t\t<button type=\"button\" class=\"btn btn-warning\"(click)=\"back()\">Back</button>\n\t\t\t\t\t\t\t\t    \t</div>\n\t\t\t\t\t\t\t\t    \t<div class=\"ui-grid-col-12\"></div>\n\t\t\t\t\t\t\t\t    \t<div class=\"ui-grid-col-7\">\n\t\t\t\t\t\t\t\t    \t\t<button type=\"button\" class=\"btn btn-warning\"(click)=\"submit(myForm.value)\">Next</button>\n\t\t\t\t\t\t\t\t    \t</div>\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t    \t \n\t\t\t\t\t    \t </form>\n\t\t\t\t\t\t\t\t    \n\t\t\t\t\t    </p-tabPanel>\n\t\t\t\t\t    <p-tabPanel header=\"Step 4: Payment\" [disabled]=\"true\">\n\t\t\t\t\t       Payment\n\t\t\t\t\t    </p-tabPanel>\n\t\t\t\t\t</p-tabView>\t\n\t\t\t\t</div>\n\t\t\t\t<p-growl [value]=\"msgs\" sticky=\"sticky\"></p-growl>\n\t\t\t</div>\n\t\t\t",
                        styles: ["\n\n            "],
                        directives: [primeng_1.TabView, primeng_2.TabPanel, primeng_3.Growl, common_1.FORM_DIRECTIVES]
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
