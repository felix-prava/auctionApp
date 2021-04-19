import { ICar } from './car-details';

export interface ITitle {
    car_model : string;
    car_engine_size : number;
    car_year : number;
    car_fuel_type : string;
    car_transmission : string;
    car_power : number;
    car_mileage : number;
}

export interface IPostDetails {
    title : ITitle;
    car_details : ICar;
    price : number;
    vat : string;
    bid_time_remaining : string;
    auction_type : string // BLIND || TRANSPARENT -> you can see the bids
    images? : File[]; // here needs to be mandatory to have images
}