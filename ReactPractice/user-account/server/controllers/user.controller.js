const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello, World! :D"
    });
}

module.exports.register = (request, response) => {
    User.create(request.body)
        .then((user) => {
            response.json({ message: "Successful account creation", user: user });
        })
        .catch(err => response.json(err));
}

module.exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if(user === null) {
        return res.sendStatus(400);
    }

    const correctPassword = await bcrypt.compare(req.body.password, user.password);

    if(!correctPassword) {
        return res.sendStatus(400);
    }

    const userToken = jwt.sign({
        id: user._id
    }, process.env.SECRET_KEY);

    res
        .cookie("usertoken", userToken, {
            httpOnly: true
        })
        .json({ msg: "success!" });
}
