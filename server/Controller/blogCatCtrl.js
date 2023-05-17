const Category = require('../Models/blogCatModel');
const AsyncHandler = require('express-async-handler');
const validateMongoDBid = require('../Util/validateMongodbld');

//create Category
const createCategory = AsyncHandler(async (req, res) => {
    try {
        const newCategory = await Category.create(req.body);
        res.json(newCategory);
    } catch (error) {
        throw new Error(error);
    }
});

//update Category
const updateCategory = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const updateCategory = await Category.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updateCategory);
    } catch (error) {
        throw new Error(error);
    }
});

//delete Category
const deleteCategory = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleteCategory = await Category.findByIdAndDelete(id);
        res.json(deleteCategory);
    } catch (error) {
        throw new Error(error);
    }
});

//get Category
const getCategory = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const getCategory = await Category.findById(id);
        res.json(getCategory);
    } catch (error) {
        throw new Error(error);
    }
});

//get all Category
const getAllCategory = AsyncHandler(async (req, res) => {
    try {
        const getAllCategory = await Category.find();
        res.json(getAllCategory);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory,
    getAllCategory,
};
