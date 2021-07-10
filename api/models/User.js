const { Schema, model } = require('mongoose');
const userSchema = new Schema({
    firstname: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 15,
        required: true,
    },
    lastname: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 15,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = model('User', userSchema);
module.exports = User;
