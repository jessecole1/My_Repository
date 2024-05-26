<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Welcome</title>
<script>
function toggleRegistration() {
	
	const box = document.getElementById("RegistrationOverlayId");
	box.classList.toggle("show");
	
	const loginBox = document.getElementById("loginBodyId");
	loginBox.classList.toggle("show");
	
	const loginInnerBox = document.getElementById("logginInnerId");
	loginInnerBox.classList.toggle("show");
}
</script>
<link rel="stylesheet" type="text/css" href="/css/style.css">
</head>
<body style="font-family: Arial, sans-serif;">
	<div id="loginBodyId" class="profilePageBody">
		<img class="titleImg" src="../project-pictures/appTitle.png"/>
		<div id="loginInnerId" class="registrationBoxLogin">
		<h3 style="color: black">Login</h3>
				<form:form action="/login" method="post" modelAttribute="newLogin">
					<table style="height:200px">
						<tbody class="registerFormContainer">
							<tr>
								<td><form:label path="email">Email:</form:label></td>
								<td><form:input class="formInputBox" type="text" path="email"/></td>
							</tr>
							<tr>
								<td><form:label path="password">Password:</form:label></td>
								<td><form:input class="formInputBox" path="password" type="password"/></td>
							</tr>
							<tr>
								<td><button class="buttonGeneral">Login</button></td>
							</tr>
						</tbody>
					</table>
				</form:form>
		</div>
		<div>
			<button onclick="toggleRegistration()" class="buttonGeneral buttonReg">Create New Account</button>
		</div>
	</div>
	<div id="RegistrationOverlayId" class="registrationOverlay">
		<div class="registrationBox">
			<h3 class="registrationTitleStyle" style="color: black">Register</h3>
			<table style="height:400px">
				<tbody class="registerFormContainer">
					<form:form style="height:100%" action="/register" method="post" modelAttribute="newUser">
							<tr>
								<td><form:label path="username">Username:</form:label></td>
								<td><form:input class="formInputBox" path="username" type="text"></form:input></td>
							</tr>
							<tr>
								<td><form:label path="email">Email:</form:label></td>
								<td><form:input class="formInputBox" path="email" type="text"></form:input></td>
							</tr>
							<tr>
								<td><form:label path="password">Password:</form:label></td>
								<td><form:input class="formInputBox" path="password" type="password"></form:input></td>
							</tr>
							<tr>
								<td><form:label path="confirm">Confirm Password:</form:label></td>
								<td><form:input class="formInputBox" path="confirm" type="password"></form:input></td>
							</tr>
							<tr>
								<td><form:label path="bio">Bio:</form:label></td>
								<td><form:textarea class="formBioRegBox" style="height:150px; width:300px; resize:none; border:1px solid #96aed0; border-radius:10px;box-shadow: 1px 1px 5px black;" path="bio"/></td>
							</tr>
							<tr>
								<td><button style="font-size: 110%;" class="buttonGeneral">Register</button>
							</tr>
					</form:form>
				</tbody>
			</table>
		<div>
			<button onclick="toggleRegistration()" class="buttonGeneral buttonReg">Back to Login</button>
		</div>
		</div>
	</div>
</body>
</html>