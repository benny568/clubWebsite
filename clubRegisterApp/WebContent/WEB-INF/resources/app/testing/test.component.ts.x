import { Component }            from '@angular/core';
//import { MD_CARD_DIRECTIVES }   from '@angular2-material/card';
//import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

import { LoggerService }        from '../services/logger.service';

@Component({
	selector: 'test',
	template: `
				<md-card>
				   <md-card-header>
				      <md-card-header-text>
				         <h2 class=“md-title”>Header title</h2>
				         <span class=“md-subhead”>Subtitle</span>
				      </md-card-header-text>
				      <md-card-avatar>
				         <img class=“md-user-avatar” src=“path/to/img.png”>
				      </md-card-avatar>
				   </md-card-header>
				   <img src=“path/to/img.png”>
				   <md-card-title>
				      <md-card-title-text>
				         <h2 class=“md-headline”>Content title</h2>
				         <span class=“md-subhead”>Subtitle</span>
				      </md-card-title-text>
				   </md-card-title>
				<md-card-content>
	`/*,
	directives: [ MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES ]*/
})
 
export class TestComponent {
	componentName:string = 'TestComponent';
	logdepth:number = 4;

	constructor( private lg$: LoggerService ) 
	{
		this.lg$.setLogHdr(this.logdepth, this.componentName);
        this.lg$.log("--> constructor()");
	}
	
}