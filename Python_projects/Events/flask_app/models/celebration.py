from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.user import User
from flask_app.models.comment import Comment
from flask import flash, session
mydb = "event_planner"

class Celebration():
    def __init__(self,data):
        self.id = data['id']
        self.title = data['title']
        self.when_at = data['when_at']
        self.description = data['description']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.planner = None
        self.comments = []

    @classmethod
    def get_all_celebrations(cls):
        query = "SELECT * FROM celebrations"
        results = connectToMySQL(mydb).query_db(query)
        print("*********")
        print(results)
        print("*********")
        all_celebrations = []
        for c in results:
            all_celebrations.append(cls(c))
        return all_celebrations

    @classmethod
    def get_all_celebrations_with_user(cls):
        query = "SELECT * FROM celebrations JOIN USERS on celebrations.user_id = users.id;"
        results = connectToMySQL(mydb).query_db(query)
        all_celebrations = []
        for row in results:
            one_celebration = cls(row)
            celebration_users = {
                "id": row['id'],
                "first_name": row['first_name'],
                "last_name": row['last_name'],
                "email": row['email'],
                "password": row['password'],
                "created_at": row['created_at'],
                "updated_at": row['updated_at']
            }

            celebration_comments = {
                "id": row['id'],
                "content": row['content'],
                "created_at": row['created_at'],
                "updated_at": row['updated_at']
            }

            celebration_user = User(celebration_users)
            one_celebration.planner = celebration_user

            celebration_commenter = Comment(celebration_comments)
            one_celebration.comments = celebration_commenter

            all_celebrations.append(one_celebration)

        return all_celebrations

    @classmethod
    def save_celebration(cls,data):
        if not cls.validate_celebration(data):
            return False
        query = """INSERT INTO celebrations (title, when_at, description, user_id)
        VALUES (%(title)s, %(when_at)s, %(description)s, %(user_id)s)"""
        print(query)
        return connectToMySQL(mydb).query_db(query,data)

    @classmethod
    def get_by_id(cls,celebration_id):
        data = {"id": celebration_id}
        query = "SELECT * FROM celebrations JOIN users ON celebrations.user_id = users.id WHERE celebrations.id = %(id)s;"
        results = connectToMySQL(mydb).query_db(query,data)
        print("=======")
        print(results)
        print("=======")
        result = results[0]
        celebration = cls(result)
        celebration.planner = User(
            {
                "id": result['users.id'],
                "first_name": result['first_name'],
                "last_name": result['last_name'],
                "email": result['email'],
                "password": result['password'],
                "created_at": result['users.created_at'],
                "updated_at": result['users.updated_at']
            }
        )
        print(celebration)
        return celebration

    @classmethod
    def validate_celebration(cls,event):
        is_valid = True
        if len(event['title']) <= 0 or len(event['description']) <= 0:
            flash("All Fields Required","create")
            is_valid = False
        return is_valid
