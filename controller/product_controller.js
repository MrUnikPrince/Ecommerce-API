const Product = require("../models/product")

// get all Products
module.exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: `Error in Retrieving Products ${err}` })
    }
}

// insert a Product
module.exports.create = async (req, res) => {
    try {
        const { id, name, quantity } = req.body;
        const newProduct = new Product({ id, name, quantity });
        const product = await newProduct.save();
        res.status(200).json({data:{product}});
    } catch (err) { 
        res.status(400).json({ message: `Error in creating Product ${err.message}` });
    }
}

// Delete Specific Product
module.exports.delete = async (req, res) => {
    try {
        const productId = req.params.id;
        // find and delete product
        const deletedProduct = await Product.findOneAndDelete({id:productId});
        if(deletedProduct){
            res.json({message:`Product Deleted `});
        }else{
            res.status(404).json({message:`Product not Found`});
        }
    } catch (err) {
        res.status(400).json({ message: `Error in Deleting Product ${err.message}` });
    }
}

// Update Product 
module.exports.update = async (req, res) => {
    try {
        const productId = req.params.id;
        const { number } = req.query;

        // Find Product by ID
        const product = await Product.findOne({ id: productId });
        if (!product) {
            return res.status(404).json({ message: `Product not found` })
        }
        // Update the Quantity of product 
        const updatedQuantity = product.quantity + parseInt(number);
        product.quantity = updatedQuantity;

        // Save the updataed product
        await product.save();

        return res.status(200).json({ data:{product}, message: `Updated successfully` })
    } catch (err) {
        res.status(500).json({ message: `Error in updataing Quantity ${err.message}` });
    }
}

