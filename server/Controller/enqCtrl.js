const Enquiry = require('../Models/enqModel');
const AsyncHandler = require('express-async-handler');
const validateMongoDBid = require('../Util/validateMongodbld');

//create Enquiry
const createEnquiry = AsyncHandler(async (req, res) => {
    try {
        const newEnquiry = await Enquiry.create(req.body);
        res.json(newEnquiry);
    } catch (error) {
        throw new Error(error);
    }
});

//update Enquiry
const updateEnquiry = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const updateEnquiry = await Enquiry.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updateEnquiry);
    } catch (error) {
        throw new Error(error);
    }
});

//delete Enquiry
const deleteEnquiry = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleteEnquiry = await Enquiry.findByIdAndDelete(id);
        res.json(deleteEnquiry);
    } catch (error) {
        throw new Error(error);
    }
});

//get Enquiry
const getEnquiry = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const getEnquiry = await Enquiry.findById(id);
        res.json(getEnquiry);
    } catch (error) {
        throw new Error(error);
    }
});

//get all Enquiry
const getAllEnquiry = AsyncHandler(async (req, res) => {
    try {
        const getAllEnquiry = await Enquiry.find();
        res.json(getAllEnquiry);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createEnquiry,
    updateEnquiry,
    deleteEnquiry,
    getEnquiry,
    getAllEnquiry,
};
