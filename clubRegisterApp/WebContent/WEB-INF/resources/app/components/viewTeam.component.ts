import { Component }           from 'angular2/core';
import { SessionDataService }  from '../services/session-data.service';
import { LeagueRepublicTable } from "./leagueRepublicTable.component";

@Component({
    templateUrl: 'app/htmltemplates/viewTeam.component.html',
    directives: [LeagueRepublicTable]
})

export class ViewTeam {
    constructor(private _dataService: SessionDataService) { }
}