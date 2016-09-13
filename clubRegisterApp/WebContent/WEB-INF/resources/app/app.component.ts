import { Component }          from '@angular/core';
import { Router, 
         ROUTER_DIRECTIVES }  from '@angular/router';
import { Http }               from '@angular/http';
import { HTTP_PROVIDERS }     from '@angular/http';
import { Headers }            from '@angular/http';
import { RequestOptions }     from '@angular/http';

import { SessionDataService } from './services/session-data.service';
import { LoggerService }      from './services/logger.service';
import { CommonService }      from './services/common.service';

import {enableProdMode} from '@angular/core';
enableProdMode();

@Component({
    selector: 'my-app',
    //templateUrl: 'app/htmltemplates/nav.component.html',
    template: `
    <div class="container">
<!-- (1) Banner across the top -->
<div class="header img-rounded">
    <div align="right" style="color:#FFFF33; font-weight:bold; font-size:24px; padding:30px 5px 0px 0px;">Avenue United</div>
    <div align="right" style="color:#FFFF33; font-weight:bold; font-size:10px;padding-right:5px;"> EST. 1983&nbsp;&nbsp;
        <i class="fa fa-futbol-o"></i> 14 Titles&nbsp;&nbsp;
        <i class="fa fa-trophy"></i> 10 Cups
    </div>
    <img class="t2" src="resources/images/avenueCrest.png" alt="" />
</div>

<!-- (2) Navigation bar or menu system -->
<nav class="navbar navbar-inverse" style="cursor:pointer">
    <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
            <li class="active"><a [routerLink]="['']"><i class="fa fa-home"></i></a></li>           
            <li class="dropdown">
				<a class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-picture-o"></i> Gallery<span class="caret"></span></a>
				<ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
					<!-- Drop down menu 1: Events -->						
		        	<li class="dropdown-submenu">
                		<a tabindex="-1" href="#">Events</a>						<!-- L1 -->	
						<ul class="dropdown-menu">
							<li><a tabindex="-1" href="#">25th Anniversery</a></li>	<!-- L2 -->
							<li class="dropdown-submenu">
								<a tabindex="-1" href="#">Even More..</a>			<!-- L2 -->
								<ul class="dropdown-menu">
									<li><a tabindex="-1" href="#">3rd leve</a></li>	<!-- L3-->
						    		<li class="dropdown-submenu">
						        		<a href="#">3rd level</a>
										<ul class="dropdown-menu">
									    	<li><a href="#farView/U12 Black">4th level</a></li>
									    	<li><a href="#farView/U11 Red">U11 Red</a></li>
									    	<li><a href="#farView/U11 Yellow">U11 Yellow</a></li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</li>
              		<!-- Drop down menu 2: Academy -->
					<li class="dropdown-submenu pull-middle">
						<a href="#">Academy</a>
						<ul class="dropdown-menu">
							<li class="dropdown-submenu">
								<a href="#">2009</a>
								<ul class="dropdown-menu">
									<span class="dropdown-header">U11s</span>
									<li class="divider"></li>
									<li><a (click)="media('2009','U11','League')">League</a></li>
									<li><a (click)="media('2009','U11','Cup Final')">Cup Final</a></li>
								</ul>
							</li>
							<li class="dropdown-submenu">
								<a href="#">2010</a>
								<ul class="dropdown-menu">
									<li><a (click)="media('2010','U12','none')">U12s</a></li>
								</ul>
							</li>
							<li class="dropdown-submenu">
								<a href="#">2015</a>
								<ul class="dropdown-menu">
									<li><a (click)="media('2015','U8','none')">U8s</a></li>
								</ul>
							</li>
							<li class="dropdown-submenu">
								<a href="#">2016</a>
								<ul class="dropdown-menu">
									<li><a (click)="media('2015','U10','none')">U10s</a></li>
								</ul>
							</li>
						</ul>
					</li>
	              
					<li class="divider"></li>
					<!-- Drop down menu 3: Junior B -->
					<li class="dropdown-submenu">
						<a tabindex="-1" href="#">Junior B</a>
						<ul class="dropdown-menu">
							<li class="dropdown-submenu">
								<a href="#">2016</a>
								<ul class="dropdown-menu">
									<span class="dropdown-header">Junior Cup Semi-Final</span>
									<li class="divider"></li>
									<li><a (click)="media('2016','Junior B','CupSemiFinal')">Photos</a></li>
									<li><a href="#Videos/2016/Junior B">Video</a></li>
								</ul>
							</li>
						</ul>
					</li>
			              
				</ul>
			</li>           
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-users"></i> Teams<span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <div *ngFor="let team of d$.dsTeams">
                        <li><a (click)="goToTeamView(team.name)">{{team.name}}</a></li>
                    </div>
                </ul>
            </li>
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown">
                	<i class="fa fa-list"></i> Fixtures &amp; Results<span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                    <div *ngFor="let team of d$.dsTeams">
                        <li><a (click)="goToFarView(team.name)">{{team.name}}</a></li>
                    </div>
                </ul>
            </li>
            <li class="dropdown">
            	<a class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-child"></i> Academy<span class="caret"></span></a>
            	<ul class="dropdown-menu">
                	<li><a [routerLink]="['/academyHome']"><i class="fa fa-newspaper-o"></i> News</a></li>
                	<li><a [routerLink]="['/academyOverview']"><i class="fa fa-eye"></i> Overview</a></li>
                	<li><a [routerLink]="['/academyCoaches']"><i class="fa fa-group"></i> Coaches</a></li>
                	<li><a [routerLink]="['/academySchedule']"><i class="fa fa-calendar"></i> Schedule</a></li>
                	<li><a [routerLink]="['/academyTandC']"><i class="fa fa-pencil-square-o "></i> Registration</a></li>
                </ul>
            </li>
            <li><a [routerLink]="['merchandise']"><i class="fa fa-shopping-cart"></i> Merchandise</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
        	<li class="dropdown" *ngIf="d$.dsAuthenticated">
                <a class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> Admin<span class="caret"></span></a>
                <ul class="dropdown-menu">
                	<li><a [routerLink]="['/adminHome']"><i class="fa fa-home"></i> Admin Home</a></li>
                    <li><a [routerLink]="['/adminOverview']"><i class="fa fa-sun-o"></i> Overview</a></li>
					<li><a [routerLink]="['/adminTutorials']"><i class="fa fa-book"></i> Tutorials</a></li>
					<li><a [routerLink]="['/memberRegister']"><i class="fa fa-child"></i> Members</a></li>
					<li><a *ngIf="d$.hasPermission('VIEW_USERS', '*')" (onClick)="usersAdmin"><i class="fa fa-child"></i> Users</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown">
                	<i class="fa fa-info-circle"></i> Information <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                    <li><a [routerLink]="['/findUs']"><i class="fa fa-road"></i> Find Us</a></li>
                    <li><a [routerLink]="['/messageUs']"><i class="fa fa-envelope"></i> Message Us</a></li>
                    <li><a [routerLink]="['/contactUs']"><i class="fa fa-phone"></i> Contact Us</a></li>
                    <li><a [routerLink]="['/downloads']"><i class="fa fa-arrow-circle-down"></i> Downloads</a></li>
                    <li><a [routerLink]="['/links']"><i class="fa fa-link"></i> Links</a></li>
                    <li><a [routerLink]="['/clubHistory']"><i class="fa fa-angle-double-left"></i> Our History</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> <span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a [routerLink]="['/admin']"><i class="glyphicon glyphicon-user"></i> Admin</a></li>
                    <li><a [routerLink]="['/login']"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                    <li><a (click)="logout()"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
                </ul>
            </li>
        </ul>
    </div>
</nav>
<router-outlet></router-outlet>
</div>

    `,
    styles: [`
            .header
            {
                background-image: url("resources/images/banner.png");
                background-size: cover;
                min-height:110px;
                position:relative;
                margin-top:5px;
            }
            .t2
            {
                position:absolute;
                top:0px;
                left:0px;
                height:110px;
            }
            .dropdown-menu li a
            {
             	color:black;
             	cursor:pointer;
             	text-decoration: none;
            }
            `],
    //stylesUrl: '/app/styles/nav.component.css',
    directives: [ ROUTER_DIRECTIVES ],
    providers: [ LoggerService ]
})


export class AppComponent {

	componentName:string = 'AppComponent';
	logdepth:number = 0;

    constructor( private lg$: LoggerService, 
    			 public d$: SessionDataService, 
    			 private com$: CommonService, 
    			 private router: Router,
    			 private _http: Http ) 
    {
    	this.lg$.setLogHdr(this.logdepth, this.componentName);
    	
    	this.lg$.log("constructor()");
    	
        // Load the teams to use in the menu system
        this.d$.dsGetTeams();
    }
     
    
    goToTeamView(team)
    {
    	this.lg$.log("-> goToTeamView(" + team + ")");
    	this.d$.loadTeamDetailsByNameByObservable(team, this.logdepth)
    		.subscribe( data => this.getTeamMembers( data ),
						error => this.lg$.log("ERROR: Reading team details from server, team: " + team),
						() => this.lg$.log("<-- Team details read successfully for team: " + team)
					  );
    }
    
    getTeamMembers( data )
    {
    	this.lg$.log("-> getTeamMembers()");
    	this.d$.dsCurrentTeam = data;
    	this.lg$.log("  |-- Data returned, id: " + this.d$.dsCurrentTeam.id);
    	this.lg$.log("  |-- Data returned, team name: " + this.d$.dsCurrentTeam.name);
    	this.lg$.log("  |-- Data returned, lrcode: " + this.d$.dsCurrentTeam.lrcode);
    	this.lg$.log("  |-- Data returned, lrFixturesCode: " + this.d$.dsCurrentTeam.lrFixturesCode);
    	this.lg$.log("  |-- Data returned, lrResultsCode: " + this.d$.dsCurrentTeam.lrResultsCode);
    	this.lg$.log("  |-- Data returned, noticeboard: " + this.d$.dsCurrentTeam.noticeboard);
    	this.d$.loadCurrentTeamMembersByNameByObservable(this.d$.dsCurrentTeam.name, this.logdepth)
	        .subscribe( data => this.changeToTeamPage( data ),
						error => this.lg$.log("ERROR: Reading team members from server, team: " + this.d$.dsCurrentTeam.name),
						() => this.lg$.log("<-- Team members read successfully for team: " + this.d$.dsCurrentTeam.name)
					  );
    }
    
    changeToTeamPage( data )
    {
    	this.lg$.log("-> changeToTeamPage()");
    	this.d$.dsTeamMembers = data;
    	
    	for ( var i = 0; i < this.d$.dsTeamMembers.length; i++ )
    	{
    		this.lg$.log("  |-- Members returned, " + i + ": " + this.d$.dsTeamMembers[i].name);
    	}
    	

    	this.router.navigate(['/viewTeam']);
    }

    
    goToFarView(team)
    {
    	this.lg$.log("-> goToFarView(" + team + ")");
    	this.d$.loadTeamDetailsByNameByObservable(team, this.logdepth)
    		.subscribe( data => this.changeToFarPage( data ),
						error => this.lg$.log("ERROR: Reading team details from server, team: " + team),
						() => this.lg$.log("<-- Team details read successfully for team: " + team)
					  );
    }
    
    changeToFarPage( data )
    {
    	this.lg$.log("-> changeToFarPage()");
 
    	this.d$.dsCurrentTeam = data;
    	this.lg$.log("  |-- Data returned, id: " + this.d$.dsCurrentTeam.id);
    	this.lg$.log("  |-- Data returned, team name: " + this.d$.dsCurrentTeam.name);
    	this.lg$.log("  |-- Data returned, lrcode: " + this.d$.dsCurrentTeam.lrcode);
    	this.lg$.log("  |-- Data returned, lrFixturesCode: " + this.d$.dsCurrentTeam.lrFixturesCode);
    	this.lg$.log("  |-- Data returned, lrResultsCode: " + this.d$.dsCurrentTeam.lrResultsCode);
    	this.lg$.log("  |-- Data returned, noticeboard: " + this.d$.dsCurrentTeam.noticeboard);
    	this.router.navigate(['/farView']);
    }
    
    logout()
    {
    	this.lg$.setLogHdr(this.logdepth, this.componentName);
        this.lg$.log("logout()");

		var url = this.com$.getHome();
		
		let headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    let options = new RequestOptions({ headers: headers });
	    
	    this._http.post(url + '/j_spring_security_logout', 
				null, {headers:headers})
			.subscribe(
	            	data => console.log("Logout successfull"),
	            	error => console.log("===> Error logging out: " + error),
	            	() => console.log("Logout successfull")
	            );
    }

}