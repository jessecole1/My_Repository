<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Upload Photo</title>
<link rel="stylesheet" type="text/css" href="/css/homeStyle.css">
<link rel="stylesheet" type="text/css" href="/css/picHomeStyle.css">
<script>

</script>
</head>
<body>
	<div class="contentContainer">
		<div class="leftContainer">
			<h1 class="title" style="width: 100%; text-align: center;">Pictogram</h1>
			<div class="leftNavLinks">
				<span class="leftNavLinkSpan"><a style="text-align: left;" href="/home">Home</a></span>
				<span class="leftNavLinkSpan"><a href="/upload/photo/one">Upload</a></span>
				<span class="leftNavLinkSpan"><a href="#">Search</a></span>
				<span class="leftNavLinkSpan"><a href="#">Notifications</a></span>
			</div>
		</div>
		<div class="middleContainer">
			<div class="uploadFormMiddle">
				<form style="height: 50%;" action="/upload/photo/" method="post" enctype="multipart/form-data">
					<table style="height: 100%;">
						<tbody style="height: 100%;display: flex; align-items: center; flex-direction: column; justify-content: space-evenly">
							<tr>
								<td><label class="custom-file-upload" for="thisFile">Choose a file</label></td>
							</tr>
							<tr>
								<td><input id="thisFile" name="thisFile" type="file"/></td>
							</tr>
							<tr>
								<td><button class="uploadButtonBottom">Upload</button></td>
							</tr>
						</tbody>
					</table>
				</form>
			</div>
		</div>
		<div class="rightContainer">
			<div class="rightContainerTop">
				<div>
					<c:choose>
						<c:when test="${user.getMainPicture().getImageName() == 'profile-icon.jpg'}">
							<img style="border: 2px solid black;" class="headerPicture" src="../../project-pictures/profile-icon.jpg"/>
						</c:when>
						<c:otherwise>
							<img style="border: 2px solid black;" class="headerPicture" src="../../profile-pictures/${user.getMainPicture().getImageName()}"/>						
						</c:otherwise>
					</c:choose>
					<%-- <img class="headerPicture" src="../profile-pictures/${user.mainPicture.getImageName()}"/> --%>
				</div>
				<div class="rightContainerTopRight">
					<a href="#"><c:out value="${user.username}"/></a>
					<c:out value="${user.email}"/>
				</div>
			</div>
			<div class="rightContainerMid">
				<a href="/profile/${user.id}">Profile</a>
				<a href="#">Settings</a>
				<a href="/logout">Logout</a>
			</div>
		</div>
	</div>
</body>
</html>