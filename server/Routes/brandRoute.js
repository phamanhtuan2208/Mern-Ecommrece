const express = require('express');
const { authMiddleware, isAdmin } = require('../Middleware/authMIddleware');
const {
    createBrand,
    updateBrand,
    deleteBrand,
    getBrand,
    getAllBrand,
} = require('../Controller/brandCtrl');
const router = express.Router();

router.route('/').get(getAllBrand);
router.route('/').post(authMiddleware, isAdmin, createBrand);
router.route('/:id').put(authMiddleware, isAdmin, updateBrand);
router.route('/:id').delete(authMiddleware, isAdmin, deleteBrand);
router.route('/:id').get(getBrand);

module.exports = router;
