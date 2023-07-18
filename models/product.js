const { timeStamp } = require('console');
const mongoos = require('mongoose');
const productSchema = mongoos.Schema({

},{timeStamp:true})

const Product = mongoos.model('Product', productSchema);