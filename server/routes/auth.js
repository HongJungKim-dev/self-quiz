const express = require('express');

const router = express.Router();

const errorCatcher = require('../middlewares/errorCatcher.js');

const authService = require('../service/auth.service.js');

const loginChecker = require('../middlewares/loginChecker.js');

router.post('/idcheck', errorCatcher(authService.checkisValidId));
router.post('/signup', errorCatcher(authService.signUp));
router.post('/login', errorCatcher(authService.login));
router.get('/', loginChecker, errorCatcher(authService.userInfo));

module.exports = router;
