import { Injectable }     from '@angular/core';
import { Inject }         from '@angular/core';
import { Http }           from '@angular/http';
import { Headers }        from '@angular/http';
import { RequestOptions } from '@angular/http';

import { LoggerService }  from '../services/logger.service';
import { CommonService }  from '../services/common.service';
import { ServerMode }     from '../dao/server-mode';
import { Booking }        from '../dao/booking';

@Injectable()
export class BookingService {
	firstname               : string;
	surname                 : string;
	email                   : string;
	phone                   : string;
    country                 : string;
	arrivalDate		        : string;
	departureDate	        : string;
	numberOfNights          : number;
	numberOfPeople	        : number;
	parking                 : number;
	vehicalReg              : string;
	totalCharge				: number;
	deposit                 : number;
	tandc                   : number;

    logdepth = 3;
    loghdr = "";
    serviceName = 'BookingService';
    
    constructor ( @Inject(Http) private lg$: LoggerService, private com$: CommonService, private _http: Http )
    //constructor ( @Inject(Http) private lg$: LoggerService, private _http: Http )
	{
		 
	}
    
    ngOnInit()
    {
    	//this.lg$.setLogHdr(this.logdepth, this.serviceName);
    }
	
	payPal()
	{
		console.log("[BookingService]-> payPal()");
		let body = JSON.stringify({amount:'110', currency_code: 'EUR'});
	    let headers = new Headers({ 'Content-Type': 'application/json' });
	    let options = new RequestOptions({ headers: headers });
	    
	    console.log("    |- Storing booking details to server..");
	    this.storeBookingDetails();
	    
	    console.log("    |- Calling http post to PayPal..");
	    let loc = 	'https://www.paypal.com/cgi-bin/webscr?' +
	    			'cmd=_s-xclick&' +
	    			//'hosted_button_id=L6R7Z8T7EBC4G';
	    			'hosted_button_id=9RMD69P5JPRNQ';
	    window.location.href = loc;
	}
	
	storeBookingDetails()
	{
		//this.logValues();
		
		var url = this.com$.getHome();
		console.log("-- home set to: " + url);
		
		let data = new Booking();		
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
		
		let headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    let options = new RequestOptions({ headers: headers });
		
	    console.log("-- posting booking to server..[" + url + '/booking' + "]");
		this._http.post(url + '/booking', 
				data, {headers:headers})
			.subscribe(
	            	data => console.log("POST of booking successfull"),
	            	error => this.handleError(error), //console.log("===> Error posting booking to server: " + error),
	            	() => console.log(" <=== POST of booking successfull <====")
	            );
	}
	
	sendEmailConfirmation()
	{
		console.log("[BookingService]-->sendEmailConfirmation()..");
		var url = this.com$.getHome();
		
		let data = new Booking();		
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
		
		let headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    let options = new RequestOptions({ headers: headers });
		
		this._http.post(url + '/confirmbooking', 
				data, {headers:headers})
			.subscribe(
	            	data => console.log("Confirmation email sent successfull"),
	            	error => console.log("===> Error sending confirmation email: " + error),
	            	() => console.log(" <=== Confirmation email sent successfull <====")
	            );
	}
	
	handleError(error)
	{
		console.log("===> Error posting booking to server: " + error);
		this.logValues();
	}
	
	logValues()
	{
		console.error(
				"BOOKING ERROR: There was an error adding the following to the database: [ " +
				"firstname: "+this.firstname + ", " +
				"surname:  "+this.surname + ", " +
				"email:  "+this.email + ", " +
				"phone:  "+this.phone + ", " +
				"country:  "+this.country + ", " +
				"arrivalDate:  "+this.arrivalDate + ", " +
				"departureDate:  "+this.departureDate + ", " +
				"numberOfNights:  "+this.numberOfNights + ", " +
				"numberOfPeople:  "+this.numberOfPeople + ", " +
				"parking:  "+this.parking + ", " +
				"vehicalReg:  "+this.vehicalReg + ", " +
				"totalCharge:  "+this.totalCharge + ", " +
				"deposit:  "+this.deposit + ", " +
				"tandc:  "+this.tandc + " ]"
				);
	}
		
	logValuesOLD()
	{
		console.log("Booking Details:");
		console.log("================================");
		console.log("firstname: "+this.firstname); 
		console.log("surname:  "+this.surname);
		console.log("email:  "+this.email);
		console.log("phone:  "+this.phone);
		console.log("country:  "+this.country);
		console.log("arrivalDate:  "+this.arrivalDate);
		console.log("departureDate:  "+this.departureDate);
		console.log("numberOfNights:  "+this.numberOfNights);
		console.log("numberOfPeople:  "+this.numberOfPeople);
		console.log("parking:  "+this.parking);
		console.log("vehicalReg:  "+this.vehicalReg);
		console.log("totalCharge:  "+this.totalCharge);
		console.log("deposit:  "+this.deposit);
		console.log("tandc:  "+this.tandc);
	}
	
	testIpn()
	{
		let params:string = "payment_type=instant&payment_date=Wed%20Jul%2013%202016%2015%3A58%3A27%20GMT+0100%20%28IST%29&payment_status=Completed&address_status=confirmed&payer_status=verified&first_name=John&last_name=Smith&payer_email=buyer@paypalsandbox.com&payer_id=TESTBUYERID01&address_name=John%20Smith&address_country=United%20States&address_country_code=US&address_zip=95131&address_state=CA&address_city=San%20Jose&address_street=123%20any%20street&business=seller@paypalsandbox.com&receiver_email=seller@paypalsandbox.com&receiver_id=seller@paypalsandbox.com&residence_country=US&item_name1=something&item_number1=AK-1234&tax=2.02&mc_currency=USD&mc_fee=0.44&mc_gross=12.34&mc_gross_1=12.34&mc_handling=2.06&mc_handling1=1.67&mc_shipping=3.02&mc_shipping1=1.02&txn_type=cart&txn_id=883854680&notify_version=2.1&custom=xyz123&invoice=abc1234&test_ipn=1&verify_sign=AFcWxV21C7fd0v3bYYYRCpSSRl31AeEncao9juvI7Xq0nFvvcOMm00CU";
		let url:string = "http://localhost:8080/clubRegisterApp/ipn";
		
		let headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    let options = new RequestOptions({ headers: headers });
		
	    console.log("*****--->> Sending IPN...");
		this._http.post(url + '?' + params, 
				null, {headers:headers})
			.subscribe(
	            	data => this.checkOKresp(data),
	            	error => console.log("===> Error sending IPN: " + error),
	            	() => console.log(" <=== IPN sent successfull <====")
	            );
	}
	
	checkOKresp(resp)
	{
		console.log("IPN Test: Got first response: " + resp );
	}

}