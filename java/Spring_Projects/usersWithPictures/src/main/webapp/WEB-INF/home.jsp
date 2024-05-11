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
<link rel="stylesheet" type="text/css" href="/css/homeStyle.css">
</head>
<body class="profilePageBody">
	<div class="homePagePanel">
		<h2>Welcome <c:out value="${user.username}"/></h2>
		<span class="bottomHomePagePanel">
			<a href="/logout"><button class="homePageButton">Logout</button></a>
			<a href="/profile/${user.id}"><button class="homePageButton">Profile</button></a>			
		</span>		
	</div>
	<c:forEach var="singleUser" items="${allUsers}">
		<p><a href="/profile/${singleUser.id}"><c:out value="${singleUser.username}"/></a></p>
	</c:forEach>
	<div>
		<form action="/upload/photo" method="post" enctype="multipart/form-data">
			<input name="thisFile" type="file"/>
			<button>Upload Picture</button>
		</form>
	</div>
	<div class="postsContainer">
		<c:forEach var="pic" items="${postedPics}">
			<div class="postBackground">
				<div class="post">
					<img style="width: 75%; height: 400px;border: 2px solid black;" src="../post-pictures/${pic}"/>
				</div>			
			</div>
		</c:forEach>
	</div>
</body>
</html>