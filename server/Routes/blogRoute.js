const express = require('express');
const { authMiddleware, isAdmin } = require('../Middleware/authMIddleware');
const { createBlog, updateBlog } = require('../Controller/blogCtrl');

const router = express.Router();

router.route('/').post(authMiddleware, isAdmin, createBlog);
router.route('/:id').put(authMiddleware, isAdmin, updateBlog);

module.exports = router;
