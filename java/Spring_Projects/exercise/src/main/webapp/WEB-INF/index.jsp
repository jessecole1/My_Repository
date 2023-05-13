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
		<div class="exerciseTitle">
			<h2 class="bodyTitle">Exercises</h2>
			<p>Find the perfect exercises for your workouts</p>		
		</div>
		<div class="exercises">
			<table style="width: 100%">
				<tbody>
					<c:forEach var="cat" items="${categories}" varStatus="status">
						<c:if test="${status.index % 3 == 0}">
							<tr class="catRow">
						</c:if>
						<td>
							<div class="indexBoxes catTd">
								<div class="topBox">
									<div class="innerTop">
								
									</div>
								</div>
							<div class="bottomBox">
								<p class="catText"><a href="/exercise/all/${cat.id}"><c:out value="${cat.categoryName}"/></a></p>
							</div>
						</div>
						</td>
						<c:if test="${status.index % 3 == 2}">
							</tr>
						</c:if>
					</c:forEach>
				</tbody>
			</table>
		</div>
	</div>
<%-- 			<div class="indexBoxes">
				<div class="topBox">
					<div class="innerTop">
					
					</div>
				</div>
				<div class="bottomBox">
					<p class="catText"><c:out value="${cat.categoryName}"/></p>
				</div>
			</div> --%>
<!--  			<div class="indexBoxes">
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
			</div>  -->

</body>
</html>