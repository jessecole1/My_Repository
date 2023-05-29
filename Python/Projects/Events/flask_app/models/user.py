from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash, session
mydb = "event_planner"
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class User: 
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.events = []
        self.comments = []

    @classmethod
    def save(cls,data):
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s);"
        results = connectToMySQL(mydb).query_db(query,data)
        return results

    @classmethod
    def get_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL(mydb).query_db(query,data)
        if len(results) < 1:
            return False
        return cls(results[0])

    @classmethod
    def get_by_id(cls,user_id):
        data = {"id": user_id}
        query = "SELECT * FROM users WHERE id = %(id)s;"
        results = connectToMySQL(mydb).query_db(query,data)
        user = cls(results[0])
        return user


    @staticmethod
    def validate_register(user):
        is_valid = True
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL(mydb).query_db(query, user)
        if len(results) >= 1:
            flash("There's already an account with that Email","register")
            is_valid = False
        if not EMAIL_REGEX.match(user['email']):
            flash("Please Enter a Valid Email Address","register")
            is_valid = False
        if len(user['first_name']) < 3:
            flash("Please Provide your First Name","register")
            is_valid = False
        else:
            session['first_name'] = user['first_name']
        if len(user['last_name']) < 3:
            flash("Please Provide your Last Name","register")
            is_valid = False
        else:
            session['last_name'] = user['last_name']
        if len(user['password']) < 8:
            flash("Password Must have 8 Characters", "register")
            is_valid = False
        if user['password'] != user['confirm']:
            flash("Please Confirm Password","register")
            is_valid = False
        return is_valid