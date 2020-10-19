const jwt = require('jsonwebtoken');

const userRepo = require('../repository/user.repository.js');

module.exports = {
  async signUp(req, res) {
    const { userId, userPw, userName } = req.body;

    await userRepo.signUpNewUser(userId, userPw, userName);

    res.status(200).json({ message: 'Complete to sign up' });
  },

  async login(req, res) {
    const { userId, userPw } = req.body;

    const user = await userRepo.findUserById(userId);

    if (!user || user.pw !== userPw) {
      res.status(401).json({ message: 'Invalid id or password' });
      return;
    }

    const token = jwt.sign({ userId }, process.env.JWT_SECRET);
    res.status(200).json({ token });
  },
};
