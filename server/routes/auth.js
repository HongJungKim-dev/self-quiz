const express = require('express');

const router = express.Router();

const jwt = require('jsonwebtoken');

const userRepo = require('../repository/user.repository.js');

router.post('/signup', async (req, res, next) => {
  const { userId, userPw, userName } = req.body;

  try {
    await userRepo.signUpNewUser(userId, userPw, userName);
    res.status(200).json({ message: 'Complete to sign up' });
  } catch (error) {
    next(error);
  }
});

router.post('/login', (req, res) => {
  const { userId, userPw } = req.body;

  // TODO: Implement
  const validation = checkIsValidUser(userId, userPw);

  if (!validation) {
    res.status(401).json({ message: 'Invalid id or password' });
    return;
  }

  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  res.status(200).json({ token });
});

module.exports = router;
