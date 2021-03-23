const express = require('express');

//Init app
const app = express();

//Start server
app.listen(3000);

//Home route
app.get('/', (req, res) => {
    res.send('Test!!!')
});