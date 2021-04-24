const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require("dotenv");
const config = require("./config/config.js");


//Init app
const app = express();
app.use(cors());

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
const postsRoute = require('./routes/posts');

//Route Middlewares
app.use('/api/users', usersRoute);
app.use('/api/posts', postsRoute);

//Home route
app.get('/', (req, res) => {
    res.send('Test!!!');
});

//Start server
app.listen(config.config.server_options.port, () => 
    console.log(`Server up and running on port ${config.config.server_options.port}!`)
);
