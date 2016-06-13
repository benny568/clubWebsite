import { Component } from 'angular2/core';
import { NewsStory } from '../dao/news-story';
import { Slide } 	 from './slide.component';
import { Carousel }  from './carousel.component';

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

export class PhotosComponent
{
	componentName:String = 'PhotosComponent';
    logHdr:String = "#### " + this.componentName + ": ";
	aAlbum : Array<NewsStory>;
	photo:NewsStory;
    
	ngOnInit()
	{
		console.log(this.logHdr + "->" + "onload()");
		var i = 0;
		this.aAlbum = new Array<NewsStory>();
		
		for( i=1; i<50; i++ )
		{
			this.photo = new NewsStory( 0, '', 'Junior Cup Semi-final vs. Lifford at County grounds Doora', '', '', 'resources/galleries/JuniorCupSemiFinal2016/slides/' + i + '.jpg' ); 
			this.aAlbum.push(this.photo);
		}
	}
}