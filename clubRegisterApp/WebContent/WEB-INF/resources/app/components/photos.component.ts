import { Component } 			from 'angular2/core';
import { OnInit }	 			from 'angular2/core';
import { RouteParams }			from 'angular2/router';
import { Media } 				from '../dao/media';
import { Slide } 	 			from './slide.component';
import { Carousel }  			from './carousel.component';
import { SessionDataService }   from '../services/session-data.service';

@Component({
	templateUrl: 'app/htmltemplates/photos.component.html',
	styles: [`
	         .photo-caption {
	         	text-align: center;
	         	color:white;
	         	background-color:black;
	         	padding: 10px;
	         	margin: 0 auto;
	         	width: 70%;
	         }
	       `],
	directives: [ Slide, Carousel ]
})

export class PhotosComponent implements OnInit
{
	componentName:String = 'PhotosComponent';
    logHdr:String = "#### " + this.componentName + ": ";
	aAlbum : Array<Media>;
	path:String = '';
    
	ngOnInit()
	{
		let cat1 = this.routeParams.get('cat1'); // team
		let cat2 = this.routeParams.get('cat2'); // year
		let cat3 = this.routeParams.get('cat3'); // event
		var url = '';
		this.aAlbum = new Array<Media>();
		
		console.log(this.logHdr + "->" + "OnInit(" + cat1 + "/" + cat2 + "/" + cat3 + "," + ")");
		
		if( cat3 !== "none" && cat3 != '' )
		{
			url = this._dataService.getHome() + '/photos/' + cat1 + '/' + cat2 + '/' + cat3;
			this.path = 'resources/galleries/' + cat1 + '/' + cat2 + '/' + cat3 + '/';
		}
		else
		{
			url = this._dataService.getHome() + '/photos/' + cat1 + '/' + cat2;
			this.path = 'resources/galleries/' + cat1 + '/' + cat2 + '/';
		}	
		
		this._dataService.loadPhotoDetails(url)
			.subscribe(
	            	data => this.processResponse(data, this.path, this.aAlbum),
	            	error => console.log("===> Error getting list of photos from server."),
	            	() => console.log(this.logHdr + "<-" + " processResponse()")
	            );

	}
	
	constructor( private _dataService: SessionDataService, private routeParams: RouteParams ) { console.log(this.logHdr + "->" + "constructor()"); }
	
	processResponse( data, path, album )
	{
		console.log(this.logHdr + "->" + " processResponse()");
		
		data.forEach(function(row){
			var photo : Media = new Media();
			photo.image = path + row;
			album.push(photo);
			console.log("          -- added image: " + photo.image );
		})
	}
}