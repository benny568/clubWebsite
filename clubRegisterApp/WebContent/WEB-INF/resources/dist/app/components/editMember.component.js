System.register(['@angular/core', '@angular/router', 'ng2-bs3-modal/ng2-bs3-modal', '../services/session-data.service', '../utilities/toolbox'], function(exports_1, context_1) {
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
    var core_1, router_1, ng2_bs3_modal_1, ng2_bs3_modal_2, session_data_service_1, toolbox_1;
    var EditMemberComponent;
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
            function (toolbox_1_1) {
                toolbox_1 = toolbox_1_1;
            }],
        execute: function() {
            EditMemberComponent = (function () {
                function EditMemberComponent(_dataService, _router, tb$) {
                    this._dataService = _dataService;
                    this._router = _router;
                    this.tb$ = tb$;
                    //		this.modal = new ModalComponent();
                }
                EditMemberComponent.prototype.ngAfterViewInit = function () {
                    this.modal.open();
                };
                EditMemberComponent.prototype.close = function () {
                    this.modal.close();
                };
                __decorate([
                    core_1.ViewChild('modal'), 
                    __metadata('design:type', ng2_bs3_modal_2.ModalComponent)
                ], EditMemberComponent.prototype, "modal", void 0);
                EditMemberComponent = __decorate([
                    core_1.Component({
                        templateUrl: "\n\t\t\t\t\t<modal #modal>\n\t\t\t\t\t    <modal-header [show-close]=\"true\">\n\t\t\t\t\t        <h4 class=\"modal-title\">I'm a modal!</h4>\n\t\t\t\t\t    </modal-header>\n\t\t\t\t\t    <modal-body>\n\t\t\t\t\t        Hello World!\n\t\t\t\t\t    </modal-body>\n\t\t\t\t\t    <modal-footer [show-default-buttons]=\"true\"></modal-footer>\n\t\t\t\t\t</modal>  \n                 ",
                        directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [session_data_service_1.SessionDataService, router_1.Router, toolbox_1.ToolBox])
                ], EditMemberComponent);
                return EditMemberComponent;
            }());
            exports_1("EditMemberComponent", EditMemberComponent);
        }
    }
});

//# sourceMappingURL=editMember.component.js.map
