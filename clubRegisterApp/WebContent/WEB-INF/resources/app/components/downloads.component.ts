/**
 * Created by odalybr on 08/04/2016.
 */
import { Component } from '@angular/core';

@Component({
    //templateUrl: 'app/htmltemplates/downloads.component.html'
    template: `
				<div id="wrap">
				    <div class="container t1">
				        <div class="row">
				            <div class="col-md-1"></div>
				            <div class="col-md-8">
				                <div class="panel">
				                    <div class="panel-heading avenue-heading">
				                        <strong>Documentation Downloads 2016/17</strong>
				                    </div>
				                    <div class="panel-body avenue-body">
				                        <table class="table-condensed table-bordered" style="background-color:#E6E3E3;">
				                            <thead>
				                            <tr class="bg-primary avenue-heading">
				                                <th><i class="fa fa-list-ol"></i> Number</th>
				                                <th><i class="fa fa-file-text"></i> Document Title</th>
				                                <th><i class="fa fa-link"></i> Download Link</th>
				                            </tr>
				                            </thead>
				                            <tbody class="avenue-body">
				                            <tr>
				                                <th scope="row">1</th>
				                                <td>Coaches Code of Conduct</td>
				                                <td align="center">
				                                	<a href="resources/docs/Coaches Code of Conduct.doc">
				                                		<img src="images/Sheet_of_paper.png" alt="Coches Code of Conduct" height="20px"/>
				                                	</a>
				                                </td>
				                            </tr>
				                            <tr>
				                                <th scope="row">2</th>
				                                <td>200 Club Draw - 2016 Form</td>
				                                <td align="center">
				                                	<a href="resources/docs/2016 New Standing Order - Full Payment Form.doc">
				                                		<img src="images/Sheet_of_paper.png" alt="200 Club Draw Form" height="20px"/>
				                                	</a>
				                                </td>
				                            </tr>
				                            <tr>
				                                <th scope="row">3</th>
				                                <td>FAI's Player Development Plan</td>
				                                <td align="center">
				                                	<a href="resources/docs/Player Development Plan.pdf">
				                                		<img src="resources/docs/FAI Plan.PNG" alt="" height="20px"/>
				                                	</a>
				                                </td>
				                            </tr>
				                            <tr>
				                                <th scope="row">4</th>
				                                <td>2016 CSSL Registration form</td>
				                                <td align="center">
				                                	<a href="resources/docs/CSSL 2016 IndividualRegForm.pdf">
				                                		<img src="resources/docs/regform-icon.png" alt="" height="20px"/>
				                                	</a>
				                                </td>
				                            </tr>
				                            <tr>
				                                <th scope="row">5</th>
				                                <td>2016 CSSL Non-national Registration form</td>
				                                <td align="center">
				                                	<a href="resources/docs/CSSL_2016_Non_Nat_RegForm.pdf">
				                                		<img src="resources/docs/application_icon.png" alt="" height="20px"/>
				                                	</a>
				                                </td>
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

export class DownloadsComponent {

}