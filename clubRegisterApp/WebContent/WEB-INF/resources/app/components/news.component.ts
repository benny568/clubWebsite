/**
 * Created by odalybr on 05/04/2016.
 */
import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import { Slide } from './slide.component';
import { Carousel } from './carousel.component';
import { SessionDataService } from '../services/session-data.service';
import { LoggerService }      from '../services/logger.service';

@Component({
    selector: 'news',
    templateUrl: 'app/htmltemplates/news.component.html',
    directives: [ Slide, Carousel, CORE_DIRECTIVES, FORM_DIRECTIVES ],
    providers: [ LoggerService ]
})


export class NewsComponent {

    componentName = 'NewsComponent';
    logdepth = 2;

    constructor(private _dataService: SessionDataService, private lg$: LoggerService) { }

    ngOnInit() {
    	this.lg$.setLogHdr(this.logdepth, this.componentName);
        this.lg$.log("-> ngOnInit()");
        var subscriber = this._dataService.loadNewsStories();
        subscriber.subscribe(
				            	data => this._dataService.setNews(data),
				            	error => this.lg$.error("===> Error getting news from server: " + error),
				            	() => this.lg$.log(" <=== Received news from server. <====")
				            );
    }
}