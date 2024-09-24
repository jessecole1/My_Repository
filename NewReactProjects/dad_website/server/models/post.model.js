const mongoose = require('mongoose');
// const Admin = require('./admin.model');

const PostSchema = mongoose.Schema({
    title: {type: String},
    publishDate: {type: Date},
    content: {type: String},
    category: {type:String},
    comments: {type: Array}
    // originalPostId: {type: String},
    // postDate: {type: String},

    // author: {
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'Admin', 
    //     required: true
    // }
})

module.exports = mongoose.model("Post", PostSchema);