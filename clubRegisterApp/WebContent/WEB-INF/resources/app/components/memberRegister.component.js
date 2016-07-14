System.register(['@angular/core', '@angular/router', 'ng2-bs3-modal/ng2-bs3-modal', '../services/session-data.service', '../services/logger.service', '../dao/member'], function(exports_1, context_1) {
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
    var core_1, router_1, ng2_bs3_modal_1, ng2_bs3_modal_2, session_data_service_1, logger_service_1, member_1;
    var MemberRegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_bs3_modal_1_1) {
                ng2_bs3_modal_1 = ng2_bs3_modal_1_1;
                ng2_bs3_modal_2 = ng2_bs3_modal_1_1;
            },
            function (session_data_service_1_1) {
                session_data_service_1 = session_data_service_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (member_1_1) {
                member_1 = member_1_1;
            }],
        execute: function() {
            MemberRegisterComponent = (function () {
                function MemberRegisterComponent(d$, router, lg$) {
                    this.d$ = d$;
                    this.router = router;
                    this.lg$ = lg$;
                    this.componentName = 'MemberRegisterComponent';
                    this.logdepth = 2;
                    this.showArray = [];
                    this.items = ['item1', 'item2', 'item3'];
                    this.model = new member_1.Member();
                    this.index = 0;
                    this.backdropOptions = [true, false, 'static'];
                    this.animation = true;
                    this.keyboard = true;
                    this.backdrop = true;
                }
                MemberRegisterComponent.prototype.ngOnInit = function () {
                    this.lg$.setLogHdr(this.logdepth, this.componentName);
                    this.lg$.log("-> ngOnInit()");
                    this.d$.dsGetAllMembers();
                    this.lg$.log("<- ngOnInit");
                };
                /**********************************************************
                 * Name:		getAllMembers()
                 * Description:	Retrieves all club members from the server
                 * Scope:		Internal
                 * Params in:	None
                 * Return:		Sets $scope.members
                 **********************************************************/
                MemberRegisterComponent.prototype.getAllMembers = function () {
                    this.lg$.log("-> getAllMembers()");
                    this.lg$.log("    | calling dataService.getAllMembers()..");
                    this.d$.dsGetAllMembers();
                    this.lg$.log("<- getAllMembers()");
                };
                /**********************************************************
                 * Name:		getTeams()
                 * Description:	Retrieves a list of teams from the server
                 * Scope:		Internal
                 * Params in:	None
                 * Return:		Sets $scope.teams
                 **********************************************************/
                MemberRegisterComponent.prototype.getTeams = function () {
                    this.lg$.log("-> getTeams()");
                    this.lg$.log("   | calling dataService.dsGetTeams()..");
                    this.d$.dsGetTeams();
                };
                /**********************************************************
                 * Name:		toggleView()
                 * Description:	Used to make the member list for a team
                 * 				visible or hidden when the user clicks on it
                 * Scope:		Externally accessible
                 * Params in:	ID of the team in question.
                 * Return:		Sets showArray[teamId] to false.
                 **********************************************************/
                MemberRegisterComponent.prototype.toggleView = function (teamId) {
                    //log.trace(this.loghdr+"-> toggleView("+teamId+")");
                    this.showArray[teamId] = !this.showArray[teamId];
                    //log.trace(this.loghdr+"    showArray["+teamId+") set to: "+this.showArray[teamId]);
                    //log.trace(this.loghdr+"<- toggleView()");
                };
                /**********************************************************
                 * Name:		getMembers4team()
                 * Description:	Load the members for a particular team into
                 * 				the dataService
                 * Params in:	ID of the team in question.
                 * Return:		Sets showArray[teamId] to true.
                 **********************************************************/
                MemberRegisterComponent.prototype.getMembers4team = function (teamId) {
                    this.lg$.log("-> getMembers4team(" + teamId + ")");
                    this.showArray[teamId] = 'true';
                    // Clear the array first
                    this.d$.dsTeamMembers[teamId] = new Array();
                    // Populate the Team members from the complete list of members
                    for (var i = 0; i < this.d$.dsAllMembers.length; i++) {
                        if (this.d$.dsAllMembers[i].team == teamId) {
                            // Find the members for this team and add them to the array
                            this.d$.dsTeamMembers[teamId].push(this.d$.dsAllMembers[i]);
                        }
                    }
                    this.lg$.log("<-getMembers4team()");
                };
                /**********************************************************
                 * Name:		allMembersAdmin()
                 * Description:	Switch to all members admin page
                 * Scope:		Internal
                 * Params in:
                 * Return:
                 **********************************************************/
                MemberRegisterComponent.prototype.allMembersAdmin = function () {
                    // TODO
                };
                /**********************************************************
                 * Name:		editMember()
                 * Description:	Edit an existing member, update to server
                 * 				and update local in-memory copy
                 * Scope:		Externally accessible
                 * Params in:	thisMember: the member to edit
                 * Return:		Sets this.d$.dsTeamMembers[team].<this member>
                 **********************************************************/
                MemberRegisterComponent.prototype.editMember = function (member) {
                    this.router.navigate(['EditMember', { member: member }]);
                    //this.modal.open();
                };
                MemberRegisterComponent.prototype.closed = function () {
                    this.output = '(closed) ' + this.selected;
                };
                MemberRegisterComponent.prototype.dismissed = function () {
                    this.output = '(dismissed)';
                };
                MemberRegisterComponent.prototype.opened = function () {
                    this.output = '(opened)';
                };
                MemberRegisterComponent.prototype.navigate = function () {
                    //this.router.navigateByUrl('/hello');
                };
                __decorate([
                    core_1.ViewChild('modal'), 
                    __metadata('design:type', ng2_bs3_modal_2.ModalComponent)
                ], MemberRegisterComponent.prototype, "modal", void 0);
                MemberRegisterComponent = __decorate([
                    core_1.Component({
                        //templateUrl: 'app/htmltemplates/memberRegister.component.html',
                        template: "\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div style=\"margin-left:auto;margin-right:auto;width:80%;\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-10\">\n\t\t\t\t\t\t\t\t\t<h3>Club Register 2016 Season</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t<div  style=\"float:right; align:bottom;\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"allMembersAdmin()\" style=\"cursor:pointer;\" data-toggle=\"tooltip\" data-placement=\"right\">All Members</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div *ngFor=\"let team of _dataService.dsTeams\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading avenue-heading\" style=\"min-height:35px;\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10 teamHdr\" *ngIf=\"!showArray[team.id]\"><span class=\"glyphicon glyphicon-triangle-bottom\" (click)=\"getMembers4team(team.id)\" style=\"cursor:pointer;\"></span> {{team.name}}</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10 teamHdr\" *ngIf=\"showArray[team.id]\"><span class=\"glyphicon glyphicon-triangle-top\" (click)=\"toggleView(team.id)\" style=\"cursor:pointer;\"></span> {{team.name}}</div>\n\t\t\t\t\t\t\t\t\t\t\t<div  style=\"float:right; align:bottom;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-xs\" ng-click=\"addMember(team.id)\" style=\"cursor:pointer;\" data-toggle=\"tooltip\" data-placement=\"right\">Add Member</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t    \t\t<div class=\"panel-body avenue-body\" style=\"height:100%;\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showArray[team.id]\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t    <div class=\"col-md-3 tblHdr\">Name</div>\n\t\t\t\t\t\t\t\t\t\t\t\t    <div class=\"col-md-5 tblHdr\">Address</div>\n\t\t\t\t\t\t\t\t\t\t\t\t    <div class=\"col-md-2 tblHdr\">Phone</div>\n\t\t\t\t\t\t\t\t\t\t\t\t    <div class=\"col-md-2 tblHdr\">Operations</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div> <!-- end of row -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let member of _dataService.dsTeamMembers[team.id]\" class=\"row light-line\">\t\t\t\t\t\t\t    \n\t\t\t\t\t\t\t\t\t\t    \t\t<div class=\"col-md-3\">{{member.name}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">{{member.address}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">{{member.phone}}</div>\n\t\t\t\t\t\t\t\t\t\t    \t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t    \t<i *ngIf=\"(member.amount>0)\" class=\"glyphicon glyphicon-euro\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Paid\" style=\"float:left;\"></i>&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t    \t<i *ngIf=\"!(member.amount>0)\" class=\"glyphicon glyphicon-remove\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Not Paid\" style=\"float:left;\"></i>&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t    \t<i (click)=\"editMember(member)\" style=\"cursor:pointer;\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Edit\" class=\"glyphicon glyphicon-pencil\" style=\"float:left;padding-left:10px;\"> </i>&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t    \t<i (click)=\"deleteMember(member)\" style=\"cursor:pointer;\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Delete\" class=\"glyphicon glyphicon-trash\" style=\"float:left;padding-left:10px;\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t    </div>\t\n\t\t\t\t\t\t\t\t\t\t\t    </div> <!-- end row -->\n\t\t\t\t\t\t\t\t\t\t\t</div> <!-- end ng-show -->\n\t\t\t\t\t\t\t\t\t\t</div> <!-- end panel body -->\n\t\t\t\t\t\t\t\t\t</div> <!-- end of panel -->\t\t\t\n\t\t\t\t\t\t\t\t</div> <!-- End of ng-repeat -->\n\t\t\t\t\t\t\t</div> <!-- end row -->\n\t\t\t\t\t</div>\n\t\t\t\t</div> <!-- end of container -->\n\t",
                        directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES],
                        providers: [logger_service_1.LoggerService]
                    }), 
                    __metadata('design:paramtypes', [session_data_service_1.SessionDataService, router_1.Router, logger_service_1.LoggerService])
                ], MemberRegisterComponent);
                return MemberRegisterComponent;
            }());
            exports_1("MemberRegisterComponent", MemberRegisterComponent);
        }
    }
});
//# sourceMappingURL=memberRegister.component.js.map