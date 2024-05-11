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
<link rel="stylesheet" type="text/css" href="/css/profilePage.css">
</head>
<body class="profilePageBody">
	<div class="homePagePanel">
		<h2>Welcome <c:out value="${user.username}"/></h2>
		<span class="bottomHomePagePanel">
			<a href="/logout"><button class="homePageButton">Logout</button></a>
			<a href="/home"><button class="homePageButton">Home</button></a>			
		</span>		
	</div>
	<div class="profileMainContent">
		<div class="profilePicNav">
			<div class="profilePicNavTop">
				<img class="profilePic" src="${finalPath}"/>
				<div>
					<h3 style="font-size: 30px; color: black;"><c:out value="${profileUser.username}"/></h3>
					<p>Bio: <c:out value="${profileUser.bio}"/>
				</div>
				<a href="/profile/edit"><button class="homePageButton">Edit Profile</button></a>
			</div>
			<div class="profilePicNavBottom">
			
			</div>
		</div>	
	</div>
</body>
</html>