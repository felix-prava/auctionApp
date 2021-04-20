const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require("dotenv");
const config = require("./config/config.js");


//Init app
const app = express();

//Body Parser Middleware

//Parse application/json

app.use(cors());

//Connect to DB
mongoose.connect(config.config.mongo_connection_details.url,config.mongo_options)
    .then((result) => {
        console.log('CONNECTED TO MONGO')
    })
    .catch((error) => {
        console.log('ERROR CONNECTION TO MONGO');
    });


//Import routes
const usersRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');
const carsRoute = require('./routes/cars');

//Route Middlewares
app.use('/api/users', usersRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postsRoute);
app.use('/api/cars', carsRoute);

//Home route
app.get('/', (req, res) => {
    res.send('Test!!!');
});

//Start server
app.listen(config.config.server_options.port, () => 
    console.log(`Server up and running on port ${config.config.server_options.port}!`)
);