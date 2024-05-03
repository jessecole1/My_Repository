<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Add Image</title>
</head>
<body>

	<div>
		<form:form action="AddImage" method="post" encype="multipart-form/data">
			<p>Add image</p>
			<form:input path="image" type="file"/>
			<button>Add image</button>
		</form:form>
	</div>

</body>
</html>