from flask_app.config.mysqlconnection import connectToMySQL
from flask import request, redirect, flash 
mydb = "event_planner"

class Comment():
    def __init__(self,data):
        self.id = data['id']
        self.content = data['content']
        self.on_post = None
        self.user = None

    @classmethod
    def save(cls,data):
        query = "INSERT INTO comments (content, user_id, celebration_id) VALUES (%(content)s, %(user_id)s, %(celebration_id)s);"
        return connectToMySQL(mydb).query_db(query,data)