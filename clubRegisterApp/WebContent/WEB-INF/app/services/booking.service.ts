import { Injectable }     from '@angular/core';

@Injectable()
export class BookingService {
	arrivalDate		        : string;
	departureDate	        : string;
	numberOfPeople	        : number;
	parking                 : number;
	firstname               : string;
	surname                 : string;
	email                   : string;
	phone                   : string;
    country                 : string;
	vehicalReg              : string;
	deposit                 : number;
}