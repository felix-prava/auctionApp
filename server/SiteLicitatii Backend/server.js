const express = require('express');
const dotenv = require("dotenv");
const bodyparser = require('body-parser');
const config = require('./config')
const cors = require('cors');
const licitations = require('./businessLogic/licitations');
//Init app
const app = express();

app.use(cors());
//Body Parser Middleware

//Parse application/json
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//Import routes
// const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');
 const usersRoute = require('./routes/users');

//Route Middlewares
// app.use('/api/auth', authRoute);
app.use('/api/posts', postsRoute);
// app.use('/api/cars', carsRoute);

app.use('/api/users',usersRoute);

//Home route
app.get('/', (req, res) => {
    res.send('Test!!!');
});

console.log("CheckBid cronojob started")
setInterval(() => licitations.checkBidFinished(),1000);

//Start server
app.listen(config.server_options.port, () => 
    console.log(`Server BACKEND is up and running on port ${config.server_options.port}!`)
);