import { Injectable }     from '@angular/core';

@Injectable()
export class BookingService {
	arrivalDate		        : string;
	departureDate	        : string;
	numberOfPeople	        : number;
	numberOfPeople4Parking  : number;
	firstname               : string;
	surname                 : string;
	email                   : string;
	phone                   : string;
    country                 : string;
	vehicalReg              : string;

}