let mongoose = require('mongoose');

let PostSchema = mongoose.Schema({
    email : {
        type:String,
        required:true
    },
    title : {
        car_model : {
            type : String,
            require:true
        },
        car_engine_size : {
            type : Number,
            require:true
        },
        car_year : {
            type : Number,
            require:true
        },
        car_fuel_type : {
            type : String,
            require:true
        },
        car_transmission : {
            type : String,
            require:true
        },
        car_power: {
            type : Number,
            require:true
        },
        car_mileage: {
            type : Number,
            require:true
        }
    },
    car_details : {
        car_specifications: {
          first_registration : {
              type: String,
              required:true
          },
          mileage: {
            type : Number,
            require:true
        },
          fuel_type: {
            type : String,
            require:true
        },
          transmission_type: {
            type : String,
            require:true
        },
          co2_emissions_standard: {
            type : String,
            require:true
        },
          co2_emissions_minimum_value: {
            type : Number,
            require:true
        },
          power: {
            type : Number,
            require:true
        },
          engine_size: {
            type : Number,
            require:true
        },
          body_type: {
            type : String,
            require:true
        },
          doors: {
            type : Number,
            require:true
        },
          number_of_places:{
            type : Number,
            require:true
        },
          vin: {
            type : String,
            require:true
        },
          number_of_keys: {
            type : Number,
            require:true
        },
          paint:{
            type : String,
            require:true
        },
        },
        car_options: [
            {
                type : String,
                require:true
            },
        ],
        car_origin: {
            pickup_location:  {
                type : String,
                require:true
            },
            country_origin:  {
                type : String,
                require:true
            },
            selling_office:  {
                type : String,
                require:true
            },
          },
          car_damage: [
            {
                type : String,
                require:true
            }
        ]
    },
    price:  {
        type : Number,
        require:true
    },
    vat: {
        type : String,
        require:true
    },
    bid_time_remaining: {
        type : Date,
        require:true
    },
    last_bid : {
        type:Number
    },
    bid_finished : {
        type : Boolean
    },
    last_bidder : {
        type : String
    },
    bidding_people : [
        {
            type:String
        }
    ],
    auction_type: {
        type : String,
        require:true
    }

},
{
    collection : "Posts",
    timestamps : true
})

const Post = module.exports = mongoose.model('Post', PostSchema);