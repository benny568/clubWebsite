<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
   <head></head>
   <body onload="logoutForm.submit();">
		<form name='logoutForm' action="<c:url value='j_spring_security_logout' />"
		method='POST'>
		  <!-- <input type="submit" value="Log out" /> -->
		  <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
		</form>	
   </body>
</html>
