const express = require('express');
const { authMiddleware, isAdmin } = require('../Middleware/authMIddleware');
const {
    createUser,
    loginUserCtrl,
    getAllUser,
    getAUser,
    deleteAUser,
    updateaUser,
    blockUser,
    unBlockUser,
    handleRefreshToken,
    logout,
    updatePassword,
    forgotPasswordToken,
    resetPassword,
} = require('../Controller/userCtlr');

const router = express.Router();

router.route('/register').post(createUser);

router.route('/login').post(loginUserCtrl);
router.route('/getalluser').get(getAllUser);
router.route('/refresh').get(handleRefreshToken);
router.route('/password').put(authMiddleware, updatePassword);
router.route('/forgotpasswordtoken').post(forgotPasswordToken);
router.route('/resetpassword/:token').put(resetPassword);
router.route('/logout').get(logout);

router.route('/:id').get(authMiddleware, isAdmin, getAUser);
router.route('/:id').delete(deleteAUser);
router.route('/edituser').put(authMiddleware, updateaUser);
router.route('/blockuser/:id').put(authMiddleware, isAdmin, blockUser);
router.route('/unblockuser/:id').put(authMiddleware, isAdmin, unBlockUser);

module.exports = router;
