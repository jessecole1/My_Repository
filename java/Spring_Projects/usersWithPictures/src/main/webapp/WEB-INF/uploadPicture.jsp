<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Upload Photo</title>
</head>
<body>
	<div>
		<form action="/upload/photo/" method="post" enctype="multipart/form-data">
			<input name="thisFile" type="file"/>
			<%-- <input type="hidden" value="${user}"/> --%>
			<input name="caption" type="text"/>
			<button>Upload Picture</button>
		</form>
	</div>
</body>
</html>