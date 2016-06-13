/**
 * Created by odalybr on 06/04/2016.
 */
import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Slide} from './slide.component';
import {Carousel} from './carousel.component';
import { Sponsor } from '../dao/sponsor';
import {SessionDataService} from "../services/session-data.service";

@Component({
    selector: 'sponsors',
    templateUrl: 'app/htmltemplates/sponsors.component.html',
    directives: [ Slide, Carousel, CORE_DIRECTIVES, FORM_DIRECTIVES ]
})

export class SponsorsComponent {
    sponsors:Array<Sponsor>;
    componentName = 'SponsorsComponent';
    
    constructor( private _dataService: SessionDataService ) { }

    ngOnInit(){
        console.log("### " + this.componentName + "-> ngOnInit()");
        this._dataService.loadCurrentSponsors();
    }
}