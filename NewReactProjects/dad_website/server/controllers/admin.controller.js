const Admin = require('../models/admin.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let isLoggedInForAdmin = false;

// HOME PAGE
module.exports.index = (request, response) => {
    const adminCookie = request.cookies.admintoken;
    if (adminCookie) {
        isLoggedInForAdmin = true;
    } else {
        isLoggedInForAdmin = false;
    }
    response.json({
        message: "Hello, Worldz!",
        loggedInStatus: isLoggedInForAdmin
    });
}

// REGISTER ADMIN 
module.exports.adminRegister = (request, response) => {
    console.log("registerAdmin function being called..");
    Admin.create(request.body)
        .then((admin) => {
            console.log("about to sign JWT to a value..");
            const adminToken = jwt.sign({
                id: admin._id
            }, process.env.FIRST_SECRET_KEY);

            console.log("JWT signed");

            response
                .cookie("admintoken", adminToken, {
                    httpOnly: true
                });

            response.json({msg: "success!", admin: admin, cookie: adminToken});
        })
        .catch((err) => {
            response.json(err);
            console.log("error:" + err);
        })
        console.log("exiting adminRegister function..");
}

// LOGIN ADMIN
module.exports.adminLogin = async (request, response) => {
    console.log("getting to the adminLogin function..");
    const admin = await Admin.findOne({email: request.body.email});

    if (admin === null) {
        response.sendStatus(400);
    }

    console.log("email confirmed in database..");

    const adminToken = jwt.sign({
        id: admin._id
    }, process.env.FIRST_SECRET_KEY);
    console.log("1: " + adminToken);

    response
        .cookie("admintoken", adminToken, {
            httpOnly: true
        })
        .json({ message: "succes!", admin: admin , cookie: adminToken});
}

// LOGOUT ADMIN
module.exports.adminLogout = async (request, response) => {
    console.log("entered adminLogout method from controller..");
    response.clearCookie("admintoken");
    response.sendStatus(200);
    console.log("exiting adminLogout method from controller..");
}

// FIND ONE ADMIN
module.exports.getAuthorById = (request, response) => {
    Admin.findOne({_id:request.params.id})
    .then(author => {response.json(author); console.log(author)})
    .catch(err => console.log("Something went wrong getting the author: ", err));
}