const Product = require('../Models/productModel');
const AsyncHandler = require('express-async-handler');

//create product
const createProduct = AsyncHandler(async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (error) {
        throw new Error(error);
    }
});

//find a product
const getAProduct = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const findProduct = await Product.findById(id);
        res.json(findProduct);
    } catch (error) {
        throw new Error(error);
    }
});



module.exports = { createProduct, getAProduct };
