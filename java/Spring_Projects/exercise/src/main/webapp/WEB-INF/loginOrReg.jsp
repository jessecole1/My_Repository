<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" tyle="text/css" href="/css/styleTwo.css">
</head>
<body>
	<div class="formCon">
		<div class="formConOne">
			<form:form class="registerTable" action="/register" method="post" modelAttribute="newUser">
				<table>
					<tbody>
						<tr>
							<td><form:label path="username">Username: </form:label></td>
							<td><form:input type="text" path="username"></form:input></td>
						</tr>
						<tr>
							<td><form:label path="email">Email: </form:label></td>
							<td><form:input path="email" type="text"></form:input></td>
						</tr>
						<tr>
							<td><form:label path="password">Password: </form:label></td>
							<td><form:input path="password" type="text"/></td>
						</tr>
						<tr>
							<td><form:label path="confirm">Confirm: </form:label></td>
							<td><form:input path="confirm" type="text"/></td>
						</tr>
						<tr>
							<td><button>Register</button>
						</tr>
					</tbody>
				</table>
			</form:form>
		</div>
		<div class="formConTwo">
			<form:form action="/login" method="post" modelAttribute="newLogin">
				<tbody>
					<tr>
						<td><form:label path="email">Email: </form:label></td>
						<td><form:input type="text" path="email"/></td>
					</tr>
					<tr>
						<td><form:label path="password">Password: </form:label></td>
						<td><form:input path="password" type="text"/></td>
					</tr>
					<tr>
						<td><button>Login</button></td>
					</tr>
				</tbody>
			</form:form>
			<a href="/admin/login">admin login</a>
		</div>
	</div>
</body>
</html>