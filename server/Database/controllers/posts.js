const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const filters = require('./filters');

//Get all the posts
const getAllPosts = async (req, res) => {
    console.log(req.query);
    console.log();
    try{
        const posts = await Post.find(JSON.parse(filters.buildFilterObject(req.query)));
        
        res.status(200).json(posts);
    } catch{
        res.json({ err })
    }
};

//Add a post into the DB
const addPost = (req, res) => {
    const post = new Post(req.body);
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
        const postDeleted = await Car.deleteOne({_id: req.params.id});
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