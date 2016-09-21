import { Routes, RouterModule }          from '@angular/router';
import { Location }                      from '@angular/common';

import { AcademyHomeComponent }          from './academyHome.component';
import { AcademyOverviewComponent }      from './academyOverview.component';
import { AcademyCoachesComponent }       from './academyCoaches.component';
import { AcademyScheduleComponent }      from './academySchedule.component';
import { AcademyTandCComponent }         from './academyTandC.component';
import { AcademyRegistrationComponent }  from './academyRegistration.component';
import { AcademyMemberPaymentComponent } from './academyMemberPayment.component';

export const academyRoutes: Routes = [
	{ 
		path: 'academyHome', 
		component: AcademyHomeComponent
	},
	{
		path: 'academyOverview',
		component: AcademyOverviewComponent
	},
	{
		path: 'academyCoaches',
		component: AcademyCoachesComponent  
	}
	,
	{
		path: 'academySchedule',
		component: AcademyScheduleComponent  
	},
	{
		path: 'academyTandC',
		component: AcademyTandCComponent
	},
	{
		path: 'academyRegistration',
		component: AcademyRegistrationComponent
	},
	{
		path: 'academyPayment',
		component: AcademyMemberPaymentComponent
	}
];