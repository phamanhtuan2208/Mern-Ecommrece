const express = require('express');
const { authMiddleware, isAdmin } = require('../Middleware/authMIddleware');
const {
    createProduct,
    getAProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
} = require('../Controller/productCtrl');

const router = express.Router();

router.route('/').post(authMiddleware, isAdmin, createProduct);
router.route('/getallproduct').get(getAllProduct);
router.route('/:id').get(getAProduct);
router.route('/:id').put(authMiddleware, isAdmin, updateProduct);
router.route('/:id').delete(authMiddleware, isAdmin, deleteProduct);

module.exports = router;
