let mongoose = require('mongoose');

// Post Schema
let PostSchema = mongoose.Schema({
    name :{
        type: String,
        required: true,
        min: 6,
        max: 255
    }
});

const Post = module.exports = mongoose.model('Post', PostSchema);