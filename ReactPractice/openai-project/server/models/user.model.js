const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required."]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required."]
    },
    email: {
        type: String,
        required: [true, "Email address is required."]
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minLength: [8, "Password must be 8 characters or longer."]
    }
}, {timestamps: true});