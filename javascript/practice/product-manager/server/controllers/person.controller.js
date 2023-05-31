const Person = require("../models/person.model");

module.exports.index = (request, response) => {
    response.json({
        message:"Hello World!"
    });
}