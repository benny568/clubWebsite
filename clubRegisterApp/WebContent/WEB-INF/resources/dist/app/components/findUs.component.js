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
    var FindUsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FindUsComponent = (function () {
                function FindUsComponent() {
                }
                FindUsComponent = __decorate([
                    core_1.Component({
                        //templateUrl: 'app/htmltemplates/findUs.component.html'
                        template: "\n\t\t\t\t<div class=\"container\">\n\t\t\t\t    <div class=\"row\">\n\t\t\t\t        <div class=\"col-sm-6\">\n\t\t\t\t\n\t\t\t\t            <div class=\"panel\">\n\t\t\t\t                <div class=\"panel-heading avenue-heading\">\n\t\t\t\t                    <i class=\"fa fa-bus\"></i><i class=\"fa fa-car\" style=\"float:right\"></i>\n\t\t\t\t                    <h3>How to find us:</h3>\n\t\t\t\t                </div>\n\t\t\t\t                <div class=\"panel-body avenue-body\">\n\t\t\t\t                    Take exit 13 off the M18 motorway (Limerick - Galway) for Ennis town.\n\t\t\t\t                    Take a left at the exit roundabout for Ennis town.\n\t\t\t\t                    At the next roundabout take a right. Take the first right 100m after the roundabout.\n\t\t\t\t                    Turn left into the Avenue United grounds.\n\t\t\t\t                </div>\n\t\t\t\t            </div>\n\t\t\t\t\n\t\t\t\t        </div> <!-- end col -->\n\t\t\t\t        <div class=\"col-sm-6\">\n\t\t\t\t            <iframe width=\"100%\" height=\"450\"\n\t\t\t\t                    frameborder=\"0\" style=\"border:0\"\n\t\t\t\t                    src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1204.552290771011!2d-8.959630757672151!3d52.85651802772733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b6d3fd88608c3%3A0xe149b368df7aa3a1!2sInnovation+House%2C+Roslevan+Shopping+Centre%2C+Tulla+Rd%2C+Ennis%2C+Co.+Clare!5e0!3m2!1sen!2sie!4v1437242650719\">\n\t\t\t\t            </iframe>\n\t\t\t\t        </div> <!-- end col -->\n\t\t\t\t    </div> <!-- end row -->\n\t\t\t\t</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], FindUsComponent);
                return FindUsComponent;
            }());
            exports_1("FindUsComponent", FindUsComponent);
        }
    }
});

//# sourceMappingURL=findUs.component.js.map
