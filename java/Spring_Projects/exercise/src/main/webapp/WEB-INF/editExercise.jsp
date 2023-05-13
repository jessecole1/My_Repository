<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Edit <c:out value="${exercise.exerciseName}"/></title>
</head>
<body>
	<div>
		<a href="/"><button>Home</button></a>
	</div>
	<div>
		<div>
			<form:form action="/exercise/${newExercise.id}/destroy" method="delete" modelAttribute="newExercise">
			<p><button>Delete</button></p>
			</form:form>
		</div>
		<form:form action="/exercise/${newExercise.id}/update" method="put" modelAttribute="newExercise">
		<form:input type="hidden" path="user" value="${user.id}"/>
			<table>
				<tbody>
					<tr>
						<td><form:label path="exerciseName">Exercise name: </form:label></td>
						<td><form:input path="exerciseName" type="text" value="${exercise.exerciseName}"/></td>
					</tr>
					<tr>
						<td><form:label path="equipment">Equipment used: </form:label>
						<form:select path="equipment">
							<form:option value="Treadmill">Treadmill</form:option>
							<form:option value="Indoor rower">Indoor Rower</form:option>
							<form:option value="Ellyptical Trainer">Ellyptical Trainer</form:option>
							<form:option value="Stationary Bicycle">Stationary Bicycle</form:option>
							<form:option value="Resistance Band">Resistance Band</form:option>
							<form:option value="Dumbbell">Dumbbell</form:option>
							<form:option value="Kettlebell">Kettlebell</form:option>
							<form:option value="Barbell">Barbell</form:option>
							<form:option value="Bench">Bench</form:option>
							<form:option value="Medicine Ball">Medicine Ball</form:option>
						</form:select></td>
					</tr>
					<tr>
						<td><form:label path="difficulty">Difficulty Level (1-10): </form:label></td>
						<td><form:input path="difficulty" type="number" value="${exercise.difficulty}"/></td>
					</tr>
					<tr>
						<td><form:label path="categories">Categories</form:label></td>
						<td><form:select path="categories">
							<c:forEach var="category" items="${category}">
								<form:option value="${category.id}"><c:out value="${category.categoryName}"></c:out></form:option>
							</c:forEach>
						</form:select></td>
					</tr>
					<tr>
						<td><button>Update </button></td>
					</tr>
				</tbody>
			</table>
		</form:form>
	</div>
</body>
</html>