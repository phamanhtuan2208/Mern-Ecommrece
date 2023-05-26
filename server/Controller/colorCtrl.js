const Color = require('../Models/ColorModel');
const AsyncHandler = require('express-async-handler');
const validateMongoDBid = require('../Util/validateMongodbld');

//create Color
const createColor = AsyncHandler(async (req, res) => {
    try {
        const newColor = await Color.create(req.body);
        res.json(newColor);
    } catch (error) {
        throw new Error(error);
    }
});

//update Color
const updateColor = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const updateColor = await Color.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updateColor);
    } catch (error) {
        throw new Error(error);
    }
});

//delete Color
const deleteColor = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleteColor = await Color.findByIdAndDelete(id);
        res.json(deleteColor);
    } catch (error) {
        throw new Error(error);
    }
});

//get Color
const getColor = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const getColor = await Color.findById(id);
        res.json(getColor);
    } catch (error) {
        throw new Error(error);
    }
});

//get all Color
const getAllColor = AsyncHandler(async (req, res) => {
    try {
        const getAllColor = await Color.find();
        res.json(getAllColor);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createColor,
    updateColor,
    deleteColor,
    getColor,
    getAllColor,
};
