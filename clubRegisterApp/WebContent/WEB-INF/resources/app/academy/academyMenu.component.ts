/**
 * Created by odalybr on 08/04/2016.
 */
import { Component }   from '@angular/core';
import { Injectable }  from '@angular/core';
import { Router }      from '@angular/router';

@Component({
    selector: 'academy-memu',
    //templateUrl: 'app/htmltemplates/academyMenu.component.html'
    template: `
				<div class="btn-group-vertical">
				    <a (click)="goAcademyHome()" class="btn btn-primary academymenu"><i class="fa fa-home"></i> Home</a>
				    <a [routerLink]="['academyOverview']" class="btn btn-primary academymenu">Overview</a>
				    <a [routerLink]="['academyCoaches']" class="btn btn-primary academymenu">Coaches</a>
				    <a [routerLink]="['academySchedule']" class="btn btn-primary academymenu">Schedule</a>
				    <a [routerLink]="['academyRegistration']" class="btn btn-primary academymenu">Registration</a>
				    <a [routerLink]="['academyPhotos']" class="btn btn-primary academymenu">Photos</a>
				    <div class="btn-group">
				        <button type="button" class="btn btn-primary dropdown-toggle academymenu" data-toggle="dropdown">
				            FAQ <span class="caret"></span></button>
				        <ul class="dropdown-menu academymenu" role="menu">
				            <li><a href="#">Season</a></li>
				            <li><a href="#">Fees</a></li>
				        </ul>
				    </div>
				</div>
    `
})

@Injectable()
export class AcademyMenuComponent {
	constructor( private router: Router ) {}
	
	goAcademyHome()
	{
		console.log("### Going to Academy Home...");
		this.router.navigate(['/academyHome', {}]);
	}
}