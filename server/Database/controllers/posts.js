const express = require('express');
const router = express.Router();
const { postValidation } = require('./validation')
const Post = require('../models/Post');

//Get all the posts
const getAllPosts = async (req, res) => {
    try{
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch{
        res.json({ err })
    }
};

//Add a post into the DB
const addPost = (req, res) => {

    //Data validation before creating a post
    const { error } = postValidation(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);

    //foloseste req.query ca sa iei parametrii
    console.log(req.query);
    //foloseste api tester si transmite ceva cu query params
    //se transmite in format json 

    const post = new Post({
        //car : type : CarSchema to be added
        price: req.query.price,
        vat: req.query.vat,
        bid_time_remaining : req.query.bid_time_remaining,
        auction_type : req.query.auction_type,
        //images : req.query.images
    });
    post.save()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    })
};

//Get a specific post from the DB
const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch(err){
        res.json({message: err});
    }
};

//Delete a specific post
const deletePost = async (req, res) => {
    try{
        const postDeleted = await Post.deleteOne({_id: req.params.id});
        res.status(200).json(postDeleted);
    } catch(err){
        res.json({message: err})
    }
};

//Update a specific post
const updatePost = async (req, res) => {
    try{

    } catch (err) {
        res.json({message: err});
    }
};

module.exports = {getAllPosts,getPost,updatePost,deletePost,addPost};
