/**
 * Created by odalybr on 08/04/2016.
 */
import { Component }            from '@angular/core';
import { AcademyMenuComponent } from "./academyMenu.component";
import {SessionDataService}     from "../services/session-data.service";
import { NewsComponent }        from "./news.component";

@Component({
    templateUrl: 'app/htmltemplates/academyHome.component.html',
    //stylesUrl: 'app/styles/academyHome.component.css',
    directives: [ AcademyMenuComponent, NewsComponent ]
})

export class AcademyHomeComponent {
    constructor(private _dataService: SessionDataService ){}

    ngOnInit() {
        console.log("### AcademyHomeComponent -> ngOnInit()")
        this._dataService.loadNewsStories();
    }

}