<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Add Caption</title>
</head>
<body>
	<form:form action="/caption" method="put" modelAttribute="pic">
		<form:input type="hidden" path="user" value="${user}"/>
		<form:textarea path="caption" style="resize:none; width:300px; height: 100px"/>
		<button>Upload</button>
	</form:form>
</body>
</html>