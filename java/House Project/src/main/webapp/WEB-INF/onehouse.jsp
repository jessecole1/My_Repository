<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>View Listing</title>
<link rel="stylesheet" type="text/css" href="/css/styleFive.css">
</head>
<body>
	<h1><c:out value="${house.address}"/></h1>
	<p><a href="/dashboard">Dashboard</a>
	<div class='info'>
		<p>Address: <c:out value="${house.address}"/></p>
		<p>Listing Date: <c:out value="${house.listingDate}"/></p>
		<p>Price: <c:out value="${house.price}"/></p>
	</div>
	<div class='notes'>
		<h3>Notes</h3>
		<c:forEach var="note" items="${house.note}">
		<p>Added By: <c:out value="${note.user.name}"/>
		<p style="padding-left: 100px; padding-bottom: 20px;"> - <c:out value="${note.content}"/></p>
		</c:forEach>
	</div>
	<div class="actions">
		<c:choose>
		<c:when test="${user.id == house.user.id}">
		<p style="padding-right: 20px;"><a href="/listing/${house.id}/edit">edit</a></p>
		<form action="/listing/${house.id}/destroy" method="post">
			<button>Delete House</button>
		</form>
		</c:when>
		</c:choose>
	</div>
	<div>
		<form:form action="/note/add" method="post" modelAttribute="note">
			<form:label path="content">Note:</form:label>
			<form:input type="hidden" path="user" value="${user.id}"/>
			<form:input type="hidden" path="house" value="${house.id}"/>
			<form:textarea path="content"/>
			<button>Submit</button>
		</form:form>
	</div>
</body>
</html>