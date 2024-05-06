<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Image Uploader</title>
</head>
<body>
	<h1>Image Uploader Project</h1>
<%--  	<form:form action="/upload" method="post" modelAttribute="image" enctype="multipart/form-data">
 		<form:input path="thisFile" type="file"/>
		<button>Add Image</button>
	</form:form> --%> 
	
 	<form action="/upload" method="post" enctype="multipart/form-data">
 		<input name="thisFile" type="file"/>
		<button>Add image</button>
	</form> 
	
	<p>
		<c:forEach var="image" items="${imageList}">
			<img style="border-radius: 10px" src="../appimages/${image}"/>
		</c:forEach>
	</p>
	
</body>
</html>