const express = require('express');
const { authMiddleware, isAdmin } = require('../Middleware/authMIddleware');
const {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory,
    getAllCategory,
} = require('../Controller/procategoryCtrl');
const router = express.Router();

router.route('/').get(getAllCategory);
router.route('/').post(authMiddleware, isAdmin, createCategory);
router.route('/:id').put(authMiddleware, isAdmin, updateCategory);
router.route('/:id').delete(authMiddleware, isAdmin, deleteCategory);
router.route('/:id').get(getCategory);

module.exports = router;
