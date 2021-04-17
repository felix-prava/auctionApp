const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv");
require('dotenv/config');
const PORT = process.env.PORT || 8000

//Init app
const app = express();

//Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}))

//Parse application/json
app.use(bodyParser.json());

app.use(cors());

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to DB!'))
    .catch(err => console.log(err)
);

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
app.listen(PORT, () => 
    console.log(`Server up and running on port ${PORT}!`)
);