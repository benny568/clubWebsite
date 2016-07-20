System.register(['@angular/core', '@angular/http', '../services/logger.service', '../services/common.service', '../dao/booking'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, core_2, http_1, http_2, http_3, logger_service_1, common_service_1, booking_1;
    var BookingService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
                http_3 = http_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (common_service_1_1) {
                common_service_1 = common_service_1_1;
            },
            function (booking_1_1) {
                booking_1 = booking_1_1;
            }],
        execute: function() {
            BookingService = (function () {
                function BookingService(lg$, com$, _http) {
                    this.lg$ = lg$;
                    this.com$ = com$;
                    this._http = _http;
                    this.logdepth = 3;
                    this.loghdr = "";
                    this.serviceName = 'BookingService';
                }
                BookingService.prototype.ngOnInit = function () {
                    //this.lg$.setLogHdr(this.logdepth, this.serviceName);
                };
                BookingService.prototype.payPal = function () {
                    console.log("[BookingService]-> payPal()");
                    var body = JSON.stringify({ amount: '110', currency_code: 'EUR' });
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_3.RequestOptions({ headers: headers });
                    console.log("    |- Storing booking details to server..");
                    this.storeBookingDetails();
                    console.log("    |- Calling http post to PayPal..");
                    var loc = 'https://www.paypal.com/cgi-bin/webscr?' +
                        'cmd=_s-xclick&' +
                        //'hosted_button_id=L6R7Z8T7EBC4G';
                        'hosted_button_id=9RMD69P5JPRNQ';
                    //'hosted_button_id=9CQB2K78DC5DJ'; // 0.01 button
                    window.location.href = loc;
                };
                BookingService.prototype.storeBookingDetails = function () {
                    //this.logValues();
                    var _this = this;
                    var url = this.com$.getHome();
                    console.log("-- home set to: " + url);
                    var data = new booking_1.Booking();
                    data.bookingid = 0;
                    data.firstname = this.firstname;
                    data.surname = this.surname;
                    data.email = this.email;
                    data.phone = this.phone;
                    data.country = this.country !== undefined ? this.country : 'None';
                    data.arrivalDate = this.arrivalDate;
                    data.departureDate = this.departureDate;
                    data.numberOfNights = this.numberOfNights;
                    data.numberOfPeople = this.numberOfPeople;
                    data.parking = this.parking;
                    data.vehicalReg = this.vehicalReg;
                    data.totalCharge = this.totalCharge;
                    data.deposit = this.deposit;
                    data.tandc = 1;
                    var headers = new http_2.Headers();
                    headers.append('Content-Type', 'application/json');
                    var options = new http_3.RequestOptions({ headers: headers });
                    console.log("-- posting booking to server..[" + url + '/booking' + "]");
                    this._http.post(url + '/booking', data, { headers: headers })
                        .subscribe(function (data) { return console.log("POST of booking successfull"); }, function (error) { return _this.handleError(error); }, //console.log("===> Error posting booking to server: " + error),
                    function () { return console.log(" <=== POST of booking successfull <===="); });
                };
                BookingService.prototype.sendEmailConfirmation = function () {
                    console.log("[BookingService]-->sendEmailConfirmation()..");
                    var url = this.com$.getHome();
                    var data = new booking_1.Booking();
                    data.bookingid = 0;
                    data.firstname = this.firstname;
                    data.surname = this.surname;
                    data.email = this.email;
                    data.phone = this.phone;
                    data.country = this.country !== undefined ? this.country : 'None';
                    data.arrivalDate = this.arrivalDate;
                    data.departureDate = this.departureDate;
                    data.numberOfNights = this.numberOfNights;
                    data.numberOfPeople = this.numberOfPeople;
                    data.parking = this.parking;
                    data.vehicalReg = this.vehicalReg;
                    data.totalCharge = this.totalCharge;
                    data.deposit = this.deposit;
                    data.tandc = 1;
                    console.log("[BookingService]-->sendEmailConfirmation() should be sending email with following details:");
                    console.log("Name: " + data.firstname + " " + data.surname);
                    console.log("email: " + data.email);
                    var headers = new http_2.Headers();
                    headers.append('Content-Type', 'application/json');
                    var options = new http_3.RequestOptions({ headers: headers });
                    //		this._http.post(url + '/confirmbooking', 
                    //				data, {headers:headers})
                    //			.subscribe(
                    //	            	data => console.log("Confirmation email sent successfull"),
                    //	            	error => console.log("===> Error sending confirmation email: " + error),
                    //	            	() => console.log(" <=== Confirmation email sent successfull <====")
                    //	            );
                };
                BookingService.prototype.handleError = function (error) {
                    console.log("===> Error posting booking to server: " + error);
                    this.logValues();
                };
                BookingService.prototype.logValues = function () {
                    console.error("BOOKING ERROR: There was an error adding the following to the database: [ " +
                        "firstname: " + this.firstname + ", " +
                        "surname:  " + this.surname + ", " +
                        "email:  " + this.email + ", " +
                        "phone:  " + this.phone + ", " +
                        "country:  " + this.country + ", " +
                        "arrivalDate:  " + this.arrivalDate + ", " +
                        "departureDate:  " + this.departureDate + ", " +
                        "numberOfNights:  " + this.numberOfNights + ", " +
                        "numberOfPeople:  " + this.numberOfPeople + ", " +
                        "parking:  " + this.parking + ", " +
                        "vehicalReg:  " + this.vehicalReg + ", " +
                        "totalCharge:  " + this.totalCharge + ", " +
                        "deposit:  " + this.deposit + ", " +
                        "tandc:  " + this.tandc + " ]");
                };
                BookingService.prototype.logValuesOLD = function () {
                    console.log("Booking Details:");
                    console.log("================================");
                    console.log("firstname: " + this.firstname);
                    console.log("surname:  " + this.surname);
                    console.log("email:  " + this.email);
                    console.log("phone:  " + this.phone);
                    console.log("country:  " + this.country);
                    console.log("arrivalDate:  " + this.arrivalDate);
                    console.log("departureDate:  " + this.departureDate);
                    console.log("numberOfNights:  " + this.numberOfNights);
                    console.log("numberOfPeople:  " + this.numberOfPeople);
                    console.log("parking:  " + this.parking);
                    console.log("vehicalReg:  " + this.vehicalReg);
                    console.log("totalCharge:  " + this.totalCharge);
                    console.log("deposit:  " + this.deposit);
                    console.log("tandc:  " + this.tandc);
                };
                BookingService.prototype.testIpn = function () {
                    var _this = this;
                    var params = "charset=UTF-8&payer_email=odalybr@hotmail.com&receiver_email=treasurer@avenueunited.ie&address_country_code=IE"
                        + "&payer_status=verified&receiver_id=NDYSM5YGRVU2Y&address_state=Clare&item_number=&transaction_subject="
                        + "&address_name=Brendan O'Daly&address_status=confirmed&residence_country=IE&txn_id=0WE14547FT718715A"
                        + "&protection_eligibility=Eligible&payment_gross=&verify_sign=AcE2uah9fzGQIYibH799J4hdOjH.ANduMFrh6.iW-t0JOFCS2jDIcIKy"
                        + "&first_name=Brendan&payment_date=06:29:55 Jul 14, 2016 PDT&quantity=1&business=treasurer@avenueunited.ie"
                        + "&address_country=Ireland&payment_status=Completed&custom=&last_name=O'Daly&item_name=Testing&notify_version=3.8"
                        + "&mc_currency=EUR&address_city=Ennis&payment_type=instant&txn_type=web_accept&address_street=Reaskaun Larchill"
                        + "&payment_fee=&payer_id=CJ9WTRLB4Z6D6&address_zip=&mc_gross=0.01&mc_fee=0.01&ipn_track_id=a089ad032fd6";
                    var url = "http://localhost:8080/clubRegisterApp/ipn";
                    var headers = new http_2.Headers();
                    //headers.append('Content-Type', 'application/json');
                    var options = new http_3.RequestOptions({ headers: headers });
                    console.log("*****--->> Sending IPN...");
                    this._http.post(url + '?' + params, null, { headers: headers })
                        .subscribe(function (data) { return _this.checkOKresp(data); }, function (error) { return console.log("===> Error sending IPN: " + error); }, function () { return console.log(" <=== IPN sent successfull <===="); });
                };
                BookingService.prototype.checkOKresp = function (resp) {
                    console.log("IPN Test: Got first response: " + resp);
                    var url = "http://localhost:8080/clubRegisterApp/ipn";
                    this._http.post(url, "VERIFIED", null)
                        .subscribe(function (data) { return console.log("IPN VERIFICATION sent."); }, function (error) { return console.log("===> Error sending IPN VERIFICATION: " + error); }, function () { return console.log(" <=== IPN verified successfull <===="); });
                };
                BookingService = __decorate([
                    core_1.Injectable(),
                    __param(0, core_2.Inject(http_1.Http)), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService, common_service_1.CommonService, http_1.Http])
                ], BookingService);
                return BookingService;
            }());
            exports_1("BookingService", BookingService);
        }
    }
});

//# sourceMappingURL=booking.service.js.map
