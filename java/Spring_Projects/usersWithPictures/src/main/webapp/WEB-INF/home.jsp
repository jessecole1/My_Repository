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
</body>
</html>