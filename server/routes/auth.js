const router = require('express').Router();
const authConfig = require("../controllers/auth.js")


router.post('/register',authConfig.registerUser);
router.post('/login',authConfig.loginUser);

module.exports = router;