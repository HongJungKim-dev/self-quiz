const express = require('express');

const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/quiz', require('./quiz'));

module.exports = router;
