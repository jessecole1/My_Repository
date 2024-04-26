<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Add Book</title>
</head>
<body>
	<h2>Add a New Book</h2>
	<div>
		<form:form method="post" action="/book/add" modelAttribute="newBook">
			<table>
				<tbody>
					<tr>
						<td><form:label path="title">Title:</form:label></td>
						<td><form:input path="title" type="text"/></td>
					</tr>
					<tr>
						<td><form:label path="authorName">Author:</form:label></td>
						<td><form:input path="authorName" type="text"/></td>
					</tr>
					<tr>
						<td><form:label path="genre">Genre:</form:label></td>
						<td><form:input path="genre" type="text"/></td>
					</tr>
					<tr>
						<td><form:label path="authorName">Author:</form:label></td>
						<td><form:input path="authorName" type="text"/></td>
					</tr>
					<tr>
						<td><form:label path="releaseDate">Release Date:</form:label></td>
						<td><form:input path="releaseDate" type="number"/></td>
					</tr>
					<tr>
						<td><form:label path="description">Book Description:</form:label></td>
						<td><form:input path="description" type="textarea"/></td>
					</tr>
					<tr>
						<td><button>Create</button>
					</tr>
				</tbody>
			</table>
		</form:form>
	</div>

</body>
</html>