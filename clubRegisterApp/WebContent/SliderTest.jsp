<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html ng-app="">

<head>  <!-- HEAD START -->
	
	<title>Avenue United</title>
		
		<link rel="stylesheet" type="text/css" href="resources/css/animate.css" />
		<link rel="stylesheet" type="text/css" href="resources/css/bootstrap.css" />
		<link rel="stylesheet" type="text/css" href="resources/font-awesome-4.3.0/css/font-awesome.css" />
		<link rel="stylesheet" type="text/css" href="resources/css/default.css" />
		<link rel="stylesheet" type="text/css" href='http://fonts.googleapis.com/css?family=Open+Sans' />

</head>  <!-- HEAD END -->

<body>

	<!-- (1) Banner across the top & the menu -->
	<div ng-include="'resources/viewParts/headerNmenu.html'"></div>

	<div class="container">
		<!-- ######### SLIDER ######### -->
		<div id="slider1_container" style="position: relative; width: 600px; height: 300px;">
		    <!-- Slides Container -->
		    <div u="slides" style="cursor: move; position: relative; overflow: hidden; left: 0px; top: 0px; width: 600px; height: 300px;">
		    	<div>
			        <a u="image" href="#"><img src="resources/images/01.jpg" /></a>
			        <div u=caption t="*" class="captionOrange"  style="position:absolute; left:20px; top: 30px; width:300px; height:30px;"> 
                		This is where we'd put the title of the news item
                	</div>
                </div>
                <div>
	                <a u="image" href="#"><img src="resources/images/02.jpg" /></a>
	                <div u=caption t="*" class="captionOrange"  style="position:absolute; left:20px; top: 30px; width:300px; height:30px;"> 
                		responsive, scale smoothly
                	</div>
                </div>
		    </div> <!-- end slides -->
		    
		</div> <!-- end slide1_container -->
		
	</div> <!-- end of bootstrap container -->    	
	
	<!-- Footer across the bottom of the page -->
	<div ng-include="'resources/viewParts/footer.html'"></div>

	<!-- it works the same with all jquery version from 1.x to 2.x -->
	<script type="text/javascript" src="resources/js/jquery-2.1.4.min.js"></script>
	<script type="text/javascript" src="resources/js/bootstrap.js"></script>
	<script type="text/javascript" src="resources/js/angular.js"></script>
	<script type="text/javascript" src="resources/js/angular-animate.js"></script>
	<script type="text/javascript" src="resources/js/angular-resource.js"></script>
	<script type="text/javascript" src="resources/js/jssor.js"></script>
	<script type="text/javascript" src="resources/js/jssor.slider.js"></script>
	<script>
	    jQuery(document).ready(function ($) {
	    	var _SlideshowTransitions = [
										//Flutter out Wind
										{ $Duration: 1800, x: 1, y: 0.2, $Delay: 30, $Cols: 10, $Rows: 5, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $SlideOut: true, $Reverse: true, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 2050, $Easing: { $Left: $JssorEasing$.$EaseInOutSine, $Top: $JssorEasing$.$EaseOutWave, $Clip: $JssorEasing$.$EaseInOutQuad }, $Outside: true, $Round: { $Top: 1.3} }
										//Dodge Dance Outside in Random
							            , { $Duration: 1500, x: 0.3, y: -0.3, $Delay: 80, $Cols: 8, $Rows: 4, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $Easing: { $Left: $JssorEasing$.$EaseInJump, $Top: $JssorEasing$.$EaseInJump, $Clip: $JssorEasing$.$EaseOutQuad }, $Outside: true, $Round: { $Left: 0.8, $Top: 2.5} }
	    	      						];
	        var options = {
	        		$AutoPlay: true,						//[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
	                $AutoPlaySteps: 1,          			//[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
	                $AutoPlayInterval: 4000,    			//[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
	                $PauseOnHover: 1,						//[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1
	                $DragOrientation: 3,         			//[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
	                $SlideshowOptions: {                    //[Optional] Options to specify and enable slideshow or not
	                    $Class: $JssorSlideshowRunner$,     //[Required] Class to create instance of slideshow
	                    $Transitions: _SlideshowTransitions,//[Required] An array of slideshow transitions to play slideshow
	                    $TransitionsOrder: 1,               //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
	                    $ShowLink: true                     //[Optional] Whether to bring slide link on top of the slider when slideshow is running, default value is false
	                }
	        };
	        var jssor_slider1 = new $JssorSlider$('slider1_container', options);
	        
	      	//responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizes
            function ScaleSlider() {
                var parentWidth = jssor_slider2.$Elmt.parentNode.clientWidth;
                if (parentWidth)
                    jssor_slider2.$ScaleWidth(Math.min(parentWidth, 600));
                else
                    window.setTimeout(ScaleSlider, 30);
            }

            ScaleSlider();

            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            //responsive code end

	    });
	</script>
</body>
</html>
