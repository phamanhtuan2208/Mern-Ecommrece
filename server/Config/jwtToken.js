const jwt = require('jsonwebtoken');
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.PRIVATEKEY_JWT_TOKEN, {
        expiresIn: '30d',
    });
};

module.exports = { generateToken };
