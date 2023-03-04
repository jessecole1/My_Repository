from flask_app.controllers import logins, celebrations_controller, comment_controller
from flask_app import app

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0', port=5001)