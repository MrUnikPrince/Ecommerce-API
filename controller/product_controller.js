const Product = require("../models/product")

// get all Products
module.exports.getProducts = async (req,res)=>{
    try{
        const products = await Product.find();
        res.json(products); 
    }catch(err){
        res.status(500).json({message:`Error in Retrieving Products ${err}`})
    }
}

// insert a Product

module.exports.create = async (req,res) =>{
    try{
        const {id, name, quantity} = req.body;
        const newProduct = new Product({id, name, quantity});
        const saveProduct = await newProduct.save();
        res.status(200).json(saveProduct);
    }catch(err){
        res.status(400).json({message:`Error in creating Product ${err.message}`});
        }
    }

module.exports.delete = async (req, res) => {
    try{
        const productID = req.params.id;
        const deletedProduct = await Product.deleteOne({id:productID});
        if(deletedProduct){
            res.json({message:`Product Deleted `});
        }else{
            res.status(404).json({message:`Product not Found`});
        }
    }catch(err){
        res.status(400).json({message: `Error in Deleting Product ${err.message}`});
    }
}

