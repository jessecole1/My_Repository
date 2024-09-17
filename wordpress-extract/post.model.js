const mongoose = require('mongoose')

const PostSchema = {
    title: {type: String},
    publishDate: {type: String},
    content: {type: String},
    originalPostId: {type: String},
    postDate: {type: String},
    category: {stype: String},
    comments: [{type: String}]
}

const Post = mongoose.model("post", PostSchema);
module.exports = Post;