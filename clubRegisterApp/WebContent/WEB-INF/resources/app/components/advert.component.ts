import { Component }     from '@angular/core';

@Component({
    selector: 'advert',
    //templateUrl: 'app/htmltemplates/advert.component.html',
    template: `
			    <div class="container">
				    <div class="panel" style="margin-top:5px;">
				        <div class="panel-body avenue-body">
							<a routerLink="/fleadh"><img width="100%" src="resources/images/fleadh/fleadh.png" /></a>
				        </div> <!-- end panel-body -->
				    </div> <!-- end panel -->
				</div>
    `
})

export class AdvertComponent {
    
}