const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    lastName: {type: String}
}, {timestamps: true});

AdminSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set((value) => this._confirmPassword = value)

AdminSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', "Passwords must match");
    };
    next();
})

// UserSchema.pre('save', function(next) {
//     bcrypt.hash(this.password, 10)
//       .then(hash => {
//         this.password = hash;
//         next();
//       });
//   });

module.exports = mongoose.model('Admin', AdminSchema);