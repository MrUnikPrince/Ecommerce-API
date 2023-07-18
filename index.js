// const { log } = require('console');
const express = require('express'); 
const port = 9000;
const db = require('./config/mongoose')
const app = express();

// middleware
app.use(express.json());


// const routesPath = require('./routes');
app.use('/', require('./routes'));


// Server 
app.listen(port, (err) => {
    if(err) {
        console.log(`Error in running Server ${err}`);
    }
    console.log(`Server is running ${port}`);
});