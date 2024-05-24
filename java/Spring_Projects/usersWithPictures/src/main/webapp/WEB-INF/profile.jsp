<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<script>

function togglePopup() { 
    const overlay = document.getElementById('popupOverlay'); 
    overlay.classList.toggle('show'); 
} 
</script>
<style>
.overlayContainer {
	display: none;
	top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
    background: rgba(0, 0, 0, 0.6); 
    justify-content: center; 
    align-items: center; 
    opacity: 0; 
    transition: opacity 0.3s ease; 
}
.overlayContainer.show {
	display: flex;
}

</style>
<meta charset="UTF-8">
<title>Your Profile Page</title>
<link rel="stylesheet" type="text/css" href="/css/profilePage.css">
<link rel="stylesheet" type="text/css" href="/css/picHomeStyle.css">
</head>
<body class="profilePageBody">
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
			<div class="profileMainContent">
				<div class="profilePicNav">
					<div class="profilePicNavTop">
						<img class="profilePic" src="${finalPath}"/>
						<div class="topNavInfo">
							<table>
								<tbody>
									<tr>
										<td style="font-size: 120%; font-weight: bold;"><c:out value="${profileUser.username}"/></td>
									</tr>
									<tr>
										<td><c:out value="${profileUser.photos.size()}"/> posts</td>
										<td><c:out value="${profileUser.followers.size()}"/> followers</td>
										<td><c:out value="${profileUser.followedUsers.size()}"/> following</td>
									</tr>
								</tbody>
							</table>
							<%-- <h3 style="font-size: 30px; color: black;"><c:out value="${profileUser.username}"/></h3>
							<div class="topNavInfoBottomHalf">
								<p>Followers: <c:out value="${profileUser.followers.size()}"/></p>
								<p>Following: <c:out value="${profileUser.followedUsers.size()}"/></p>
							</div> --%>
							<p>Bio: <c:out value="${profileUser.bio}"/>
						</div>
						<c:choose>
							<c:when test="${profileUser.id == user.id}">
								<a href="/profile/edit"><button class="buttonGeneral">Edit Profile</button></a>					
							</c:when>
							<c:otherwise>
								<form:form action="/follow/${profileUser.id}" method="post" modelAttribute="userFollow">
									<button class="buttonGeneral">Follow</button>
								</form:form>
							</c:otherwise>
						</c:choose>
					</div>
					<div class="photosContainer">
						<c:forEach var="pic" items="${usersPhotos}" varStatus="loop">
								<c:if test="${loop.index % 3 == 0}">
									<br>
								</c:if>
									<img style="width:200px; height:200px" src="../post-pictures/${pic.getImageName()}"/>			
						</c:forEach>
					</div>
				</div>	
			</div>
		</div>
		<div class="rightContainer">
			<div class="rightContainerTop">
				<div>
					<c:choose>
						<c:when test="${user.getMainPicture().getImageName() == 'profile-icon.jpg'}">
							<img style="border: 2px solid black;" class="headerPicture" src="../project-pictures/profile-icon.jpg"/>
						</c:when>
						<c:otherwise>
							<img style="border: 2px solid black;" class="headerPicture" src="../profile-pictures/${user.getMainPicture().getImageName()}"/>						
						</c:otherwise>
					</c:choose>
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
			<div id="popupOverlay" class="overlayContainer">
				<p>HEEEEEEY</p>
			</div>
		    <button class="btn-open-popup" onclick="togglePopup()"> 
   				Open Popup Form 
   			</button> 
		</div>
	</div>
</body>
</html>