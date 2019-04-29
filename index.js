const express = require('express')

const port = process.env.PORT || 5000;

const app = express();

app.listen(process.env.PORT || 5000, function () {
    
    console.log(`Now listening for requests`);
    
});