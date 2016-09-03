import { RouterConfig, Route }     from '@angular/router';

import { academyRouterConfig }     from './academy/academy.routes';

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
import { FleadhComponent }		   from "./components/fleadh.component";
import { PayNowComponent }		   from "./components/payNow.component";
import { AdminHomeComponent }	   from "./components/adminHome.component";
import { AdminOverviewComponent }  from "./components/adminOverview.component";
import { MemberRegisterComponent } from "./components/memberRegister.component";
import { EditMemberComponent }     from "./components/editMember.component";
import { BookingStage1Component }  from "./booking/booking-stage1.component";
import { BookingStage3Component }  from "./booking/booking-stage3.component";
import { BookingStage4Component }  from "./booking/booking-stage4.component";
import { SuccessComponent }        from "./booking/success.component";
import { AcademyOverviewComponent } from './academy/academyOverview.component';

const indexRoute:Route = {
		path: "",
		component: HomeComponent
};

const fallbackRoute:Route = {
		path: '**',
		component: HomeComponent
};

export const routeConfig: RouterConfig = [
                                     { path: '', component: HomeComponent },
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
                                     { path: 'admin', component: AdminHomeComponent },
                                     { path: 'adminOverview', component: AdminOverviewComponent },
                                     { path: 'memberRegister', component: MemberRegisterComponent },
                                     { path: 'editMember', component: EditMemberComponent },
                                     { path: 'success', component: SuccessComponent },
                                     ...academyRouterConfig
                                   ];

