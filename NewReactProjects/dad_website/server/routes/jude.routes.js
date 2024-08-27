const JudeController = require("../controllers/admin.controller");

module.exports = (app) => {
    app.get("/", JudeController.index);
    app.get("/about", JudeController.about);
}