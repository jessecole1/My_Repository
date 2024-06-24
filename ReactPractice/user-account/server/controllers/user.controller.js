const User = require('../models/user.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello, World! :D"
    });
}
