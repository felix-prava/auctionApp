const filters = {
    "transmission":"car_details.car_specifications.transmission_type",
    "fuel_type":"car_details.car_specifications.fuel_type",
    "model" : "title.car_model",


}


let buildFilterObject = (filterSpecifications) => {
    let value = JSON.stringify(filterSpecifications);
    Object.keys(filters).forEach(function(key) {
        value = value.replace(key,filters[key]);
    });
   return value
}   

module.exports = {buildFilterObject};