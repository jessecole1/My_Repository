const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Post = require('./post.model');

const AdminSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email address"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at minimum 8 characters long"]
    },
    firstName: {type: String},
    lastName: {type: String},
    displayName: {type: String},
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
}, {timestamps: true});

AdminSchema.virtual('confirm')
    .get(() => this._confirm)
    .set((value) => this._confirm = value)

AdminSchema.pre('validate', function(next) {
    if (this.password !== this.confirm) {
        this.invalidate('confirmPassword', "Passwords must match");
    };
    next();
})

AdminSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
      .then(hash => {
        this.password = hash;
        next();
      });
  });

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;

module.exports = mongoose.model('Admin', AdminSchema);