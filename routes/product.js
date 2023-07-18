const router = require('express').Router();

const productController = require('../controller/product_controller');
// Get All Products
router.get('/', productController.getProducts);
// Create a new Product
router.post('/create', productController.create);
// Delete Product

module.exports = router;