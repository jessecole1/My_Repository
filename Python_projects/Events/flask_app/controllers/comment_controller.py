from flask_app import app
from flask_app.models.celebration import Celebration
from flask_app.models.user import User
from flask_app.models.comment import Comment
from flask import render_template, redirect, request, session, flash

@app.route('/comment/create', methods=["POST"])
def save():
    if 'user_id' not in session:
        return redirect('/logout')
    Comment.save(request.form)
    return redirect('/dashboard')