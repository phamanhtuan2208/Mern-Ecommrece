const Product = require('../Models/productModel');
const AsyncHandler = require('express-async-handler');
const slugify = require('slugify');

//create product
const createProduct = AsyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (error) {
        throw new Error(error);
    }
});

//update product
const updateProduct = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updateProduct);
    } catch (error) {
        throw new Error(error);
    }
});
//delete product
const deleteProduct = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleteProduct = await Product.findByIdAndDelete(id);
        res.json(deleteProduct);
    } catch (error) {
        throw new Error(error);
    }
});

//get all product
const getAllProduct = AsyncHandler(async (req, res) => {
    try {
        const queryObject = { ...req.query };

        //filter price gte|gt|lte|lt
        const excludeFields = ['page', 'sort', 'limit', 'fields'];
        excludeFields.forEach((el) => delete queryObject[el]);
        let queryString = JSON.stringify(queryObject);
        queryString = queryString.replace(
            /\b(gte|gt|lte|lt)\b/g,
            (match) => `$${match}`,
        );
        let query = Product.find(JSON.parse(queryString));

        //Sorting
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            query = query.sort(sortBy);
        } else {
            query = query.sort('-createdAt');
        }

        //limiting the field
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ');
            query = query.select(fields);
        } else {
            query = query.select('-__v');
        }

        //pagination
        const page = req.query.page;
        const limit = req.query.limit;
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);
        if (req.query.page) {
            const productCount = await Product.countDocuments();
            if (skip >= productCount)
                throw new Error('This Page does not exists');
        }
        
        const product = await query;
        res.json(product);
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

module.exports = {
    createProduct,
    getAProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
};
