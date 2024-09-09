const Admin = require('../models/admin.model');
const Post = require('../models/post.model');

module.exports.createPost = (request, response) => {
    console.log("entered createPost controller method..");
    console.log("request body: " + JSON.stringify(request.body));
    Post.create(request.body)
        .then(newlyCreatedPost => {
            response.json({ newlyCreatedPost })
        })
        .catch((err) => {
            response.json({ message: "Something went wrong when creating your post..", error: err })
        })
}

module.exports.getAllPosts = (request, response) => {
    Post.find()
    .then(posts => {
        response.json({ postList: posts });
    })
    .catch(err => {
        console.log(err);
    })
}