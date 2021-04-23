const router = require('express').Router();
const registerConfig = require("../controllers/register.js")


router.post('/',registerConfig.registerUser);

module.exports = router;