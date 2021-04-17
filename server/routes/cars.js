const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

//Get all the cars
router.get('/', async (req, res) => {
    try{
        const cars = await Car.find();
        res.status(200).json(cars);
    } catch{
        res.json({ err })
    }
});

//Add a car
router.post('/', (req, res) => {
    const car = new Car({
        //Car details
    });
    car.save()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

//Get a specific car
router.get('/:id', async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        res.status(200).json(car);
    } catch(err){
        res.json({message: err});
    }
});

//Delete a specific car from the DB
router.delete('/:id', async (req, res) => {
    try{
        const carDeleted = await Car.deleteOne({_id: req.params.id});
        res.status(200).json(carDeleted);
    } catch(err){
        res.json({message: err})
    }
});

//Update a specific car
router.patch('/:id', async (req, res) => {
    try{

    } catch (err) {
        res.json({message: err});
    }
});

module.exports = router;