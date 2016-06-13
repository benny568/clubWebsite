/**
 * Created by odalybr on 06/04/2016.
 */
import { Component }          from 'angular2/core';
import { NewsComponent }      from './news.component';
import { SponsorsComponent }  from './sponsors.component';

@Component({
    templateUrl: 'app/htmltemplates/home.component.html',
    directives: [ NewsComponent, SponsorsComponent ]
})

export class HomeComponent {
    
}