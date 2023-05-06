const express = require('express');
const createUser = require('../Controller/userCtlr');

const router = express.Router();

router.route('/register').post(createUser);

module.exports = router;