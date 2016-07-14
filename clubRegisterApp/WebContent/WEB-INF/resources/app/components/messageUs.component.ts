/**
 * Created by odalybr on 08/04/2016.
 */
import { Component } from '@angular/core';

@Component({
    //templateUrl: 'app/htmltemplates/messageUs.component.html'
    template: `
				<div class="vertical-middle">
				    <div class="container">
				        <div class="panel" style="max-width:500px;margin-left:auto;margin-right:auto;">
				            <div class="panel-heading avenue-heading">
				                Contact Form
				            </div>
				            <div ng-controller="MessageUsController" class="panel-body avenue-body">
				                <form ng-submit="submit(contactform)" name="contactform" method="post" action="" class="form-horizontal" role="form">
				                    <div class="form-group" ng-class="{ 'has-error': contactform.inputName.$invalid && submitted }">
				                        <label for="inputName" class="col-lg-2 control-label">Name</label>
				                        <div class="col-lg-10">
				                            <input ng-model="formData.name" type="text" class="form-control" id="inputName" name="inputName" placeholder="Your Name" required>
				                        </div>
				                    </div>
				                    <div class="form-group" ng-class="{ 'has-error': contactform.inputEmail.$invalid && submitted }">
				                        <label for="inputEmail" class="col-lg-2 control-label">Email</label>
				                        <div class="col-lg-10">
				                            <input ng-model="formData.senderAddress" type="email" class="form-control" id="inputEmail" name="inputEmail" placeholder="Your Email" required>
				                        </div>
				                    </div>
				                    <div class="form-group" ng-class="{ 'has-error': contactform.inputSubject.$invalid && submitted }">
				                        <label for="inputSubject" class="col-lg-2 control-label">Subject</label>
				                        <div class="col-lg-10">
				                            <input ng-model="formData.subject" type="text" class="form-control" id="inputSubject" name="inputSubject" placeholder="Subject Message" required>
				                        </div>
				                    </div>
				                    <div class="form-group" ng-class="{ 'has-error': contactform.inputMessage.$invalid && submitted }">
				                        <label for="inputMessage" class="col-lg-2 control-label">Message</label>
				                        <div class="col-lg-10">
				                            <textarea ng-model="formData.message" class="form-control" rows="4" id="inputMessage" name="inputMessage" placeholder="Your message..." required></textarea>
				                        </div>
				                    </div>
				                    <div class="form-group">
				                        <div class="col-lg-offset-2 col-lg-10">
				                            <button type="submit" class="btn btn-default" ng-disabled="submitButtonDisabled">
				                                Send Message
				                            </button>
				                        </div>
				                    </div>
				                </form>
				                <p ng-class="result" style="padding: 15px; margin: 0;">{{ resultMessage }}</p>
				            </div>
				        </div>
				    </div>
				</div>
    `
})

export class MessageUsComponent {

}