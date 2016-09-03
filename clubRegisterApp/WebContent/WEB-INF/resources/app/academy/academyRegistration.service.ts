import { Injectable }     from '@angular/core';
import { Inject }         from '@angular/core';
import { Http }           from '@angular/http';
import { Headers }        from '@angular/http';
import { RequestOptions } from '@angular/http';

import { LoggerService }  from '../services/logger.service';
import { CommonService }  from '../services/common.service';
import { ServerMode }     from '../dao/server-mode';

@Injectable()
export class AcademyRegistrationService {
	academyId		: number;
	firstname 		: string;
	surname 		: string;
	email 			: string;
	dob				: string;
	phone1			: string;
	phone2			: string;
	allergies		: string;
	asthma			: string;
	diabetes		: string;
	medication		: string;
	notes			: string;
	regDate			: string;
	mother			: string;
	father			: string;
	singleTerm		: boolean;
	secondChildDiscount	: boolean;
	thirdChildDiscount	: boolean;
	payment				: number;
	generalConsent		: boolean;
	pictureConsent		: boolean;


    logdepth = 3;
    loghdr = "";
    serviceName = 'AcademyRegistrationService';
    
    constructor ( @Inject(Http) private lg$: LoggerService, private com$: CommonService, private _http: Http )
	{
		 
	}
    
    calculateTotalCost()
	{
		this.payment = this.singleTerm === true ? 60 : 120;
		
	}
    
    payPal()
	{
		console.log("[AcademyRegistrationService]-> payPal()");
		let body = JSON.stringify({amount:'110', currency_code: 'EUR'});
	    let headers = new Headers({ 'Content-Type': 'application/json' });
	    let options = new RequestOptions({ headers: headers });
	    
	    console.log("    |- Storing registration details to server..");
	    this.storeDetails();
	    
	    console.log("    |- Calling http post to PayPal..");
	    
	    let loc = '';
	    if ( this.singleTerm === true )
	    {
	    	loc = 	'https://www.paypal.com/cgi-bin/webscr?' +
	    			'cmd=_s-xclick&' +
	    			'hosted_button_id=GCXHLWUZ3X9MJ'; // €60
	    } else {
	    	loc = 	'https://www.paypal.com/cgi-bin/webscr?' +
			'cmd=_s-xclick&' +
			'hosted_button_id=SYRJF6N5A488G'; // €120
	    }
    
	    window.location.href = loc;
	}
    
	storeDetails()
	{
		this.logValues();
		
		var url = this.com$.getHome();
		console.log("-- home set to: " + url);
		
//		let headers = new Headers();
//	    headers.append('Content-Type', 'application/json');
//	    let options = new RequestOptions({ headers: headers });
//		
//	    console.log("-- posting booking to server..[" + url + '/booking' + "]");
//		this._http.post(url + '/booking', 
//				data, {headers:headers})
//			.subscribe(
//	            	data => console.log("POST of booking successfull"),
//	            	error => this.handleError(error), //console.log("===> Error posting booking to server: " + error),
//	            	() => console.log(" <=== POST of booking successfull <====")
//	            );
	}
	
	sendEmailConfirmation()
	{
		console.log("[BookingService]-->sendEmailConfirmation()..");
		var url = this.com$.getHome();
		
//		console.log("[BookingService]-->sendEmailConfirmation() should be sending email with following details:");
//		console.log("Name: " + data.firstname + " " + data.surname);
//		console.log("email: " + data.email);
//		
//		let headers = new Headers();
//	    headers.append('Content-Type', 'application/json');
//	    let options = new RequestOptions({ headers: headers });
		
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
		console.log("===> Error posting academy registration to server: " + error);
		this.logValues();
	}
	
	logValues()
	{
		console.log(
				"ACADEMY REGISTRATION: [ " +
				"Firstname: " + this.firstname + ", " +	
				"Surname: " + this.surname + ", " +
				"email: " + this.email + ", " +
				"dob: " + this.dob + ", " +
				"phone1: " + this.phone1 + ", " +
				"phone2: " + this.phone2 + ", " +
				"allergies: " + this.allergies + ", " +
				"asthma: " + this.asthma + ", " +
				"diabetes: " + this.diabetes + ", " +
				"medication: " + this.medication + ", " +
				"notes: " + this.notes + ", " +
				"regDate: " + this.regDate + ", " +
				"mother: " + this.mother + ", " +
				"father: " + this.father + ", " +
				"singleTerm: " + this.singleTerm + ", " +
				"secondChildDiscount: " + this.secondChildDiscount + ", " +
				"thirdChildDiscount: " + this.thirdChildDiscount + ", " +
				"generalConsent: " + this.generalConsent + ", " +
				"pictureConsent: " + this.pictureConsent + ", " +
				"payment: " + this.payment +
				" ]"
				);
	}
}