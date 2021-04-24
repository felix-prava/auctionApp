const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { registerValidation } = require('./validation')
const reqeust_promise = require('request-promise');
const databaseConfig = require('../config/config.js');

//Register a user
const registerUser = async (req,res) => {
    const { error } = registerValidation(req.query);
    if (error) {
        return res.status(400).send({error:"This account format is wrong"});
    }

    console.log(req.query.email);

    let uri = databaseConfig.database_config.protocol+databaseConfig.database_config.url+":"+databaseConfig.database_config.port + 
             databaseConfig.database_config.insert_api+`?email=${req.query.email}&password=${req.query.password}`;
    console.log(uri);

    reqeust_promise(uri,{method:"POST"}).then(body => {
         res.status(200).json(body);
       }).catch(err => {
           console.log("sent bad req");
        res.status(400).json("Cant");
       });
       
};

module.exports = {registerUser}