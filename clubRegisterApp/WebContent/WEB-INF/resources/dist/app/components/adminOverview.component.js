System.register(['@angular/core', '../services/session-data.service'], function(exports_1, context_1) {
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
    var core_1, session_data_service_1;
    var AdminOverviewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (session_data_service_1_1) {
                session_data_service_1 = session_data_service_1_1;
            }],
        execute: function() {
            AdminOverviewComponent = (function () {
                function AdminOverviewComponent(_dataService) {
                    this._dataService = _dataService;
                }
                AdminOverviewComponent = __decorate([
                    core_1.Component({
                        //templateUrl: 'app/htmltemplates/adminOverview.component.html'
                        template: "\n\t\t\t<div class=\"container t1\">\n\n\t\t\t<div class=\"panel\" style=\"margin-right:30px;\">\n\t\t\t\t<div class=\"panel-heading avenue-heading\" style=\"font-size:20px;\">\n\t\t\t\t\tWelcome <strong>{{_dataService.dsCurrentUser.username}}}</strong> to the Avenue United Administration Portal\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body avenue-body\">\n\t\t\t\t\t<img src=\"resources/images/user-male-icon.png\" align=\"left\" HSPACE=\"5\" VSPACE=\"5\" height=\"200px\" width=\"auto\"/>\n\t\t\t\t\t<img src=\"resources/images/user-female-icon.png\" align=\"right\" HSPACE=\"5\" VSPACE=\"5\" height=\"200px\" width=\"auto\"/>\n\n\t\t\t\t\tThe administration portal provides club members with a way to manage the part of the club they are affiliated with. \n\t\t\t\t\tYour ability to perform tasks will be dependent on your access rights. People holding certain office within the club\n\t\t\t\t\twill be given appropriate access rights to allow them to manage details according to that office. For instance, a manager\n\t\t\t\t\tof a team will have access to manage his/her squad details but will not have access to delete members from the register.\n\n\t\t\t\t\tA list of functions you can perform are as follows:\n\n\t\t\t\t\t<h4>Team Manager:</h4>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>Setup your squad</li>\n\t\t\t\t\t\t<li>Add, remove, edit members of your squad</li>\n\t\t\t\t\t\t<li>Upload fixtures and results for your team</li>\n\t\t\t\t\t\t<li>Upload match reports and news stories</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<h4>Club Secretary:</h4>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>Monitor the club register of all club members</li>\n\t\t\t\t\t\t<li>Run reports on feed paid, per team, and individuals</li>\n\t\t\t\t\t\t<li>Upload fixtures and results for any team</li>\n\t\t\t\t\t\t<li>Upload match reports and news stories</li>\n\t\t\t\t\t\t<li>Upload upcoming events</li>\n\t\t\t\t\t\t<li>Receive email via the website</li>\n\t\t\t\t\t\t<li>Contact other members via the website, e.g. send an email to a team manager</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div> <!-- end panel -->\n\t\t    \t\n\t\t</div> <!--  End of container t1 -->\n\t\t"
                    }), 
                    __metadata('design:paramtypes', [session_data_service_1.SessionDataService])
                ], AdminOverviewComponent);
                return AdminOverviewComponent;
            }());
            exports_1("AdminOverviewComponent", AdminOverviewComponent);
        }
    }
});

//# sourceMappingURL=adminOverview.component.js.map
