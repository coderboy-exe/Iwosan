const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add a valid name",]
    },
    email: {
        type: String,
        required: [true, "Please add a valid email",],
        unique: [true, "Email already registered"]
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
    },

}, {
    timestamps: true,
}
);

module.exports = mongoose.model("User", userSchema);