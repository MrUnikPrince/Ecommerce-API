// const { log } = require('console');

// in this file i am getting all the requests 
const router = require('express').Router();
console.log('router ');
// product request
router.use('/product', require('./product'));

module.exports = router;