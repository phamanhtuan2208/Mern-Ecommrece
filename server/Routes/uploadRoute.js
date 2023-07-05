const express = require('express');
const { authMiddleware, isAdmin } = require('../Middleware/authMIddleware');
const { uploadImage, deleteImage } = require('../Controller/uploadCtrl');
const { uploadPhoto, blogImgResize } = require('../Middleware/uploadImage');

const router = express.Router();

router
    .route('/upload')
    .post(
        authMiddleware,
        isAdmin,
        uploadPhoto.array('images', 10),
        blogImgResize,
        uploadImage,
    );
router.route('/deleteimg/:id').delete(authMiddleware, isAdmin, deleteImage);

module.exports = router;
