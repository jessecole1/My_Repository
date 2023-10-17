const Todo = require('../controllers/todo.controller');

module.exports = app => {

    app.get('/api', Todo.index);
    app.get('/api/todos', Todo.findAllTodos);
    app.get('/api/todos/:id', Todo.findOneAndUpdate);
    app.patch('/api/todo/:id', Todo.findOneAndUpdate);
    app.post('/api/todo', Todo.createTodo);
    app.delete('/api/todo/:id', Todo.deleteTodo);

}