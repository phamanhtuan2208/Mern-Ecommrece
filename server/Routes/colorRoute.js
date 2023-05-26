const express = require('express');
const { authMiddleware, isAdmin } = require('../Middleware/authMIddleware');
const {
    createColor,
    updateColor,
    deleteColor,
    getColor,
    getAllColor,
} = require('../Controller/ColorCtrl');
const router = express.Router();

router.route('/').get(getAllColor);
router.route('/').post(authMiddleware, isAdmin, createColor);
router.route('/:id').put(authMiddleware, isAdmin, updateColor);
router.route('/:id').delete(authMiddleware, isAdmin, deleteColor);
router.route('/:id').get(getColor);

module.exports = router;
