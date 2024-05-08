<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Users With Pictures Home</title>
<link rel="stylesheet" type="text/css" href="/css/style.css">
</head>
<body class="profilePageBody">
	<h2>Welcome <c:out value="${user.username}"/></h2>
	<a href="/logout"><button>Logout</button></a>
	<a href="/profile/edit"><button>Edit Profile</button></a>
	<c:forEach var="singleUser" items="${allUsers}">
		<p><a href="/profile/${singleUser.id}"><c:out value="${singleUser.username}"/></a></p>
	</c:forEach>
</body>
</html>