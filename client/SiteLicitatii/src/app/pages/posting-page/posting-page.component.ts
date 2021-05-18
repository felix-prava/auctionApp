import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posting-page',
  templateUrl: './posting-page.component.html',
  styleUrls: ['./posting-page.component.scss']
})
export class PostingPageComponent implements OnInit {
  car = {
    email:"",
    title:{
      car_model: "",
      car_engine_size:0,
      car_year: 0,
      car_fuel_type: "",
      car_transmission: "",
      car_power: 0,
      car_mileage:0,
    },
    car_details: {
      car_specifications: {
        first_registration: "",
        mileage: 0,
        fuel_type: "",
        transmission_type: "",
        co2_emissions_standard:"",
        co2_emissions_minimum_value: 0,
        power: 0,
        engine_size: 0,
        body_type: "",
        doors: 0,
        number_of_places: 0,
        vin: "",
        number_of_keys: 0,
        paint:"",
      },
      car_options: [
        "abs",
         "frane",
       ],
       car_origin: {
         pickup_location: "",
         country_origin: "",
         selling_office: "",
       },
       car_damage: [""]
     },
    price: 0,
    vat:"",
    bid_time_remaining:"",
    last_bid: 0,
    auction_type: ""
  }
  constructor() { }

  ngOnInit(): void {
    setInterval(() => console.log(this.car.title.car_model,this.car.title.car_engine_size,this.car.title.car_year,this.car.title.car_fuel_type,this.car.title.car_transmission,this.car.title.car_power,this.car.title.car_mileage,this.car.car_details.car_specifications.first_registration,this.car.car_details.car_specifications.mileage,this.car.car_details.car_specifications.fuel_type,this.car.car_details.car_specifications.transmission_type,this.car.car_details.car_specifications.co2_emissions_standard,this.car.car_details.car_specifications.co2_emissions_minimum_value,this.car.car_details.car_specifications.power,this.car.car_details.car_specifications.engine_size,this.car.car_details.car_specifications.body_type,this.car.car_details.car_specifications.doors,this.car.car_details.car_specifications.number_of_places,this.car.car_details.car_specifications.vin,this.car.car_details.car_specifications.number_of_keys,this.car.car_details.car_specifications.paint,this.car.car_details.car_origin.pickup_location,this.car.car_details.car_origin.country_origin,this.car.car_details.car_origin.selling_office,this.car.price),500);
  }

}
