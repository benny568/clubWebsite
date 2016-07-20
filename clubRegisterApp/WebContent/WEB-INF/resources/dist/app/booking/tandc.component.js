System.register(['@angular/core', 'primeng/primeng'], function(exports_1, context_1) {
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
    var core_1, primeng_1, primeng_2, primeng_3, primeng_4;
    var TandCComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
                primeng_2 = primeng_1_1;
                primeng_3 = primeng_1_1;
                primeng_4 = primeng_1_1;
            }],
        execute: function() {
            TandCComponent = (function () {
                function TandCComponent() {
                    this.display = false;
                }
                TandCComponent.prototype.showDialog = function () {
                    this.display = true;
                };
                TandCComponent = __decorate([
                    core_1.Component({
                        selector: "tandc",
                        template: "\n\t\t\t\t<div class=\"ContentSideSections Implementation rightJust\">\n\t\t\t\t    <p-dialog \theader=\"Terms & Conditions\" \n\t\t\t\t\t\t\t\t[(visible)]=\"display\" \n\t\t\t\t\t\t\t\tmodal=\"modal\" \n\t\t\t\t\t\t\t\tshowEffect=\"fade\"\n\t\t\t\t\t\t\t\tresponsive=\"true\"\n\t\t\t\t\t\t\t\tminWidth=\"150\"\n\t\t\t\t\t\t\t\twidth=\"500\"\n\t\t\t\t\t\t\t\theight=\"90%\"\n\t\t\t\t\t\t\t\tresponsive=\"true\" >\n\n\t\t\t\t\t\t\t<h4>Fleadh Cheoil 2016, Camping at Avenue United FC</h4>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tRoslevan, Tulla Road, Ennis <br />\n\t\t\t\t\t\t\tTake exit 13 off Motorway, and you\u2019re there!<br /><br />\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<h5>INFORMATION & RULES</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tCampsite Opens 1pm on Wed August 17th<br />\n\t\t\t\t\t\t\tTents & Cars only.   NO caravans or campervans, sorry.<br />\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tSTRICTLY NO GLASS BOTTLES ALLOWED ON SITE.&nbsp;NO noise after Midnight<br />\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tToilets & Showers are Provided.<br />\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tAnyone under 18 MUST be accompanied by an adult<br />\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tNO PETS (except guide / assistive dogs)<br />\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tBalance must be paid on arrival. You will NOT be admitted until balance is paid.<br />\n\t\t\t\t\t\t\tNo Sterling accepted for balance. EURO cash only.  No refunds for early departure.<br />\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tNo electrical connections are available. Bring plenty batteries!<br />\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tSTRICTLY NO GLASS BOTTLES ALLOWED ON SITE.  This is our soccer pitch where our kids play matches. \n\t\t\t\t\t\t\tNO Glass means NO Glass. Plastic only. This WILL be enforced.<br />  \n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tYou must be vacated by 1pm on Mon 22 Aug.<br />\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tBy booking you agree to the above conditions.<br /><br />\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tWe hope you enjoy your stay!\n\n\t\t\t\t        <footer>\n\t\t\t\t            <div class=\"ui-dialog-buttonpane ui-widget-content ui-helper-clearfix\">\n\t\t\t\t                <button type=\"button\" pButton icon=\"fa-close\" (click)=\"display=false\" label=\"Close\"></button>\n\t\t\t\t            </div>\n\t\t\t\t        </footer>\n\t\t\t\t    </p-dialog>\n\t\t\t\t    \n\t\t\t\t    <button type=\"text\" (click)=\"showDialog()\" pButton icon=\"fa-external-link-square\" label=\"View Terms & Conditions\"></button>\n\t\t\t\t    \n\t\t\t\t    <br /><br />\n\t\t\t\t</div>\n\t\t\t\t",
                        styles: [".rightJust {\n\t         \t\tfloat: left;\n\t         \t}\n\t         "],
                        directives: [primeng_1.Dialog, primeng_2.Header, primeng_3.Footer, primeng_4.Button]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TandCComponent);
                return TandCComponent;
            }());
            exports_1("TandCComponent", TandCComponent);
        }
    }
});

//# sourceMappingURL=tandc.component.js.map
