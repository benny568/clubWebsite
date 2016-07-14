<%@page import="org.avenue.dao.TaskManagerService"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
   	<base href="http://www.avenueunited.ie/">
<!--      <base href="http://localhost:8080/clubRegisterApp/"> -->
	<!-- Set the base href -->

    <title>Avenue United Home Page</title>

    <meta name="_csrf" content="${_csrf.token}"/>
    <!-- default header name is X-CSRF-TOKEN -->
    <meta name="_csrf_header" content="${_csrf.headerName}"/>

    <!-- jQuery (required) -->
    <script async src="resources/node_modules/jquery/dist/jquery.min.js"></script>
    <script async src="resources/node_modules/jquery-ui/jquery-ui.min.js"></script>
    <script async src="resources/node_modules/jquery-ui/datepicker.min.js"></script>

	<!-- Bootstrap -->
	<link href="//netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
	<script src="resources/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>


	<!-- 1. Load libraries -->
    <script src="node_modules/core-js/client/shim.min.js"></script>
    <script src="node_modules/zone.js/dist/zone.min.js"></script>
    <script src="node_modules/typescript/lib/typescript.min.js"></script>
    <script src="node_modules/reflect-metadata/Reflect.min.js"></script>
    <script src="node_modules/systemjs/dist/system.src.min.js"></script>
    <script src="node_modules/primeui/primeui-ng-all.min.js"></script>

    <link rel="stylesheet" type="text/css" href="resources/dist/app/styles/default.min.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="node_modules/primeui/themes/omega/theme.min.css" />
    <link rel="stylesheet" type="text/css" href="node_modules/primeui/primeui-ng-all.min.css" />
    
    <link rel="shortcut icon" type="image/ico" href="resources/images/favicon.ico" >

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
  <body class="main">
  		<my-app>
    		<span style="color:white;font-size:50px;">OFFICIAL FLEADH CAMPSITE <br />ONLINE BOOKING NOW OPEN <br /></span>
			<span class="blink">LOADING....PLEASE WAIT<br /></span>		
    	</my-app>
  </body>

</html>
