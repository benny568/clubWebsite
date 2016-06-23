import { Component }               from 'angular2/core';
import { RouteConfig, 
         ROUTER_DIRECTIVES, 
         ROUTER_PROVIDERS }        from 'angular2/router';
import { Router }                  from 'angular2/router';
import { Http }                    from 'angular2/http';
import { HTTP_PROVIDERS }          from 'angular2/http';
import { SessionDataService }      from './services/session-data.service';
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
import { PayNowComponent }		   from "./components/payNow.component";
import { AdminHomeComponent }	   from "./components/adminHome.component";
import { AdminOverviewComponent }  from "./components/adminOverview.component";
import { MemberRegisterComponent } from "./components/memberRegister.component"

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
    providers: [ ROUTER_PROVIDERS, HTTP_PROVIDERS, SessionDataService ]
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
    { path: '/payNow', name: 'PayNow', component: PayNowComponent },
    { path: '/adminOverview', name: 'AdminOverview', component: AdminOverviewComponent },
    { path: '/memberRegister', name: 'MemberRegister', component: MemberRegisterComponent }
])

export class AppComponent {

	componentName:string = 'AppComponent';
	loghdr:string = "";
	logdepth:number = 0;

    constructor(private _dataService: SessionDataService, private _router: Router) 
    {
    	this.loghdr = this._dataService.setLogHdr(this.logdepth, this.componentName);
    	
    	console.log(this.loghdr + "constructor()");
    	
        // Load the teams to use in the menu system
        this._dataService.dsGetTeams();
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
        console.log(this.loghdr + "->" + "goHome()");

        var subscriber = this._dataService.loadNewsStories();
        subscriber.subscribe(
				            	data => this._dataService.setNews(data),
				            	error => console.log("===> Error getting news from server: " + error),
				            	() => this._router.navigate( ['Home', {}] )
				            );
        this._dataService.loadCurrentSponsors();
        //console.log(this.loghdr + "News: " + this._dataService.dsNewsStories );
        console.log(this.loghdr + "Sponsors: " + this._dataService.dsSponsors );
        //this._router.navigate( ['Home', {}] );
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
        console.log(this.loghdr + "->" + "login()");

        // Change view
        this._router.navigate( ['Login', {}] );
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
        console.log(this.loghdr + "->" + "logout()");

        this._dataService.logout().subscribe(
        										data => this.goHome(),
        										err => console.log("ERROR: " + err),
        										() => console.log('Logout Complete')
        		
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
        console.log(this.loghdr + "->" + "viewTeam(" + tname + ")");

        // (1) Read in the list of teams
        this._dataService.dsGetTeams();
        // (2) Set the current team to the one in question
        this._dataService.setCurrentTeamByName(tname);
        // (3) Load in the team members for that team
        this._dataService.loadCurrentTeamMembersByName(tname);
        // (4) Reset the current member so the display doesn't show until the member is clicked on
        this._dataService.clearCurrentMember();
        // (5) Change view
        this._router.navigate( ['ViewTeam', { team: tname }] );
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
        console.log(this.loghdr + "->" + "farView(" + tname + ")");
        // (1) Read in the list of teams
        this._dataService.dsGetTeams();
        // (2) Set the current team to the one in question
        this._dataService.setCurrentTeamByName(tname);
        // (3) Change view
        this._router.navigate( ['FarView', { team: tname }] );
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
        console.log(this.loghdr + "->" + "findUs()");
        this._router.navigate( ['FindUs', {}] );
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
        console.log(this.loghdr + "->" + "messageUs()");
        this._router.navigate( ['MessageUs', {}] );
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
        console.log(this.loghdr + "->" + "contactUs()");
        this._router.navigate( ['ContactUs', {}] );
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
        console.log(this.loghdr + "->" + "downloads()");
        this._router.navigate( ['Downloads', {}] );
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
        console.log(this.loghdr + "->" + "links()");
        this._router.navigate( ['Links', {}] );
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
        console.log(this.loghdr + "->" + "academyHome()");
        this._router.navigate( ['AcademyHome', {}] );
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
        console.log(this.loghdr + "->" + "clubHistory()");
        this._router.navigate( ['ClubHistory', {}] );
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
        console.log(this.loghdr + "->" + "merchandise()");
        this._router.navigate( ['Merchandise', {}] );
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
    	console.log(this.loghdr + "->" + "media(" + cat1 + "/" + cat2 + "/" + cat3 + ")");
    	
        this._router.navigate( ['Media', {cat1:cat1, cat2:cat2, cat3:cat3}] );
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
    	console.log(this.loghdr + "->" + "payNow()");
    	this._router.navigate( ['PayNow', {}] );
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
    	console.log(this.loghdr + "->" + "adminOverview()");
    	
    	this._router.navigate( ['AdminOverview', {}] );
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
     	console.log(this.loghdr + "->" + "memberRegister()");
     	
     	var subscriber = this._dataService.dsGetTeams();
        subscriber.subscribe(
				            	data => this.goToMemberRegister(data),
				            	error => console.log(this.loghdr + "===> Error getting teams from server: ", error),
				            	() => console.log(this.loghdr + " <=== Received news from server. <====")
				            );     	

     }
    
    goToMemberRegister(data)
    {
    	console.log(this.loghdr + "->" + "goToMemberRegister(), data: ", data);
    	this._dataService.dsTeams = data;
    	this._router.navigate( ['MemberRegister', {}] );
    }

}