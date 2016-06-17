import { Component } from 'angular2/core';
import { Router }    from 'angular2/router';

@Component({
    selector: 'advert',
    templateUrl: 'app/htmltemplates/advert.component.html'
})

export class AdvertComponent {
	componentName = 'AdvertComponent';
	advert = {title:'FLEADH WEEKEND CAMPING:', image:'', text:''};
	
	constructor(private _router: Router) {}

    ngOnInit() {
        console.log("### " + this.componentName + "-> ngOnInit()");
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
    	console.log("     " + this.componentName + "->" + "payNow()");
    	this._router.navigate( ['PayNow', {}] );
    }
    
}