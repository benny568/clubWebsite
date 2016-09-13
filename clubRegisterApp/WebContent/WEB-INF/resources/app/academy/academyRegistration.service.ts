import { Injectable }     from '@angular/core';
import { Inject }         from '@angular/core';
import { Http }           from '@angular/http';
import { Headers }        from '@angular/http';
import { RequestOptions } from '@angular/http';

import { LoggerService }  from '../services/logger.service';
import { CommonService }  from '../services/common.service';
import { ServerMode }     from '../dao/server-mode';
import { Member }         from '../dao/member';


@Injectable()
export class AcademyRegistrationService {
	member = new Member();
	payment: number;

	regData = [
	           { id: 0, name: 'First name', value: '', required: true, display: true, type: 'text', 
	        	 placeholder: "Childs first name" 
	           },
	           { id: 1, name: 'Last name', value: '', required: true, display: true, type: 'text', 
	        	 placeholder: "Childs last name" 
	        	},
	           { id: 2, name: 'email', value: 'email', required: true, display: true, type: 'text', 
		         placeholder: "Parent's email" },
	           { id: 3, name: 'Date of Birth', value: '', required: true, display: true, type: 'text', 
			     placeholder: "Childs birth date" },
	           { id: 4, name: 'First contact number', value: '', required: true, display: true, type: 'text', 
				 placeholder: "First Parent's number" },
	           { id: 5, name: 'Second contact number', value: '', required: true, display: true, type: 'text', 
				 placeholder: "Second Parent's number" },
	           { id: 6, name: 'Allergy information', value: '', required: true, display: true, type: 'text', 
				 placeholder: "Details on any allergies" },
	           { id: 7, name: 'Asthma', value: '', required: true, display: true, type: 'text', 
				 placeholder: "Has the child asthma?" },
	           { id: 8, name: 'Diabetes', value: '', required: true, display: true, type: 'text', 
				 placeholder: "Has the child diabetes?" },
	           { id: 9, name: 'Medication', value: '', required: true, display: true, type: 'text', 
				 placeholder: "Is the child on any medication?" },
	           { id: 10, name: 'Notes', value: '', required: false, display: true, type: 'text',
				 placeholder: 'Additional notes' },
	           { id: 11, name: 'Registration Date', value: '', required: true, display: false, type: 'text', 
	        	 placeholder: "Date of registration" },
	           { id: 12, name: 'Mother\'s Name', value: '', required: true, display: true, type: 'text', 
		         placeholder: "Mother's name" },
	           { id: 13, name: 'Father\'s name', value: '', required: true, display: true, type: 'text', 
			     placeholder: "Father's name" },
	           { id: 14, name: 'Single Term', value: false, required: false, display: true, type: 'checkbox', 
				 placeholder: "Half term payment" },
	           { id: 15, name: 'Second Child', value: false, required: false, display: true, type: 'checkbox', 
				 placeholder: "Discount for 2nd child" },
	           { id: 16, name: 'Third Child', value: false, required: false, display: false, type: 'checkbox', 
				 placeholder: "Discount for 3rd child" },
	           { id: 17, name: 'General Consent', value: false, required: true, display: true, type: 'checkbox', 
				 placeholder: "We the parents of the above named child give our consent for him/her to participate " +
				 		"in All Avenue United Soccer Academy’s Coaching sessions, Organised Events, Blitz & Competitions etc." +
				 		" In the unlikely event of an Accident I/We give our permission for our child to be given immediate " +
				 		"First Aid or taken to the nearest Hospital." },
	           { id: 18, name: 'Consent to take pictures', value: false, required: true, display: true, type: 'checkbox', 
				 placeholder: "I, the child's parent/guardian, give permission for the club to use our child's picture on their website." }
	           ];

    logdepth = 3;
    loghdr = "";
    serviceName = 'AcademyRegistrationService';
    
    constructor ( @Inject(Http) private lg$: LoggerService, private com$: CommonService, private _http: Http ) {}
    
    sortingHat( dob )
    {
    	let team = '';
    	let now = new Date();
    	let thisyear = now.getFullYear();
    	let birthdate = new Date(dob);
    	let birthyear = birthdate.getFullYear();
    	let birthday = birthdate.getDay();
    	let age = thisyear - birthyear;
    	let birthmonth = birthdate.getMonth() + 1; /* 0-11 so add 1 */
    	let thismonth = now.getMonth() + 1;
    	let thisday = now.getDay();
    	
    	if ( (thismonth > birthmonth) || ((thismonth === birthmonth) && (thisday >= birthday)) )
    	{
    		age++; /* add an extra year if it has gone past the birthday */
    	}
    	
    	switch ( age )
    	{
	    	case 10: team = 'U11'; break;
	    	case 9:  team = 'U10'; break;
	    	case 8:  team = 'U9';  break;
	    	case 7:  team = 'U8';  break;
	    	case 6:  team = 'U7';  break;
	    	case 5:
	    	case 4:  team = 'U6';  break;
	    	default: team = 'Unknown'; break;
    	}
    	
    	return team;
    }
    
    calculateTotalCost()
	{
    	console.log( "### Single Term: " + this.getFieldValue('Single Term') );
		this.payment = this.getFieldValue('Single Term') ? 60 : 120;		
	}
    
    getFieldValue( field )
    {
    	let value = '';
    	
    	let thisField = this.regData.find( function(item) {
    		return item.name === field;
    	});
    	if ( thisField !== undefined )
    	{
    		return thisField.value;
    	}
    }
    
    setFieldValue( field, value )
    {
    	let thisField = this.regData.find( function(item) {
    		return item.name === field;
    	});
    	if ( thisField !== undefined )
    	{
    		thisField.value = value;
    	}
    }
    
    payPal()
	{
		console.log("[AcademyRegistrationService]-> payPal()");
		let body = JSON.stringify({amount:'110', currency_code: 'EUR'});
	    let headers = new Headers({ 'Content-Type': 'application/json' });
	    let options = new RequestOptions({ headers: headers });
	    
	    console.log("    |- Storing registration details to server..");
	    this.convertToMember();
	    this.storeDetails( this.member );
	    
	    console.log("    |- Calling http post to PayPal..");
	    
	    let loc = '';
	    if ( this.regData[14].value === true ) /* Single Term */
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
    
	storeDetails( data )
	{
		this.logValues();
		
		var url = this.com$.getHome();
		console.log("-- home set to: " + url);
		
		let headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    let options = new RequestOptions({ headers: headers });
		
	    console.log("-- posting registration to server..[" + url + '/academyregistration' + "]");
		this._http.post(url + '/academyregistration', 
				data, {headers:headers})
			.subscribe(
	            	data => console.log("POST of academy registration successfull"),
	            	error => this.handleError(error), //console.log("===> Error posting booking to server: " + error),
	            	() => this.sendEmailConfirmation()
	            );
	}
	
	convertToMember()
	{	
		console.log("    |- ->convertToMember()");
		this.member.name 		= this.regData[0].value + " " + this.regData[1].value;
		this.member.address		= "";
		this.member.phone 		= String(this.regData[4].value);
		this.member.phone2		= String(this.regData[5].value);
		this.member.dob			= String(this.regData[3].value);
		this.member.email		= String(this.regData[2].value);
		this.member.amount		= this.payment;
		this.member.receiptid	= ""; // TODO: generate this
		this.member.team		= 0; // TODO: this.sortingHat();
		this.member.team2		= 0;
		this.member.team3		= 0;
		this.member.position	= 0;
		this.member.position2	= 0;
		this.member.position3	= 0;
		this.member.lid			= 0;
		this.member.favteam		= '';
		this.member.favplayer	= '';
		this.member.sappears	= 0;
		this.member.sassists	= 0;
		this.member.sgoals		= 0;
		this.member.photo		= 'resources/images/Players/default.png';
		this.member.achievements = '';
		this.member.status		= '';
		this.member.academyinfo = this.regData[11].name  + ": " +  /* Registration Date */
		                          this.regData[11].value + ", " +
			                      this.regData[12].name  + ": " +  /* Mother's name */
		  						  this.regData[12].value + ", " +
		  						  this.regData[13].name  + ": " +  /* Father's name */
								  this.regData[13].value + ", " +
								  this.regData[6].name  + ": " +   /* Allergy information */
								  this.regData[6].value + ", " +
								  this.regData[7].name  + ": " +   /* Asthma */
								  this.regData[7].value + ", " +
								  this.regData[8].name  + ": " +   /* Diabetes */
								  this.regData[8].value + ", " +
								  this.regData[9].name  + ": " +   /* Medication */
								  this.regData[9].value + ", " +
								  this.regData[10].name  + ": " +  /* Notes */
								  this.regData[10].value;
		
		this.logMember();
		console.log("    |- <-convertToMember()");
	}
	
	sendEmailConfirmation()
	{
		console.log("[AcademyRegistrationService]-->sendEmailConfirmation()..");
		var url = this.com$.getHome();
		
		let headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    let options = new RequestOptions({ headers: headers });
		
		this._http.post(url + '/confirmregistration', 
				this.member, {headers:headers})
			.subscribe(
	            	data => console.log("Confirmation email sent successfull"),
	            	error => console.log("===> Error sending confirmation email: " + error),
	            	() => console.log(" <=== Confirmation email sent successfull <====")
	            );
	}
	
	handleError(error)
	{
		console.log("===> Error posting academy registration to server: " + error);
		this.logValues();
	}
	
	logValues()
	{
		var logStr = "ACADEMY REGISTRATION: [ ";
		for ( var i = 0; i < this.regData.length; i++ )
		{
			logStr += this.regData[i].name + ": " + this.regData[i].value;
			if ( i < this.regData.length )
			{
				logStr += ", ";
			}
		}
		console.log(logStr);
	}
	
	logMember()
	{
		console.log("    |-    | ->logMember()");
		console.log("    |-    | -- Name: " + this.member.name );
		console.log("    |-    | -- Address: " + this.member.address );
		console.log("    |-    | -- Phone: " + this.member.phone );
		console.log("    |-    | -- Phone2: " + this.member.phone2 );
		console.log("    |-    | -- dob: " + this.member.dob );
		console.log("    |-    | -- email: " + this.member.email );
		console.log("    |-    | -- Amount: " + this.member.amount );
		console.log("    |-    | -- ReceiptId: " + this.member.receiptid );
		console.log("    |-    | -- Team: " + this.member.team );
		console.log("    |-    | -- Team2: " + this.member.team2 );
		console.log("    |-    | -- Team3: " + this.member.team3 );
		console.log("    |-    | -- Position: " + this.member.position );
		console.log("    |-    | -- Position2: " + this.member.position2 );
		console.log("    |-    | -- Position3: " + this.member.position3 );
		console.log("    |-    | -- LeagueId: " + this.member.lid );
		console.log("    |-    | -- Fav Team: " + this.member.favteam );
		console.log("    |-    | -- Fav Player: " + this.member.favplayer );
		console.log("    |-    | -- Appears: " + this.member.sappears );
		console.log("    |-    | -- Assists: " + this.member.sassists );
		console.log("    |-    | -- Goals: " + this.member.sgoals );
		console.log("    |-    | -- Photo: " + this.member.photo );
		console.log("    |-    | -- Achievements: " + this.member.achievements );
		console.log("    |-    | -- Status: " + this.member.status );
		console.log("    |-    | -- AcademyInfo: " + this.member.academyinfo );
		console.log("    |-    | <-logMember()");
	}
	
}