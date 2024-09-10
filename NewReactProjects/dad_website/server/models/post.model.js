const mongoose = require('mongoose');
const Admin = require('./admin.model');

const author = {
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'adminId',
        required: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    displayName: {
        type: String
    }
}

const PostSchema = mongoose.Schema({
    title: {type: String},
    content: {type: String},
    createdAt: {type: Date, default: Date.now},
    author: author
    // author: {
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'Admin', 
    //     required: true
    // }
})

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;