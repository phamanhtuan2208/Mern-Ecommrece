const User = require('../Models/userModel');
const AsyncHandler = require('express-async-handler');

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

module.exports = createUser;
