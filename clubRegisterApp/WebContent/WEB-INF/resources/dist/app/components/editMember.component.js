System.register(["@angular/core","@angular/router","ng2-bs3-modal/ng2-bs3-modal","../services/session-data.service","../utilities/toolbox"],function(t,e){"use strict";var o,n,r,a,i,l,c,d=(e&&e.id,this&&this.__decorate||function(t,e,o,n){var r,a=arguments.length,i=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(a<3?r(i):a>3?r(e,o,i):r(e,o))||i);return a>3&&i&&Object.defineProperty(e,o,i),i}),s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};return{setters:[function(t){o=t},function(t){n=t},function(t){r=t,a=t},function(t){i=t},function(t){l=t}],execute:function(){c=function(){function t(t,e,o){this._dataService=t,this._router=e,this.tb$=o}return t.prototype.ngAfterViewInit=function(){this.modal.open()},t.prototype.close=function(){this.modal.close()},d([o.ViewChild("modal"),s("design:type",a.ModalComponent)],t.prototype,"modal",void 0),t=d([o.Component({templateUrl:'\n\t\t\t\t\t<modal #modal>\n\t\t\t\t\t    <modal-header [show-close]="true">\n\t\t\t\t\t        <h4 class="modal-title">I\'m a modal!</h4>\n\t\t\t\t\t    </modal-header>\n\t\t\t\t\t    <modal-body>\n\t\t\t\t\t        Hello World!\n\t\t\t\t\t    </modal-body>\n\t\t\t\t\t    <modal-footer [show-default-buttons]="true"></modal-footer>\n\t\t\t\t\t</modal>  \n                 ',directives:[r.MODAL_DIRECTIVES]}),s("design:paramtypes",[i.SessionDataService,n.Router,l.ToolBox])],t)}(),t("EditMemberComponent",c)}}});