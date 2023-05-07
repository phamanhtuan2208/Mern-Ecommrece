const User = require('../Models/userModel');
const AsyncHandler = require('express-async-handler');
const { generateToken } = require('../Config/jwtToken');

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
    try {
        const deleteaUser = await User.findByIdAndDelete(id);
        res.json({ deleteaUser });
    } catch (error) {
        throw new Error(error);
    }
});

//update a user
const updateaUser = AsyncHandler(async (req, res) => {
    const { _id } = req.user;
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
module.exports = {
    createUser,
    loginUserCtrl,
    getAllUser,
    getAUser,
    deleteAUser,
    updateaUser,
    blockUser,
    unBlockUser,
};
