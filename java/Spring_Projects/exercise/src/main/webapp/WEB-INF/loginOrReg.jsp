<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" tyle="text/css" href="/css/styleTwo.css">
</head>
<body>
	<div class="formCon">
		<div class="formConOne">
			<form:form action="" method="post" modelAttribute="newUser">
				<table>
					<tbody>
						<tr>
							<td><form:label path="">Username: </form:label></td>
							<td><form:input type="text" path=""></form:input></td>
						</tr>
						<tr>
							<td><form:label path="">Email: </form:label></td>
							<td><form:input path="" type="text"></form:input></td>
						</tr>
						<tr>
							<td><form:label path="">Password: </form:label></td>
							<td><form:input path="" type="text"/></td>
						</tr>
						<tr>
							<td><form:label path="">Confirm: </form:label></td>
							<td><form:input path="" type="text"/></td>
						</tr>
						<tr>
							<td><button>Register</button>
						</tr>
					</tbody>
				</table>
			</form:form>
		</div>
		<div class="formConTwo">
			<form:form action="" method="post" modelAttribute="newLoginUser">
				<tbody>
					<tr>
						<td><form:label path="">Email: </form:label></td>
						<td><form:input type="text" path=""/></td>
					</tr>
					<tr>
						<td><form:label path="">Password: </form:label></td>
						<td><form:input path="" type="text"/></td>
					</tr>
					<tr>
						<td><button>Login</button></td>
					</tr>
				</tbody>
			</form:form>
		</div>
	</div>
</body>
</html>