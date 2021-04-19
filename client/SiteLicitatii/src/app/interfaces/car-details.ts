export interface ICarSpecifications {
    first_registration : string;
    mileage : number;
    fuel_type : string;
    transmission_type : string;
    co2_emissions_standard : string;
    co2_emissions_minimum_value : number;
    power : number;
    engine_size : number;
    body_type : string;
    doors : number;
    number_of_places : number;
    vin : string;
    number_of_keys : number;
    paint : string;
}

export interface ICarOrigin {
    pickup_location : string;
    country_origin : string;
    selling_office : string;
}

export interface ICarDamage {
    front? : string;
    rear? : string;
    right_side? : string;
    left_side? : string;
    components? : string[];

}

export interface ICar {
    car_specifications : ICarSpecifications;
    car_options : string[];
    car_origin : ICarOrigin;
    car_damage : ICarDamage;
}

