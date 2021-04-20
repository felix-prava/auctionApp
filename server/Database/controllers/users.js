const express = require('express');
const router = express.Router();
const User = require('../models/User');


//Add a user route = /
const addUser =  async (req, res) => {
    console.log(req.query);
    const user = new User({
        email: req.query.email,
        password: req.query.password
    });

    try {
        const newUser = await user.save();
        res.status(200).send(newUser);
    } catch (err){
        res.status(400).send(err);
    }
};


//Get a specific user router.get('/:id', 
const getUser = async (req, res) => {
    console.log(req);
    try {
        const user = await User.findOne({email: req.query.email,password:req.query.password});
        if (!user)
            return res.status(400).send('No user found');
        res.status(200).send(user);
    } catch(err){
        res.json("No user found");
    }
};

//Delete a specific user router.delete('/:id',
const deleteUser = async (req, res) => {
    try{
        const userDeleted = await User.deleteOne({email:req.query.email,
                                                  password:req.query.password}); //or maybe I should try remove instead of deleteOne
        res.status(200).json(userDeleted);
    } catch(err){
        res.json({message: err})
    }
};

//Update a specific user router.patch('/:id',
 const updateUser = async (req, res) => {
    try{
        //WARNING : add parameters that were updated
        const updatedUser = await User.updateOne(
            {_id: req.params.id}, 
            {$set: {name: req.query.name}});
        res.json(updatedUser);
    } catch (err) {
        res.json({message: err});
    }
};

module.exports = {getUser,deleteUser,addUser,updateUser};