const express = require('express');
const { authMiddleware, isAdmin } = require('../Middleware/authMIddleware');
const {
    createProduct,
    getAProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
    addToWishList,
    Rating,
    uploadImage,
    deleteImage,
} = require('../Controller/productCtrl');
const { uploadPhoto, blogImgResize } = require('../Middleware/uploadImage');

const router = express.Router();

router.route('/').post(authMiddleware, isAdmin, createProduct);
router
    .route('/upload')
    .put(
        authMiddleware,
        isAdmin,
        uploadPhoto.array('images', 10),
        blogImgResize,
        uploadImage,
    );
router.route('/getallproduct').get(getAllProduct);
router.route('/wishlist').put(authMiddleware, addToWishList);
router.route('/rating').put(authMiddleware, Rating);
router.route('/:id').get(getAProduct);
router.route('/:id').put(authMiddleware, isAdmin, updateProduct);
router.route('/:id').delete(authMiddleware, isAdmin, deleteProduct);
router.route('/deleteimg/:id').delete(authMiddleware, isAdmin, deleteImage);

module.exports = router;
