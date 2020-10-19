const jwt = require('jsonwebtoken');

const userRepo = require('../repository/user.repository.js');

const loginChecker = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(403).json({ message: 'No authorization header' });
    return;
  }

  const token = authorization.replace(/Bearer /g, "");

  if (!token) {
    res.status(403).json({ message: 'No token' });
    return;
  }

  const { userId } = jwt.verify(token, process.env.JWT_SECRET);
  const user = userRepo.findUserById(userId);

  if (!user) {
    res.status(403).json({ message: 'No corresponding user' });
    return;
  }

  req.body.userId = userId;
  next();
};

module.exports = loginChecker;
