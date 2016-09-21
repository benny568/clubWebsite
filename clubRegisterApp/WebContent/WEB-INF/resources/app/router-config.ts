import { ModuleWithProviders }     from '@angular/core';
import { Routes, RouterModule }    from '@angular/router';

import { academyRoutes }           from './academy/academy.routes';
import { adminRoutes }             from './admin/admin.routes';

import { ViewTeam }                from './components/viewTeam.component';
import { HomeComponent }           from "./components/home.component";
import { FarViewComponent }        from "./components/far.component";
import { FindUsComponent }         from "./components/findUs.component";
import { MessageUsComponent }      from "./components/messageUs.component";
import { ContacteUsComponent }     from "./components/contactUs.component";
import { DownloadsComponent }      from "./components/downloads.component";
import { LinksComponent }          from "./components/links.component";
import { AcademyHomeComponent }    from "./academy/academyHome.component";
import { ClubHistoryComponent }    from "./components/clubHistory.component";
import { MerchandiseComponent }    from "./components/merchandise.component";
import { LoginComponent }          from "./components/login.component";
import { PhotosComponent }		   from "./components/photos.component";
import { AdminHomeComponent }	   from "./admin/adminHome.component";
import { AdminOverviewComponent }  from "./admin/adminOverview.component";
import { AdminMembersComponent }   from "./admin/adminMembers.component";
import { AdminUsersComponent }     from "./admin/adminUsers.component";
import { AcademyOverviewComponent } from './academy/academyOverview.component';

const routes: Routes = [
                         { path: 'findUs', component: FindUsComponent },
                         { path: 'contactUs', component: ContacteUsComponent },
                         { path: 'downloads', component: DownloadsComponent },
                         { path: 'links', component: LinksComponent },
                         { path: 'messageUs', component: MessageUsComponent },
                         { path: 'viewTeam', component: ViewTeam },
                         { path: 'farView', component: FarViewComponent },
                         { path: 'clubHistory', component: ClubHistoryComponent },
                         { path: 'merchandise', component: MerchandiseComponent },
                         { path: 'media/:cat1/:cat2/:cat3', component: PhotosComponent },
                         { path: 'login', component: LoginComponent },
                         ...academyRoutes,
                         ...adminRoutes,
                         { path: '', component: HomeComponent }
                         //{ path: '**', component: PageNotFoundComponent }
                       ];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);