const mongoos = require('mongoose');

// creating connection with database
mongoos.connect('mongodb://127.0.0.1:27017/product', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to the Database');
}) 
.catch ((err) => { 
    console.log(`Error in Conneting to the Database : ${err}`);
});