const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Init app
const app = express();

//Start server
app.listen(3000);

//Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}))

//Parse application/json
app.use(bodyParser.json());

app.use(cors());

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => 
    console.log('Connected to DB!')
);

//Import routes
const usersRoute = require('./routes/users');
app.use('/users', usersRoute);

//Home route
app.get('/', (req, res) => {
    res.send('Test!!!');
});