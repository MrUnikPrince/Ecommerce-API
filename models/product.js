const mongoos = require('mongoose');

// creating Schema for Products
const productSchema = mongoos.Schema({
    id: {
        type: Number, 
        required: true,
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