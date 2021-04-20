const router = require('express').Router();
const loginConfig = require("../controllers/login.js")


router.get('/',loginConfig.loginUser);

module.exports = router;