System.register(['@angular/core', '@angular/common', './slide.component', './carousel.component'], function(exports_1, context_1) {
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
    var core_1, common_1, slide_component_1, carousel_component_1;
    var MerchandiseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (slide_component_1_1) {
                slide_component_1 = slide_component_1_1;
            },
            function (carousel_component_1_1) {
                carousel_component_1 = carousel_component_1_1;
            }],
        execute: function() {
            MerchandiseComponent = (function () {
                function MerchandiseComponent() {
                }
                MerchandiseComponent.prototype.ngOnInit = function () {
                    this.items = [
                        {
                            name: "Shorts",
                            image: "resources/images/merchandise/shorts.png",
                            description: "Kids 11.50E (YXS-XXS), Adult 12.50E (XS-S-M-L-XL)",
                            width: "300",
                            height: "300"
                        },
                        {
                            name: "Socks",
                            image: "resources/images/merchandise/socks.png",
                            description: "10E Kids(below 4), Junior(4-6.5), Adult(7.5-11)",
                            width: "300",
                            height: "300"
                        },
                        /*{name:"1/4 Zip Top", image:"resources/images/merchandise/quarterZipTop.png", description:"Kids 20E (2YXS-YXS-XXS), Adult 25E (XS-S-M-L-XL)", width:"300", height:"300"},
                         {name:"Tracksuit Top", image:"resources/images/merchandise/tracksuittop.png", description:"", width:"300", height:"300"},
                         {name:"Windbreaker", image:"resources/images/merchandise/windbreaker.png", description:"", width:"300", height:"300"},
                         {name:"Rucksack", image:"resources/images/merchandise/rucksack.png", description:"One Size 20E", width:"300", height:"300"},*/
                        {
                            name: "Beanie",
                            image: "resources/images/merchandise/beanie.png",
                            description: "One Size 12E",
                            width: "300",
                            height: "300"
                        },
                        /*{name:"Base-Layer Top", image:"resources/images/merchandise/baselayertop.png", description:"Kids 25E (XXS-XS), Adult 30E (S/M-L/XL)", width:"300", height:"300"},
                         {name:"Base-Layer Shorts", image:"resources/images/merchandise/baselayershorts.png", description:"Kids 20E (XXS-XS), Adult 25E (S/M-L/XL)", width:"300", height:"300"},*/
                        {
                            name: "Combo 1",
                            image: "resources/images/merchandise/combo1.png",
                            description: "Kids 25E (YXS-XXS), Adult 30E (XS-S-M-L-XL)",
                            width: "520",
                            height: "300"
                        },
                        {
                            name: "Combo 2",
                            image: "resources/images/merchandise/combo2.png",
                            description: "Kids 45E (YXS-XXS), Adult 55E (XS-S-M-L-XL)",
                            width: "700",
                            height: "300"
                        }
                    ];
                };
                MerchandiseComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/htmltemplates/merchandise.component.html',
                        directives: [slide_component_1.Slide, carousel_component_1.Carousel, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MerchandiseComponent);
                return MerchandiseComponent;
            }());
            exports_1("MerchandiseComponent", MerchandiseComponent);
        }
    }
});
//# sourceMappingURL=merchandise.component.js.map