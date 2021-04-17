const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Get all the posts
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch{
        res.json({ err })
    }
});

//Add a post into the DB
router.post('/', (req, res) => {
    const post = new Post({
        //Post details
    });
    post.save()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

//Get a specific post from the DB
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch(err){
        res.json({message: err});
    }
});

//Delete a specific post
router.delete('/:id', async (req, res) => {
    try{
        const postDeleted = await Car.deleteOne({_id: req.params.id});
        res.status(200).json(postDeleted);
    } catch(err){
        res.json({message: err})
    }
});

//Update a specific post
router.patch('/:id', async (req, res) => {
    try{

    } catch (err) {
        res.json({message: err});
    }
});

module.exports = router;