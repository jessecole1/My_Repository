const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    text:{type:String},
    importance:{type:Number},
    dueDate:{type:Date},
    notes:{type:String},
    completed:{type:Boolean}
})

module.exports = mongoose.model('ToDo', TodoSchema);