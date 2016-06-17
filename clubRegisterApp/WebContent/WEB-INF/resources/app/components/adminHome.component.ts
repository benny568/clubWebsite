import { Component }          from 'angular2/core';
import { SessionDataService } from '../services/session-data.service';
import { NewsComponent }        from "./news.component";


@Component({
	templateUrl: 'app/htmltemplates/adminHome.component.html',
	directives: [ NewsComponent ],
	providers: [ SessionDataService ]
})

export class AdminHomeComponent
{
	constructor(private _dataService: SessionDataService ){}
}