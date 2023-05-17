const Brand = require('../Models/brandModel');
const AsyncHandler = require('express-async-handler');
const validateMongoDBid = require('../Util/validateMongodbld');

//create Brand
const createBrand = AsyncHandler(async (req, res) => {
    try {
        const newBrand = await Brand.create(req.body);
        res.json(newBrand);
    } catch (error) {
        throw new Error(error);
    }
});

//update Brand
const updateBrand = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const updateBrand = await Brand.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updateBrand);
    } catch (error) {
        throw new Error(error);
    }
});

//delete Brand
const deleteBrand = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleteBrand = await Brand.findByIdAndDelete(id);
        res.json(deleteBrand);
    } catch (error) {
        throw new Error(error);
    }
});

//get Brand
const getBrand = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const getBrand = await Brand.findById(id);
        res.json(getBrand);
    } catch (error) {
        throw new Error(error);
    }
});

//get all Brand
const getAllBrand = AsyncHandler(async (req, res) => {
    try {
        const getAllBrand = await Brand.find();
        res.json(getAllBrand);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createBrand,
    updateBrand,
    deleteBrand,
    getBrand,
    getAllBrand,
};
