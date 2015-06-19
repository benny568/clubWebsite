<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html ng-app="newsApp">
<%@page import="java.io.*"%>
<%@page import="java.util.ArrayList"%>
<%@page import="org.avenue.service.domain.NewsStory"%>
<head>  <!-- HEAD START -->
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	
	<title>Avenue United Home</title>
		
		<script type="text/javascript" src="resources/js/jquery-2.1.4.min.js"></script>
		<script type="text/javascript" src="resources/js/bootstrap.js"></script>
		<script type="text/javascript" src="resources/js/angular.js"></script>
		<script type="text/javascript" src="resources/js/angular-animate.js"></script>
		<script type="text/javascript" src="resources/js/angular-resource.js"></script>
		<script type="text/javascript" src="resources/js/angular-aria.js"></script>
		<script type="text/javascript" src="resources/js/angular-cookies.js"></script>
		<script type="text/javascript" src="resources/js/angular-loader.js"></script>
		<script type="text/javascript" src="resources/js/angular-messages.js"></script>
		<script type="text/javascript" src="resources/js/angular-route.js"></script>
		<script type="text/javascript" src="resources/js/angular-sanitize.js"></script>
		<script type="text/javascript" src="resources/js/angular-scenario.js"></script>
		<script type="text/javascript" src="resources/js/angular-touch.js"></script>
		<script type="text/javascript" src="resources/js/jssor.js"></script>
		<script type="text/javascript" src="resources/js/jssor.slider.js"></script>
		<script type="text/javascript" src="resources/js/smart-table.min.js"></script>
		<script type="text/javascript" src="resources/js/carousel.js"></script>
		<script type="text/javascript" src="resources/js/news.js"></script>
		
		<link rel="stylesheet" type="text/css" href="resources/css/animate.css" />
		<link rel="stylesheet" type="text/css" href="resources/css/bootstrap.css" />
		<link rel="stylesheet" type="text/css" href="resources/css/default.css" />
		<link rel="stylesheet" type="text/css" href="resources/font-awesome-4.3.0/css/font-awesome.css" />
		<link rel="stylesheet" type="text/css" href="resources/css/default.css" />
		<link rel="stylesheet" type="text/css" href="resources/css/carousel.css" />
		<link rel="stylesheet" type="text/css" href='http://fonts.googleapis.com/css?family=Open+Sans' />
		<link rel="stylesheet" type="text/css" href='resources/css/news.css' />

</head>  <!-- HEAD END -->

<body ng-controller="newsController">

	<!-- (1) Banner across the top & the menu -->
	<div ng-include="'resources/viewParts/headerNmenu.html'"></div>

	<div id="wrap">
		<div class="container t1">
			<img src="resources/images/AvenueColours.png" height="50" width="200" alt="Club Colours" data-toggle="tooltip" data-placement="top" title="Club Colours"/>
			<div class="blankspace"></div>
			
			<!-- ***************************************************************** -->	
			<% ArrayList<NewsStory> strys = (ArrayList<NewsStory>) session.getAttribute("stories");%>

			<div class="row">
				<div class="col-md-3">
					<img src="resources/images/adverts/enzos.jpg" alt="Enzos Takeaway" class="img-thumbnail" height="190" width="100%"/>
				</div>
				<div class="col-md-9">
				
				    <!-- Jssor Slider Begin -->
				    <!-- To move inline styles to css file/block, please specify a class name for each element. --> 
				    <div id="slider1_container" class="centered" style="position: relative; top: 0px; left: 0px; width: 810px; height: 300px; background: #000; overflow: hidden; ">
				        <!-- Loading Screen -->
				        <div u="loading" style="position: absolute; top: 0px; left: 0px;">
				            <div style="filter: alpha(opacity=70); opacity:0.7; position: absolute; display: block;
				                background-color: #000000; top: 0px; left: 0px;width: 100%;height:100%;">
				            </div>
				            <div style="position: absolute; display: block; background: url(resources/images/loading.gif) no-repeat center center;
				                top: 0px; left: 0px;width: 100%;height:100%;">
				            </div>
				        </div>      
				        <!-- ##############  Slides Container  ############## -->
				        <div u="slides" style="cursor: move; position: absolute; left: 0px; top: 0px; width: 600px; height: 300px;
				            overflow: hidden;">
				
				            <div ng-repeat="story in stories">
				                <img u="image" src="resources/images/photography/{{story['image']}}" />
				                <div u="thumb">
				                    <img class="i" src="resources/images/photography/thumb-{{story['image']}}" /><div class="t">{{story["title"]}}</div>
				                    <div class="c">{{story["description"]}}</div>
				                </div>
				            </div>        		            
				        </div>   
				        <!--#region ThumbnailNavigator Skin Begin -->
				        <div u="thumbnavigator" class="jssort11" style="left: 605px; top:0px;">
				            <!-- Thumbnail Item Skin Begin -->
				            <div u="slides" style="cursor: default;">
				                <div u="prototype" class="p" style="top: 0; left: 0;">
				                    <div u="thumbnailtemplate" class="tp"></div>
				                </div>
				            </div>
				            <!-- Thumbnail Item Skin End -->
				        </div>
				        <!--#endregion ThumbnailNavigator Skin End -->
				    </div>
				    <!-- Jssor Slider End -->		
					<!-- ***************************************************************** -->				
				
				</div> <!-- end col -->
			</div> <!-- end row -->
			
	    	
		</div> <!--  End of container t1 -->
		
		<div class="blankspace"></div>

	</div> <!-- end wrap -->
	
	<div class="navbar navbar-inverse navbar-fixed-bottom" role="navigation">
		<div class="container navbar-text pull-left" style="max-height:0px;">
			<p>© Avenue United 2015</p>
		</div>
	</div>


	<script type="text/javascript">
		var newsModule = angular.module('newsApp', ['ngAnimate', 'ngResource']);
		newsModule.controller('newsController', function ($scope,$http) 
		{	
			$scope.stories = new Array();
			
			<%for(int i=0; i<strys.size(); i++)
			  {
			  %>
				$scope.stories.push({title:"<%=strys.get(i).getTitle()%>", description: "<%=strys.get(i).getDescription()%>", image: "<%=strys.get(i).getImage()%>"});
			<%}%>
		}); // End of newsController
	</script>			    
	
</body>
</html>
