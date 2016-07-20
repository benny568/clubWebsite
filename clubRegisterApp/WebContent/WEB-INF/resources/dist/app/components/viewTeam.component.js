System.register(['@angular/core', '../services/session-data.service', "./leagueRepublicTable.component"], function(exports_1, context_1) {
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
    var core_1, session_data_service_1, leagueRepublicTable_component_1;
    var ViewTeam;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (session_data_service_1_1) {
                session_data_service_1 = session_data_service_1_1;
            },
            function (leagueRepublicTable_component_1_1) {
                leagueRepublicTable_component_1 = leagueRepublicTable_component_1_1;
            }],
        execute: function() {
            ViewTeam = (function () {
                function ViewTeam(_dataService) {
                    this._dataService = _dataService;
                }
                ViewTeam = __decorate([
                    core_1.Component({
                        //templateUrl: 'app/htmltemplates/viewTeam.component.html',
                        template: "\n\t\t\t<div id=\"wrap\">\n\t\t\t\t\t<div class=\"container t1\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"panel\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-heading avenue-heading\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-bullhorn\"></i> NOTICE BOARD:\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"panel-body avenue-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div style=\"margin:10px;\">{{_dataService.dsCurrentTeam.noticeboard}}</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div> <!-- end col -->\n\t\t\t\t\t\t</div> <!-- end row -->\n\t\t\t\t\t    \t<div class=\"row\">\n\t\t\t\t\t    \t\t<div class=\"col-md-5\">\n\t\t\t\t\t    \t\t\t<div class=\"panel\">\n\t\t\t\t\t\t    \t\t\t<div class=\"panel-heading avenue-heading\">\n\t\t\t\t\t\t    \t\t\t\tTeam Details:\n\t\t\t\t\t\t    \t\t\t</div>\n\t\t\t\t\t\t    \t\t\t<div class=\"panel-body avenue-body\">\n\t\t\t\t\t\t    \t\t\t\t<table class=\"table table-condensed\">\n\t\t\t\t\t\t    \t\t\t\t\t<tr style=\"color:white;\">\n\t\t\t\t\t\t    \t\t\t\t\t\t<th>Managers:</th>\n\t\t\t\t\t\t    \t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t    \t\t\t\t\t\t<div *ngFor=\"#mem of _dataService.dsTeamMembers\">\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t<div *ngIf=\"mem.position == 0\">\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t{{mem.name}}\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<div style=\"float:right;\">\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t\t<i class=\"fa fa-phone\"></i> {{mem.phone}}\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\n\t\t\t\t\t\t\t\t\t    \t\t\t\t</div>\n\t\t\t\t\t\t    \t\t\t\t\t\t</td>\n\t\t\t\t\t\t \t\t\t\t\t\t</tr>\n\t\t\t\t\t\t \t\t\t\t\t\t<tr style=\"color:white;\">\n\t\t\t\t\t\t \t\t\t\t\t\t\t<th>Captian:</th>\n\t\t\t\t\t\t \t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t \t\t\t\t\t\t\t\t<div *ngFor=\"#mem of _dataService.dsTeamMembers\">\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t<div *ngIf=\"mem.position == 99\">{{mem.name}}</div>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t</div>\n\t\t\t\t\t\t \t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t \t\t\t\t\t\t</tr>\n\t\t\t\t\t\t \t\t\t\t\t</table>\n\t\t\t\t\t\t    \t\t\t</div>\n\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t    \t\t</div> <!-- end col -->\n\t\t\t\t\t    \t\t<div class=\"col-md-7\" style=\"\">\n\t\t\t\t\t    \t\t\t<div class=\"panel\">\n\t\t\t\t\t\t    \t\t\t<div class=\"panel-heading avenue-heading\">\n\t\t\t\t\t\t    \t\t\t\tTable:\n\t\t\t\t\t\t    \t\t\t</div>\n\t\t\t\t\t\t    \t\t\t<div class=\"panel-body avenue-body\">\n\t\t\t\t\t\t    \t\t\t\n\t\t\t\t\t\t    \t\t\t\t<lr-table></lr-table>\n\t\t\n\t\t\t\t\t\t    \t\t\t</div>\n\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t    \t\t</div> <!-- end col -->\n\t\t\t\t\t    \t</div> <!-- end row -->\n\t\t\t\t\t    \t\n\t\t                    <div class=\"row\">\n\t\t\t\t\t    \t\t<div class=\"col-md-5\">\n\t\t\t\t\t    \t\t\t<div class=\"panel\">\n\t\t\t\t\t\t    \t\t\t<div class=\"panel-heading avenue-heading\">\n\t\t\t\t\t\t    \t\t\t\tSquad Details:\n\t\t\t\t\t\t    \t\t\t</div>\n\t\t\t\t\t\t    \t\t\t<div class=\"panel-body avenue-body\">\n\t\t\t\t\t\t    \t\t\t\t<div *ngFor=\"#mem of _dataService.dsTeamMembers; #i=index;\">\n\t\t\t\t\t\t    \t\t\t\t\t<div *ngIf=\"mem.position != 0\"> \n\t\t\t\t\t\t\t\t\t\t\t\t\t<div (click)=\"_dataService.setCurrentMember( mem )\" style=\"cursor:pointer;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<font color=\"white\">{{i+1}}: {{mem.name}}</font>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t    \t\t\t</div> <!-- end panel body -->\n\t\t\t\t\t\t    \t\t</div> <!-- end panel -->\n\t\t\t\t\t    \t\t</div> <!-- end col -->\n\t\t\t\t\t    \t\t\n\t\t\t\t\t    \t\t<div class=\"col-md-7\" *ngIf=\"_dataService.displayMember\">\n\t\t\t\t\t    \t\t\t<div class=\"panel\">\n\t\t\t\t\t    \t\t\t\t<div class=\"panel-heading avenue-heading\">\n\t\t\t\t\t    \t\t\t\t\t<span style=\"font-weight:bold\">{{_dataService.dsCurrentMember.name}}</span>\n\t\t\t\t\t    \t\t\t\t</div>\n\t\t\t\t\t    \t\t\t\t<div class=\"panel-body avenue-body\">\n\t\t\t\t\t    \t\t\t\t\t<img src='{{_dataService.dsCurrentMember.photo}}' align=\"left\" HSPACE=\"5\" VSPACE=\"5\" width=\"40%\">\n\t\t\t\t\t    \t\t\t\t\t<div>\n\t\t\t\t\t    \t\t\t\t\t\t<br/><span class=\"avenue-yellow-text\">Age: </span>\n\t\t\t\t\t    \t\t\t\t\t\t<span style=\"color:#D1CDCD\">{{_dataService.dsCurrentMember.age}}</span> <br/>\n\t\t\t\t\t\t    \t\t\t\t\t<span class=\"avenue-yellow-text\">Position: </span>\n\t\t\t\t\t\t    \t\t\t\t\t<span style=\"color:#D1CDCD\">{{_dataService.dsCurrentMember.position}}</span> <br/>\n\t\t\t\t\t\t    \t\t\t\t\t<span class=\"avenue-yellow-text\">Favourite Team: </span>\n\t\t\t\t\t\t    \t\t\t\t\t<span style=\"color:#D1CDCD\">{{_dataService.dsCurrentMember.favteam}}</span> <br/>\n\t\t\t\t\t\t    \t\t\t\t\t<span class=\"avenue-yellow-text\">Favourite Player: </span>\n\t\t\t\t\t\t    \t\t\t\t\t<span style=\"color:#D1CDCD\">{{_dataService.dsCurrentMember.favplayer}}</span><br/><br/>\n\t\t\t\t\t\t    \t\t\t\t\t<span class=\"avenue-yellow-text\">Personal Achievements:</span><br/>\n\t\t\t\t\t\t    \t\t\t\t\t\t{{_dataService.dsCurrentMember.achievements}}\n\t\t\t\t\t    \t\t\t\t\t</div>\n\t\t\n\t\t\t\t\t    \t\t\t\t</div>\n\t\t\t\t\t    \t\t\t</div>\n\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t    \t\t\n\t\t\t\t\t    \t</div> <!-- end row -->\n\t\t\t\t\t    \t\n\t\t\t\t\t</div> <!--  End of container t1 -->\n\t\t\t\t</div>\n    ",
                        directives: [leagueRepublicTable_component_1.LeagueRepublicTable]
                    }), 
                    __metadata('design:paramtypes', [session_data_service_1.SessionDataService])
                ], ViewTeam);
                return ViewTeam;
            }());
            exports_1("ViewTeam", ViewTeam);
        }
    }
});

//# sourceMappingURL=viewTeam.component.js.map
