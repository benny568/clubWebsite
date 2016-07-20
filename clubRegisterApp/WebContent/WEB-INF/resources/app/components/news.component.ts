/**
 * Created by odalybr on 05/04/2016.
 */
import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import { Slide } from './slide.component';
import { Carousel } from './carousel.component';
import { SessionDataService } from '../services/session-data.service';
import { LoggerService }      from '../services/logger.service';

@Component({
    selector: 'news',
    //templateUrl: 'app/htmltemplates/news.component.html',
    template: `
			    <div class="row avenue-body">
			        <div class="panel">
			            <div class="panel-heading avenue-heading">
			                Latest News:
			            </div>
			            <carousel [interval]="5000" style="float:left;width:100%;height:auto;">
			                <slide *ngFor="let story of _dataService.dsNewsStories">
			                    <img src="{{story.image}}" 
			                    style="float:left;padding-left:100px;padding-top:40px;padding-right:5px;padding-bottom:40px;max-width:40%;"/>
			                    <div style="float:left;width:50%;">
			                        <div class="avenue-heading" 
			                        	style="font-weight:bold;font-size:20px;border-right:solid 1px white;border-left:solid 1px white;">
			                        		{{story.title}}
			                        </div>
			                        <div class="avenue-heading" 
			                        	style="border-bottom:solid 1px white;border-right:solid 1px white;border-left:solid 1px white;">
			                        	{{story.description}}
			                        </div>
			                        <p style="padding-bottom:20px;padding-top:10px;">{{story.story}}</p><br/>
			                    </div>
			                </slide>
			            </carousel>
			
			        </div> <!-- end panel -->
			    </div> <!-- end row -->
    `,
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