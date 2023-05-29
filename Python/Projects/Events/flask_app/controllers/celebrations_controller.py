from flask_app import app
from flask_app.models.celebration import Celebration
from flask_app.models.user import User
from flask import render_template, redirect, request, session

@app.route('/celebration/new')
def new_event():
    return render_template('newcelebration.html', user=User.get_by_id(session['user_id']))

@app.route("/celebration/create", methods=['POST'])
def create_celebrtaion():
    if not Celebration.validate_celebration(request.form):
        return redirect('/celebration/new')
    Celebration.save_celebration(request.form)
    return redirect('/dashboard')

@app.route("/celebration/one/<int:celebration_id>")
def one_celebration(celebration_id):
    if 'user_id' not in session:
        return redirect('/logout')
    celebration = Celebration.get_by_id(celebration_id)
    return render_template('onecelebration.html', celebration = celebration, user = User.get_by_id(session['user_id']))
