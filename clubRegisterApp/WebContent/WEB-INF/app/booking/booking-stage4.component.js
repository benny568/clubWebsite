System.register(['@angular/core', '@angular/router', 'primeng/primeng', '../services/logger.service', '../services/booking.service'], function(exports_1, context_1) {
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
    var core_1, router_1, primeng_1, primeng_2, logger_service_1, booking_service_1;
    var BookingStage4Component;
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
            }],
        execute: function() {
            BookingStage4Component = (function () {
                function BookingStage4Component(lg$, bk$, router) {
                    this.lg$ = lg$;
                    this.bk$ = bk$;
                    this.router = router;
                    this.componentName = 'BookingStage4Component';
                    this.logdepth = 4;
                }
                BookingStage4Component.prototype.ngOnInit = function () {
                    this.lg$.setLogHdr(this.logdepth, this.componentName);
                    this.lg$.log("ngOnInit()");
                };
                BookingStage4Component.prototype.submit = function () {
                    this.lg$.log("---- Arrival Date: " + this.bk$.arrivalDate);
                    this.lg$.log("---- Departure Date: " + this.bk$.departureDate);
                    this.lg$.log("---- Number of People: " + this.bk$.numberOfPeople);
                    this.lg$.log("---- Car parking: " + this.bk$.parking);
                    //this.router.navigate(['/booking3']);
                };
                BookingStage4Component = __decorate([
                    core_1.Component({
                        //templateUrl: 'app/booking/booking-stage1.component.html',
                        template: "\n\t\t\t<div class=\"panel\">\n\t\t\t\t<div class=\"panel-heading avenue-heading\">\n\t\t\t\t\tStep 4: Payment\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body avenue-body\">\n\t\t\t\t\t<p-tabView orientation=\"left\" class=\"parent\">\n\t\t\t\t\t    <p-tabPanel header=\"Step 1: Dates\" [disabled]=\"true\">\n\t\t\t\t\t       Booking Step 1\n\t\t\t\t\t    </p-tabPanel>\n\t\t\t\t\t    <p-tabPanel header=\"Step 2: Parking\" [disabled]=\"true\">\n\t\t\t\t\t\t\tParking\n\t\t\t\t\t    </p-tabPanel>\n\t\t\t\t\t    <p-tabPanel header=\"Step 3: Contact Details\" [disabled]=\"true\">\n\t\t\t\t\t        Contact Details    \n\t\t\t\t\t    </p-tabPanel>\n\t\t\t\t\t    <p-tabPanel header=\"Step 4: Payment\" [selected]=\"true\">\n\t\t\t\t\t        Order summary:\n\t\t\t\t\t        <div style=\"border: 1px solid;\">\n\t\t\t\t\t        \t<table>\n\t\t\t\t\t        \t\t<tr>\n\t\t\t\t\t        \t\t\t<td>Name: </td>\n\t\t\t\t\t        \t\t\t<td>{{bk$.firstname}}&nbsp;{{bk$.surname}}<td>\n\t\t\t\t\t        \t\t</tr>\n\t\t\t\t\t        \t\t<tr>\n\t\t\t\t\t        \t\t\t<td>Email:&nbsp;</td>\n\t\t\t\t\t        \t\t\t<td>{{bk$.email}}<td>\n\t\t\t\t\t        \t\t</tr>\n\t\t\t\t\t        \t\t<tr>\n\t\t\t\t\t        \t\t\t<td>Phone:&nbsp;</td>\n\t\t\t\t\t        \t\t\t<td>{{bk$.phone}}<td>\n\t\t\t\t\t        \t\t</tr>\n\t\t\t\t\t        \t\t<tr>\n\t\t\t\t\t        \t\t\t<td>Car Reg:&nbsp;</td>\n\t\t\t\t\t        \t\t\t<td>{{bk$.vehicalReg}}<td>\n\t\t\t\t\t        \t\t</tr>\n\t\t\t\t\t        \t\t<tr>\n\t\t\t\t\t        \t\t\t<td>Arrival:&nbsp;</td>\n\t\t\t\t\t        \t\t\t<td>{{bk$.arrivalDate}}<td>\n\t\t\t\t\t        \t\t</tr>\n\t\t\t\t\t        \t\t<tr>\n\t\t\t\t\t        \t\t\t<td>Departure:&nbsp;</td>\n\t\t\t\t\t        \t\t\t<td>{{bk$.departureDate}}<td>\n\t\t\t\t\t        \t\t</tr>\n\t\t\t\t\t        \t\t<tr>\n\t\t\t\t\t        \t\t\t<td>People:&nbsp;</td>\n\t\t\t\t\t        \t\t\t<td>{{bk$.numberOfPeople}}<td>\n\t\t\t\t\t        \t\t</tr>\n\t\t\t\t\t        \t\t<tr>\n\t\t\t\t\t        \t\t\t<td>Parking:&nbsp;</td>\n\t\t\t\t\t        \t\t\t<td>{{bk$.parking}} cars<td>\n\t\t\t\t\t        \t\t</tr>\n\t\t\t\t\t        \t</table>\n\t\t\t\t\t       \t</div>\n\t\t\t\t\t       \t<br /><br />\n\t\t\t\t\t       \t<div style=\"float:left;\">\n\t\t\t\t\t       \t\tCost of deposit: \u20AC{{bk$.deposit}}\n\t\t\t\t\t       \t</div>\n\t\t\t\t\t       \t<div style=\"float:right;\">\n\t\t\t\t\t       \t\t<!-- <button type=\"button\" class=\"btn btn-warning btn-xs\"(click)=\"submit()\" style=\"float:right\">PayNow</button> -->\n\t\t\t\t\t       \t\t\n\t\t\t\t\t       \t\t<form action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_top\">\n\t\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\n\t\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"hosted_button_id\" value=\"KVVGZRYS32PVQ\">\n\t\t\t\t\t\t\t\t\t<input type=\"image\" src=\"https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif\" border=\"0\" name=\"submit\" alt=\"PayPal - The safer, easier way to pay online!\">\n\t\t\t\t\t\t\t\t\t<img alt=\"\" border=\"0\" src=\"https://www.paypalobjects.com/en_US/i/scr/pixel.gif\" width=\"1\" height=\"1\">\n\t\t\t\t\t\t\t\t</form>\n\n\t\t\t\t\t       \t\t\n\t\t\t\t\t       \t</div>\n\t\t\t\t\t    </p-tabPanel>\n\t\t\t\t\t</p-tabView>\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t",
                        styles: ["\n            img {\n\t\t\t\t    float: left;\n\t\t\t\t    margin: 0 20px 20px 0;\n\t\t\t\t}\n\t\t\t\t\n\t\t\tp {\n\t\t\t\ttext-align: justify;\n\t\t\t\ttext-indent: 2em;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t.center-me {\n\t\t\t  margin: 0 auto;\n\t\t\t}\n\t\t\t.parent {\n\t\t\t  position: relative;\n\t\t\t}\n\t\t\t.child {\n\t\t\t  position: absolute;\n\t\t\t  top: 50%;\n\t\t\t  transform: translateY(-10%);\n\t\t\t}\n            "],
                        directives: [primeng_1.TabView, primeng_2.TabPanel]
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService, booking_service_1.BookingService, router_1.Router])
                ], BookingStage4Component);
                return BookingStage4Component;
            }());
            exports_1("BookingStage4Component", BookingStage4Component);
        }
    }
});
//# sourceMappingURL=booking-stage4.component.js.map