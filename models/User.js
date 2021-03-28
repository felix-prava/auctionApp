let mongoose = require('mongoose');

// User Schema
let UserSchema = mongoose.Schema({
    name :{
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email :{
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    username :{
        type: String,
        required: true,
        min: 6
    },
    password :{
        type: String,
        required: true,
        min: 6
    },
    location :{
        type: String
    },
    phoneNumber :{
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = module.exports = mongoose.model('User', UserSchema);