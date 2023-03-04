from flask_app import app
from flask_app.models.user import User
from flask_app.models.celebration import Celebration
from flask import render_template, request, redirect, session, flash
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/new/register')
def new_register():
    return render_template('register.html')

@app.route('/register', methods=["POST"])
def register():
    if not User.validate_register(request.form):
        return render_template('register.html')
    session.clear()
    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email'],
        'password': bcrypt.generate_password_hash(request.form['password'])
    }
    ide = User.save(data)
    print(ide)
    session['user_id'] = ide
    return redirect('/dashboard')

@app.route('/login', methods=["POST"])
def login():
    user = User.get_by_email(request.form)

    if not user:
        flash("No Account with Email Address","login")
        return redirect('/')
    if not bcrypt.check_password_hash(user.password, request.form['password']):
        flash("Invalid Password","login")
        return redirect('/')
    session['user_id'] = user.id
    return redirect('/dashboard')

@app.route('/dashboard')
def dashboard():
    if 'user_id' not in session:
        return redirect('/logout')
    user = User.get_by_id(session['user_id'])
    celebs = Celebration.get_all_celebrations_with_user()
    return render_template('dashboard.html', user = user, celebs = celebs)

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')