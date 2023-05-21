const express = require('express');
const { authMiddleware, isAdmin } = require('../Middleware/authMIddleware');
const {
    createBlog,
    updateBlog,
    getBlog,
    getAllBlog,
    deleteBlog,
    likeBlog,
    disLikeBlog,
    uploadImage,
} = require('../Controller/blogCtrl');
const { productImgResize, uploadPhoto } = require('../Middleware/uploadImage');

const router = express.Router();

router.route('/').post(authMiddleware, isAdmin, createBlog);
router
    .route('/upload/:id')
    .put(
        authMiddleware,
        isAdmin,
        uploadPhoto.array('images', 2),
        productImgResize,
        uploadImage,
    );
router.route('/likes').put(authMiddleware, likeBlog);
router.route('/dislikes').put(authMiddleware, disLikeBlog);

router.route('/:id').put(authMiddleware, isAdmin, updateBlog);
router.route('/:id').delete(authMiddleware, isAdmin, deleteBlog);
router.route('/:id').get(getBlog);
router.route('/').get(getAllBlog);

module.exports = router;
