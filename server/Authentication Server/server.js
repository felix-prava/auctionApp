const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const config = require("./config/config.js");


//Init app
const app = express();

app.use(cors());

//Import routes
// const usersRoute = require('./routes/users');
const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register');

//Route Middlewares
// app.use('/api/users', usersRoute);
app.use('/api/login', loginRoute);
app.use('/api/register', registerRoute);

//Start server
app.listen(config.server_options.port, () => 
    console.log(`Server up and running on port ${config.server_options.port}!`)
);