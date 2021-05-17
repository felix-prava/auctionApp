const router = require('express').Router();
const postsConfig = require("../controllers/posts.js");


//Get all the posts
router.get('/readAll',postsConfig.getAllPosts);

//Add a post into the DB
router.post('/insert',postsConfig.addPost);

//Get a specific post from the DB
router.get('/real',postsConfig.getPost);

//Update a specific post
router.patch('/update',postsConfig.updatePost);

module.exports = router;