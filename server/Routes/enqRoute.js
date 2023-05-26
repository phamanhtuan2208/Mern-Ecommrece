const express = require('express');
const { authMiddleware, isAdmin } = require('../Middleware/authMIddleware');
const {
    createEnquiry,
    updateEnquiry,
    deleteEnquiry,
    getEnquiry,
    getAllEnquiry,
} = require('../Controller/enqCtrl');
const router = express.Router();

router.route('/').get(getAllEnquiry);
router.route('/').post(authMiddleware, isAdmin, createEnquiry);
router.route('/:id').put(authMiddleware, isAdmin, updateEnquiry);
router.route('/:id').delete(authMiddleware, isAdmin, deleteEnquiry);
router.route('/:id').get(getEnquiry);

module.exports = router;
