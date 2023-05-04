<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Exercise Page</title>
<link rel="stylesheet" type="text/css" href="/css/style.css">
</head>
<body>
	<div class="indexNav">
		<h1>Exercise Page</h1>
		<c:choose>
			<c:when test="${logUser.id != null }">
				<p><a href="/logout">Logout</a>
				<p>Hello, <c:out value="${logUser.username}"/></p>
			</c:when>
			<c:otherwise>
				<p><a href="/account">Login/Register</a>
			</c:otherwise>
		</c:choose>
	</div>
	<div class="indexMainCont">
		<div class="exerciseTitle">
			<h2 class="bodyTitle">Exercises</h2>
			<p>Find the perfect exercises for your workouts</p>		
		</div>
		<div class="exercises">
			<div class="indexBoxes">
				<div class="topBox">
					<div class="innerTop">
					
					</div>
				</div>
				<div class="bottomBox">
				
				</div>
			</div>
			<div class="indexBoxes">
				<div class="topBox">
					<div class="innerTop">
					
					</div>
				</div>
				<div class="bottomBox">
				
				</div>
			</div>
			<div class="indexBoxes">
				<div class="topBox">
					<div class="innerTop">
					
					</div>
				</div>
				<div class="bottomBox">
				
				</div>
			</div>
		</div>
	</div>

</body>
</html>