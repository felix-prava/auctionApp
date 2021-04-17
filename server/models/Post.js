let mongoose = require('mongoose');

// Post Schema
let PostSchema = mongoose.Schema({
    car_id :{
        type: mongoose.Schema.Types.ObjectId, ref: 'Car',
        required: true
    },
    price :{
        type: Number,
        required: true
    },
    vat :{
        type: String,
        required: true
    },
    bid_time_remaining :{
        type: String,
        required: true
    },
    auction_type :{
        type: String,
        required: true
    },
    images :{
        //type: [File] should be
    }
});

const Post = module.exports = mongoose.model('Post', PostSchema);