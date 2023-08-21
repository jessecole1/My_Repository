<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Welcome <c:out value="${user.name}"/></title>
<link rel="stylesheet" type="text/css" href="/css/styleTwo.css">
</head>
<body>
	<div class="dashTitle">
		<span>
			<h1>Welcome, <c:out value="${user.name}"/>!</h1>
		</span>
		<span>
			<a style="padding-left: 20px;" href="/logout">logout</a>
		</span>
	</div>
	<table>
		<thead>
			<tr>
				<th>Address</th>
				<th>Listed On</th>
				<th>Added By</th>
				<th>Price</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="house" items="${houses}">
<%-- 			<c:choose>
			<c:when test="${house.updatedAt != null}"> --%>
			<tr>
				<td><a href="/listing/${house.id}"><c:out value="${house.address}"/></a></td>
				<td>
				<fmt:formatDate value="${house.listingDate}" pattern="dd/MM/yyyy" />
				</td>
				<td><c:out value="${house.user.name}"/></td>
				<td>$<c:out value="${house.price}"/></td>
			</tr>
<%-- 			</c:when>
			<c:otherwise>
			<tr>
				<td><a href="/listing/${house.id}"><c:out value="${house.address}"/></a></td>
				<td><c:out value="${house.createdAt}"/></td>
				<td><c:out value="${house.user.name}"/></td>
				<td>$<c:out value="${house.price}"/></td>
			</tr>
			</c:otherwise>
			</c:choose> --%>
			</c:forEach>
		</tbody>
	</table>
	<a href="/house/new"><button class="addShowButton">Add Listing</button></a>
</body>
</html>