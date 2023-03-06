const { Schema, model } = require('mongoose');

const userSchema =  new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isActivated: {
        type: Boolean,
        default: false
    },
    activationLink: {
        type: String
    },
    roles: [{
        type: String,
        ref: "Role"
    }],
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        default: ''
    },
    post: {
        type: String,
        default: ''
    },
    avatar: {
        type: String,
        default: '',
    },
    username: {
        type: String,
        required: true,
        unique: true,
        default: ''
    }
}, {timestamps: true});

module.exports = model('User', userSchema);