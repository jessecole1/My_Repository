<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Books</title>
</head>
<body>
	<h1>
		Hello testing main page
	</h1>
	<a href="/page/register"><button>Register</button></a>
	<a href="/book/new"><button>Add Book</button></a>
	<table>
		<tbody>
			<c:forEach var="book" items="${books}">
				<tr>
					<td>Title:</td>
					<td>${book.title}</td>
				</tr>
				<tr>
					<td>Author:</td>
					<td>${book.authorName}</td>
				</tr>
				<tr>
					<td>Genre:</td>
					<td>${book.genre}</td>
				</tr>
				<tr>
					<td>Release Date:</td>
					<td>${book.releaseDate}</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
</body>
</html>