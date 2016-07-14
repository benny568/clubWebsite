System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MessageUsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MessageUsComponent = (function () {
                function MessageUsComponent() {
                }
                MessageUsComponent = __decorate([
                    core_1.Component({
                        //templateUrl: 'app/htmltemplates/messageUs.component.html'
                        template: "\n\t\t\t\t<div class=\"vertical-middle\">\n\t\t\t\t    <div class=\"container\">\n\t\t\t\t        <div class=\"panel\" style=\"max-width:500px;margin-left:auto;margin-right:auto;\">\n\t\t\t\t            <div class=\"panel-heading avenue-heading\">\n\t\t\t\t                Contact Form\n\t\t\t\t            </div>\n\t\t\t\t            <div ng-controller=\"MessageUsController\" class=\"panel-body avenue-body\">\n\t\t\t\t                <form ng-submit=\"submit(contactform)\" name=\"contactform\" method=\"post\" action=\"\" class=\"form-horizontal\" role=\"form\">\n\t\t\t\t                    <div class=\"form-group\" ng-class=\"{ 'has-error': contactform.inputName.$invalid && submitted }\">\n\t\t\t\t                        <label for=\"inputName\" class=\"col-lg-2 control-label\">Name</label>\n\t\t\t\t                        <div class=\"col-lg-10\">\n\t\t\t\t                            <input ng-model=\"formData.name\" type=\"text\" class=\"form-control\" id=\"inputName\" name=\"inputName\" placeholder=\"Your Name\" required>\n\t\t\t\t                        </div>\n\t\t\t\t                    </div>\n\t\t\t\t                    <div class=\"form-group\" ng-class=\"{ 'has-error': contactform.inputEmail.$invalid && submitted }\">\n\t\t\t\t                        <label for=\"inputEmail\" class=\"col-lg-2 control-label\">Email</label>\n\t\t\t\t                        <div class=\"col-lg-10\">\n\t\t\t\t                            <input ng-model=\"formData.senderAddress\" type=\"email\" class=\"form-control\" id=\"inputEmail\" name=\"inputEmail\" placeholder=\"Your Email\" required>\n\t\t\t\t                        </div>\n\t\t\t\t                    </div>\n\t\t\t\t                    <div class=\"form-group\" ng-class=\"{ 'has-error': contactform.inputSubject.$invalid && submitted }\">\n\t\t\t\t                        <label for=\"inputSubject\" class=\"col-lg-2 control-label\">Subject</label>\n\t\t\t\t                        <div class=\"col-lg-10\">\n\t\t\t\t                            <input ng-model=\"formData.subject\" type=\"text\" class=\"form-control\" id=\"inputSubject\" name=\"inputSubject\" placeholder=\"Subject Message\" required>\n\t\t\t\t                        </div>\n\t\t\t\t                    </div>\n\t\t\t\t                    <div class=\"form-group\" ng-class=\"{ 'has-error': contactform.inputMessage.$invalid && submitted }\">\n\t\t\t\t                        <label for=\"inputMessage\" class=\"col-lg-2 control-label\">Message</label>\n\t\t\t\t                        <div class=\"col-lg-10\">\n\t\t\t\t                            <textarea ng-model=\"formData.message\" class=\"form-control\" rows=\"4\" id=\"inputMessage\" name=\"inputMessage\" placeholder=\"Your message...\" required></textarea>\n\t\t\t\t                        </div>\n\t\t\t\t                    </div>\n\t\t\t\t                    <div class=\"form-group\">\n\t\t\t\t                        <div class=\"col-lg-offset-2 col-lg-10\">\n\t\t\t\t                            <button type=\"submit\" class=\"btn btn-default\" ng-disabled=\"submitButtonDisabled\">\n\t\t\t\t                                Send Message\n\t\t\t\t                            </button>\n\t\t\t\t                        </div>\n\t\t\t\t                    </div>\n\t\t\t\t                </form>\n\t\t\t\t                <p ng-class=\"result\" style=\"padding: 15px; margin: 0;\">{{ resultMessage }}</p>\n\t\t\t\t            </div>\n\t\t\t\t        </div>\n\t\t\t\t    </div>\n\t\t\t\t</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageUsComponent);
                return MessageUsComponent;
            }());
            exports_1("MessageUsComponent", MessageUsComponent);
        }
    }
});
//# sourceMappingURL=messageUs.component.js.map