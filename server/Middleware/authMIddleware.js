const User = require('../Models/userModel');
const jwt = require('jsonwebtoken');
const AsyncHandler = require('express-async-handler');

const authMiddleware = AsyncHandler(async (req, res, next) => {
    let token;  
    if (req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
        try {
            if (token) {
                const decoded = jwt.verify(
                    token,
                    process.env.PRIVATEKEY_JWT_TOKEN,
                );
                const user = await User.findById(decoded.id);
                req.user = user;
                next();
            }
        } catch (error) {
            throw new Error(
                'Not Authorized, Token expired, Please Login Again',
            );
        }
    } else {
        throw new Error('There is no token attached to header');
    }
});

const isAdmin = AsyncHandler(async (req, res, next) => {
    
    const { email } = req.user;
    const adminUser = await User.findOne({ email });
    if (adminUser.role !== 'admin') {
        throw new Error('You are not Admin');
    } else {
        next();
    }
});

module.exports = { authMiddleware, isAdmin };
