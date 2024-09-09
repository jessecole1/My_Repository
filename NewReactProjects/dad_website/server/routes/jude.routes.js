const JudeController = require("../controllers/admin.controller");
const PostController = require("../controllers/post.controller");

module.exports = (app) => {
    app.get("/", JudeController.index);
    app.get("/posts", PostController.getAllPosts);
    app.post('/admin/register', JudeController.adminRegister);
    app.post("/admin/login", JudeController.adminLogin);
    app.post('/admin/logout', JudeController.adminLogout);
    app.post('/post/create', PostController.createPost);
}