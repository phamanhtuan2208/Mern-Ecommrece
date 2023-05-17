const express = require('express');
const { authMiddleware, isAdmin } = require('../Middleware/authMIddleware');
const {
    createBlog,
    updateBlog,
    getBlog,
    getAllBlog,
    deleteBlog,
    likeBlog,
} = require('../Controller/blogCtrl');

const router = express.Router();

router.route('/').post(authMiddleware, isAdmin, createBlog);
router.route('/:id').put(authMiddleware, isAdmin, updateBlog);
router.route('/:id').delete(authMiddleware, isAdmin, deleteBlog);
router.route('/:id').get(getBlog);
router.route('/').get(getAllBlog);

router.route('/likes').put(authMiddleware, likeBlog);

module.exports = router;
