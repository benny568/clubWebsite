System.register(['@angular/core', '@angular/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var PayNowComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            PayNowComponent = (function () {
                function PayNowComponent(fb) {
                    this.componentName = 'PayNowComponent';
                }
                PayNowComponent.prototype.ngOnInit = function () {
                    console.log("### " + this.componentName + "-> ngOnInit()");
                };
                PayNowComponent = __decorate([
                    core_1.Component({
                        //templateUrl: 'app/htmltemplates/payNow.component.html'
                        template: "\n\t\t\t<form action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_top\">\n\t\t\t\t<input type=\"hidden\" name=\"cmd\" value=\"_xclick\">\n\t\t\t\t<input type=\"hidden\" name=\"business\" value=\"treasurer@avenueunited.ie\">\n\t\t\t\t<input type=\"hidden\" name=\"lc\" value=\"US\">\n\t\t\t\t<input type=\"hidden\" name=\"item_name\" value=\"Deposit for camping\">\n\t\t\t\t<input type=\"hidden\" name=\"amount\" value=\"15.00\">\n\t\t\t\t<input type=\"hidden\" name=\"currency_code\" value=\"EUR\">\n\t\t\t\t<input type=\"hidden\" name=\"button_subtype\" value=\"services\">\n\t\t\t\t<input type=\"hidden\" name=\"no_note\" value=\"0\">\n\t\t\t\t<input type=\"hidden\" name=\"bn\" value=\"PP-BuyNowBF:btn_paynowCC_LG.gif:NonHostedGuest\">\n\t\t\t\t<input type=\"image\" src=\"https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif\" border=\"0\" name=\"submit\" alt=\"PayPal - The safer, easier way to pay online!\">\n\t\t\t\t<img alt=\"\" border=\"0\" src=\"https://www.paypalobjects.com/en_US/i/scr/pixel.gif\" width=\"1\" height=\"1\">\n\t\t\t</form>\n\t"
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], PayNowComponent);
                return PayNowComponent;
            }());
            exports_1("PayNowComponent", PayNowComponent);
        }
    }
});
//# sourceMappingURL=payNow.component.js.map