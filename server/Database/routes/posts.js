const router = require('express').Router();
const postsConfig = require("../controllers/posts.js");


//Get all the posts
router.get('/',postsConfig.getAllPosts);

//Add a post into the DB
router.post('/',postsConfig.addPost);

//Get a specific post from the DB
router.get('/:id',postsConfig.getPost);

//Delete a specific post
router.delete('/:id',postsConfig.deletePost);

//Update a specific post
router.patch('/:id',postsConfig.updatePost);

module.exports = router;