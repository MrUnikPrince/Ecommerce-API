const { log } = require('console');
const mongoos = require('mongoose');

mongoos.connect('mongodb://localhost/product', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    log('Connected to the Database');
}) 
.catch ((err) => { 
    log(`Error in Conneting to the Database : ${err}`);
});