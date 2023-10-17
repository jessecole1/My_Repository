const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    message: {
        type: String,
        required : [true , "Enter a valid task"],
        minlength : [2, "At least 2 characters long"]
    }, complete: {
        type: Boolean
    }
});

const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;