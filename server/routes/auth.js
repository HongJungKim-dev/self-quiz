const express = require('express');

const router = express.Router();

const errorCatcher = require('../middlewares/errorCatcher.js');

const authService = require('../service/auth.service.js');

router.post('/signup', errorCatcher(authService.signUp));
router.post('/login', errorCatcher(authService.login));

module.exports = router;
