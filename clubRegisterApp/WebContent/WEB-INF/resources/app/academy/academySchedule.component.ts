import { Component } from '@angular/core';

@Component({
	template: `
	<div id="wrap">
		<div class="container t1">
			<div class="row">
				<div class="col-md-1">
				</div>
				<div class="col-md-10">
					<div class="panel">
						<div class="panel-heading avenue-heading">
							<strong>Avenue United Academy latest schedule:</strong>
						</div>
						<div class="panel-body avenue-body">
							<img [src]='image' height="100" width="auto" alt="Avenue Academy" align="left" HSPACE="5" VSPACE="5"/>
							The 2016/2017 Avenue United Academy will begin on September 10th. To secure a place for your child, please fill out the 
							registration form under the 'Registration' section and return it to Helene Griffith our Academy Director. Alternatively, 
							the form can be handed in on the first morning of the Academy or given in beforehand to a club officer.
						</div>
					</div>
				</div> <!--  end col -->
			</div> <!-- end row -->
			
		</div> <!--  End of container t1 -->
	</div>`,
	styles: [ `
			.la
			{
				max-height: 100;
				max-width: 100;
			}
		`]
})

export class AcademyScheduleComponent {
	image = "resources/images/academy/avenue-academy-15.1.jpg";
}