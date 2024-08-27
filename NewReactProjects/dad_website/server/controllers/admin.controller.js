const Jude = require('../models/admin.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello, Worldz!"
    });
}

module.exports.about = (request, response) => {
    response.json({
        message: "Hello, Worldz!"
    });
}