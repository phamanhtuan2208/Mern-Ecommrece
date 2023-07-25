const Coupon = require('../Models/couponModel');
const AsyncHandler = require('express-async-handler');
const validateMongoDBid = require('../Util/validateMongodbld');

//create coupon
const createCoupon = AsyncHandler(async (req, res) => {
    try {
        const newCoupon = await Coupon.create(req.body);
        res.json(newCoupon);
    } catch (error) {
        throw new Error(error);
    }
});

//get All coupon
const getAllCoupon = AsyncHandler(async (req, res) => {
    try {
        const getAllCoupon = await Coupon.find();
        res.json(getAllCoupon);
    } catch (error) {
        throw new Error(error);
    }
});

//update coupon
const updateCoupon = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDBid(id);
    try {
        const updateCoupon = await Coupon.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updateCoupon);
    } catch (error) {
        throw new Error(error);
    }
});

//get a coupon
const getACoupon = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDBid(id);
    try {
        const getACoupon = await Coupon.findById(id);
        res.json(getACoupon);
    } catch (error) {
        throw new Error(error);
    }
});

//delete coupon
const deleteCoupon = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDBid(id);
    try {
        const deleteCoupon = await Coupon.findByIdAndDelete(id);
        res.json(deleteCoupon);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createCoupon,
    getAllCoupon,
    updateCoupon,
    deleteCoupon,
    getACoupon,
};
