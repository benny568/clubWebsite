System.register(['@angular/core', '../dao/media', './slide.component', './carousel.component', '../services/session-data.service'], function(exports_1, context_1) {
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
    var core_1, media_1, slide_component_1, carousel_component_1, session_data_service_1;
    var PhotosComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (media_1_1) {
                media_1 = media_1_1;
            },
            function (slide_component_1_1) {
                slide_component_1 = slide_component_1_1;
            },
            function (carousel_component_1_1) {
                carousel_component_1 = carousel_component_1_1;
            },
            function (session_data_service_1_1) {
                session_data_service_1 = session_data_service_1_1;
            }],
        execute: function() {
            PhotosComponent = (function () {
                function PhotosComponent(_dataService) {
                    this._dataService = _dataService;
                    this.componentName = 'PhotosComponent';
                    this.logHdr = "#### " + this.componentName + ": ";
                    this.path = '';
                    console.log(this.logHdr + "->" + "constructor()");
                }
                PhotosComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var cat1 = ''; //this.routeParams.get('cat1'); // team
                    var cat2 = ''; //this.routeParams.get('cat2'); // year
                    var cat3 = ''; //this.routeParams.get('cat3'); // event
                    var url = '';
                    this.aAlbum = new Array();
                    console.log(this.logHdr + "->" + "OnInit(" + cat1 + "/" + cat2 + "/" + cat3 + "," + ")");
                    if (cat3 !== "none" && cat3 !== '') {
                        url = this._dataService.getHome() + '/photos/' + cat1 + '/' + cat2 + '/' + cat3;
                        this.path = 'resources/galleries/' + cat1 + '/' + cat2 + '/' + cat3 + '/';
                    }
                    else {
                        url = this._dataService.getHome() + '/photos/' + cat1 + '/' + cat2;
                        this.path = 'resources/galleries/' + cat1 + '/' + cat2 + '/';
                    }
                    this._dataService.loadPhotoDetails(url)
                        .subscribe(function (data) { return _this.processResponse(data, _this.path, _this.aAlbum); }, function (error) { return console.log("===> Error getting list of photos from server."); }, function () { return console.log(_this.logHdr + "<-" + " processResponse()"); });
                };
                PhotosComponent.prototype.processResponse = function (data, path, album) {
                    console.log(this.logHdr + "->" + " processResponse()");
                    data.forEach(function (row) {
                        var photo = new media_1.Media();
                        photo.image = path + row;
                        album.push(photo);
                        console.log("          -- added image: " + photo.image);
                    });
                };
                PhotosComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/htmltemplates/photos.component.html',
                        styles: ["\n\t         .photo-caption {\n\t         \ttext-align: center;\n\t         \tcolor:white;\n\t         \tbackground-color:black;\n\t         \tpadding: 10px;\n\t         \tmargin: 0 auto;\n\t         \twidth: 70%;\n\t         }\n\t       "],
                        directives: [slide_component_1.Slide, carousel_component_1.Carousel]
                    }), 
                    __metadata('design:paramtypes', [session_data_service_1.SessionDataService])
                ], PhotosComponent);
                return PhotosComponent;
            }());
            exports_1("PhotosComponent", PhotosComponent);
        }
    }
});

//# sourceMappingURL=photos.component.js.map
