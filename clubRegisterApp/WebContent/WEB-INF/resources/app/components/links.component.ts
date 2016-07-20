/**
 * Created by odalybr on 08/04/2016.
 */
import { Component } from '@angular/core';

@Component({
    //templateUrl: 'app/htmltemplates/links.component.html'
    template: `
				<div id="wrap">
				    <div class="container t1">
				        <div class="panel">
				            <div class="panel-heading avenue-heading">
				                Useful Links:
				            </div>
				            <div class="panel-body avenue-body">
				                <a href="http://www.cssleague.ie/" target=_blank>
				                    <img src="resources/images/links/cssl.jpeg" 
				                    	height="50" 
				                    	width="50" 
				                    	data-toggle="tooltip" 
				                    	data-placement="top" 
				                    	title="Clare Schoolboys Soccer League"/>
				                </a>
				                <a href="http://www.claresoccer.net/" target="_blank">
				                    <img src="resources/images/links/CDSL_Crest.JPG" 
				                    	height="50" 
				                    	width="50" 
				                    	data-toggle="tooltip" 
				                    	data-placement="top" 
				                    	title="Clare Junior Soccer League"/>
				                </a>
				                <a href="http://www.fai.ie/" target="_blank">
				                    <img src="resources/images/links/fai-crest.png" 
				                    	height="50" 
				                    	width="50" 
				                    	data-toggle="tooltip" 
				                    	data-placement="top" 
				                    	title="Football Association of Ireland"/>
				                </a>
				            </div>
				        </div>
				
				    </div> <!--  End of container t1 -->
				</div>
    `
})

export class LinksComponent {

}