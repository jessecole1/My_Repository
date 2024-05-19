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
<link rel="styleSheet" type="text/css" href="/css/picHomeStyle.css">
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
				<c:forEach var="pic" items="${postedPics}">
					<div class="postBackground">
						<div class="post">
							<div class="postTopNav">
								<c:choose>
									<c:when test="${pic.getUser().getMainPicture().getImageName() == 'profile-icon.jpg'}">
										<img class="profilePic" src="../project-pictures/profile-icon.jpg"/>
									</c:when>
									<c:otherwise>
										<img class="profilePic" src="../profile-pictures/${pic.getUser().getMainPicture().getImageName()}"/>							
									</c:otherwise>
								</c:choose>
								<a style="margin: 2%;" href="/profile/${pic.getUser().getId()}"><c:out value="${pic.getUser().getUsername()}"/></a>
							</div>
							<div class="postMiddleNav">
								<img class="postPicture" style="width: 75%; height: 400px;border: 2px solid black;" src="../post-pictures/${pic.getImageName()}"/>
							</div>
							<div class="postBottomNav">
								<div class="postLikeAndCommentButtons">
									<form:form action="/like/photo/${pic.getId()}" method="post" modelAttribute="likedPhoto">
										<c:choose>
											<c:when test="${!user.likedPhotos.contains(pic)}">
												<button style="background-color: transparent; border: none;"><img src="../project-pictures/unliked.svg"/></button>			
											</c:when>
											<c:otherwise>
												<button style="background-color: transparent; border: none;"><img src="../project-pictures/liked.svg"/></button>			
											</c:otherwise>
										</c:choose>
									</form:form>
									<c:out value="${pic.getUsersWhoLiked().size()}"/>
									<img src="../project-pictures/comment.svg"/>
								</div>
								<div class="captionAndLikes">
									<div>
										<span style="font-weight: bold; font-size: 110%;"><c:out value="${pic.getUser().getUsername()}: "/></span><c:out value="${pic.getCaption()}"/>
									</div>
								</div>
								<c:forEach var="comm" items="${pic.getComments()}" varStatus="loop">
									<p><span style="font-weight: bold;"><c:out value="${comm.getUser().getUsername()}"/>:</span> <c:out value="${comm.getContent()}"/></p>
								</c:forEach>
								<form:form action="/comment/add/${pic.getId()}" method="post" modelAttribute="newComment">
									<form:input style="border: none; height: 30px;" path="content" type="text" placeholder="Leave a comment"/>
									<form:input type="hidden" path="photo" value="${pic}"/>
									<form:input type="hidden" path="user" value="${user}"/>
									<button>Send</button>
								</form:form>
							</div>
						</div>			
					</div>
				</c:forEach>
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
	
	<%-- <div class="profilePageBody">
		<div class="homePagePanel">
			<h2>Welcome <c:out value="${user.username}"/></h2>
			<span class="bottomHomePagePanel">
				<a href="/logout"><button class="homePageButton">Logout</button></a>
				<a href="/profile/${user.id}"><button class="homePageButton">Profile</button></a>			
			</span>		
			<a href="/upload/photo/one"><button>Upload</button></a>
			<img style="width:100px;" src="${uploadIconImagePath}"/>
		</div>
		<div class="postsContainer">
			<c:forEach var="pic" items="${postedPics}">
				<div class="postBackground">
					<div class="post">
						<div class="postTopNav">
							<c:choose>
								<c:when test="${pic.getUser().getMainPicture().getImageName() == 'profile-icon.jpg'}">
									<img class="profilePic" src="../project-pictures/profile-icon.jpg"/>
								</c:when>
								<c:otherwise>
									<img class="profilePic" src="../profile-pictures/${pic.getUser().getMainPicture().getImageName()}"/>							
								</c:otherwise>
							</c:choose>
							<a style="margin: 2%;" href="/profile/${pic.getUser().getId()}"><c:out value="${pic.getUser().getUsername()}"/></a>
						</div>
						<div class="postMiddleNav">
							<img style="width: 75%; height: 400px;border: 2px solid black;" src="../post-pictures/${pic.getImageName()}"/>
						</div>
						<div class="postBottomNav">
							<div class="captionAndLikes">
								<c:out value="${pic.getUser().getUsername()}: "/><c:out value="${pic.getCaption()}"/>
								<span>
									<form:form action="/like/photo/${pic.getId()}" method="post" modelAttribute="likedPhoto">
										<button>Like</button>
									</form:form>
									<c:out value="${pic.getUsersWhoLiked().size()}"/>
								</span>
							</div>
							<c:forEach var="comm" items="${pic.getComments()}" varStatus="loop">
								<p><c:out value="${comm.getUser().getUsername()}"/>: <c:out value="${comm.getContent()}"/></p>
							</c:forEach>
							<form:form action="/comment/add/${pic.getId()}" method="post" modelAttribute="newComment">
								<form:input path="content" type="text" placeholder="Leave a comment"/>
								<form:input type="hidden" path="photo" value="${pic}"/>
								<form:input type="hidden" path="user" value="${user}"/>
								<button>Send</button>
							</form:form>
						</div>
					</div>			
				</div>
			</c:forEach>
		</div>
	</div> --%>
</body>
</html>