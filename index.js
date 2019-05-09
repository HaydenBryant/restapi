const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
var promise = mongoose.connect('mongodb://haydenbryant1031-haydenbryant.c9users.io', {
  useMongoClient: true,
  /* other options */
});


// mongoose.connect('mongodb://haydenbryant1031-haydenbryant.c9users.io/ninjago');
mongoose.Promise = global.Promise;

// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.PORT || 4000, function(){
    console.log('now listening for requests');
});