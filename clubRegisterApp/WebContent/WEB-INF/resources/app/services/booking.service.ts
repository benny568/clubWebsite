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
	    
	    let loc = '';
	    if ( this.deposit === 50 )
	    {
	    	loc = 	'https://www.paypal.com/cgi-bin/webscr?' +
	    			'cmd=_s-xclick&' +
	    			'hosted_button_id=V27T86UZWZ55C'; // €50
	    			//'hosted_button_id=9RMD69P5JPRNQ'; // €35
	    			//'hosted_button_id=9CQB2K78DC5DJ'; // 0.01 button
	    } else {
	    	loc = 	'https://www.paypal.com/cgi-bin/webscr?' +
			'cmd=_s-xclick&' +
			'hosted_button_id=9346WKJ6NSDHQ'; // €40
	    }
	    
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
		
		let headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    let options = new RequestOptions({ headers: headers });
		
//		this._http.post(url + '/confirmbooking', 
//				data, {headers:headers})
//			.subscribe(
//	            	data => console.log("Confirmation email sent successfull"),
//	            	error => console.log("===> Error sending confirmation email: " + error),
//	            	() => console.log(" <=== Confirmation email sent successfull <====")
//	            );
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
				"tandc:  " + this.tandc + " ]"
				);
	}
		
	logValuesOLD()
	{
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
	}
	
	testIpn()
	{
		let params:string = "charset=UTF-8&payer_email=odalybr@hotmail.com&receiver_email=treasurer@avenueunited.ie&address_country_code=IE"
							+ "&payer_status=verified&receiver_id=NDYSM5YGRVU2Y&address_state=Clare&item_number=&transaction_subject="
							+ "&address_name=Brendan O'Daly&address_status=confirmed&residence_country=IE&txn_id=0WE14547FT718715A"
							+ "&protection_eligibility=Eligible&payment_gross=&verify_sign=AcE2uah9fzGQIYibH799J4hdOjH.ANduMFrh6.iW-t0JOFCS2jDIcIKy"
							+ "&first_name=Brendan&payment_date=06:29:55 Jul 14, 2016 PDT&quantity=1&business=treasurer@avenueunited.ie"
							+ "&address_country=Ireland&payment_status=Completed&custom=&last_name=O'Daly&item_name=Testing&notify_version=3.8"
							+ "&mc_currency=EUR&address_city=Ennis&payment_type=instant&txn_type=web_accept&address_street=Reaskaun Larchill"
							+ "&payment_fee=&payer_id=CJ9WTRLB4Z6D6&address_zip=&mc_gross=0.01&mc_fee=0.01&ipn_track_id=a089ad032fd6";
		let url:string = "http://localhost:8080/clubRegisterApp/ipn";
		
		let headers = new Headers();
	    //headers.append('Content-Type', 'application/json');
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
		
		let url:string = "http://localhost:8080/clubRegisterApp/ipn";
		this._http.post( url, "VERIFIED", null )
			.subscribe(
	            	data => console.log("IPN VERIFICATION sent."),
	            	error => console.log("===> Error sending IPN VERIFICATION: " + error),
	            	() => console.log(" <=== IPN verified successfull <====")
	            );
	}

}