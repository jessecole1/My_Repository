const UserController = require('../controllers/user.controller');

module.exports = (app) => {
    app.get('/', UserController.index);
    app.post('/register', UserController.register);
}