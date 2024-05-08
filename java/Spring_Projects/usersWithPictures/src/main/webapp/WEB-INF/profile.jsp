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
<link rel="stylesheet" type="text/css" href="/css/style.css">
</head>
<body class="profilePageBody">
	<a href="/home"><button>Home</button></a>
	<div class="profilePicNav">
		<img class="profilePic" src="${finalPath}"/>
		<h3 style="font-size: 30px; color: white;"><c:out value="${profileUser.username}"/>'s Profile</h3>
	</div>

</body>
</html>