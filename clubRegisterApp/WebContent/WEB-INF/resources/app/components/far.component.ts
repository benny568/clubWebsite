/**
 * Created by odalybr on 07/04/2016.
 */
import { Component }            from 'angular2/core';
import { SessionDataService }   from '../services/session-data.service';
import { LeagueRepublicResults } from './leagueRepublicResults.component';

@Component({
    templateUrl: 'app/htmltemplates/far.component.html',
    directives: [LeagueRepublicResults]
})

export class FarViewComponent{
    constructor(private _dataService: SessionDataService) { }
}