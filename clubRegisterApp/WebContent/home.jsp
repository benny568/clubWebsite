<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
  	<!-- Set the base href -->
  	<base href="http://www.avenueunited.ie/">
  <!--   <base href="http://localhost:8080/clubRegisterApp/"> -->

    <title>Avenue United Home Page</title>

    <meta name="_csrf" content="${_csrf.token}"/>
    <!-- default header name is X-CSRF-TOKEN -->
    <meta name="_csrf_header" content="${_csrf.headerName}"/>
    
    <link rel="stylesheet" href="resources/dist/app/styles/default.min.css" media="none" onload="if(media!='all')media='all'"/>
    <link rel="shortcut icon" type="image/ico" href="resources/images/favicon.ico" />
    
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" media="none" onload="if(media!='all')media='all'"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"  media="none" onload="if(media!='all')media='all'"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/primeui/4.1.12/primeui-ng-all.min.css" media="none" onload="if(media!='all')media='all'"/>

    <style>
    	@keyframes blink{50%{opacity:0}}@-webkit-keyframes blink{50%{opacity:0}}.blink{animation:blink 1s step-start 0s infinite;-webkit-animation:blink 1s step-start 0s infinite;color:#fff}
    </style>

  </head>

  <!-- 3. Display the application -->
  <body class="main">
  		<my-app>
  		
  			<div style="color:white;text-align:center;">
	    		<span style="font-size:50px;">Avenue United Official Website <br /></span>
	    		
		    	Loading is a little slow at present. It may take up to 20 seconds to load.<br />
				Thank you for your patience.<br />
				<span class="blink">LOADING....PLEASE WAIT<br /></span>
			</div>
					
	    </my-app>
	 
	    	
	    <!-- jQuery (required) -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
		<script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>
	
		<!-- Bootstrap -->
		<script async src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	    	
	    <!-- 1. Load libraries -->
	    <script src="node_modules/core-js/client/shim.min.js"></script>
	    <script src="node_modules/zone.js/dist/zone.min.js"></script>
	    <script src="node_modules/systemjs/dist/system.src.min.js"></script>

    	
    	<!-- 2. Configure SystemJS -->
	    <script>
	    System.config({
			defaultJSExtensions: true,
			packages: {        
	    	    app: {
	    	      format: 'register',
	    	      defaultExtension: 'js'
	    	    }
	    	  },
			paths: {
					'@angular/*'           : 'node_modules/@angular/*',
					//'@angular2-material/*' : 'node_modules/@angular2-material/*',
					'rxjs/*'               : 'node_modules/rxjs/*.js',
					'moment'               : 'node_modules/moment/moment.js'
				},
	    	map: {
	    	        'ng2-bs3-modal':              'node_modules/ng2-bs3-modal',
	    	        moment:                       'node_modules/moment/moment.js',
	    	        'primeng':                    'node_modules/primeng',
	    	        'symbol-observable'         : 'node_modules/symbol-observable'
	    	        
	    	    },
	   	    packages: {
	   	        'app'                              : {main: 'boot.ts', defaultExtension: 'ts'},
	   	        'rxjs'                             : {main: 'index.js'},
	   	        '@angular/core'                    : {main: 'index.js'},
	   	        '@angular/common'                  : {main: 'index.js'},
	   	        '@angular/compiler'                : {main: 'index.js'},
	   	        '@angular/router'                  : {main: 'index.js', defaultExtension: 'js' },
	   	        '@angular/forms'                   : {main: 'index.js'},
	   	     	'@angular/http'                    : {main: 'index.js'},
	   	        '@angular/platform-browser'        : {main: 'index.js'},
	   	        '@angular/platform-browser-dynamic': {main: 'index.js'},
	   	        //'@angular2-material/card'          : {main: 'card.js'},
	   	        //'@angular2-material/button'        : {main: 'button.js'},
	   	        'primeng'                          : {defaultExtension: 'js'},
	   	        'symbol-observable'                : {main: 'index.js', defaultExtension: 'js' }
	   	      }
	    	});
	      System.import('resources/dist/app/boot')
	            .then(null, console.error.bind(console));
	    </script>

  </body>

</html>
