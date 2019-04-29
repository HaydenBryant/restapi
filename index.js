const express = require('express');

//setup express app
const app = express();

//initialize routes
app.use('/api', require('./routes/api'));

//listen for requests
app.listen(process.env.PORT || 4000, function () {
    console.log(`Now listening for requests`);
});