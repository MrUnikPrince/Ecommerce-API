// const { timeStamp } = require('console');
const mongoos = require('mongoose');

// creating Schema for Products
const productSchema = mongoos.Schema({
    id: {
        type: String, // Assuming id is a number
        required: true // Assuming id is a required field
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    }
}, { timeStamp: true })

const Product = mongoos.model('Product', productSchema);
module.exports = Product;