const router = require('express').Router();
const usersConfig = require("../controllers/users.js");


//Get all the posts
router.get('/read',usersConfig.getUser);

//Add a post into the DB
router.post('/insert',usersConfig.addUser);


//Delete a specific post
router.delete('/delete',usersConfig.deleteUser);

//Update a specific post
router.patch('/update',usersConfig.updateUser);

module.exports = router;