const express = require('express');
const { authMiddleware, isAdmin } = require('../Middleware/authMIddleware');
const { createProduct, getAProduct } = require('../Controller/productCtrl');

const router = express.Router();

router.route('/').post(createProduct);
router.route('/:id').get(getAProduct);

module.exports = router;
