const jwt = require('jsonwebtoken');

const userRepo = require('../repository/user.repository.js');

module.exports = {
  async checkisValidId(req, res) {
    const { userId } = req.body;

    const user = await userRepo.findUserById(userId);

    res.status(200).json({ idValidation: !!user });
  },

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

  async userInfo(req, res) {
    const { userId } = req.body;

    if (!userId) {
      res.status(403).json({ message: 'Need to login' });
      return;
    }

    const user = await userRepo.findUserById(userId);

    res.status(200).json({ user: user.name });
  },
};
