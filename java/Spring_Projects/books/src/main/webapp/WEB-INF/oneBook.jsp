<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title><c:out value="${book.title}"/></title>
</head>
<body>
	<h2><c:out value="${book.title}"/></h2>
	<p><a href="/book/add/want/${book.id}">Want to Read</a>
	<table>
		<tbody>
			<tr>
				<td>Author Name:</td>
				<td><c:out value="${book.authorName}"/></td>
			</tr>
			<tr>
				<td>Genre:</td>
				<td><c:out value="${book.genre}"/></td>
			</tr>
			<tr>
				<td>Release Date:</td>
				<td><c:out value="${book.releaseDate}"/></td>
			</tr>
			<tr>
				<td>Description:</td>
				<td><c:out value="${book.description}"/></td>
			</tr>
		</tbody>
	</table>
</body>
</html>