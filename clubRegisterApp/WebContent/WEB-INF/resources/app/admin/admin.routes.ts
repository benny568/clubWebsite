import { RouterConfig }            from '@angular/router';
import { Location }                from '@angular/common';

import { AdminHomeComponent }      from './adminHome.component';
import { AdminOverviewComponent }  from './adminOverview.component';
import { AdminTutorialsComponent } from './adminTutorials.component';
import { AdminMembersComponent }   from './adminMembers.component';
import { AdminUsersComponent }     from './adminUsers.component';

export const adminRouterConfig: RouterConfig = [
	{ 
		path: 'adminHome', 
		component: AdminHomeComponent
	},
	{
		path: 'adminOverview',
		component: AdminOverviewComponent
	},
	{
		path: 'adminTutorials',
		component: AdminTutorialsComponent  
	}
	,
	{
		path: 'members',
		component: AdminMembersComponent  
	},
	{
		path: 'users',
		component: AdminUsersComponent
	}
];