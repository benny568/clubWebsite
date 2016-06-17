<%@page import="org.avenue.dao.TaskManagerService"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@page import="java.util.List" %>
<%@page import="java.util.ArrayList" %>
<%@page import="com.google.gson.Gson" %>
<%@page import="com.google.gson.GsonBuilder" %>
<%@page import="org.avenue.service.domain.Media" %>
<%@page import="org.avenue.dao.TaskManagerService" %>
<html>
  <head>
<!--     <base href="http://www.avenueunited.ie/"> -->
    <base href="http://localhost:8080/clubRegisterApp/">

    <title>Avenue United Home Page</title>

    <meta name="_csrf" content="${_csrf.token}"/>
    <!-- default header name is X-CSRF-TOKEN -->
    <meta name="_csrf_header" content="${_csrf.headerName}"/>

    <!-- jQuery (required) -->
    <script src="resources/node_modules/jquery/dist/jquery.min.js"></script>
<!--     <script src="resources/node_modules/jquery-easing/jquery.easing.1.3.js"></script> -->


	<!-- Bootstrap -->
   <link rel="stylesheet" type="text/css" href="resources/node_modules/bootstrap/dist/css/bootstrap.min.css" />
    <script type="text/javascript" src="resources/node_modules/tether/dist/js/tether.min.js"></script>
    <script type="text/javascript" src="resources/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

    <script src="resources/node_modules/es6-shim/es6-shim.min.js"></script>
    <script src="resources/node_modules/systemjs/dist/system-polyfills.js"></script>

    <script src="resources/node_modules/angular2/bundles/angular2-polyfills.js"></script>
    <script src="resources/node_modules/systemjs/dist/system.src.js"></script>
    <script src="resources/node_modules/rxjs/bundles/Rx.js"></script>
    <script src="resources/node_modules/angular2/bundles/angular2.dev.js"></script>
    <script src="resources/node_modules/angular2/bundles/router.dev.js"></script>
    <script src="resources/node_modules/angular2/animate.js"></script>
    <script src="resources/node_modules/ng-bootstrap/ng2-bootstrap.js"></script>
    <script src="resources/node_modules/angular2/bundles/http.dev.js"></script>

    <link rel="stylesheet" type="text/css" href="resources/app/styles/default.css" />
	<link rel="shortcut icon" type="image/ico" href="resources/app/images/favicon.ico" >
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">

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
				'angular2/*' : 'node_modules/angular2/*',
				'rxjs/*'     : 'node_modules/rxjs/*.js'
			}
    	});
      System.import('resources/app/boot')
            .then(null, console.error.bind(console));
    </script>

  </head>

  <!-- 3. Display the application -->
  <body>
    <my-app>Loading...</my-app>
  </body>

</html>
