const express = require('express');
const router = express.Router();
const reqeust_promise = require('request-promise');
const jwt = require('jsonwebtoken');
const config = require('../config');

//Get all the posts
const getAllPosts = async (req, res) => {

    let uri = config.database_config.protocol + config.database_config.url + ":" + config.database_config.port +
        config.database_config.readall_api;

    if(Object.keys(req.query).length != 0) {
        uri = uri+req._parsedUrl.search;
    }
        console.log(req._parsedUrl.search);
        console.log(uri);
    reqeust_promise(uri).then(body => {
        res.status(200).json(JSON.parse(body));
        // console.log(body);
    }).catch(err => {
        // console.log(err);
        res.status(400).send("COAIE ");
    });


};

//Add a post into the DB
const addPost = (req, res) => {
    jwt.verify(config.server_options.private_key, req.headers.authorization, (err, user) => {
        if (err) {
            return res.status(401).send("Dont go there");
        }
    });
};

//Get a specific post from the DB
const getPost = async (req, res) => {
    jwt.verify(config.server_options.private_key, req.headers.authorization, (err, user) => {
        if (err) {
            return res.status(401).send("Dont go there");
        }
    });
};


//Update a specific post
const updatePost = async (req, res) => {
    jwt.verify(config.server_options.private_key, req.headers.authorization, (err, user) => {
        if (err) {
            return res.status(401).send("Dont go there");
        }
    });
};

module.exports = { getAllPosts, getPost, updatePost, addPost };