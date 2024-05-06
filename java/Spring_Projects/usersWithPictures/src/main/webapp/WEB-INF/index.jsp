<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Welcome</title>
</head>
<body>

	<h3>Register</h3>
	<table>
		<tbody>
			<form:form action="/register" method="post" modelAttribute="newUser">
				<tr>
					<td><form:label path="username">Username:</form:label></td>
					<td><form:input path="username" type="text"></form:input></td>
				</tr>
				<tr>
					<td><form:label path="email">Email:</form:label></td>
					<td><form:input path="email" type="text"></form:input></td>
				</tr>
				<tr>
					<td><form:label path="password">Password:</form:label></td>
					<td><form:input path="password" type="password"></form:input></td>
				</tr>
				<tr>
					<td><form:label path="confirm">Confirm Password:</form:label></td>
					<td><form:input path="confirm" type="password"></form:input></td>
				</tr>
				<tr>
					<td><button>Register</button>
				</tr>
			</form:form>
		</tbody>
	</table>
	
	<h3>Login</h3>
		<form:form action="/login" method="post" modelAttribute="newLogin">
			<table>
				<tbody>
					<tr>
						<td><form:label path="email">Email:</form:label></td>
						<td><form:input type="text" path="email"/></td>
					</tr>
					<tr>
						<td><form:label path="password">Password:</form:label></td>
						<td><form:input path="password" type="password"/></td>
					</tr>
					<tr>
						<td><button>Login</button></td>
					</tr>
				</tbody>
			</table>
		</form:form>
	</div>

</body>
</html>