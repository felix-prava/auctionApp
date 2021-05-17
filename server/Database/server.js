const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require("dotenv");
const config = require("./config/config.js");
const bodyparser = require('body-parser');

//Init app
const app = express();

//Body Parser Middleware

//Parse application/json
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
//Connect to DB
mongoose.connect(config.config.mongo_connection_details.cloud_url)
    .then((result) => {
        console.log('CONNECTED TO MONGO')
    })
    .catch((error) => {
        console.log(error);
    });


//Import routes
const usersRoute = require('./routes/users');
// const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');
// const carsRoute = require('./routes/cars');

//Route Middlewares
app.use('/api/users', usersRoute);
// app.use('/api/auth', authRoute);
app.use('/api/posts', postsRoute);
// app.use('/api/cars', carsRoute);

//Home route
app.get('/', (req, res) => {
    res.send('Test!!!');
});

//Start server
app.listen(config.config.server_options.port, () => 
    console.log(`Server DATABASE is up and running on port ${config.config.server_options.port}!`)
);