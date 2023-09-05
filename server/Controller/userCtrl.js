const User = require('../Models/userModel');
const Product = require('../Models/productModel');
const Cart = require('../Models/cartModel');
const Coupon = require('../Models/couponModel');
const Order = require('../Models/orderModel');
const uniqid = require('uniqid');
const AsyncHandler = require('express-async-handler');
const { generateToken } = require('../Config/jwtToken');
const validateMongoDBid = require('../Util/validateMongodbld');
const { generateRefreshToken } = require('../Config/refreshToken');
const jwt = require('jsonwebtoken');
const { sendEmail } = require('./emailCtrl');
const crypto = require('crypto');

//create user
const createUser = AsyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
        //create a new User
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } else {
        //user already exists
        throw new Error('User already exists');
    }
});
//login a user
const loginUserCtrl = AsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    //check if user exits or not
    const findUser = await User.findOne({ email });
    if (findUser && (await findUser.isPasswordMatched(password))) {
        const refreshToken = await generateRefreshToken(findUser._id);
        const updateUser = await User.findByIdAndUpdate(
            findUser.id,
            {
                refreshToken: refreshToken,
            },
            { new: true },
        );
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000,
        });
        res.json({
            _id: findUser?._id,
            firstname: findUser.firstname,
            lastname: findUser.lastname,
            email: findUser.email,
            mobile: findUser.mobile,
            token: generateToken(findUser._id),
        });
    } else {
        throw new Error('Invalid Credentials');
    }
});

//admin login
const loginAdmin = AsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    //check if user exits or not
    const findAdmin = await User.findOne({ email });
    if (findAdmin.role !== 'admin') throw new Error('Not Authorised');
    if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
        const refreshToken = await generateRefreshToken(findAdmin?._id);
        const updateUser = await User.findByIdAndUpdate(
            findAdmin.id,
            {
                refreshToken: refreshToken,
            },
            { new: true },
        );
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000,
        });
        res.json({
            _id: findAdmin?._id,
            firstname: findAdmin.firstname,
            lastname: findAdmin.lastname,
            email: findAdmin.email,
            mobile: findAdmin.mobile,
            token: generateToken(findAdmin._id),
        });
    } else {
        throw new Error('Invalid Credentials');
    }
});

//save user Addresss
const saveAddress = AsyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDBid(_id);
    try {
        const saveAddress = await User.findByIdAndUpdate(
            _id,
            {
                address: req?.body?.address,
            },
            {
                new: true,
            },
        );
        res.json({ saveAddress });
    } catch (error) {
        throw new Error(error);
    }
});

// get all users
const getAllUser = AsyncHandler(async (req, res) => {
    // const { _id } = req.user;
    // validateMongoDBid(_id);
    try {
        const getUsers = await User.find();
        res.json(getUsers);
    } catch (error) {
        throw new Error(error.message);
    }
});

// get a single user
const getAUser = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDBid(id);
    try {
        const getaUser = await User.findById(id);
        res.json({ getaUser });
    } catch (error) {
        throw new Error(error);
    }
});

//delete a user
const deleteAUser = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDBid(id);
    try {
        const deleteaUser = await User.findByIdAndDelete(id);
        res.json({ deleteaUser });
    } catch (error) {
        throw new Error(error);
    }
});

//handle refresh token
const handleRefreshToken = AsyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) {
        throw new Error('NO Refresh Token in Cookies');
    }
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) throw new Error('No Refresh Token present in db or not matched');
    jwt.verify(
        refreshToken,
        process.env.PRIVATEKEY_JWT_TOKEN,
        (err, decoded) => {
            if (err || user.id !== decoded.id) {
                throw new Error('There is something wrong with refresh token');
            }
            const accessToken = generateToken(user?._id);
            res.json({ accessToken });
        },
    );
});

//logout functionality
const logout = AsyncHandler(async (req, res) => {
    const cookie = req.cookies;
    // if (!cookie.refreshToken) throw new Error('NO Refresh Token in Cookies');
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) {
        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: true,
        });
        return res.sendStatus(204); //forbidden
    }
    await User.findOneAndUpdate(refreshToken, {
        refreshToken: '',
    });
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: true,
    });
    res.sendStatus(204); //forbidden
});

//update a user
const updateaUser = AsyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDBid(_id);
    try {
        const updateaUser = await User.findByIdAndUpdate(
            _id,
            {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                mobile: req.body.mobile,
            },
            {
                new: true,
            },
        );
        res.json({ updateaUser });
    } catch (error) {
        throw new Error(error);
    }
});

//block user
const blockUser = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDBid(id);
    try {
        const block = await User.findByIdAndUpdate(
            id,
            {
                isBlocked: true,
            },
            { new: true },
        );
        res.json(block);
    } catch (error) {
        throw new Error(error);
    }
});

//unblock user
const unBlockUser = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDBid(id);
    try {
        const unblock = await User.findByIdAndUpdate(
            id,
            {
                isBlocked: false,
            },
            { new: true },
        );
        res.json(unblock);
    } catch (error) {
        throw new Error(error);
    }
});

//change password
const updatePassword = AsyncHandler(async (req, res) => {
    const { _id } = req.user;
    const password = req.body.password;
    validateMongoDBid(_id);
    const user = await User.findById(_id);
    if (password) {
        user.password = password;
        const updatePassword = await user.save();
        res.json(updatePassword);
    } else {
        res.json(user);
    }
});

//forgot password
const forgotPasswordToken = AsyncHandler(async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found with this email');
    try {
        const token = await user.createPasswordResetToken();
        await user.save();
        const resetURL = `Hi, Please follow this link to reset Your Password. This link is valid till 10 minutes from now. 
        <a href='http://localhost:4000/reset-password/${token}'>Click Here</a>`;
        const data = {
            to: email,
            text: 'Hey User',
            subject: 'Forgot Password Link',
            htm: resetURL,
        };
        sendEmail(data);
        res.json(token);
    } catch (error) {
        throw new Error(error);
    }
});

//reset password
const resetPassword = AsyncHandler(async (req, res) => {
    const { password } = req.body;
    const { token } = req.params;
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gt: Date.now() },
    });
    if (!user) throw new Error(' Token Expired, Please try again later');
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    res.json(user);
});

//get wishlist
const getWishList = AsyncHandler(async (req, res) => {
    const { _id } = req.user;
    try {
        const findUser = await User.findById(_id).populate('wishlist');
        res.json(findUser);
    } catch (error) {
        throw new Error(error);
    }
});

// add cart
const userCart = AsyncHandler(async (req, res) => {
    const { productId, color, quantity, price } = req.body;
    const { _id } = req.user;
    validateMongoDBid(_id);
    try {
        let newCart = await new Cart({
            userId: _id,
            productId,
            color,
            price,
            quantity,
        }).save();
        res.json(newCart);
    } catch (error) {
        throw new Error(error);
    }
});

//get user cart
const getUserCart = AsyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDBid(_id);
    try {
        const cart = await Cart.find({ userId: _id })
            .populate('productId')
            .populate('color');
        res.json(cart);
    } catch (error) {
        throw new Error(error);
    }
});

//remove product from cart
const removeProductFromCart = AsyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { cartItemId } = req.params;
    validateMongoDBid(_id);
    try {
        const deleteProductFromCart = await Cart.deleteOne({
            userId: _id,
            _id: cartItemId,
        });
        res.json(deleteProductFromCart);
    } catch (error) {
        throw new Error(error);
    }
});

//updateProductQuantityFromCart
const updateProductQuantityFromCart = AsyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { cartItemId } = req.params;
    const { newQuantity } = req.body;
    validateMongoDBid(_id);
    try {
        const cartItem = await Cart.findOne({
            userId: _id,
            _id: cartItemId,
        });
        cartItem.quantity = newQuantity;
        cartItem.save();
        res.json(cartItem);
    } catch (error) {
        throw new Error(error);
    }
});

//create order
const createOrder = AsyncHandler(async (req, res) => {
    const { _id } = req.user;
    const {
        shippingInfo,
        orderItems,
        totalPrice,
        totalPriceAfterDiscount,
        paymentInfo,
    } = req.body;
    try {
        const createNewOrder = await Order.create({
            user: _id,
            shippingInfo,
            orderItems,
            totalPrice,
            totalPriceAfterDiscount,
            paymentInfo,
        });
        res.json({ createNewOrder, success: true });
    } catch (error) {
        throw new Error(error);
    }
});

// //get All order
// const getAllOrders = AsyncHandler(async (req, res) => {
//     try {
//         const allOrder = await Order.find();
//         res.json(allOrder);
//     } catch (error) {
//         throw new Error(error);
//     }
// });

// //empty cart
// const emptyCart = AsyncHandler(async (req, res) => {
//     const { _id } = req.user;
//     validateMongoDBid(_id);
//     try {
//         const user = await User.findOne({ _id });
//         const cart = await Cart.findOneAndRemove({ orderby: user._id });
//         res.json(cart);
//     } catch (error) {
//         throw new Error(error);
//     }
// });

// //apply coupon cart
// const applyCoupon = AsyncHandler(async (req, res) => {
//     const { _id } = req.user;
//     const { coupon } = req.body;
//     const validCoupon = await Coupon.findOne({ name: coupon });
//     if (validCoupon === null) {
//         throw new Error('Invalid Coupon');
//     }
//     const user = await User.findOne({ _id });
//     let { products, cartTotal } = await Cart.findOne({
//         orderby: user._id,
//     }).populate('products.product');
//     let totalAfterDiscount = (
//         cartTotal -
//         (cartTotal * validCoupon.discount) / 100
//     ).toFixed(2);
//     await Cart.findOneAndUpdate(
//         { orderby: user._id },
//         { totalAfterDiscount },
//         { new: true },
//     );
//     res.json(totalAfterDiscount);
// });

// //create Order
// const createOrder = AsyncHandler(async (req, res) => {
//     const { COD, couponApplied } = req.body;
//     const { _id } = req.user;
//     const user = await User.findById(_id);
//     try {
//         if (!COD) {
//             throw new Error('Create cash order failed');
//         }
//         let userCart = await Cart.findOne({ orderby: user._id });
//         let finalAmout = 0;
//         if (couponApplied && userCart.totalAfterDiscount) {
//             finalAmout = userCart.totalAfterDiscount;
//         } else {
//             finalAmout = userCart.cartTotal;
//         }
//         let newOrder = await new Order({
//             products: userCart.products,
//             paymentIntent: {
//                 id: uniqid(),
//                 method: 'COD',
//                 amount: finalAmout,
//                 status: 'Cash on Delivery',
//                 created: Date.now(),
//                 currency: 'usd',
//             },
//             orderby: user._id,
//             orderStatus: 'Cash on Delivery',
//         }).save();
//         let update = userCart.products.map((item) => {
//             return {
//                 updateOne: {
//                     filter: { _id: item.product._id },
//                     update: {
//                         $inc: { quantity: -item.count, sold: +item.count },
//                     },
//                 },
//             };
//         });
//         const updated = await Product.bulkWrite(update, {});
//         res.json({ message: 'success' });
//     } catch (error) {
//         throw new Error(error);
//     }
// });

// //get Order
// const getOrders = AsyncHandler(async (req, res) => {
//     const { _id } = req.user;
//     validateMongoDBid(_id);
//     try {
//         const userOrders = await Order.findOne({ orderby: _id })
//             .populate('products.product')
//             .populate('orderby')
//             .exec();
//         res.json(userOrders);
//     } catch (error) {
//         throw new Error(error);
//     }
// });

// //get All order
// const getAllOrders = AsyncHandler(async (req, res) => {
//     try {
//         const allUserOrders = await Order.find()
//             .populate('products.product')
//             .populate('orderby')
//             .exec();
//         res.json(allUserOrders);
//     } catch (error) {
//         throw new Error(error);
//     }
// });

//getOrderByUserId
const getOrderByUserId = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDBid(id);
    try {
        const userOrders = await Order.findOne({ orderby: id })
            .populate('products.product')
            .populate('orderby')
            .exec();
        res.json(userOrders);
    } catch (error) {
        throw new Error(error);
    }
});

//update Order Status
const updateOrderStatus = AsyncHandler(async (req, res) => {
    const { status } = req.body;
    const { id } = req.params;
    validateMongoDBid(id);
    try {
        const updateOrder = await Order.findByIdAndUpdate(
            id,
            {
                orderStatus: status,
                paymentIntent: {
                    status: status,
                },
            },
            { new: true },
        );
        res.json(updateOrder);
    } catch (error) {
        throw new Error(error);
    }
});

const getMyOrders = AsyncHandler(async (req, res) => {
    const { _id } = req.user;
    try {
        const orders = await Order.find({ user: _id })
            .populate('user')
            .populate('orderItems.product')
            .populate('orderItems.color');

        res.json(orders);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createUser,
    loginUserCtrl,
    getAllUser,
    getAUser,
    deleteAUser,
    updateaUser,
    blockUser,
    handleRefreshToken,
    unBlockUser,
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
    // getOrders,
    updateOrderStatus,
    // getAllOrders,
    getOrderByUserId,
    removeProductFromCart,
    updateProductQuantityFromCart,
    getMyOrders,
};
