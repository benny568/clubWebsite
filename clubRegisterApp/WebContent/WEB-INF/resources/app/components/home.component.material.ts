/**
 * Created by odalybr on 06/04/2016.
 */
import { Component }          from '@angular/core';
import { NewsComponent }      from './news.component';
import { AdvertComponent }    from './advert.component';
import { SponsorsComponent }  from './sponsors.component';
//import { TestComponent }      from '../testing/test.component';

@Component({
    //templateUrl: 'app/htmltemplates/home.component.html',
    template: `
    			<div class="component">
					<advert></advert>
					<news></news>
					<sponsors></sponsors>
				</div>
    `,
    directives: [ NewsComponent, AdvertComponent, SponsorsComponent ] //, TestComponent ]
})

export class HomeComponent {
    
}