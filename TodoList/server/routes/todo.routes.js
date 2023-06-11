const TodoController = require('../controllers/todo.controller');

module.exports = (app) => {
    app.get('/api/todo', TodoController.getTodoList);
}