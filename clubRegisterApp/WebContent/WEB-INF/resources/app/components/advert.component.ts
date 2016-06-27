import { Component }     from 'angular2/core';
import { Router }        from 'angular2/router';
import { LoggerService } from '../services/logger.service';

@Component({
    selector: 'advert',
    templateUrl: 'app/htmltemplates/advert.component.html'
})

export class AdvertComponent {
	componentName = 'AdvertComponent';
	logdepth:number = 2;
	advert = {title:'FLEADH WEEKEND CAMPING:', image:'', text:''};
	
	constructor( private _router: Router,  private lg$: LoggerService ) {}

    ngOnInit() {
    	this.lg$.setLogHdr(this.logdepth, this.componentName);
        this.lg$.log("ngOnInit()");
    }
    
    /**********************************************************
     * Name:		payNow()
     * Description:	Navigate to the payNow page
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    payNow()
    {
    	this.lg$.log("payNow()");
    	this._router.navigate( ['PayNow', {}] );
    }
    
}