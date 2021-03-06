<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
  
  	<!-- Set the base href -->
<!--   	<base href="http://www.avenueunited.ie/"> -->
      <base href="http://localhost:8080/clubRegisterApp/">


    <title>Avenue United Home Page</title>

    <meta name="_csrf" content="${_csrf.token}"/>
    <!-- default header name is X-CSRF-TOKEN -->
    <meta name="_csrf_header" content="${_csrf.headerName}"/>
    
    <!-- Specifying a Viewport for mobile devices -->
    <meta name=viewport content="width=device-width, initial-scale=1">

    <link rel="shortcut icon" type="image/ico" href="resources/images/favicon.ico" />

	<link rel="preload" href="resources/dist/app/styles/default.min.css" as="style" onload="this.rel='stylesheet'">
	<link rel="preload" href="//netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" as="style" onload="this.rel='stylesheet'">
	<link rel="preload" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" as="style" onload="this.rel='stylesheet'">


    <style>
    	@keyframes blink {
		  50% {
		    opacity: 0.0;
		  }
		}
		@-webkit-keyframes blink {
		  50% {
		    opacity: 0.0;
		  }
		}
		.blink {
		  animation: blink 1s step-start 0s infinite;
		  -webkit-animation: blink 1s step-start 0s infinite;
		  color:white;
		}
    </style>

  </head>

  <!-- 3. Display the application -->
  <body class="main" background="resources/dist/images/stadium1.jpg">
  		<my-app>
  			<div style="color:white;text-align:center;">
	    		<span style="font-size:50px;">OFFICIAL FLEADH CAMPSITE <br />ONLINE BOOKING NOW OPEN <br /></span>
	    		
		    	Booking engine is a little slow at present. It may take up to 20 seconds to load.<br />
				You will need a credit or debit card to pay a deposit to secure your campsite place.<br />
				(or you can use your PayPal account, if you have one)<br />
				Thank you for your patience.<br />
				<span class="blink">LOADING....PLEASE WAIT<br /></span>
			</div>
					
	    </my-app>







<script>
(function(doc, script) {
    var js, 
        fjs = doc.getElementsByTagName(script)[0],
        add = function(url, id) {
            if (doc.getElementById(id)) {return;}
            js = doc.createElement(script);
            js.src = url;
            id && (js.id = id);
            fjs.parentNode.insertBefore(js, fjs);
        };

    // JQuery
    //add('https://code.jquery.com/jquery-2.2.0.min.js', 'jq');
    // JQuery UI
    add('https://code.jquery.com/ui/1.12.0/jquery-ui.min.js', 'jqui');
    // Bootstrap
    add('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js', 'bs');

	add('node_modules/core-js/client/shim.min.js', 'shim');
	add('node_modules/zone.js/dist/zone.min.js', 'zone');
	//add('node_modules/systemjs/dist/system.src.min.js', 'sys');
	
}(document, 'script'));
</script>

	 
	 
	 	<link rel="preload" href="node_modules/primeui/themes/omega/theme.min.css" as="style" onload="this.rel='stylesheet'">
		<link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/primeui/4.1.12/primeui-ng-all.min.css" as="style" onload="this.rel='stylesheet'">
	 
		
			    	
	    	<!-- 1. Load libraries -->
	    	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>

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
					'@angular/*' : 'node_modules/@angular/*',
					'rxjs/*'     : 'node_modules/rxjs/*.js',
					'moment'     : 'node_modules/moment/moment.js'
				},
	    	map: {
	    	        'ng2-bs3-modal':              'node_modules/ng2-bs3-modal',
	    	        moment:                       'node_modules/moment/moment.js',
	    	        'primeng':                    'node_modules/primeng'
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
	   	        'primeng'                          : {defaultExtension: 'js'}
	   	      }
	    	});
	      System.import('resources/dist/app/boot')
	            .then(null, console.error.bind(console));
	    </script>
  </body>

</html>
