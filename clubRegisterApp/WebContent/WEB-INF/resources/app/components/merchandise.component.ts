/**
 * Created by odalybr on 08/04/2016.
 */
import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {Slide} from './slide.component';
import {Carousel} from './carousel.component';

@Component({
    templateUrl: 'app/htmltemplates/merchandise.component.html',
    directives: [ Slide, Carousel, CORE_DIRECTIVES, FORM_DIRECTIVES ]
})

export class MerchandiseComponent {
    items;

    constructor() { }

    ngOnInit() {
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
    }

}