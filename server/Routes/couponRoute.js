const express = require('express');
const { authMiddleware, isAdmin } = require('../Middleware/authMIddleware');
const {
    createCoupon,
    getAllCoupon,
    updateCoupon,
    deleteCoupon,
} = require('../Controller/couponCtrl');
const router = express.Router();

router.route('/').post(authMiddleware, isAdmin, createCoupon);
router.route('/').get(authMiddleware, isAdmin, getAllCoupon);
router.route('/:id').put(authMiddleware, isAdmin, updateCoupon);
router.route('/:id').delete(authMiddleware, isAdmin, deleteCoupon);


module.exports = router;
