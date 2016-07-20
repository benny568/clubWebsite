import { Component }          from '@angular/core';
import { SessionDataService } from '../services/session-data.service';

@Component({
	//templateUrl: 'app/htmltemplates/adminOverview.component.html'
	template: `
			<div class="container t1">

			<div class="panel" style="margin-right:30px;">
				<div class="panel-heading avenue-heading" style="font-size:20px;">
					Welcome <strong>{{_dataService.dsCurrentUser.username}}}</strong> to the Avenue United Administration Portal
				</div>
				<div class="panel-body avenue-body">
					<img src="resources/images/user-male-icon.png" align="left" HSPACE="5" VSPACE="5" height="200px" width="auto"/>
					<img src="resources/images/user-female-icon.png" align="right" HSPACE="5" VSPACE="5" height="200px" width="auto"/>

					The administration portal provides club members with a way to manage the part of the club they are affiliated with. 
					Your ability to perform tasks will be dependent on your access rights. People holding certain office within the club
					will be given appropriate access rights to allow them to manage details according to that office. For instance, a manager
					of a team will have access to manage his/her squad details but will not have access to delete members from the register.

					A list of functions you can perform are as follows:

					<h4>Team Manager:</h4>
					<ul>
						<li>Setup your squad</li>
						<li>Add, remove, edit members of your squad</li>
						<li>Upload fixtures and results for your team</li>
						<li>Upload match reports and news stories</li>
					</ul>
					<h4>Club Secretary:</h4>
					<ul>
						<li>Monitor the club register of all club members</li>
						<li>Run reports on feed paid, per team, and individuals</li>
						<li>Upload fixtures and results for any team</li>
						<li>Upload match reports and news stories</li>
						<li>Upload upcoming events</li>
						<li>Receive email via the website</li>
						<li>Contact other members via the website, e.g. send an email to a team manager</li>
					</ul>
				</div>
			</div> <!-- end panel -->
		    	
		</div> <!--  End of container t1 -->
		`
})

export class AdminOverviewComponent {
	constructor( private _dataService: SessionDataService ) { }
}