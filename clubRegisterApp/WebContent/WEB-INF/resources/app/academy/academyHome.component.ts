/**
 * Created by odalybr on 08/04/2016.
 */
import { Component }            from '@angular/core';
import { Router }               from '@angular/router';

import { AcademyMenuComponent } from "./academyMenu.component";
import { SessionDataService }   from "../services/session-data.service";
import { LoggerService }        from "../services/logger.service";
import { NewsComponent }        from "../components/news.component";

@Component({
    //templateUrl: 'app/htmltemplates/academyHome.component.html',
    //stylesUrl: 'app/styles/academyHome.component.css',
    template: `
				<div class="container t1">
				    <div class="row">
				        <div class="col-md-1" style="padding-top:50px;">
				            <!-- Add menu down left -->
				            <academy-memu></academy-memu>
				        </div>
				        <div class="col-md-6">
				            <img src="resources/images/academy/avenue-academy-15.1.jpg" height="auto" width="100%" style="margin-left:100px;"/>
				        </div>
				        <div class="col-md-5">
				            <div class="academyflag" style="margin-left:150px;margin-top:30px;"></div>
				        </div>
				    </div> <!-- end row -->
				
				    <div class="blankspace"></div>
				
				    <div class="row">
				        <div class="col-md-6">
				            <div class="panel">
				                <div class="panel-heading avenue-heading">
				                    Latest News
				                </div>
				                <div class="panel-body avenue-body">
				                    <div *ngFor="#story of _dataService.dsNewsStories">
				                        <div *ngIf="story.category == 'A'" style="border-bottom: 1px solid #ccc;padding-bottom:5px;">
				                            <img src="{{story.image}}" align="left" HSPACE="5" VSPACE="5" height="auto" width="50%"/>
				                            <h4 style="color:#FAE900;">{{story.description}}</h4><p>{{story.story}}</p>
				                        </div>
				                    </div>
				                </div>
				            </div>
				        </div>
				        <div class="col-md-6">
				            <div class="panel">
				                <div class="panel-heading avenue-heading">
				                    Drill of the week:
				                </div>
				                <div class="panel-body avenue-body">
				
				                    <div class="panel">
				                        <div class="panel-heading avenue-heading">THEME</div>
				                        <div class="panel-body avenue-body">Dribbling and Passing through Cones (U6-9 Technical)</div>
				                        <div class="panel-heading avenue-heading">DESCRIPTION OF PRACTISE</div>
				                        <div class="panel-body avenue-body">A Practise designed to encourage players dribbling and passing</div>
				                        <div class="panel-heading avenue-heading">ORGANISATION</div>
				                        <div class="panel-body avenue-body">4 to 5 cones setup to dribble through<br />
				                            3 cones with a ball on top of the middle cone<br />
				                            3-4 players per group Setup as many groups are required<br />
				                            Players dribble through cones and try knock their football off the middle cone.<br />
				                            Players must strike ball before they pass the end cone<br />
				                            Player must retrieve their football and bring back to the team mate<br />
				                        </div>
				                        <div class="panel-heading avenue-heading">KEY FACTORS</div>
				                        <div class="panel-body avenue-body">Dribbling, soft touches, keep ball close, head up<br />
				                            Passing, pace and accuracy
				                        </div>
				                        <div class="panel-heading avenue-heading">NOTES</div>
				                        <div class="panel-body avenue-body">Progress the competition between teams, change distance of 
				                        	passing depending on ability of players. Create a competition between teams by awarding 2 
				                        	points to anyone who dribbles through the cones without the ball hitting the cones.  Award 2 
				                        	points if they pass the ball through the cones. Award 5 points if they knock the ball off the 
				                        	middle cone.
				                        </div>
				                        <div class="panel-body avenue-body">
				                            <img src="resources/images/academy/drilloftheweek.png" alt="" width="100%"/>
				                        </div>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </div>
				</div> <!--  End of container t1 -->

    `,
    directives: [ AcademyMenuComponent, NewsComponent ],
    providers: [ LoggerService, Router ]
})

export class AcademyHomeComponent {
	componentName:string = 'AcademyHomeComponent';
	logdepth:number = 1;
	
    constructor( private d$: SessionDataService, private lg$: LoggerService, private router: Router ) {}

    ngOnInit() {
        this.lg$.setLogHdr(this.logdepth, this.componentName);
        this.d$.loadNewsStories();
    }
    
    goToAcademyHome() {
    	this.lg$.log("-- going home..");
    	this.router.navigate(['/academyHome']);
    }
    
    goToAcademyOverview() {
    	this.lg$.log("-- going to overview..");
    	this.router.navigate(['/academyOverview']);
    }
    
    goToAcademyCoaches() {
    	this.lg$.log("-- going to coaches..");
    	this.router.navigate(['/academyCoaches']);
    }
    
    goToAcademySchedule() {
    	this.lg$.log("-- going to schedule..");
    	this.router.navigate(['/academySchedule']);
    }
    
    goToAcademyRegistration() {
    	this.lg$.log("-- going to registration..");
    	this.router.navigate(['/academyRegistration']);
    }
    
    goToAcademyPhotos() {
    	this.lg$.log("-- going to photos..");
    	this.router.navigate(['/academyPhotos']);
    }

}