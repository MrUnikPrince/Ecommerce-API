const { log } = require('console');
const express = require('express');
const port = 8000;
const db = require('./config/mongoose')
const app = express();




// Server 
app.listen(port, (err) => {
    if(err) {
        log(`Error in running Server ${err}`);
    }
    log(`Server is running ${port}`);
});