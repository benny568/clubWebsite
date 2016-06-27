import { Component }               from 'angular2/core';
import { RouteConfig, 
         ROUTER_DIRECTIVES, 
         ROUTER_PROVIDERS }        from 'angular2/router';
import { Router }                  from 'angular2/router';
import { Http }                    from 'angular2/http';
import { HTTP_PROVIDERS }          from 'angular2/http';

import { SessionDataService }      from './services/session-data.service';
import { LoggerService }           from './services/logger.service';

import { ViewTeam }                from './components/viewTeam.component';
import { HomeComponent }           from "./components/home.component";
import { FarViewComponent }        from "./components/far.component";
import { FindUsComponent }         from "./components/findUs.component";
import { MessageUsComponent }      from "./components/messageUs.component";
import { ContacteUsComponent }     from "./components/contactUs.component";
import { DownloadsComponent }      from "./components/downloads.component";
import { LinksComponent }          from "./components/links.component";
import { AcademyHomeComponent }    from "./components/academyHome.component";
import { ClubHistoryComponent }    from "./components/clubHistory.component";
import { MerchandiseComponent }    from "./components/merchandise.component";
import { LoginComponent }          from "./components/login.component";
import { PhotosComponent }		   from "./components/photos.component";
import { FleadhComponent }		   from "./components/fleadh.component";
import { PayNowComponent }		   from "./components/payNow.component";
import { AdminHomeComponent }	   from "./components/adminHome.component";
import { AdminOverviewComponent }  from "./components/adminOverview.component";
import { MemberRegisterComponent } from "./components/memberRegister.component";
import { EditMemberComponent }     from "./components/editMember.component";

import {enableProdMode} from 'angular2/core';
enableProdMode();

@Component({
    selector: 'my-app',
    templateUrl: 'app/htmltemplates/nav.component.html',
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

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/viewTeam:team', name: 'ViewTeam', component: ViewTeam },
    { path: '/farView:team', name: 'FarView', component: FarViewComponent },
    { path: '/findUs', name: 'FindUs', component: FindUsComponent },
    { path: '/messageUs', name: 'MessageUs', component: MessageUsComponent },
    { path: '/contactUs', name: 'ContactUs', component: ContacteUsComponent },
    { path: '/downloads', name: 'Downloads', component: DownloadsComponent },
    { path: '/links', name: 'Links', component: LinksComponent },
    { path: '/academyHome', name: 'AcademyHome', component: AcademyHomeComponent },
    { path: '/clubHistory', name: 'ClubHistory', component: ClubHistoryComponent },
    { path: '/merchandise', name: 'Merchandise', component: MerchandiseComponent },
    { path: '/media:cat1:cat2:cat3', name: 'Media', component: PhotosComponent },
    { path: '/login', name: 'Login', component: LoginComponent },
    { path: '/admin', name: 'AdminHome', component: AdminHomeComponent },
    { path: '/fleadh', name: 'Fleadh', component: FleadhComponent },
    { path: '/payNow', name: 'PayNow', component: PayNowComponent },
    { path: '/adminOverview', name: 'AdminOverview', component: AdminOverviewComponent },
    { path: '/memberRegister', name: 'MemberRegister', component: MemberRegisterComponent },
    { path: '/editMember', name: 'EditMember', component: EditMemberComponent }
])

export class AppComponent {

	componentName:string = 'AppComponent';
	logdepth:number = 0;

    constructor( private lg$: LoggerService, private d$: SessionDataService, private router: Router ) 
    {
    	this.lg$.setLogHdr(this.logdepth, this.componentName);
    	
    	this.lg$.log("constructor()");
    	
        // Load the teams to use in the menu system
        this.d$.dsGetTeams();
    }

    /**********************************************************
     * Name:		goHome()
     * Description:	Navigate to the home page
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    goHome()
    {
        this.lg$.log("->" + "goHome()");

        var subscriber = this.d$.loadNewsStories();
        subscriber.subscribe(
				            	data => this.d$.setNews(data),
				            	error => this.lg$.log("===> Error getting news from server: " + error)//,
				            	//() => this.router.navigate( ['Home', {}] )
				            );
        this.d$.loadCurrentSponsors();
        this.lg$.log("News: " + this.d$.dsNewsStories );
        this.lg$.log("Sponsors: " + this.d$.dsSponsors );
        this.router.navigate( ['Home', {}] );
    }

    /**********************************************************
     * Name:		login()
     * Description:	Navigate to the login page
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    login()
    {
        this.lg$.log("->" + "login()");

        // Change view
        this.router.navigate( ['Login', {}] );
    }
    
    /**********************************************************
     * Name:		logout()
     * Description:	lout
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    logout()
    {
        this.lg$.log("->" + "logout()");

        this.d$.logout().subscribe(
        										data => this.goHome(),
        										err => this.lg$.log("ERROR: " + err),
        										() => this.lg$.log('Logout Complete')
        		
        									);
    }

    /**********************************************************
     * Name:		viewTeam()
     * Description:	Navigate to the Team View page
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    viewTeam( tname:string )
    {
        this.lg$.log("->" + "viewTeam(" + tname + ")");

        // (1) Read in the list of teams
        this.d$.dsGetTeams();
        // (2) Set the current team to the one in question
        this.d$.setCurrentTeamByName(tname);
        // (3) Load in the team members for that team
        this.d$.loadCurrentTeamMembersByName(tname);
        // (4) Reset the current member so the display doesn't show until the member is clicked on
        this.d$.clearCurrentMember();
        // (5) Change view
        this.router.navigate( ['ViewTeam', { team: tname }] );
    }

    /**********************************************************
     * Name:		farView()
     * Description:	Navigate to the Fixtures & Results page
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    farView( tname:string )
    {
        this.lg$.log("->" + "farView(" + tname + ")");
        // (1) Read in the list of teams
        this.d$.dsGetTeams();
        // (2) Set the current team to the one in question
        this.d$.setCurrentTeamByName(tname);
        // (3) Change view
        this.router.navigate( ['FarView', { team: tname }] );
    }

    /**********************************************************
     * Name:		findUs()
     * Description:	Navigate to the location page
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    findUs()
    {
        this.lg$.log("->" + "findUs()");
        this.router.navigate( ['FindUs', {}] );
    }

    /**********************************************************
     * Name:		messageUs()
     * Description:	Navigate to the email page
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    messageUs()
    {
        this.lg$.log("->" + "messageUs()");
        this.router.navigate( ['MessageUs', {}] );
    }

    /**********************************************************
     * Name:		contactUs()
     * Description:	Navigate to the contacts page
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    contactUs()
    {
        this.lg$.log("->" + "contactUs()");
        this.router.navigate( ['ContactUs', {}] );
    }

    /**********************************************************
     * Name:		downloads()
     * Description:	Navigate to the downloads page
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    downloads()
    {
        this.lg$.log("->" + "downloads()");
        this.router.navigate( ['Downloads', {}] );
    }

    /**********************************************************
     * Name:		links()
     * Description:	Navigate to the downloads page
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    links()
    {
        this.lg$.log("->" + "links()");
        this.router.navigate( ['Links', {}] );
    }

    /**********************************************************
     * Name:		academyHome()
     * Description:	Navigate to the downloads page
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    academyHome()
    {
        this.lg$.log("->" + "academyHome()");
        this.router.navigate( ['AcademyHome', {}] );
    }

    /**********************************************************
     * Name:		clubHistory()
     * Description:	Navigate to the downloads page
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    clubHistory()
    {
        this.lg$.log("->" + "clubHistory()");
        this.router.navigate( ['ClubHistory', {}] );
    }

    /**********************************************************
     * Name:		merchandise()
     * Description:	Navigate to the merchandise page
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    merchandise()
    {
        this.lg$.log("->" + "merchandise()");
        this.router.navigate( ['Merchandise', {}] );
    }

    /**********************************************************
     * Name:		media()
     * Description:	Navigate to the media page
     * Scope:		Internally accessible
     * Params in:	team, year and the event (if applicable)
     * Return:      None
     **********************************************************/
    media(cat1:string, cat2:string, cat3:string)
    {
    	this.lg$.log("->" + "media(" + cat1 + "/" + cat2 + "/" + cat3 + ")");
    	
        this.router.navigate( ['Media', {cat1:cat1, cat2:cat2, cat3:cat3}] );
    }
    
    /**********************************************************
     * Name:		payNow()
     * Description:	Navigate to the payNow page
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    payNow()
    {
    	this.lg$.log("->" + "payNow()");
    	this.router.navigate( ['PayNow', {}] );
    }
    
    /**********************************************************
    * Name:		adminOverview()
    * Description:	Navigate to the payNow page
    * Scope:		Internally accessible
    * Params in:	None
    * Return:      None
    **********************************************************/
    adminOverview()
    {
    	this.lg$.log("->" + "adminOverview()");
    	
    	this.router.navigate( ['AdminOverview', {}] );
    }
    
    /**********************************************************
     * Name:		memberRegister()
     * Description:	Navigate to the memberRegister page
     * Scope:		Internally accessible
     * Params in:	None
     * Return:      None
     **********************************************************/
    memberRegister()
     {
     	this.lg$.log("->" + "memberRegister()");
     	
     	var subscriber = this.d$.dsGetTeams();
        subscriber.subscribe(
				            	data => this.goToMemberRegister(data),
				            	error => this.lg$.log("===> Error getting teams from server: " +  error),
				            	() => this.lg$.log(" <=== Received news from server. <====")
				            );     	

     }
    
    goToMemberRegister(data)
    {
    	this.lg$.log("->" + "goToMemberRegister(), data: " + data);
    	this.d$.dsTeams = data;
    	this.router.navigate( ['MemberRegister', {}] );
    }

}