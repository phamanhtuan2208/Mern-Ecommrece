const jwt = require('jsonwebtoken');
const generateRefreshToken = (id) => {
    return jwt.sign({ id }, process.env.PRIVATEKEY_JWT_TOKEN, {
        expiresIn: '10d',
    });
};

module.exports = { generateRefreshToken };
