let mongoose = require('mongoose');

//Car origin
const originCarSchema = mongoose.Schema({
    pickup_location :{
        type: String
    },
    country_origin :{
        type: String
    },
    selling_office :{
        type: String
    },
});

//Car specifications
const specificationsCarSchema = mongoose.Schema({
    first_registration :{
        type: String
    },
    mileage :{
        type: Number
    },
    fuel_type :{
        type: String
    },
    transmission_type :{
        type: String
    },
    co2_emissions_standard :{
        type: String
    },
    co2_emissions_minimum_value :{
        type: Number
    },
    power :{
        type: Number
    },
    engine_size :{
        type: Number
    },
    body_type :{
        type: String
    },
    doors :{
        type: Number
    },
    number_of_places :{
        type: Number
    },
    vin  :{
        type: String
    },
    number_of_keys :{
        type: Number
    },
    paint :{
        type: String
    }
});

//Car damage
const damageCarSchema = mongoose.Schema({
    front :{
        type: String
    },
    rear :{
        type: String
    },
    right_side :{
        type: String
    },
    left_side :{
        type: String
    },
    components :{
        type: [String]
    },
});

const titleCarSchema = mongoose.Schema({
    car_model :{
        type: String
    },
    car_engine_size :{
        type: Number
    },
    car_year :{
        type: Number
    },
    car_fuel_type :{
        type: String
    },
    car_transmission :{
        type: String
    },
    car_power :{
        type: Number
    },
    car_mileage :{
        type: Number
    }
});

// Car Schema
const CarSchema = mongoose.Schema({
    car_title :{
        type: titleCarSchema
    },
    car_specifications :{
        type: specificationsCarSchema
    },
    car_options :{
        type: [String]
    },
    car_origin :{
        type: originCarSchema
    },
    car_damage :{
        type: damageCarSchema
    }
});

// Post Schema
let PostSchema = mongoose.Schema({
    car :{
        type : CarSchema,
        required:true
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
},
    {
        collection : "Posts",
        timestamps : true
    }
);

const Post = module.exports = mongoose.model('Post', PostSchema);