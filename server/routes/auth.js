const express = require('express');

const router = express.Router();

const jwt = require('jsonwebtoken');

router.post('/signup', (req, res) => {
  // TODO: Implement
  res.send();
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
