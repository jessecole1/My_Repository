<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Welcome Page</title>
<link rel="stylesheet" type="text/css" href="/css/style.css">
</head>
<body>
	<div>
		<h1 class="indexTitle" style="color: rgb(43,119,228); text-align: center;">Welcome, House Hunter!</h1>
	</div>
	<div class="forms">
		<div class="formBox">
			<form:form class="fTwo" action="/register" method="post" modelAttribute="newUser">
			<table class="indexTable">
				<tbody class="indexTbody">
					<tr>
						<th colspan="2"><h2>Register</h2></th>
					</tr>
					<tr>
						<td class="dOne"><form:label path="name">Name:</form:label>
						<form:errors class="errorColor" path="name"/>
						<td style="text-align: center" class="dTwo"><form:input class="indexInput" type="text" path="name"/>
					</tr>
					<tr>
						<td class="dOne"><form:label path="email">Email:</form:label>
						<form:errors class="errorColor" path="email"/>
						<td style="text-align: center" class="dTwo"><form:input class="indexInput" type="text" path="email"/>
					</tr>
					<tr>
						<td class="dOne"><form:label path="password">Password:</form:label>
						<form:errors class="errorColor" path="password"/>
						<td style="text-align: center" class="dTwo"><form:input class="indexInput" type="password" path="password"/>
					</tr>
					<tr>
						<td class="dOne"><form:label path="confirm">Confirm:</form:label>
						<form:errors class="errorColor" path="confirm"/>
						<td style="text-align: center" class="dTwo"><form:input class="indexInput" type="password" path="confirm"/>
					</tr>
					<tr style="text-align:center">
						<td style="text-align: center" class="tdButton" colspan="2"><button class="formButton">Register</button></td>
					</tr>
				</tbody>
			</table>
			</form:form>
		</div>
		<div class="formBox">
	 		<form:form class="fTwo" action="/login" method="post" modelAttribute="newLogin">
			<table class="indexTable">
				<tbody>
					<tr>
						<th colspan="2"><h2>Login</h2></th>
					</tr>
					<tr>
						<td class="dOne"><form:label path="email">Email:</form:label>
						<form:errors class="errorColor" path="email"/>
						<td style="text-align: center" class="dTwo"><form:input class="indexInput" type="text" path="email"/>
					</tr>
					<tr>
						<td class="dOne"><form:label path="password">Password:</form:label>
						<form:errors class="errorColor" path="password"/>
						<td style="text-align: center" class="dTwo"><form:input class="indexInput" type="password" path="password"/>
					</tr>
					<tr style="text-align: center" class="tdButton">
						<td colspan="2"><button class="formButton">Login</button></td>
					</tr>
				</tbody>
			</table>
			</form:form>
		</div>
	</div>
</body>
</html>