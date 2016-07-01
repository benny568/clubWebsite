/**
 * Created by odalybr on 06/04/2016.
 */
import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {Slide} from './slide.component';
import {Carousel} from './carousel.component';
import { Sponsor } from '../dao/sponsor';
import {SessionDataService} from "../services/session-data.service";
import { LoggerService }    from '../services/logger.service';

@Component({
    selector: 'sponsors',
    templateUrl: 'app/htmltemplates/sponsors.component.html',
    directives: [ Slide, Carousel, CORE_DIRECTIVES, FORM_DIRECTIVES ],
    providers: [ LoggerService ]
})

export class SponsorsComponent {
    sponsors:Array<Sponsor>;
    componentName = 'SponsorsComponent';
	logdepth:number = 2;
    
    constructor( private _dataService: SessionDataService, private lg$: LoggerService ) { }

    ngOnInit(){
    	this.lg$.setLogHdr(this.logdepth, this.componentName);
        this.lg$.log(" ngOnInit()");
        this._dataService.loadCurrentSponsors();
    }
}