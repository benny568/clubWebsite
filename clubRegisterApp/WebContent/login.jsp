<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
	<title>Login Page</title>
</head>
<body onload='document.loginForm.j_username.focus();'>
	<h3>Login Page</h3>
	 
	<%
		String errorString = (String)request.getAttribute("error");
		if(errorString != null && errorString.trim().equals("true")){
		out.println("Incorrect login name or password. Please retry using correct login name and password.");
		}
	%>
	 
	<form name='loginForm' action="<c:url value='j_spring_security_check' />"
	method='POST'>	 
		<table>
			<tr>
				<td>User:</td>
				<td><input type='text' name='j_username' value=''>
				</td>
			</tr>
			<tr>
				<td>Password:</td>
				<td><input type='password' name='j_password' />
				</td>
			</tr>
			<tr>
				<td><input name="submit" type="submit"
				value="submit" />
				</td>
				<td><input name="reset" type="reset" />
				</td>
			</tr>
		</table>
		<input type="hidden"  name="${_csrf.parameterName}"   value="${_csrf.token}"/>
	</form>
</body>
</html>