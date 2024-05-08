<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Your Profile Page</title>
</head>
<body>
	<a href="/home"><button>Home</button></a>
	<h3><c:out value="${profileUser.username}"/>'s Profile</h3>
	<p>
		<img src="../profile-pictures/${image}"/>
	</p>

</body>
</html>