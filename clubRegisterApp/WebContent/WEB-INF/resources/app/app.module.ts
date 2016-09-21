    import { NgModule }      from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { FormsModule }   from '@angular/forms';
    import { HttpModule, Http }    from '@angular/http';
    
    import { AppComponent }  from './app.component';
    import { routing,
             appRoutingProviders }  from './router-config';
             
	import { TabView }         from 'primeng/primeng';
	import { TabPanel }        from 'primeng/primeng';
	import { Checkbox }        from 'primeng/primeng';
	import { Growl }           from 'primeng/primeng';
	import { Message }         from 'primeng/primeng';
             
    import { HomeComponent }      from './components/home.component';
    import { SessionDataService } from './services/session-data.service';
    import { LoggerService }      from './services/logger.service';
    import { CommonService }      from './services/common.service';
    import { NewsComponent }      from './components/news.component';
    import { AdvertComponent }    from './components/advert.component';
    import { SponsorsComponent }  from './components/sponsors.component';
    import { Slide }              from './components/slide.component';
    import { Carousel }           from './components/carousel.component';
    import { FindUsComponent }    from './components/findUs.component';
    import { ContacteUsComponent } from './components/contactUs.component';
    import { ClubHistoryComponent } from './components/clubHistory.component';
    import { DownloadsComponent } from './components/downloads.component';
    import { LinksComponent }     from './components/links.component';
    import { LoginComponent }     from './components/login.component';
    import { MessageUsComponent } from './components/messageUs.component';
    import { LeagueRepublicResults } from './components/leagueRepublicResults.component';
    import { LeagueRepublicTable } from './components/leagueRepublicTable.component';
    import { ViewTeam }            from './components/viewTeam.component';
    import { FarViewComponent }    from './components/far.component';
    import { MerchandiseComponent } from './components/merchandise.component';
    import { PhotosComponent }     from './components/photos.component';
    import { AcademyHomeComponent } from './academy/academyHome.component';
    import { AcademyCoachesComponent } from './academy/academyCoaches.component';
    import { AcademyMemberPaymentComponent } from './academy/academyMemberPayment.component';
    import { AcademyOverviewComponent } from './academy/academyOverview.component';
    import { AcademyRegistrationComponent } from './academy/academyRegistration.component';
    import { AcademyScheduleComponent } from './academy/academySchedule.component';
    import { AcademyTandCComponent } from './academy/academyTandC.component';
    import { AcademyRegistrationService } from './academy/academyRegistration.service';
    import { AdminHomeComponent } from './admin/adminHome.component';
    import { AdminMembersComponent } from './admin/adminMembers.component';
    import { AdminOverviewComponent } from './admin/adminOverview.component';
    import { AdminTutorialsComponent } from './admin/adminTutorials.component';
    import { AdminUsersComponent } from './admin/adminUsers.component';
    
    
    @NgModule({
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
      ],
      declarations: [
		TabView,
		TabPanel,
		Checkbox,
		Growl,
        AppComponent,
        HomeComponent,
        NewsComponent,
        AdvertComponent,
        SponsorsComponent,
        Slide,
        Carousel,
        FindUsComponent,
        ContacteUsComponent,
        MessageUsComponent,
        ClubHistoryComponent,
        DownloadsComponent,
        LinksComponent,
        LoginComponent,
        LeagueRepublicResults,
        LeagueRepublicTable,
        ViewTeam,
        FarViewComponent,
        MerchandiseComponent,
        PhotosComponent,
        AcademyHomeComponent,
        AcademyCoachesComponent,
        AcademyMemberPaymentComponent,
        AcademyOverviewComponent,
        AcademyRegistrationComponent,
        AcademyScheduleComponent,
        AcademyTandCComponent,
        AdminHomeComponent,
        AdminMembersComponent,
        AdminOverviewComponent,
        AdminTutorialsComponent,
        AdminUsersComponent
      ],
      providers: [
        appRoutingProviders,
        SessionDataService,
        LoggerService,
        CommonService,
        AcademyRegistrationService
      ],
      bootstrap: [ AppComponent ]
    })

export class AppModule {
}