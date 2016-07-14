import { Component }     from '@angular/core';
import { ROUTER_DIRECTIVES }       from '@angular/router';
import { Router }       from '@angular/router';
import { LoggerService } from '../services/logger.service';

@Component({
    selector: 'advert',
    //templateUrl: 'app/htmltemplates/advert.component.html',
    template: `
			    <div class="container">
				    <div class="panel" style="margin-top:5px;">
				        <div class="panel-body avenue-body">
							<a [routerLink]="['/fleadh']"><img width="100%" src="resources/images/fleadh/fleadh.png" /></a>
				        </div> <!-- end panel-body -->
				    </div> <!-- end panel -->
				</div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class AdvertComponent {
    
}