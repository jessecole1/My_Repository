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

function togglePopupTwo() { 
    const overlay = document.getElementById('popupOverlayTwo'); 
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
	position: absolute;
	margin: auto;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	width: 35%;
	height: 300px;
	background-color: rgb(157,176,236);
	transition: opacity 0.3s ease; 
	border-radius: 20px;
	border: 3px solid white;
	box-shadow: 2px 2px 20px;
	position: fixed;
}

@keyframes fadeInUp { 
            from { 
                opacity: 0; 
                /* transform: translateY(20px);  */
            } 
  
            to { 
                opacity: 1; 
                /* transform: translateY(0);  */
            } 
        } 

td.tdSection {
	border-bottom: 2px solid black;
}

.overlayContainer.show {
	display: flex;
	justify-content: center;
	opacity: 1;
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
			<div class="homeTitlePic">
				<img style="width: 75%;" src="../project-pictures/appTitle.png"/>
			</div>
			<div class="leftNavLinks">
				<span class="leftNavLinkSpan"><a style="text-align: left;" href="/home">Home</a></span>
				<span class="leftNavLinkSpan"><a href="/upload/photo/one">Upload</a></span>
				<span class="leftNavLinkSpan"><a href="#">Search</a></span>
				<span class="leftNavLinkSpan"><a href="#">Notifications</a></span>
			</div>
		</div>
		<div class="middleContainer">
		
			<div id="popupOverlay" class="overlayContainer">
				<div class="popUpBox">
					<table class="popUpTable">
						<c:forEach var="person" items="${profileUser.followers}">
							<tr>
								<td class="tdSection"><img class="popUpFollowersPics" src="../../profile-pictures/${person.mainPicture.imageName}"/></td>
								<td class="tdSection"><a href="/profile/${person.id}"><c:out value="${person.username}"/></a></td>
							</tr>
						</c:forEach>
					</table>
				</div>
			</div>
			
			<div id="popupOverlayTwo" class="overlayContainer">
				<div class="popUpBox">
					<table class="popUpTable">
						<c:forEach var="person" items="${profileUser.followedUsers}">
							<tr>
								<td class="tdSection"><img class="popUpFollowersPics" src="../../profile-pictures/${person.mainPicture.imageName}"/></td>
								<td class="tdSection"><a href="/profile/${person.id}"><c:out value="${person.username}"/></a></td>
							</tr>
						</c:forEach>
					</table>
				</div>
			</div>
		
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
										<td class="pointer" onclick="togglePopup()"><c:out value="${profileUser.followers.size()}"/> followers</td>
										<td class="pointer" onclick="togglePopupTwo()"><c:out value="${profileUser.followedUsers.size()}"/> following</td>
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
								<a href="/profile/edit/${user.id}"><button class="buttonGeneral">Edit Profile</button></a>					
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
		</div>
	</div>
</body>
</html>