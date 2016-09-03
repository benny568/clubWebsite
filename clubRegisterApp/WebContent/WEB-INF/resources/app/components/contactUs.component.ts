/**
 * Created by odalybr on 08/04/2016.
 */
import { Component } from '@angular/core';

@Component({
    //templateUrl: 'app/htmltemplates/contactUs.component.html'
    template: `
				<div class="container">
				    <div class="row">
				        <div class="col-sm-6" style="padding-left:50px;">
				
				            <div class="panel" style="width:auto;">
				                <div class="panel-heading avenue-heading">
				                    <h3>Avenue United contact details</h3>
				                </div>
				            </div>
				            <!-- 				<div class="panel-body avenue-body">
				                                Avenue United current list of elected officers:
				                                <div class="blankspace"></div> -->
				            <br/><br/>
				            <table class="table table-bordered" style="background-color:#E6E3E3;">
				                <thead>
				                <tr class="bg-primary avenue-heading">
				                    <th><i class="fa fa-futbol-o"></i> Office</th>
				                    <th style="min-width:140px;"><i class="fa fa-user"></i> Name</th>
				                    <th style="min-width:120px;"><i class="fa fa-phone"></i> Phone</th>
				                    <th><i class="fa fa-envelope"></i> Email</th>
				                </tr>
				                </thead>
				                <tbody class="avenue-body">
				                <tr>
				                    <th scope="row">Hon. President</th>
				                    <td>Gerard O'Grady</td>
				                    <td></td>
				                    <td></td>
				                </tr>
				                <tr>
				                    <th scope="row">Chairman</th>
				                    <td>Geroid Mannion</td>
				                    <td>886 8120055</td>
				                    <td>gm@gmail.com</td>
				                </tr>
				                <tr>
				                    <th scope="row">Vice Chairman</th>
				                    <td>John O'Malley</td>
				                    <td></td>
				                    <td></td>
				                </tr>
				                <tr>
				                    <th scope="row">Secretary</th>
				                    <td>Nigel Braddish</td>
				                    <td>087 2873996</td>
				                    <td>avenueunited@gmail.com</td>
				                </tr>
				                <tr>
				                    <th scope="row">Treasurer</th>
				                    <td>Damien Barrow</td>
				                    <td>087 7982733</td>
				                    <td>Damian@curtinofriel.ie</td>
				                </tr>
				                <tr>
				                    <th scope="row">Academy Director</th>
				                    <td>Helene Griffith</td>
				                    <td>087 8134592</td>
				                    <td>griffith.helene@gmail.com</td>
				                </tr>
				                <tr>
				                    <th scope="row">Junior League Delegate</th>
				                    <td>Noel Purtil</td>
				                    <td>000000</td>
				                    <td></td>
				                </tr>
				                <tr>
				                    <th scope="row">PRO</th>
				                    <td>Rhys Philips</td>
				                    <td>000000</td>
				                    <td></td>
				                </tr>
				                <tr>
				                    <th scope="row">Child Welfare Officer</th>
				                    <td>Pat McDaid</td>
				                    <td>085 8644954</td>
				                    <td>enniscarpets@eircom.net</td>
				                </tr>
				                <tr>
				                    <th scope="row">Webmaster</th>
				                    <td>Brendan O'Daly</td>
				                    <td>087 6470883</td>
				                    <td>odalybr@hotmail.com</td>
				                </tr>
				                <tr>
				                    <th scope="row">Comittee Member</th>
				                    <td>Brian Aherne</td>
				                    <td></td>
				                    <td></td>
				                </tr>
				                <tr>
				                    <th scope="row">Junior A Manager</th>
				                    <td>Richie O'Grady</td>
				                    <td>089 4417679</td>
				                    <td></td>
				                </tr>
				                <tr>
				                    <th scope="row">Junior B Manager</th>
				                    <td>Brendan O'Daly</td>
				                    <td>087 6470883</td>
				                    <td>odalybr@hotmail.com</td>
				                </tr>
				                <tr>
				                    <th scope="row">U18 Manager</th>
				                    <td>Nigel Braddish</td>
				                    <td>087 2873996</td>
				                    <td>avenueunited@gmail.com</td>
				                </tr>
				                <tr>
				                    <th scope="row">U17 Manager</th>
				                    <td></td>
				                    <td></td>
				                    <td></td>
				                </tr>
				                <tr>
				                    <th scope="row">U16A (Red) Manager</th>
				                    <td>Jarlet McCabe, Pat McDaid</td>
				                    <td>087 6520523, 085 8644954</td>
				                    <td>jarlath.mccabe@genworth.com, enniscarpets@eircom.net</td>
				                </tr>
				                <tr>
				                    <th scope="row">U16B (Yellow) Manager</th>
				                    <td>Joe O'Keeffe, Laurence Ryan, Peter Maddigan</td>
				                    <td>087 2041612, 087 6858167</td>
				                    <td>jokeeffe62@gmail.com</td>
				                </tr>
				                <tr>
				                    <th scope="row">U15 Manager</th>
				                    <td>Enda Meaney</td>
				                    <td>087 2107407</td>
				                    <td>endameaney@eircom.net</td>
				                </tr>
				                <tr>
				                    <th scope="row">U14 Red Manager</th>
				                    <td>Dave Barry, Brian Clohessey</td>
				                    <td>087 9880069, 086 6836022</td>
				                    <td>djamesbarry@hotmail.com</td>
				                </tr>
				                <tr>
				                    <th scope="row">U13 Yellow Manager</th>
				                    <td>Paul Roche , Wayne Ryan</td>
				                    <td>087 9880069, 086 3980548</td>
				                    <td></td>
				                </tr>
				                <tr>
				                    <th scope="row">U13 Red Manager</th>
				                    <td>Albert Hardiman, Ray Crowley</td>
				                    <td>087 1210833, 086 8545802</td>
				                    <td></td>
				                </tr>
				                <tr>
				                    <th scope="row">U13 Yellow Manager</th>
				                    <td>Kevin Lane, Ronan Burke</td>
				                    <td>087 2736235, 086 1627209</td>
				                    <td></td>
				                </tr>
				                <tr>
				                    <th scope="row">U13 Black Manager</th>
				                    <td>Wayne Ryan, Paul Roche</td>
				                    <td>086 3980548, 087 1579002</td>
				                    <td></td>
				                </tr>
				                <tr>
				                    <th scope="row">U12 Yellow Manager</th>
				                    <td>John O Malley</td>
				                    <td>087 2660715</td>
				                    <td></td>
				                </tr>
				                <tr>
				                    <th scope="row">U12 Red Manager</th>
				                    <td>Alan Murphy</td>
				                    <td>086 0747544</td>
				                    <td></td>
				                </tr>
				                <tr>
				                    <th scope="row">U11 Yellow Manager</th>
				                    <td>David Herlihy</td>
				                    <td>086 8516699</td>
				                    <td></td>
				                </tr>
				                <tr>
				                    <th scope="row">U11 White Manager</th>
				                    <td>Leo Herbert</td>
				                    <td>086 8368878</td>
				                    <td></td>
				                </tr>
				                <tr>
				                    <th scope="row">U11 Red Manager</th>
				                    <td>Brian Aherne</td>
				                    <td>087 6932803</td>
				                    <td></td>
				                </tr>
				                <tr>
				                    <th scope="row">U10 Yellow Manager</th>
				                    <td></td>
				                    <td></td>
				                    <td></td>
				                </tr>
				                <tr>
				                    <th scope="row">U10 White Manager</th>
				                    <td></td>
				                    <td></td>
				                    <td></td>
				                </tr>
				                <tr>
				                    <th scope="row">U10 Red Manager</th>
				                    <td></td>
				                    <td></td>
				                    <td></td>
				                </tr>
				                
				                </tbody>
				            </table>
				            <!-- 				</div> end panel body
				                        </div> end panel -->
				
				        </div> <!-- end col -->
				        <div class="col-sm-6">
				
				        </div> <!-- end col -->
				    </div> <!-- end row -->
				
				    <div class="row">
				
				    </div> <!-- end row -->
				</div>
    `
})

export class ContacteUsComponent {

}