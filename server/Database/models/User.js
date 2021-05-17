let mongoose = require('mongoose');

// User Schema
let UserSchema = mongoose.Schema({
    first_name :{
        type: String,
        min: 2,
        max: 255
    },
    last_name :{
        type: String,
        min: 2,
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
    bids_won : [
        {
            type : String
        }
    ],
    bids_placed : [
        {
            type: String
        }
    ]
    },
    {
        collection : "Users",
        timestamps : true
    }
);

const User = module.exports = mongoose.model('User', UserSchema);