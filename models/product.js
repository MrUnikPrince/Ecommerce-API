// const { timeStamp } = require('console');
const mongoos = require('mongoose');

// creating Schema for Products
const productSchema = mongoos.Schema({
    id: {
        type: Number, // Assuming id is a number
        required: true, // Assuming id is a required field
        unique:true
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, { timeStamp: true })

const Product = mongoos.model('Product', productSchema);
module.exports = Product;