<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Add Listing</title>
<link rel="stylesheet" type="text/css" href="/css/styleSix.css">
</head>
<body>
	<h1>New Listing</h1>
	<p><a href="/dashboard">Dashboard</a></p>
	<form:form action="/house/new" method="post" modelAttribute="house">
	<form:input type="hidden" path="user" value="${user.id}"/>
	<table class='form'>
		<tbody>
			<tr>
				<td><form:label path="address">Address:</form:label></td>
				<form:errors path="address"/>
				<td><form:input path="address" type="text"/></td>
			</tr>
			<tr>
				<td><form:label path="price">Price:</form:label></td>
				<form:errors path="price"/>
				<td><form:input path="price" type="number"/></td>
			</tr>
			<tr>
				<td><form:label path="listingDate">Listing Date:</form:label></td>
				<form:errors path="listingDate"/>
				<td><form:input type="date" path="listingDate"/>
			</tr>
		</tbody>
	</table>
	<button>Submit</button>
	</form:form>
</body>
</html>