import { Component }     from 'angular2/core';
import { FORM_DIRECTIVES,  
	     FormBuilder,  
	     ControlGroup,
	     Validators }    from 'angular2/common';
import { LoggerService } from '../services/logger.service';
import { DatepickerComponent } from './datepicker.component';

@Component({
	templateUrl: 'app/htmltemplates/fleadh.component.html',
	
	directives: [ FORM_DIRECTIVES, DatepickerComponent ] 
/*	  template: `  
	  <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)">
		  <label for="arrival">Arrival: </label>
		  <input type="date"
                 id="arrival"
                 placeholder="17/08/2016"
                 [ngFormControl]="myForm.controls['Arrival']" >
         <input type="date"
                 id="departure"
                 placeholder="20/08/2016"
                 [ngFormControl]="myForm.controls['Departure']" >
         <input type="text"
                id="number"
                placeholder="2"
                [ngFormControl]="myForm.controls['NumberOfPeople']" >
         <button type="submit">Submit</button> 
      </form>
	  `*/
})

export class FleadhComponent {
	componentName:string = 'FleahComponent';
	logdepth:number = 3;
	myForm: ControlGroup;

	constructor( private lg$: LoggerService, fb: FormBuilder ) {
		this.myForm = fb.group({  
		      'Arrival': ['17/08/16', Validators.required],
		      'Departure' : ['21/08/16', Validators.required],
		      'NumberOfPeople' : [2, Validators.required]
		    });
		
	}
	
	ngOnInit() {
    	this.lg$.setLogHdr(this.logdepth, this.componentName);
        this.lg$.log("ngOnInit()");
    }
	
	onSubmit(form)
	{
		this.lg$.log("Arrival: " + form['Arrival']);
		this.lg$.log("Departure: " + form['Departure']);
		this.lg$.log("Number of people: " + form['NumberOfPeople']);
	}
}