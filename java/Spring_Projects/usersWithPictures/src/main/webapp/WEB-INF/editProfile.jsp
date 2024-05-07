<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Edit Profile</title>
</head>
<body>
	<h3>Edit Profile</h3>
	<a href="/home"><button>Home</button></a>
	
	<form action="/upload" method="post" enctype="multipart/form-data">
		<input name="thisFile" type="file"/>
		<button>Upload Profile Picture</button>
	</form>
</body>
</html>