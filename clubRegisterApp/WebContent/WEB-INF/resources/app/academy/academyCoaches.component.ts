import { Component } from '@angular/core';

@Component({
	template:
			`
				<div id="wrap">
					<div class="container t1">
						<div class="row">
							<div class="col-md-1">
							</div>
							<div class="col-md-10">
								<div class="panel">
									<div class="panel-heading avenue-heading">
										<strong>Avenue United Academy Coaches for 2015/2016</strong>
									</div>
									<div class="panel-body avenue-body">
										<table class="table-condensed table-bordered" style="background-color:#E6E3E3;">
								  <thead>
									<tr class="bg-primary avenue-heading">
									  <th><i class="fa fa-child"></i> Age Group</th>
									  <th><i class="fa fa-calendar"></i> Year of Birth</th>
									  <th><i class="fa fa-user"></i> Coaches</th>
									</tr>
								  </thead>
								  <tbody class="avenue-body">
									<tr>
									  <th scope="row">4-5 years</th>
									  <td>2012 / 2011</td>
									  <td>TBD</td>
									</tr>
									<tr>
									  <th scope="row">6 years</th>
									  <td>2010's</td>
									  <td>TBD</td>
									</tr>
									<tr>
									  <th scope="row">7 years</th>
									  <td>2009's</td>
									  <td>Ray Crowley, Parvin Chad</td>
									</tr>
									<tr>
									  <th scope="row">8 years</th>
									  <td>2008's</td>
									  <td>Alan Ball, Paul Roche, Dermot Daly</td>
									</tr>
									<tr>
									  <th scope="row">9 years</th>
									  <td>2007's</td>
									  <td>Brendan O'Daly, Killian O'Daly</td>
									</tr>
									<tr>
									  <th scope="row">10 years</th>
									  <td>2006's</td>
									  <td>John O'Malley, Noel Purtill</td>
									</tr>
								  </tbody>
								</table>
									</div>
								</div>
							</div> <!--  end col -->
						</div> <!-- end row -->
						
					</div> <!--  End of container t1 -->
				</div>
			`
})

export class AcademyCoachesComponent {
		
}