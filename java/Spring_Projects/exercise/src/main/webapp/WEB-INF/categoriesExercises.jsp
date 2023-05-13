<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title><c:out value="${category.categoryName}"/>'s Exercises</title>
<link rel="stylesheet" type="text/css" href="/css/styleThree.css">
</head>
<body>
	<div class="indexNav">
		<h1>Exercise Page</h1>
		<c:choose>
			<c:when test="${adId != null || userId != null}">
				<a href="/exercise/new">Add an exercise</a>
				<p> | </p>
				<p><a href="/logout">Logout</a><p>
				<p>Hello, <c:out value="${logUser.username}"/></p>
			</c:when>
			<c:otherwise>
				<p><a href="/account">Login/Register</a>
			</c:otherwise>
		</c:choose>
		<c:choose>
			<c:when test="${adId != null}">
				<p><a href="/category/create">Create category</a></p>
			</c:when>
		</c:choose>
	</div>
	<div class="indexMainCont">
		<div>
			<a href="/"><button>Home</button></a>
		</div>
		<div class="exercisePosts">
			<c:forEach var="exercise" items="${category.exercises}">
			<c:choose>
				<c:when test="${user.id == exercise.user.id}">
					<p><a href="/exercise/edit/${exercise.id}">Edit</a></p>
				</c:when>
			</c:choose>
				<div class="exerciseSinglePost">
					<p><span class="exerciseTitle"><c:out value="${exercise.exerciseName}"/></span> - <span class="exerciseAuth">posted by: <c:out value="${exercise.user.username}"/></span></p>
					<p><span class="equipment">Equipment used: </span><c:out value="${exercise.equipment}"/></p>
					<p><span class="difficulty">Difficulty: </span><c:out value="${exercise.difficulty}"/></p>
				</div>
			</c:forEach>
		</div>
	</div>
</body>
</html>