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
    var InstructionsComponent;
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
            InstructionsComponent = (function () {
                function InstructionsComponent() {
                    this.display = false;
                }
                InstructionsComponent.prototype.showDialog = function () {
                    this.display = true;
                };
                InstructionsComponent = __decorate([
                    core_1.Component({
                        selector: "instructions",
                        template: "\n\t\t\t\t<div class=\"ContentSideSections Implementation\">\n\t\t\t\t    <p-dialog \theader=\"Booking Instructions\" \n\t\t\t\t\t\t\t\t[(visible)]=\"display\" \n\t\t\t\t\t\t\t\tmodal=\"modal\" \n\t\t\t\t\t\t\t\tshowEffect=\"fade\"\n\t\t\t\t\t\t\t\tresponsive=\"true\"\n\t\t\t\t\t\t\t\tminWidth=\"150\"\n\t\t\t\t\t\t\t\twidth=\"500\" >\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tPrice per night: \u20AC35 <br />\n\t\t\t\t\t\t\tIncludes: <br />\n\t\t\t\t\t\t\t1 x camping area for up to 2 people <br />\n\t\t\t\t\t\t\t1 x parking space <br />\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tNOTE: <br />\n\t\t\t\t\t\t\t- Minimum stay is 3 nights <br />\n\t\t\t\t\t\t\t- \u20AC5 extra per person above 2 and up to 8 <br />\n\t\t\t\t\t\t\t- Extra parking space \u20AC5 per day\n\t\t\t\t\t\t</p>\n\t\t\t\t        <p>There are four steps in the booking process:\n\t\t\t\t        \t<br />1. Pick the dates you prefer and the number of people staying\n\t\t\t\t        \t<br />2. Indicate if you require parking and the number of parking spaces\n\t\t\t\t        \t<br />3. Provide your contact details\n\t\t\t\t        \t<br />4. Pay the deposit (\u20AC35) via PayPal, <strong>Balance payable ON ARRIVAL.</strong></p>\n\t\t\t\t        \t<!-- <br />4. Pay the deposit (50% of total) via PayPal, <strong>Balance payable ON ARRIVAL.</strong></p> -->\n\t\t\t\t        <footer>\n\t\t\t\t            <div class=\"ui-dialog-buttonpane ui-widget-content ui-helper-clearfix\">\n\t\t\t\t                <button type=\"button\" pButton icon=\"fa-close\" (click)=\"display=false\" label=\"Close\"></button>\n\t\t\t\t            </div>\n\t\t\t\t        </footer>\n\t\t\t\t    </p-dialog>\n\t\t\t\t    \n\t\t\t\t    <button type=\"text\" (click)=\"showDialog()\" pButton icon=\"fa-external-link-square\" label=\"Booking Instructions\"></button>\n\t\t\t\t    \n\t\t\t\t    <br /><br />\n\t\t\t\t</div>\n\t\t\t\t",
                        directives: [primeng_1.Dialog, primeng_2.Header, primeng_3.Footer, primeng_4.Button]
                    }), 
                    __metadata('design:paramtypes', [])
                ], InstructionsComponent);
                return InstructionsComponent;
            }());
            exports_1("InstructionsComponent", InstructionsComponent);
        }
    }
});

//# sourceMappingURL=instructions.component.js.map
