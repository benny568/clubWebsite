/**
 * Created by odalybr on 08/04/2016.
 */
import { Component } from '@angular/core';

@Component({
    //templateUrl: 'app/htmltemplates/findUs.component.html'
    template: `
				<div class="container">
				    <div class="row">
				        <div class="col-sm-6">
				
				            <div class="panel">
				                <div class="panel-heading avenue-heading">
				                    <i class="fa fa-bus"></i><i class="fa fa-car" style="float:right"></i>
				                    <h3>How to find us:</h3>
				                </div>
				                <div class="panel-body avenue-body">
				                    Take exit 13 off the M18 motorway (Limerick - Galway) for Ennis town.
				                    Take a left at the exit roundabout for Ennis town.
				                    At the next roundabout take a right. Take the first right 100m after the roundabout.
				                    Turn left into the Avenue United grounds.
				                </div>
				            </div>
				
				        </div> <!-- end col -->
				        <div class="col-sm-6">
				            <iframe width="100%" height="450"
				                    frameborder="0" style="border:0"
				                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1204.552290771011!2d-8.959630757672151!3d52
				                    	.85651802772733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b6d3fd88608c3%3A0xe149b3
				                    	68df7aa3a1!2sInnovation+House%2C+Roslevan+Shopping+Centre%2C+Tulla+Rd%2C+Ennis%2C+Co.+Clare!5e0
				                    	!3m2!1sen!2sie!4v1437242650719">
				            </iframe>
				        </div> <!-- end col -->
				    </div> <!-- end row -->
				</div>
    `
})

export class FindUsComponent {

}