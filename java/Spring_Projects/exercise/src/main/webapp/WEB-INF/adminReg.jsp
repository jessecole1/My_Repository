<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Register as Admin</title>
</head>
<body>
	<form:form action="/admin/login" method="post" modelAttribute="newAdminLogin">
		<table>
			<tbody>
				<tr>
					<td><form:label path="email">Email: </form:label></td>
					<td><form:input type="text" path="email"></form:input></td>
				</tr>
				<tr>
					<td><form:label path="password">Password: </form:label></td>
					<td><form:input path="password" type="text"/></td>
				</tr>
				<tr>
					<td><button>Login</button>
				</tr>
			</tbody>
		</table>
	</form:form>
</body>
</html>