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
    loginAdmin,
    getWishList,
    saveAddress,
    userCart,
    getUserCart,
    // emptyCart,
    // applyCoupon,
    createOrder,
    getOrders,
    updateOrderStatus,
    getAllOrders,
    getOrderByUserId,
    removeProductFromCart,
    updateProductQuantityFromCart,
    getMyOrders,
} = require('../Controller/userCtrl');
const { payMent, paymentVerification } = require('../Controller/payMentCtrl');

const router = express.Router();

router.route('/register').post(createUser);

router.route('/login').post(loginUserCtrl);
router.route('/loginAdmin').post(loginAdmin);
router.route('/getalluser').get(getAllUser);
router.route('/getMyOrder').get(authMiddleware, getMyOrders);
// router.route('/getallorders').get(authMiddleware, isAdmin, getAllOrders);
router
    .route('/getorderbyuser/:id')
    .get(authMiddleware, isAdmin, getOrderByUserId);

router.route('/refresh').get(handleRefreshToken);
router.route('/wishlist').get(authMiddleware, getWishList);
router.route('/saveaddress').put(authMiddleware, saveAddress);
router.route('/cart').post(authMiddleware, userCart);
router.route('/cart').get(authMiddleware, getUserCart);
router
    .route('/deletecart/:cartItemId')
    .delete(authMiddleware, removeProductFromCart);
router
    .route('/updatequantity/:cartItemId')
    .put(authMiddleware, updateProductQuantityFromCart);
// router.route('/emptycart').delete(authMiddleware, emptyCart);
// router.route('/cart/applycoupon').post(authMiddleware, applyCoupon);
router.route('/cart/cashorder').post(authMiddleware, createOrder);

router.route('/password').put(authMiddleware, updatePassword);
router
    .route('/updateorder/:id')
    .put(authMiddleware, isAdmin, updateOrderStatus);
router.route('/forgotpasswordtoken').post(forgotPasswordToken);
router.route('/resetpassword/:token').put(resetPassword);
router.route('/edituser').put(authMiddleware, updateaUser);
router.route('/logout').get(logout);

router.route('/:id').get(authMiddleware, isAdmin, getAUser);
router.route('/:id').delete(deleteAUser);
router.route('/blockuser/:id').put(authMiddleware, isAdmin, blockUser);
router.route('/unblockuser/:id').put(authMiddleware, isAdmin, unBlockUser);

router.route('/order/checkout').post(authMiddleware, payMent);
router
    .route('/order/paymentVerification')
    .post(authMiddleware, paymentVerification);

module.exports = router;
