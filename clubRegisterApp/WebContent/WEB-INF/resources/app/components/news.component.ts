/**
 * Created by odalybr on 05/04/2016.
 */
import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import { Slide } from './slide.component';
import { Carousel } from './carousel.component';
import { SessionDataService }   from '../services/session-data.service';

@Component({
    selector: 'news',
    templateUrl: 'app/htmltemplates/news.component.html',
    directives: [ Slide, Carousel, CORE_DIRECTIVES, FORM_DIRECTIVES ]
})

// export class NewsComponentimplements OnDestroy {
//     constructor(private _dataService: SessionDataService) { }
//
//     ngOnInit() {
//         console.log("### NewsComponent -> ngOnInit()")
//         this._dataService.loadNewsStories();
//     }

export class NewsComponent {

    componentName = 'NewsComponent';

    constructor(private _dataService: SessionDataService) { }

    ngOnInit() {
        console.log("### " + this.componentName + "-> ngOnInit()");
        this._dataService.loadNewsStories();
    }
}