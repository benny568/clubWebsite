import { Component }               from '@angular/core';
import { ROUTER_DIRECTIVES }       from '@angular/router';
import { Http }                    from '@angular/http';
import { HTTP_PROVIDERS }          from '@angular/http';

import { SessionDataService }      from './services/session-data.service';
import { LoggerService }           from './services/logger.service';

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
<nav class="navbar navbar-inverse">
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
                        <li><a [routerLink]="['/viewTeam']">{{team.name}}</a></li>
                    </div>
                </ul>
            </li>
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-list"></i> Fixtures &amp; Results<span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <div *ngFor="let team of d$.dsTeams">
                        <li><a [routerLink]="['/farView']">{{team.name}}</a></li>
                    </div>
                </ul>
            </li>
            <li><a [routerLink]="['/academyHome']"><i class="fa fa-child"></i> Academy</a></li>
            <li><a [routerLink]="['merchandise']"><i class="fa fa-shopping-cart"></i> Merchandise</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
        	<li class="dropdown" *ngIf="d$.dsAuthenticated">
                <a class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> Admin<span class="caret"></span></a>
                <ul class="dropdown-menu">
                	<li><a [routerLink]="['/admin']"><i class="fa fa-home"></i> Overview</a></li>
                    <li><a [routerLink]="['/adminOverview']"><i class="fa fa-sun-o"></i> Overview</a></li>
					<li><a [routerLink]="['/adminTutorials']"><i class="fa fa-book"></i> Tutorials</a></li>
					<li><a [routerLink]="['/memberRegister']"><i class="fa fa-child"></i> Members</a></li>
					<li><a *ngIf="d$.hasPermission('VIEW_USERS', '*')" (onClick)="usersAdmin"><i class="fa fa-child"></i> Users</a></li>
<!-- 					<li><a href="#ManageTeams"><i class="fa fa-users"></i> Teams</a></li> -->
<!-- 					<li class="dropdown"> -->
<!-- 				  		<a class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-futbol-o"></i> My Teams<span class="caret"></span></a> -->
<!-- 				  		<ul class="dropdown-menu"> -->
<!-- 							<li *ngIf="d$.hasPermission('MANAGE_TEAM', 'Junior A')"><a href="#ManageTeam/team/Junior A">Junior A</a></li> -->
<!-- 							<li *ngIf="d$.hasPermission('MANAGE_TEAM', 'Junior B')"><a href="#ManageTeam/team/Junior B">Junior B</a></li> -->
<!-- 							<li *ngIf="d$.hasPermission('MANAGE_TEAM', 'U18')"><a href="#ManageTeam/team/U18">U18</a></li> -->
<!-- 							<li *ngIf="d$.hasPermission('MANAGE_TEAM', 'U17')"><a href="#ManageTeam/team/U17">U17</a></li> -->
<!-- 							<li *ngIf="d$.hasPermission('MANAGE_TEAM', 'U16')"><a href="#ManageTeam/team/U16">U16</a></li> -->
<!-- 							<li *ngIf="d$.hasPermission('MANAGE_TEAM', 'U15')"><a href="#ManageTeam/team/U15">U15A</a></li> -->
<!-- 							<li *ngIf="d$.hasPermission('MANAGE_TEAM', 'U15B')"><a href="#ManageTeam/team/U15B">U15B</a></li> -->
<!-- 							<li *ngIf="d$.hasPermission('MANAGE_TEAM', 'U14A')"><a href="#ManageTeam/team/U14A">U14</a></li> -->
<!-- 							<li *ngIf="d$.hasPermission('MANAGE_TEAM', 'U13 Red')"><a href="#ManageTeam/team/U13">U13 Red</a></li> -->
<!-- 							<li *ngIf="d$.hasPermission('MANAGE_TEAM', 'U13 Yellow')"><a href="#ManageTeam/team/U13B">U13 Yellow</a></li> -->
<!-- 							<li *ngIf="d$.hasPermission('MANAGE_TEAM', 'U12A')"><a href="#ManageTeam/team/U12">U12A</a></li> -->
<!-- 							<li *ngIf="d$.hasPermission('MANAGE_TEAM', 'U12 Black')"><a href="#ManageTeam/team/U12B">U12 Black</a></li> -->
<!-- 							<li *ngIf="d$.hasPermission('MANAGE_TEAM', 'U11 Red')"><a href="#ManageTeam/team/U11">U11 Red</a></li> -->
<!-- 							<li *ngIf="d$.hasPermission('MANAGE_TEAM', 'U11 Yellow')"><a href="#ManageTeam/team/U11B">U11 Yellow</a></li> -->
<!-- 				  		</ul> -->
<!-- 					</li> -->
                </ul>
            </li>
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-info-circle"></i> Information <span class="caret"></span></a>
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
                    <li><a [routerLink]="['/login']"><i class="glyphicon glyphicon-user"></i> Admin</a></li>
                    <li><a [routerLink]="['/login']"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                    <li><a [routerLink]="['/logout']"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
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
            `],
    //stylesUrl: '/app/styles/nav.component.css',
    directives: [ ROUTER_DIRECTIVES ],
    providers: [ LoggerService ]
})


export class AppComponent {

	componentName:string = 'AppComponent';
	logdepth:number = 0;

    constructor( private lg$: LoggerService, private d$: SessionDataService ) 
    {
    	this.lg$.setLogHdr(this.logdepth, this.componentName);
    	
    	this.lg$.log("constructor()");
    	
        // Load the teams to use in the menu system
        this.d$.dsGetTeams();
    }

}