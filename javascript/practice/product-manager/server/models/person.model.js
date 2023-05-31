const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
    firstName: {type:String},
    lastName: {tupe:String}
}, {timestampes:true});

module.exports = mongoose.model("Person", PersonSchema)