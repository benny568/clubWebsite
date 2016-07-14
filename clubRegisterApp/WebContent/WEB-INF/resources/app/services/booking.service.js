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
                    data.country = this.country != undefined ? this.country : 'None';
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
                    data.country = this.country != undefined ? this.country : 'None';
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
                    this._http.post(url + '/confirmbooking', data, { headers: headers })
                        .subscribe(function (data) { return console.log("Confirmation email sent successfull"); }, function (error) { return console.log("===> Error sending confirmation email: " + error); }, function () { return console.log(" <=== Confirmation email sent successfull <===="); });
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
                    var params = "payment_type=instant&payment_date=Wed%20Jul%2013%202016%2015%3A58%3A27%20GMT+0100%20%28IST%29&payment_status=Completed&address_status=confirmed&payer_status=verified&first_name=John&last_name=Smith&payer_email=buyer@paypalsandbox.com&payer_id=TESTBUYERID01&address_name=John%20Smith&address_country=United%20States&address_country_code=US&address_zip=95131&address_state=CA&address_city=San%20Jose&address_street=123%20any%20street&business=seller@paypalsandbox.com&receiver_email=seller@paypalsandbox.com&receiver_id=seller@paypalsandbox.com&residence_country=US&item_name1=something&item_number1=AK-1234&tax=2.02&mc_currency=USD&mc_fee=0.44&mc_gross=12.34&mc_gross_1=12.34&mc_handling=2.06&mc_handling1=1.67&mc_shipping=3.02&mc_shipping1=1.02&txn_type=cart&txn_id=883854680&notify_version=2.1&custom=xyz123&invoice=abc1234&test_ipn=1&verify_sign=AFcWxV21C7fd0v3bYYYRCpSSRl31AeEncao9juvI7Xq0nFvvcOMm00CU";
                    var url = "http://localhost:8080/clubRegisterApp/ipn";
                    var headers = new http_2.Headers();
                    headers.append('Content-Type', 'application/json');
                    var options = new http_3.RequestOptions({ headers: headers });
                    console.log("*****--->> Sending IPN...");
                    this._http.post(url + '?' + params, null, { headers: headers })
                        .subscribe(function (data) { return _this.checkOKresp(data); }, function (error) { return console.log("===> Error sending IPN: " + error); }, function () { return console.log(" <=== IPN sent successfull <===="); });
                };
                BookingService.prototype.checkOKresp = function (resp) {
                    console.log("IPN Test: Got first response: " + resp);
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