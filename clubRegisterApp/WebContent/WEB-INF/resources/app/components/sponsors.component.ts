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
    //templateUrl: 'app/htmltemplates/sponsors.component.html',
    template: `
			    <div class="panel" style="margin-top:5px;">
			        <div class="panel-heading avenue-heading">
			            Our Sponsors:
			        </div>
			        <div class="panel-body avenue-body">
			            <carousel [interval]="5000" style="float:left;width:100%;height:auto;">
			                <slide *ngFor="let sponsor of _dataService.dsSponsors">
			                        <div style="position:relative;margin-left:auto;margin-right:auto">
			                            <img src="{{sponsor.image}}" width="80%" height="150px"/>
			                        </div>
			                </slide>
			                </carousel>
			            </div> <!-- end panel-body -->
			        <div class="panel-heading avenue-heading"></div>
			    </div> <!-- end panel -->
    `,
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