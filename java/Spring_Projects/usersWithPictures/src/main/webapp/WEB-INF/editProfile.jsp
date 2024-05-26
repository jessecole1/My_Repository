<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
#waitForFile {
	display: none;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #3498db;
    color: #fff;
    border-radius: 5px;
    border: none;
    margin-top: 2%;
}

#waitForFile2 {
	display: none;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #3498db;
    color: #fff;
    border-radius: 5px;
    border: none;
    margin-top: 2%;
    height: 50%;
}
</style>
<title>Edit Profile</title>
<link rel="stylesheet" type="text/css" href="/css/profilePage.css">
<link rel="stylesheet" type="text/css" href="/css/picHomeStyle.css">

<script>
var button = document.getElementById("waitForFile");

document.addEventListener('DOMContentLoaded', function() {
	function test() {
		var x = document.getElementById("waitForFile");
		x.style.display = "block";
	}
    var chosenElement = document.getElementById("thisFile");
    chosenElement.addEventListener("change", test);
});
</script>

</head>
<body>
	<div class="contentContainer">
		<div class="leftContainer">
			<div class="homeTitlePic">
				<img style="width: 75%;" src="../../project-pictures/appTitle.png"/>
			</div>
			<div class="leftNavLinks">
				<span class="leftNavLinkSpan"><a style="text-align: left;" href="/home">Home</a></span>
				<span class="leftNavLinkSpan"><a href="/upload/photo/one">Upload</a></span>
				<span class="leftNavLinkSpan"><a href="#">Search</a></span>
				<span class="leftNavLinkSpan"><a href="#">Notifications</a></span>
			</div>
		</div>
		
		<div class="middleContainer">
		<h3>Edit Profile</h3>
		
<%-- 		<form action="/upload" method="post" enctype="multipart/form-data">
			<input name="thisFile" type="file"/>
			<button>Upload Profile Picture</button>
		</form> --%>
		
		<%-- form:form action="/update" method="post" modelAttribute="user">
			<table>
				<tbody class="editAccountTable">
					<form:input type="hidden" path="id" value="${user.id}"/>
					<form:input type="hidden" path="password"/>
					<tr>
						<td><form:label path="username">Username:</form:label></td>
						<td><form:input class="formInputBox" type="text" path="username"/></td>
					</tr>
					<tr>
						<td><form:label path="email">Email:</form:label></td>
						<td><form:input class="formInputBox" path="email" type="text"></form:input></td>
					</tr>
					<tr>
						<td><form:label path="bio">Bio:</form:label></td>
						<td><form:textarea style="height:150px; width:300px; resize:none; border:1px solid #96aed0; border-radius:10px;box-shadow: 1px 1px 5px black;" path="bio"/></td>
					</tr>
					<tr>
						<td><button>Update</button></td>
					</tr>
				</tbody>
			</table>
		</form:form> --%>
		
		<div class="profilePicNav">
			<div class="profilePicNavTop">
				<div style="display: flex; flex-direction: column; align-items: center;">
					<img class="profilePic" src="../../profile-pictures/${aUser.getMainPicture().getImageName()}"/>
					<div class="uploadImageFormDiv">
						<form action="/upload" method="post" enctype="multipart/form-data">
							<input id="thisFile" name="thisFile" type="file"/>
							<label for="thisFile" class="custom-file-upload buttonGeneral" style="height: 30px;">New Profile Pic</label>
							<button id="waitForFile">Upload Profile Picture</button>
						</form>
					</div>
				</div>
				<div class="topNavInfo">
					<form:form action="/update/${aUser.id}" mode="put" modelAttribute="aUser">
					<table>
						<tbody>
							<form:input type="hidden" path="id" value="${aUser.id}"/>
							<form:input type="hidden" path="password"/>
							<form:input type="hidden" path="email" value="${aUser.email}"/>
							<tr>
								<td><form:label path="username">Username:</form:label></td>
								<td><form:input class="formInputBox" type="text" path="username"/></td>
							</tr>
							<tr>
								<td><c:out value="${aUser.photos.size()}"/> posts</td>
								<td><c:out value="${aUser.followers.size()}"/> followers</td>
								<td><c:out value="${aUser.followedUsers.size()}"/> following</td>
							</tr>
							<tr>
								</tr>
						</tbody>
					</table>
					<p>Bio: <form:textarea style="height:50px; width:300px; resize:none; border:1px solid #96aed0; border-radius:10px;box-shadow: 1px 1px 5px black;" path="bio"/></p>
					<button class="buttonGeneral">Update</button>
					</form:form>
					
					
						<%-- <h3 style="font-size: 30px; color: black;"><c:out value="${profileUser.username}"/></h3>
						<div class="topNavInfoBottomHalf">
							<p>Followers: <c:out value="${profileUser.followers.size()}"/></p>
							<p>Following: <c:out value="${profileUser.followedUsers.size()}"/></p>
						</div> --%>
				</div>
			</div>
		</div>
		
		<div class="profileMainContent">
				<div class="profilePicNav">
					<div class="photosContainer">
						<c:forEach var="pic" items="${usersPhotos}" varStatus="loop">
								<c:if test="${loop.index % 3 == 0}">
									<br>
								</c:if>
									<img style="width:200px; height:200px" src="../../post-pictures/${pic.getImageName()}"/>			
						</c:forEach>
					</div>
				</div>	
			</div>
		</div>
		<div class="rightContainer">
			<div class="rightContainerTop">
				<div>
					<c:choose>
						<c:when test="${aUser.getMainPicture().getImageName() == 'profile-icon.jpg'}">
							<img style="border: 2px solid black;" class="headerPicture" src="../../project-pictures/profile-icon.jpg"/>
						</c:when>
						<c:otherwise>
							<img style="border: 2px solid black;" class="headerPicture" src="../../profile-pictures/${aUser.getMainPicture().getImageName()}"/>						
						</c:otherwise>
					</c:choose>
				</div>
				<div class="rightContainerTopRight">
					<a href="#"><c:out value="${aUser.username}"/></a>
					<c:out value="${aUser.email}"/>
				</div>
			</div>
			<div class="rightContainerMid">
				<a href="/profile/${aUser.id}">Profile</a>
				<a href="#">Settings</a>
				<a href="/logout">Logout</a>
			</div>
		</div>
		
		
		
	</div>
</body>
</html>