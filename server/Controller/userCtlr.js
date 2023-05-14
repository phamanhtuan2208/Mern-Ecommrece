const User = require('../Models/userModel');
const AsyncHandler = require('express-async-handler');
const { generateToken } = require('../Config/jwtToken');
const validateMongoDBid = require('../Util/validateMongodbld');
const { generateRefreshToken } = require('../Config/refreshToken');
const jwt = require('jsonwebtoken');

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
// get all users
const getAllUser = AsyncHandler(async (req, res) => {
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
    console.log(cookie);
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
    if (!cookie.refreshToken) throw new Error('NO Refresh Token in Cookies');
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
    const password = req.bdoy;
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
};
