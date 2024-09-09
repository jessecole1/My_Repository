const mongoose = require('mongoose');
const Admin = require('./admin.model');

const PostSchema = mongoose.Schema({
    title: {type: String},
    contnet: {type: String},
    createdAt: {type: Date, default: Date.now},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'Admin', required: true}
})

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;