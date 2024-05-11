<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Edit Profile</title>
</head>
<body>
	<h3>Edit Profile</h3>
	<a href="/home"><button>Home</button></a>
	
	<form action="/upload" method="post" enctype="multipart/form-data">
		<input name="thisFile" type="file"/>
		<button>Upload Profile Picture</button>
	</form>
	
	<form:form action="/update" method="post" modelAttribute="user">
		<table>
			<tbody class="registerFormContainer">
			<form:input type="hidden" path="id" value="${user.id}"/>
			<form:input type="hidden" path="password"/>
				<tr>
					<td><form:label path="username">Username:</form:label></td>
					<td><form:input class="formInputBox" type="text" path="username"/></td>
				</tr>
				<tr>
					<td><form:label path="email">Email:</form:label></td>
					<td><form:input class="formInputBox" path="email" type="text"></form:input></td>
				</tr>
				<tr>
					<td><form:label path="bio">Bio:</form:label></td>
					<td><form:textarea style="height:150px; width:300px; resize:none; border:1px solid #96aed0; border-radius:10px;box-shadow: 1px 1px 5px black;" path="bio"/></td>
				</tr>
				<tr>
					<td><button>Update</button></td>
				</tr>
			</tbody>
		</table>
	</form:form>
</body>
</html>