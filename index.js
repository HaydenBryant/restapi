const express = require('express')

const app = express();

app.get('/api', function(req, res){
    console.log('GET request');
    res.send({name: 'Yoshi'}); 
});

app.listen(process.env.PORT || 4000, function () {
    
    console.log(`Now listening for requests`);
    
});