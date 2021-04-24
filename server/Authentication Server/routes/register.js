const router = require('express').Router();
const registerConfig = require("../controllers/register.js")


router.get('/',registerConfig.registerUser);

module.exports = router;