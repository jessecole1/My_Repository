const Todo = require('../models/todo.model');

module.exports.getTodoList = (request, response) => {
    Todo.find({})
        .then(todos => response.json(todo))
        .catch(err => response.json(err))
}